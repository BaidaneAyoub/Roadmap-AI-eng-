# Backend and databases

Expose reliable APIs and protect shared application state.

## Main route · Step 3 of 8

**Goal:** Build the API and database layer that an AI application needs.

**Stage checkpoint:** Build a FastAPI service with validated inputs, a SQL query and API tests.

Create a validated API and store its data. Take the data branch when your project needs it.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: LLM engineering](llm.md)

## FastAPI and full-stack contracts

<a id="backend-frontend"></a>

### Frontend essentials, state and accessible UX

Understand the browser side of a full-stack AI product instead of treating it as an afterthought.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend essentials, state and accessible UX, explicitly apply HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend essentials, state and accessible UX: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Frontend essentials, state and accessible UX: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="fastapi"></a>

### FastAPI routes, validation and OpenAPI

Build a model API with predictable input/output shapes and inspectable documentation.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-auth"></a>

### Frontend, authentication, authorization and sessions

Connect a browser to an API while enforcing access on the trusted side.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Frontend, authentication, authorization and sessions, explicitly apply Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Frontend, authentication, authorization and sessions: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Frontend, authentication, authorization and sessions: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Data integrity

<a id="backend-sql"></a>

### SQL, PostgreSQL, joins and indexes

Model relationships and inspect query performance before adding infrastructure.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL, PostgreSQL, joins and indexes, explicitly apply SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL, PostgreSQL, joins and indexes: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] SQL, PostgreSQL, joins and indexes: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-transactions"></a>

### Transactions, concurrency and data quality

Prevent races and partial updates in multi-user applications.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Transactions, concurrency and data quality, explicitly apply Transactions, Concurrency, Data quality and privacy.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Transactions, concurrency and data quality: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Transactions, concurrency and data quality: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-stores"></a>

### Vector, NoSQL and graph database tradeoffs

Choose the simplest store that supports your access patterns.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For Vector, NoSQL and graph database tradeoffs, explicitly apply Vector storage, NoSQL, Graph storage.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vector, NoSQL and graph database tradeoffs: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Vector, NoSQL and graph database tradeoffs: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Service boundaries in detail

<a id="backend-fastapi-boundaries"></a>

### FastAPI dependencies, schemas and testable error boundaries

Keep model calls replaceable and validate both inputs and outputs at the API boundary.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI dependencies, schemas and testable error boundaries, explicitly apply Request versus response schema, Dependency injection, Validation versus upstream failure.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] FastAPI dependencies, schemas and testable error boundaries: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-sql-performance"></a>

### SQL query plans, transaction races and migrations

Recognise database bottlenecks and correctness failures before they become unexplained API behaviour.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For SQL query plans, transaction races and migrations, explicitly apply Indexes and predicates, Query plans, Lost updates and conditional writes.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL query plans, transaction races and migrations: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] SQL query plans, transaction races and migrations: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

