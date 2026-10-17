# Data Engineering

A 7-phase data engineering roadmap: distributed processing, orchestration, streaming and CDC, lakehouse storage, modeling, data quality and cloud infrastructure. It builds on the shared Python, engineering, mathematics/data and backend foundation.

## Data Engineering · Step 5 of 5

**Goal:** Extend the shared Python, SQL and backend foundation into production data pipelines: Spark, Airflow, Kafka/CDC, lakehouse tables, dbt models, quality checks and cloud infrastructure.

**Stage checkpoint:** Build and explain a reproducible CDC-to-lakehouse pipeline with quality gates, lineage and a recovery test.

Build a replayable CDC-to-lakehouse pipeline with data contracts, lineage and quality gates.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Choose a capstone](../PROJECTS.md)

## Phase 1

<a id="de-spark"></a>

### Phase 1 · Distributed processing with Spark

Move from single-machine transformations to distributed processing, and learn to explain Spark plans, shuffles, skew and performance rather than treating Spark as a black box.

**Priority:** Essential · **Study:** 12h · **Practice:** 16h

**Prerequisites:** [SQL, PostgreSQL, joins and indexes](backend.md#backend-sql), [Types and collections](python.md#python-values), [pandas, cleaning and missing values](math-data.md#data-pandas) Navigation is unrestricted.

#### Concepts

- [ ] **Spark architecture and execution:** The driver builds a plan, executors run tasks, and a cluster manager allocates resources; jobs contain stages, which contain tasks mapped from a DAG. Lazy transformations are evaluated by actions. Catalyst optimizes plans and Tungsten improves execution; use explain() to inspect logical and physical plans.
  - Example: Trace a filter, join and aggregation from a DataFrame action to its jobs, stages and tasks in the Spark UI.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on spark architecture and execution. Then reproduce the lesson example: Trace a filter, join and aggregation from a DataFrame action to its jobs, stages and tasks in the Spark UI.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on spark architecture and execution. Then reproduce the lesson example: Trace a filter, join and aggregation from a DataFrame action to its jobs, stages and tasks in the Spark UI.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Core APIs:** RDDs explain Spark's distributed collection model; DataFrames provide schema-aware select, filter, withColumn, groupBy, agg and orderBy; Spark SQL runs through temporary views. Know that typed Datasets are mainly a Scala/Java API concern in a PySpark workflow.
  - Example: Create a DataFrame, register it as a temporary view, run the same aggregation in SQL and DataFrame syntax, and compare the results.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on core apis. Then reproduce the lesson example: Create a DataFrame, register it as a temporary view, run the same aggregation in SQL and DataFrame syntax, and compare the results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on core apis. Then reproduce the lesson example: Create a DataFrame, register it as a temporary view, run the same aggregation in SQL and DataFrame syntax, and compare the results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Partitions, shuffles and skew:** Partitions distribute work and default counts depend on input and configuration. repartition() redistributes data; coalesce() can reduce partitions with less movement. Grouping, joins, distinct, ordering and repartitioning can trigger shuffles, with map/reduce stages and disk spill. Detect skew through task-duration spread; mitigate with salting, broadcast joins or a suitable partition strategy.
  - Example: Use a deliberately skewed key, inspect task durations, then compare a salted aggregation with the unsalted result.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on partitions, shuffles and skew. Then reproduce the lesson example: Use a deliberately skewed key, inspect task durations, then compare a salted aggregation with the unsalted result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on partitions, shuffles and skew. Then reproduce the lesson example: Use a deliberately skewed key, inspect task durations, then compare a salted aggregation with the unsalted result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Join planning:** Broadcast hash joins, shuffle sort-merge joins and shuffle hash joins trade memory for network and sorting work. Spark can broadcast below its size threshold or use a broadcast hint; join reordering and predicate pushdown can reduce work. Skewed keys may need their own strategy.
  - Example: Compare explain() plans for a small-dimension broadcast join and a large-large join, then push a selective filter before the join.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on join planning. Then reproduce the lesson example: Compare explain() plans for a small-dimension broadcast join and a large-large join, then push a selective filter before the join.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on join planning. Then reproduce the lesson example: Compare explain() plans for a small-dimension broadcast join and a large-large join, then push a selective filter before the join.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Memory, caching and spill:** MEMORY_ONLY, MEMORY_AND_DISK and DISK_ONLY have different recomputation and storage costs; serialized and deserialized storage trade CPU for memory. cache() uses a default persistence level; persist() selects one explicitly. Understand executor execution/storage memory and unpersist materialized data when it is no longer needed.
  - Example: Persist a reused DataFrame, inspect storage in the Spark UI, and unpersist it after the last dependent action.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on memory, caching and spill. Then reproduce the lesson example: Persist a reused DataFrame, inspect storage in the Spark UI, and unpersist it after the last dependent action.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on memory, caching and spill. Then reproduce the lesson example: Persist a reused DataFrame, inspect storage in the Spark UI, and unpersist it after the last dependent action.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Performance diagnosis:** Use Jobs, Stages, Storage and Executors in the Spark UI to find long stages, skewed tasks, excess shuffles and GC pressure. Adaptive Query Execution can coalesce partitions and handle some skew. Parquet column pruning and predicate pushdown reduce I/O when queries select few columns or rows.
  - Example: Capture a baseline and an optimized run, explain the changed plan and report task-time and input-size differences.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on performance diagnosis. Then reproduce the lesson example: Capture a baseline and an optimized run, explain the changed plan and report task-time and input-size differences.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on performance diagnosis. Then reproduce the lesson example: Capture a baseline and an optimized run, explain the changed plan and report task-time and input-size differences.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **UDFs:** Python UDFs pay row-by-row serialization and Py4J costs; Pandas UDFs use Arrow-backed vectorization and can help for operations unavailable in Spark's built-ins. Built-in Spark SQL functions are generally preferable because Spark can optimize them.
  - Example: Implement one normalization with a built-in expression and a Pandas UDF, compare output equality and execution plans, and avoid a Python UDF when a built-in exists.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on udfs. Then reproduce the lesson example: Implement one normalization with a built-in expression and a Pandas UDF, compare output equality and execution plans, and avoid a Python UDF when a built-in exists.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on udfs. Then reproduce the lesson example: Implement one normalization with a built-in expression and a Pandas UDF, compare output equality and execution plans, and avoid a Python UDF when a built-in exists.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Window functions:** Window.partitionBy() and orderBy() define per-group ordered calculations. row_number, rank and dense_rank differ on ties; lag and lead access neighboring rows, while window frames support running totals and moving averages.
  - Example: Compute each customer's latest event, a tied rank, a running total and a three-row moving average; test tie and boundary cases.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on window functions. Then reproduce the lesson example: Compute each customer's latest event, a tied rank, a running total and a three-row moving average; test tie and boundary cases.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on window functions. Then reproduce the lesson example: Compute each customer's latest event, a tied rank, a running total and a three-row moving average; test tie and boundary cases.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Structured Streaming introduction:** A streaming DataFrame shares the batch DataFrame API but executes incrementally, commonly in micro-batches. Watermarks bound state while allowing late events; append, update and complete output modes have different result semantics.
  - Example: Run a small local event stream with a late record and compare watermark and output-mode behavior with an equivalent batch aggregation.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on structured streaming introduction. Then reproduce the lesson example: Run a small local event stream with a late record and compare watermark and output-mode behavior with an equivalent batch aggregation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on structured streaming introduction. Then reproduce the lesson example: Run a small local event stream with a late record and compare watermark and output-mode behavior with an equivalent batch aggregation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Deployment and I/O:** Local, standalone and cluster execution differ in resource placement; client and cluster deploy modes place the driver differently. spark-submit exposes the main job configuration. Read and write Parquet, CSV, JDBC and cloud-storage paths with explicit schemas and safe credentials.
  - Example: Package a parameterized PySpark job, run it with spark-submit in local mode and round-trip a small dataset through Parquet and CSV.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on deployment and i/o. Then reproduce the lesson example: Package a parameterized PySpark job, run it with spark-submit in local mode and round-trip a small dataset through Parquet and CSV.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on deployment and i/o. Then reproduce the lesson example: Package a parameterized PySpark job, run it with spark-submit in local mode and round-trip a small dataset through Parquet and CSV.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Debugging and observability:** Executor failures differ from driver failures; common causes include out-of-memory errors, serialization errors and schema mismatches. Combine stack traces, explain(), getNumPartitions() and the Spark UI to diagnose instead of guessing.
  - Example: Inject a schema mismatch and a partition imbalance into a local job, record the evidence from the error, plan and UI, and document the fix.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on debugging and observability. Then reproduce the lesson example: Inject a schema mismatch and a partition imbalance into a local job, record the evidence from the error, plan and UI, and document the fix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on debugging and observability. Then reproduce the lesson example: Inject a schema mismatch and a partition imbalance into a local job, record the evidence from the error, plan and UI, and document the fix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Apache Spark: PySpark overview](https://spark.apache.org/docs/latest/api/python/getting_started/index.html) — Free; no registration required. No paid materials required.
2. [Apache Spark: SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html) — Free; no registration required. No paid materials required.

#### Lab: Phase 1 · Distributed processing with Spark

Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Implement Phase 1 · Distributed processing with Spark in Partition and file-layout tuner. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Implement Phase 1 · Distributed processing with Spark in Spark skew diagnosis lab. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Late-event window counter

A product team needs per-minute order counts that stay correct when events arrive late.

**Data:** Generate a seeded event stream with out-of-order and five-minute-late records. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Implement Phase 1 · Distributed processing with Spark in Late-event window counter. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart from the checkpoint and match a batch recount for every closed window.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nightly batch scoring job

A retention team needs fresh risk scores each morning without a live API.

**Data:** Generate a daily partition of fictional accounts and a registered model. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark job that loads the registered model, scores the partition and writes to gold.

**Effort:** 16h · Intermediate

- **Phase 1 · Distributed processing with Spark:** Implement Phase 1 · Distributed processing with Spark in Nightly batch scoring job. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark job that loads the registered model, scores the partition and writes to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Rerunning a night gives identical scores, and a schema-mismatched partition fails before anything is written.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Extend the project with Phase 1 · Distributed processing with Spark in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Extend the project with Phase 1 · Distributed processing with Spark in Change data capture replay bench. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Extend the project with Phase 1 · Distributed processing with Spark in Pipeline infrastructure plan. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Extend the project with Phase 1 · Distributed processing with Spark in Data quality quarantine gate. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Extend the project with Phase 1 · Distributed processing with Spark in Event schema compatibility gate. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 1 · Distributed processing with Spark:** Extend the project with Phase 1 · Distributed processing with Spark in Sales star-schema builder. Adapt this focused lab to the project data: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.  Required concepts: Spark architecture and execution, Core APIs, Partitions, shuffles and skew, Join planning, Memory, caching and spill, Performance diagnosis, UDFs, Window functions, Structured Streaming introduction, Deployment and I/O, Debugging and observability.
  - Deliverable: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · Distributed processing with Spark: Phase 1 · Distributed processing with Spark: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 1 · Distributed processing with Spark: Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 2

<a id="de-airflow"></a>

### Phase 2 · Orchestration mastery with Airflow

Go beyond introductory DAGs to design, test, operate and debug reliable workflows that coordinate data systems without hiding business logic in orchestration code.

**Priority:** Essential · **Study:** 10h · **Practice:** 14h

**Prerequisites:** [Phase 1 · Distributed processing with Spark](data-engineering.md#de-spark) Navigation is unrestricted.

#### Concepts

- [ ] **Airflow architecture:** The Scheduler parses DAG files and decides what is ready; the Webserver presents the UI; an Executor dispatches work; the Metadata DB stores state; and the Triggerer handles deferrable work. Sequential, Local, Celery and Kubernetes executors trade simplicity for parallel and distributed capacity. Know where DAG files are discovered and how parsing works.
  - Example: Trace one scheduled task from DAG parsing through scheduler state, executor dispatch and metadata updates.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on airflow architecture. Then reproduce the lesson example: Trace one scheduled task from DAG parsing through scheduler state, executor dispatch and metadata updates.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on airflow architecture. Then reproduce the lesson example: Trace one scheduled task from DAG parsing through scheduler state, executor dispatch and metadata updates.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **DAG configuration:** DAG schedule, start_date, catchup and max_active_runs determine when runs are created and how much work may overlap. Task dependencies can use >>, <<, set_upstream and set_downstream; pools, priority_weight and task concurrency limit contention.
  - Example: Configure a daily DAG with a historical start date, disable catchup, cap active runs and show which logical dates are scheduled.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on dag configuration. Then reproduce the lesson example: Configure a daily DAG with a historical start date, disable catchup, cap active runs and show which logical dates are scheduled.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on dag configuration. Then reproduce the lesson example: Configure a daily DAG with a historical start date, disable catchup, cap active runs and show which logical dates are scheduled.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **TaskFlow, XCom and branching:** TaskFlow uses @dag and @task and is the preferred style for new Python DAGs; classic operators remain useful. XCom passes small metadata, not large datasets. BranchPythonOperator or @task.branch chooses paths, while trigger rules such as all_success, all_failed, one_success and none_failed control downstream execution.
  - Example: Build a TaskFlow DAG that branches on a data-quality result, passes only a partition identifier by XCom and joins paths with an explicit trigger rule.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on taskflow, xcom and branching. Then reproduce the lesson example: Build a TaskFlow DAG that branches on a data-quality result, passes only a partition identifier by XCom and joins paths with an explicit trigger rule.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on taskflow, xcom and branching. Then reproduce the lesson example: Build a TaskFlow DAG that branches on a data-quality result, passes only a partition identifier by XCom and joins paths with an explicit trigger rule.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Dynamic task mapping:** expand() and partial() create mapped tasks at run time from a collection; a static loop creates tasks during DAG definition. Map over a bounded list of tables, files or partitions, and understand limits on mapped task counts.
  - Example: Map a validation task over a run-time list of table names and contrast it with a small static DAG.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on dynamic task mapping. Then reproduce the lesson example: Map a validation task over a run-time list of table names and contrast it with a small static DAG.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on dynamic task mapping. Then reproduce the lesson example: Map a validation task over a run-time list of table names and contrast it with a small static DAG.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Custom components:** Custom Operators subclass BaseOperator; Hooks wrap external connections; Sensors wait using poke or reschedule mode with a poke interval and timeout. Prefer maintained provider components when they satisfy the use case; avoid building custom abstractions without a concrete need.
  - Example: Write a small testable Hook and Operator around a local fixture, then explain why a provider is or is not preferable.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on custom components. Then reproduce the lesson example: Write a small testable Hook and Operator around a local fixture, then explain why a provider is or is not preferable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on custom components. Then reproduce the lesson example: Write a small testable Hook and Operator around a local fixture, then explain why a provider is or is not preferable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Reliability and production:** Retries, retry_delay and exponential backoff recover transient failures; timeouts bound work. SLA settings and callbacks communicate missed expectations. Tasks should be idempotent so retries and backfills do not duplicate or corrupt data. Catchup and CLI backfills need safe ranges; success/failure callbacks can notify Slack or email.
  - Example: Run a task twice against the same partition, prove idempotency, simulate a transient failure and document a bounded backfill and alert.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on reliability and production. Then reproduce the lesson example: Run a task twice against the same partition, prove idempotency, simulate a transient failure and document a bounded backfill and alert.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on reliability and production. Then reproduce the lesson example: Run a task twice against the same partition, prove idempotency, simulate a transient failure and document a bounded backfill and alert.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **DAG design patterns:** Avoid database/network work at module import time. Choose task granularity that balances observability and overhead. Prefer reschedule or deferrable Sensors over wasteful polling. Coordinate DAGs using TriggerDagRunOperator, ExternalTaskSensor or Datasets when the dependency requires it.
  - Example: Use a Dataset update to trigger a downstream DAG and verify importing the DAG does not execute its workload.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on dag design patterns. Then reproduce the lesson example: Use a Dataset update to trigger a downstream DAG and verify importing the DAG does not execute its workload.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on dag design patterns. Then reproduce the lesson example: Use a Dataset update to trigger a downstream DAG and verify importing the DAG does not execute its workload.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Integrations:** Airflow can run dbt through a BashOperator, Cosmos or a dbt Cloud provider; Spark through SparkSubmitOperator or an API/Livy; and connect through Postgres, S3/GCS, Kafka and HTTP providers. Pick integration boundaries that keep the data work testable.
  - Example: Orchestrate a local transformation and a Spark job with explicit upstream/downstream contracts and no credentials in source.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on integrations. Then reproduce the lesson example: Orchestrate a local transformation and a Spark job with explicit upstream/downstream contracts and no credentials in source.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on integrations. Then reproduce the lesson example: Orchestrate a local transformation and a Spark job with explicit upstream/downstream contracts and no credentials in source.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Deployment and configuration:** Run Airflow locally with Docker Compose; understand KubernetesExecutor tasks as pods and set task resource requests/limits. Know essential airflow.cfg settings, Connections and Variables, and use a secrets backend such as Vault or a cloud secrets manager for sensitive values.
  - Example: Start the local Compose stack, configure a non-secret connection and document how a production secrets backend would supply credentials.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on deployment and configuration. Then reproduce the lesson example: Start the local Compose stack, configure a non-secret connection and document how a production secrets backend would supply credentials.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on deployment and configuration. Then reproduce the lesson example: Start the local Compose stack, configure a non-secret connection and document how a production secrets backend would supply credentials.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Monitoring, debugging and testing:** Use Grid, Graph, Gantt and task logs to investigate stuck DAGs, scheduler problems, pool exhaustion and zombie tasks. airflow tasks test and airflow dags test support local debugging. Test custom Operators/Hooks and validate imports, cycles, reachability and CI behavior before deployment.
  - Example: Add DAG integrity tests and one unit test for a custom component; make CI fail on an import error and record a local task-test command.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on monitoring, debugging and testing. Then reproduce the lesson example: Add DAG integrity tests and one unit test for a custom component; make CI fail on an import error and record a local task-test command.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on monitoring, debugging and testing. Then reproduce the lesson example: Add DAG integrity tests and one unit test for a custom component; make CI fail on an import error and record a local task-test command.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
  - Explains: Workflow configuration, CI/CD and automation.
  - Useful because: Build a test/build workflow; paid certification is not required.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Apache Airflow: core concepts](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html) — Free; no registration required. No paid materials required.
2. [Apache Airflow: best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html) — Free; no registration required. No paid materials required.

#### Lab: Phase 2 · Orchestration mastery with Airflow

Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Implement Phase 2 · Orchestration mastery with Airflow in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data drift retraining trigger

An ML owner needs retraining only when input data really changes.

**Data:** Generate twelve weekly batches with drift injected in weeks 8 and 11. Use a fixed seed and keep evaluation cases separate.

**Output:** An orchestrated drift check that starts a tracked retraining run from its data snapshot.

**Effort:** 16h · Intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Implement Phase 2 · Orchestration mastery with Airflow in Data drift retraining trigger. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An orchestrated drift check that starts a tracked retraining run from its data snapshot. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trigger exactly on the two drifted weeks and record which features moved and by how much.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Change data capture replay bench. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Pipeline infrastructure plan. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Partition and file-layout tuner. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Data quality quarantine gate. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Event schema compatibility gate. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Spark skew diagnosis lab. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Sales star-schema builder. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Late-event window counter

A product team needs per-minute order counts that stay correct when events arrive late.

**Data:** Generate a seeded event stream with out-of-order and five-minute-late records. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing.

**Effort:** 10h · Beginner → intermediate

- **Phase 2 · Orchestration mastery with Airflow:** Extend the project with Phase 2 · Orchestration mastery with Airflow in Late-event window counter. Adapt this focused lab to the project data: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.  Required concepts: Airflow architecture, DAG configuration, TaskFlow, XCom and branching, Dynamic task mapping, Custom components, Reliability and production, DAG design patterns, Integrations, Deployment and configuration, Monitoring, debugging and testing.
  - Deliverable: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · Orchestration mastery with Airflow: Phase 2 · Orchestration mastery with Airflow: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart from the checkpoint and match a batch recount for every closed window.
- [ ] Phase 2 · Orchestration mastery with Airflow: Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 3

<a id="de-kafka"></a>

### Phase 3 · Streaming and CDC with Kafka

Ingest changes as durable ordered events, understand delivery guarantees and schemas, and operate a CDC path from a transactional database into a lake or warehouse.

**Priority:** Essential · **Study:** 10h · **Practice:** 16h

**Prerequisites:** [Phase 1 · Distributed processing with Spark](data-engineering.md#de-spark), [Phase 2 · Orchestration mastery with Airflow](data-engineering.md#de-airflow) Navigation is unrestricted.

#### Concepts

- [ ] **Kafka foundations:** Topics contain partitions; offsets identify records and ordering is guaranteed within a partition, not across a topic. Brokers form clusters and replicate partitions with a replication factor and in-sync replicas. Producers choose partitioning and acknowledgements (acks=0/1/all); consumer groups distribute partitions and rebalance. Retention can delete by time/size or compact by key.
  - Example: Produce keyed customer events and show that matching keys retain partition order while unrelated partitions have no global ordering.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on kafka foundations. Then reproduce the lesson example: Produce keyed customer events and show that matching keys retain partition order while unrelated partitions have no global ordering.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Delivery semantics:** At-most-once, at-least-once and exactly-once depend on when offsets are committed and what is transactional. Idempotent producers reduce duplicate writes; consumers choose automatic or manual commits. Kafka transactions coordinate records and offsets but do not make arbitrary external side effects exactly once.
  - Example: Crash a consumer before and after committing an offset, observe possible replay, and make a downstream write idempotent.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on delivery semantics. Then reproduce the lesson example: Crash a consumer before and after committing an offset, observe possible replay, and make a downstream write idempotent.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Schema management:** A schema registry governs independently deployed producer and consumer contracts. Backward, forward and full compatibility define which old/new readers and writers interoperate. Avro, Protobuf and JSON Schema trade compactness, tooling and flexibility; schema evolution must be planned before breaking downstream readers.
  - Example: Add an optional field under a chosen compatibility rule and test old and new consumer fixtures.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on schema management. Then reproduce the lesson example: Add an optional field under a chosen compatibility rule and test old and new consumer fixtures.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Change data capture:** CDC reads a database transaction log instead of repeatedly polling tables. Debezium connectors emit before/after images, operation type and source metadata. Initial snapshots and incremental capture have different behavior; handle deletes, source schema changes and out-of-order events explicitly.
  - Example: Capture inserts, updates and deletes from a disposable PostgreSQL table and verify event key, operation and source position.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on change data capture. Then reproduce the lesson example: Capture inserts, updates and deletes from a disposable PostgreSQL table and verify event key, operation and source position.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Kafka Connect:** Source connectors publish records and sink connectors write topics to a lake or warehouse. Debezium is a source connector. Converters select serialization; Single Message Transforms make lightweight record changes. Connector plugins and configurations need versioning and safe secrets.
  - Example: Configure a local connector pair with a converter and one SMT, validate connector status and preserve a raw event for audit.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on kafka connect. Then reproduce the lesson example: Configure a local connector pair with a converter and one SMT, validate connector status and preserve a raw event for audit.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Stream processing:** Choose Spark Structured Streaming or Flink for a practical project and know the other exists. Distinguish stateless from stateful operations, tumbling/sliding/session windows, event-time watermarks and late data, stream-stream/stream-static joins, and checkpointing for fault tolerance.
  - Example: Compute a windowed event count with a watermark, join a stream to static reference data and restart from a checkpoint.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on stream processing. Then reproduce the lesson example: Compute a windowed event count with a watermark, join a stream to static reference data and restart from a checkpoint.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Architecture patterns:** A CDC-to-Kafka-to-lakehouse path commonly lands raw events in a bronze layer. Kappa emphasizes a stream as the processing source; Lambda combines batch and streaming paths. Fan-out lets independent consumers use the same CDC stream without coupling their processing.
  - Example: Design a CDC event path with two independent consumers and state which records are retained for replay.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on architecture patterns. Then reproduce the lesson example: Design a CDC event path with two independent consumers and state which records are retained for replay.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Operations and debugging:** Monitor consumer lag and use kafka-topics, kafka-console-consumer/producer and kafka-consumer-groups to inspect the system. Diagnose rebalance storms, poison-pill messages and connector crashes; apply backpressure when downstream processing is slower than producers.
  - Example: Create a small local topic, inspect group lag, introduce a malformed record and document a quarantine/recovery strategy.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on operations and debugging. Then reproduce the lesson example: Create a small local topic, inspect group lag, introduce a malformed record and document a quarantine/recovery strategy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Apache Kafka: introduction](https://kafka.apache.org/documentation/#introduction) — Free; no registration required. No paid materials required.
2. [Debezium: getting started](https://debezium.io/documentation/reference/stable/tutorial.html) — Free; no registration required. No paid materials required.

#### Lab: Phase 3 · Streaming and CDC with Kafka

Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Implement Phase 3 · Streaming and CDC with Kafka in Change data capture replay bench. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Implement Phase 3 · Streaming and CDC with Kafka in Event schema compatibility gate. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Late-event window counter

A product team needs per-minute order counts that stay correct when events arrive late.

**Data:** Generate a seeded event stream with out-of-order and five-minute-late records. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Implement Phase 3 · Streaming and CDC with Kafka in Late-event window counter. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart from the checkpoint and match a batch recount for every closed window.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### CDC-fed retrieval index

A support assistant must stop citing help articles after they are edited or deleted.

**Data:** Use a disposable PostgreSQL table of 30 help articles with scripted edits and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** An incremental embedding index fed by CDC events, with citations.

**Effort:** 16h · Intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Implement Phase 3 · Streaming and CDC with Kafka in CDC-fed retrieval index. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An incremental embedding index fed by CDC events, with citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] After each edit or delete the next query cites only the current version and never a removed article.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Extend the project with Phase 3 · Streaming and CDC with Kafka in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Extend the project with Phase 3 · Streaming and CDC with Kafka in Pipeline infrastructure plan. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Extend the project with Phase 3 · Streaming and CDC with Kafka in Partition and file-layout tuner. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Extend the project with Phase 3 · Streaming and CDC with Kafka in Data quality quarantine gate. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Extend the project with Phase 3 · Streaming and CDC with Kafka in Spark skew diagnosis lab. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 3 · Streaming and CDC with Kafka:** Extend the project with Phase 3 · Streaming and CDC with Kafka in Sales star-schema builder. Adapt this focused lab to the project data: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.  Required concepts: Kafka foundations, Delivery semantics, Schema management, Change data capture, Kafka Connect, Stream processing, Architecture patterns, Operations and debugging.
  - Deliverable: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · Streaming and CDC with Kafka: Phase 3 · Streaming and CDC with Kafka: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 3 · Streaming and CDC with Kafka: Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 4

<a id="de-lakehouse"></a>

### Phase 4 · Lakehouse formats and storage internals

Understand what happens beneath analytical tables, and how transactional table formats, catalogs and query engines make object storage usable for evolving batch and streaming workloads.

**Priority:** Essential · **Study:** 10h · **Practice:** 16h

**Prerequisites:** [Phase 3 · Streaming and CDC with Kafka](data-engineering.md#de-kafka) Navigation is unrestricted.

#### Concepts

- [ ] **File formats:** Row-oriented formats suit record-at-a-time access; columnar formats suit analytical scans. Parquet stores row groups, column chunks, pages and footer metadata; column statistics enable pruning and predicate pushdown. Snappy, Gzip and Zstd trade compression ratio for CPU; dictionary and run-length encoding exploit repeated values. ORC is another analytical format and Avro is common for CDC events.
  - Example: Inspect a Parquet file's schema and row groups, then compare a narrow projection with a full-row scan.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on file formats. Then reproduce the lesson example: Inspect a Parquet file's schema and row groups, then compare a narrow projection with a full-row scan.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on file formats. Then reproduce the lesson example: Inspect a Parquet file's schema and row groups, then compare a narrow projection with a full-row scan.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Why table formats matter:** Raw Parquet on a filesystem becomes difficult as tables grow: small files increase metadata and planning overhead, while concurrent writers can conflict without transaction coordination.
  - Example: Write many tiny files, measure listing/planning overhead, then compact them.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on why table formats matter. Then reproduce the lesson example: Write many tiny files, measure listing/planning overhead, then compact them.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on why table formats matter. Then reproduce the lesson example: Write many tiny files, measure listing/planning overhead, then compact them.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Iceberg and Delta internals:** Iceberg and Delta add metadata and transaction layers over object storage. Iceberg manifests, manifest lists and snapshots describe files; both formats use optimistic concurrency for ACID-like updates. Time travel queries a prior snapshot; schema evolution avoids rewriting all data. Iceberg supports partition evolution and hidden partitioning.
  - Example: Create snapshots, evolve a schema and query the prior snapshot; explain which metadata enables the operation.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on iceberg and delta internals. Then reproduce the lesson example: Create snapshots, evolve a schema and query the prior snapshot; explain which metadata enables the operation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on iceberg and delta internals. Then reproduce the lesson example: Create snapshots, evolve a schema and query the prior snapshot; explain which metadata enables the operation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Table maintenance:** Compaction merges small files; snapshot expiration or vacuuming removes eligible historical data. Sorting or Z-ordering improves data skipping for selected query patterns; Iceberg sort orders and manifest rewrites keep metadata useful. Retention must be balanced with recovery and compliance needs.
  - Example: Generate small files, compact them, compare file counts and query scan metrics, then describe safe history retention.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on table maintenance. Then reproduce the lesson example: Generate small files, compact them, compare file counts and query scan metrics, then describe safe history retention.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on table maintenance. Then reproduce the lesson example: Generate small files, compact them, compare file counts and query scan metrics, then describe safe history retention.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Catalogs:** A catalog resolves table names to metadata locations. Hive Metastore is a traditional option; AWS Glue is managed; Nessie provides Git-like versioning for Iceberg; REST catalogs expose a service interface used by a growing ecosystem.
  - Example: Register a table through a catalog and show that consumers resolve its metadata without hard-coded file paths.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on catalogs. Then reproduce the lesson example: Register a table through a catalog and show that consumers resolve its metadata without hard-coded file paths.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on catalogs. Then reproduce the lesson example: Register a table through a catalog and show that consumers resolve its metadata without hard-coded file paths.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Query engines:** Trino/Presto use coordinator and worker roles plus connectors to query sources. Federated SQL can combine Postgres, Parquet on S3 and a warehouse. Engines use table metadata to skip files and partitions; Spark suits heavy ETL while Trino suits interactive/federated SQL workloads.
  - Example: Run one small analytical query in Spark and Trino or compare plans on paper, explaining workload, latency and resource trade-offs.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on query engines. Then reproduce the lesson example: Run one small analytical query in Spark and Trino or compare plans on paper, explaining workload, latency and resource trade-offs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on query engines. Then reproduce the lesson example: Run one small analytical query in Spark and Trino or compare plans on paper, explaining workload, latency and resource trade-offs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Lakehouse architecture:** Map bronze raw, silver conformed and gold aggregated data to Iceberg or Delta tables. Choose partitioning based on query predicates while avoiding over-partitioning. Batch and streaming writers may land in the same table only with a compatible commit and layout strategy.
  - Example: Design a medallion table layout for time-stamped events and justify partitions, file sizing and batch/stream coordination.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on lakehouse architecture. Then reproduce the lesson example: Design a medallion table layout for time-stamped events and justify partitions, file sizing and batch/stream coordination.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on lakehouse architecture. Then reproduce the lesson example: Design a medallion table layout for time-stamped events and justify partitions, file sizing and batch/stream coordination.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Operations and platform fluency:** Inspect snapshots and files metadata tables to diagnose small-file and catalog issues. Metadata size and catalog choice affect cost and performance over time. As an optional weekend extension, use Databricks Community Edition if currently available at no cost to ingest data, create Delta tables and schedule a Databricks Job; the core learning path must not depend on that service.
  - Example: Write a table health report from metadata and outline a compact/expire plan; if a free Databricks environment is available, reproduce one medallion pipeline there.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on operations and platform fluency. Then reproduce the lesson example: Write a table health report from metadata and outline a compact/expire plan; if a free Databricks environment is available, reproduce one medallion pipeline there.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on operations and platform fluency. Then reproduce the lesson example: Write a table health report from metadata and outline a compact/expire plan; if a free Databricks environment is available, reproduce one medallion pipeline there.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Apache Iceberg: documentation](https://iceberg.apache.org/docs/latest/) — Free; no registration required. No paid materials required.
2. [Delta Lake: quick start](https://docs.delta.io/latest/quick-start.html) — Free; no registration required. No paid materials required.

#### Lab: Phase 4 · Lakehouse formats and storage internals

Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Implement Phase 4 · Lakehouse formats and storage internals in Partition and file-layout tuner. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Lakehouse time-travel auditor

An auditor needs to see what a table contained before a bad load.

**Data:** Generate three loads into an Iceberg or Delta table, the last one faulty. Use a fixed seed and keep evaluation cases separate.

**Output:** A snapshot report, rollback procedure and compaction plan.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Implement Phase 4 · Lakehouse formats and storage internals in Lakehouse time-travel auditor. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A snapshot report, rollback procedure and compaction plan. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Query the pre-fault snapshot, restore it and show file counts before and after compaction.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Point-in-time feature builder

A data scientist needs training features that never use data from after the prediction date.

**Data:** Generate 1000 fictional accounts with timestamped events and a cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A point-in-time correct feature table and a model trained on it.

**Effort:** 16h · Intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Implement Phase 4 · Lakehouse formats and storage internals in Point-in-time feature builder. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A point-in-time correct feature table and a model trained on it. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show a leakage test where the as-of join excludes future events, then compare metrics against a naive join.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Change data capture replay bench. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Pipeline infrastructure plan. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Data quality quarantine gate. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Event schema compatibility gate. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Spark skew diagnosis lab. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 4 · Lakehouse formats and storage internals:** Extend the project with Phase 4 · Lakehouse formats and storage internals in Sales star-schema builder. Adapt this focused lab to the project data: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.  Required concepts: File formats, Why table formats matter, Iceberg and Delta internals, Table maintenance, Catalogs, Query engines, Lakehouse architecture, Operations and platform fluency.
  - Deliverable: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 4 · Lakehouse formats and storage internals: Phase 4 · Lakehouse formats and storage internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 4 · Lakehouse formats and storage internals: Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 5

<a id="de-dbt-kimball"></a>

### Phase 5 · Transformation and modeling with dbt + Kimball

Turn raw tables into tested, documented models that answer business questions, with incremental processing and dimensional-modeling choices that remain correct as data changes.

**Priority:** Essential · **Study:** 8h · **Practice:** 14h

**Prerequisites:** [Phase 4 · Lakehouse formats and storage internals](data-engineering.md#de-lakehouse) Navigation is unrestricted.

#### Concepts

- [ ] **dbt project and DAG:** A dbt project organizes models, sources, seeds, snapshots, macros, tests, exposures and analyses. view, table, incremental and ephemeral materializations trade freshness, compute and reuse. ref() and source() create dependency edges; dbt build runs the selected resource graph with tests, while dbt run and dbt test focus on transformations and checks.
  - Example: Create source, staging and mart models linked with source() and ref(), then inspect the generated DAG.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on dbt project and dag. Then reproduce the lesson example: Create source, staging and mart models linked with source() and ref(), then inspect the generated DAG.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on dbt project and dag. Then reproduce the lesson example: Create source, staging and mart models linked with source() and ref(), then inspect the generated DAG.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Incremental models:** Append, merge, delete+insert and insert_overwrite strategies suit different warehouses and data shapes. is_incremental() must support both incremental and full-refresh execution. Choose a unique key and handle late-arriving or updated records; a flawed filter can silently omit corrections.
  - Example: Run an incremental model twice with a late update and duplicate key, then prove both runs match the expected full-refresh result.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on incremental models. Then reproduce the lesson example: Run an incremental model twice with a late update and duplicate key, then prove both runs match the expected full-refresh result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on incremental models. Then reproduce the lesson example: Run an incremental model twice with a late update and duplicate key, then prove both runs match the expected full-refresh result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Snapshots and slowly changing dimensions:** Snapshots preserve mutable source records over time. Timestamp strategy uses an updated-at field; check strategy compares selected columns. Implement SCD Type 2 with validity intervals and current-row indicators, and explain when Types 1, 2 or 3 are appropriate.
  - Example: Track a customer's changing address and show current and historical rows with correct validity boundaries.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on snapshots and slowly changing dimensions. Then reproduce the lesson example: Track a customer's changing address and show current and historical rows with correct validity boundaries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on snapshots and slowly changing dimensions. Then reproduce the lesson example: Track a customer's changing address and show current and historical rows with correct validity boundaries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Testing, docs and exposures:** Built-in generic tests include unique, not_null, accepted_values and relationships; singular and generic custom tests encode domain rules. dbt docs generate builds documentation and DAG visualization; exposures describe downstream dashboards and applications.
  - Example: Add generic and singular tests, generate docs and declare one downstream exposure.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on testing, docs and exposures. Then reproduce the lesson example: Add generic and singular tests, generate docs and declare one downstream exposure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on testing, docs and exposures. Then reproduce the lesson example: Add generic and singular tests, generate docs and declare one downstream exposure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Dimensional modeling:** Facts and dimensions begin with a declared grain. Measures can be additive, semi-additive or non-additive. Star and snowflake schemas organize analysis differently; conformed dimensions align multiple fact tables/marts. Surrogate and natural keys, plus bridge tables, address identity and many-to-many relationships.
  - Example: Model orders and order lines at distinct grains, add a conformed customer dimension and a bridge for a many-to-many tag relationship.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on dimensional modeling. Then reproduce the lesson example: Model orders and order lines at distinct grains, add a conformed customer dimension and a bridge for a many-to-many tag relationship.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on dimensional modeling. Then reproduce the lesson example: Model orders and order lines at distinct grains, add a conformed customer dimension and a bridge for a many-to-many tag relationship.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Consumer-focused contracts:** Data contracts define expected schema and semantics between producers and consumers. Gold models should answer business questions rather than mirror source convenience. Consistent naming and versioned contracts make breaking changes explicit and reviewable.
  - Example: Write a gold-layer contract for a named business question and test a deliberate breaking schema change.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on consumer-focused contracts. Then reproduce the lesson example: Write a gold-layer contract for a named business question and test a deliberate breaking schema change.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on consumer-focused contracts. Then reproduce the lesson example: Write a gold-layer contract for a named business question and test a deliberate breaking schema change.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Macros and reuse:** Jinja macros centralize repeated SQL patterns; packages.yml declares dependencies such as dbt-utils. vars pass environment or run-specific values. Abstraction should reduce duplication without obscuring generated SQL.
  - Example: Create a small tested macro, pin a package version and inspect compiled SQL for two variable configurations.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on macros and reuse. Then reproduce the lesson example: Create a small tested macro, pin a package version and inspect compiled SQL for two variable configurations.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on macros and reuse. Then reproduce the lesson example: Create a small tested macro, pin a package version and inspect compiled SQL for two variable configurations.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Orchestration and CI:** Airflow can run dbt through a BashOperator, Cosmos or dbt Cloud API. dbt build --select and state:modified+ support selective work; Slim CI checks changed models and downstream dependents before deployment.
  - Example: Create a pull-request validation that builds changed models and their dependents against a disposable target, then documents promotion criteria.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on orchestration and ci. Then reproduce the lesson example: Create a pull-request validation that builds changed models and their dependents against a disposable target, then documents promotion criteria.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on orchestration and ci. Then reproduce the lesson example: Create a pull-request validation that builds changed models and their dependents against a disposable target, then documents promotion criteria.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [dbt: build your first project](https://docs.getdbt.com/docs/get-started-dbt) — Free; no registration required. No paid materials required.
2. [dbt: incremental models](https://docs.getdbt.com/docs/build/incremental-models) — Free; no registration required. No paid materials required.

#### Lab: Phase 5 · Transformation and modeling with dbt + Kimball

Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Implement Phase 5 · Transformation and modeling with dbt + Kimball in Sales star-schema builder. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### LLM evaluation warehouse

A team needs every assistant answer logged and comparable across prompt versions.

**Data:** Record 200 fictional question, answer and citation runs across two prompt versions. Use a fixed seed and keep evaluation cases separate.

**Output:** A modeled evaluation table with per-version quality and latency views.

**Effort:** 16h · Intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Implement Phase 5 · Transformation and modeling with dbt + Kimball in LLM evaluation warehouse. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A modeled evaluation table with per-version quality and latency views. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute groundedness and latency per version from the table and reproduce one regression found in it.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Governed text-to-SQL assistant

An analyst needs warehouse answers without writing SQL or touching restricted columns.

**Data:** Use the star-schema tables from a dbt project with one column marked sensitive. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only SQL generation tool with schema context, query validation and an evaluation set.

**Effort:** 16h · Intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Implement Phase 5 · Transformation and modeling with dbt + Kimball in Governed text-to-SQL assistant. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only SQL generation tool with schema context, query validation and an evaluation set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Answer 20 labeled questions, reject every query on the sensitive column and never run a write statement.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Change data capture replay bench. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Pipeline infrastructure plan. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Partition and file-layout tuner. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Data quality quarantine gate. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Event schema compatibility gate. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 5 · Transformation and modeling with dbt + Kimball:** Extend the project with Phase 5 · Transformation and modeling with dbt + Kimball in Spark skew diagnosis lab. Adapt this focused lab to the project data: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.  Required concepts: dbt project and DAG, Incremental models, Snapshots and slowly changing dimensions, Testing, docs and exposures, Dimensional modeling, Consumer-focused contracts, Macros and reuse, Orchestration and CI.
  - Deliverable: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 5 · Transformation and modeling with dbt + Kimball: Phase 5 · Transformation and modeling with dbt + Kimball: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 5 · Transformation and modeling with dbt + Kimball: Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 6

<a id="de-quality-observability"></a>

### Phase 6 · Data quality and observability

Make data trust measurable: detect failures close to their source, trace downstream impact and route actionable alerts instead of discovering silent corruption through consumers.

**Priority:** Essential · **Study:** 7h · **Practice:** 12h

**Prerequisites:** [Phase 5 · Transformation and modeling with dbt + Kimball](data-engineering.md#de-dbt-kimball) Navigation is unrestricted.

#### Concepts

- [ ] **Quality as a discipline:** Bad data can fail loudly or silently. Schema changes, upstream defects, late or missing data and duplicates are common causes. Shift checks earlier so invalid records are caught before they reach consumers.
  - Example: Inject a duplicate and a missing required field at ingestion and compare early rejection with a downstream report.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on quality as a discipline. Then reproduce the lesson example: Inject a duplicate and a missing required field at ingestion and compare early rejection with a downstream report.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on quality as a discipline. Then reproduce the lesson example: Inject a duplicate and a missing required field at ingestion and compare early rejection with a downstream report.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Quality dimensions:** Completeness, uniqueness, validity, consistency, freshness/timeliness and accuracy describe different failure modes; choose checks that match the data contract and use case.
  - Example: Define one measurable check and an example failure for each dimension on a small orders table.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on quality dimensions. Then reproduce the lesson example: Define one measurable check and an example failure for each dimension on a small orders table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on quality dimensions. Then reproduce the lesson example: Define one measurable check and an example failure for each dimension on a small orders table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Great Expectations and alternatives:** Expectations and Expectation Suites describe assertions; Validation Results record outcomes. Common checks cover nulls, ranges, uniqueness and row-count bounds. Data Docs report results; Checkpoints combine expectations, data and actions. Soda, dbt tests and Deequ are alternatives with different integration models.
  - Example: Create a local suite, validate good and bad fixtures, review the result and compare an equivalent dbt test.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on great expectations and alternatives. Then reproduce the lesson example: Create a local suite, validate good and bad fixtures, review the result and compare an equivalent dbt test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on great expectations and alternatives. Then reproduce the lesson example: Create a local suite, validate good and bad fixtures, review the result and compare an equivalent dbt test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Data contracts:** Contracts formalize producer-consumer expectations and can be enforced at ingestion or layer boundaries. Version contracts and define a compatibility process for breaking changes.
  - Example: Publish a versioned event contract and reject a breaking producer change in a test.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on data contracts. Then reproduce the lesson example: Publish a versioned event contract and reject a breaking producer change in a test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on data contracts. Then reproduce the lesson example: Publish a versioned event contract and reject a breaking producer change in a test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Lineage:** Lineage explains upstream causes and downstream blast radius. Table-level and column-level lineage have different resolution. OpenLineage standardizes lineage events; Marquez is a reference backend. Airflow and dbt can emit or expose lineage for connected workflows.
  - Example: Trace a gold metric to its source columns and identify the downstream dashboard affected by one upstream change.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on lineage. Then reproduce the lesson example: Trace a gold metric to its source columns and identify the downstream dashboard affected by one upstream change.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on lineage. Then reproduce the lesson example: Trace a gold metric to its source columns and identify the downstream dashboard affected by one upstream change.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Monitoring and alerting:** Freshness catches stale tables; volume catches row-count drops/spikes; schema drift catches changed columns or types; distribution monitoring can surface anomalies. Route alerts with owner, impact and runbook context to avoid alert fatigue.
  - Example: Create freshness, volume and schema checks on generated daily partitions and route only actionable failures to a mock alert.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on monitoring and alerting. Then reproduce the lesson example: Create freshness, volume and schema checks on generated daily partitions and route only actionable failures to a mock alert.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on monitoring and alerting. Then reproduce the lesson example: Create freshness, volume and schema checks on generated daily partitions and route only actionable failures to a mock alert.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Lightweight anomaly detection:** Rolling averages and standard-deviation thresholds can detect simple changes. Rule-based, statistical and ML-based methods differ in complexity and explainability; use simple rules when sufficient.
  - Example: Compare a fixed threshold and rolling baseline on a synthetic seasonal series with one injected anomaly.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on lightweight anomaly detection. Then reproduce the lesson example: Compare a fixed threshold and rolling baseline on a synthetic seasonal series with one injected anomaly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on lightweight anomaly detection. Then reproduce the lesson example: Compare a fixed threshold and rolling baseline on a synthetic seasonal series with one injected anomaly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Operational quality checks:** Place checks after ingestion, after transformation or both depending on the failure and recovery boundary. Fail fast for invalid data that must not propagate; quarantine recoverable bad records. Connect Airflow check failures to real alert callbacks and track quality measures over time.
  - Example: Build an Airflow-style validation path that quarantines malformed records, fails a critical contract violation, emits an alert and stores trend metrics.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on operational quality checks. Then reproduce the lesson example: Build an Airflow-style validation path that quarantines malformed records, fails a critical contract violation, emits an alert and stores trend metrics.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on operational quality checks. Then reproduce the lesson example: Build an Airflow-style validation path that quarantines malformed records, fails a critical contract violation, emits an alert and stores trend metrics.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Great Expectations: documentation](https://docs.greatexpectations.io/docs/) — Free; no registration required. No paid materials required.
2. [OpenLineage: documentation](https://openlineage.io/docs/) — Free; no registration required. No paid materials required.

#### Lab: Phase 6 · Data quality and observability

Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Implement Phase 6 · Data quality and observability in Data quality quarantine gate. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### LLM evaluation warehouse

A team needs every assistant answer logged and comparable across prompt versions.

**Data:** Record 200 fictional question, answer and citation runs across two prompt versions. Use a fixed seed and keep evaluation cases separate.

**Output:** A modeled evaluation table with per-version quality and latency views.

**Effort:** 16h · Intermediate

- **Phase 6 · Data quality and observability:** Implement Phase 6 · Data quality and observability in LLM evaluation warehouse. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A modeled evaluation table with per-version quality and latency views. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute groundedness and latency per version from the table and reproduce one regression found in it.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### PII-safe training data gate

A data owner needs personal data removed before any model or LLM sees it.

**Data:** Generate 500 fictional support tickets with seeded emails, phone numbers and names. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality-gated redaction step between bronze and the training and embedding inputs.

**Effort:** 16h · Intermediate

- **Phase 6 · Data quality and observability:** Implement Phase 6 · Data quality and observability in PII-safe training data gate. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality-gated redaction step between bronze and the training and embedding inputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded identifier reaches the gold table or the vector index, and the gate fails on an unredacted batch.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Change data capture replay bench. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Pipeline infrastructure plan. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Partition and file-layout tuner. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Event schema compatibility gate. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Spark skew diagnosis lab. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 6 · Data quality and observability:** Extend the project with Phase 6 · Data quality and observability in Sales star-schema builder. Adapt this focused lab to the project data: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.  Required concepts: Quality as a discipline, Quality dimensions, Great Expectations and alternatives, Data contracts, Lineage, Monitoring and alerting, Lightweight anomaly detection, Operational quality checks.
  - Deliverable: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 6 · Data quality and observability: Phase 6 · Data quality and observability: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 6 · Data quality and observability: Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 7

<a id="de-cloud-infra"></a>

### Phase 7 · Cloud and infrastructure

Package, deploy and operate data workloads with reproducible infrastructure, least privilege, safe delivery and cost awareness; choose one cloud rather than surveying every provider.

**Priority:** Essential · **Study:** 9h · **Practice:** 14h

**Prerequisites:** [Phase 6 · Data quality and observability](data-engineering.md#de-quality-observability) Navigation is unrestricted.

#### Concepts

- [ ] **Docker in depth:** Multi-stage builds reduce production image size; layer caching speeds repeated builds. Volumes persist container data, while bind mounts connect host paths. Bridge networking enables container communication; Compose healthchecks, depends_on conditions and resource limits shape local stacks.
  - Example: Build a multi-stage worker image, demonstrate a healthcheck and distinguish a named volume from a bind mount.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on docker in depth. Then reproduce the lesson example: Build a multi-stage worker image, demonstrate a healthcheck and distinguish a named volume from a bind mount.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on docker in depth. Then reproduce the lesson example: Build a multi-stage worker image, demonstrate a healthcheck and distinguish a named volume from a bind mount.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Kubernetes basics:** Pods run containers; Deployments manage replicas; Services provide stable access; ConfigMaps and Secrets supply configuration. Jobs and CronJobs run finite or scheduled work; Namespaces isolate projects. Resource requests and limits affect placement and throttling. Practice kubectl get, describe, logs and exec with minikube or kind.
  - Example: Deploy a small CronJob locally, inspect its logs and explain a deliberately too-low CPU limit.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on kubernetes basics. Then reproduce the lesson example: Deploy a small CronJob locally, inspect its logs and explain a deliberately too-low CPU limit.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on kubernetes basics. Then reproduce the lesson example: Deploy a small CronJob locally, inspect its logs and explain a deliberately too-low CPU limit.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Kubernetes for data workloads:** Airflow's KubernetesExecutor runs tasks as pods; Spark-on-Kubernetes runs driver and executor pods. Persistent Volumes and Claims provide storage for stateful workloads. Horizontal Pod Autoscaler is a conceptual starting point for scaling replicas based on metrics.
  - Example: Sketch the Airflow task-pod and Spark driver/executor resources, including storage and resource requests.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on kubernetes for data workloads. Then reproduce the lesson example: Sketch the Airflow task-pod and Spark driver/executor resources, including storage and resource requests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on kubernetes for data workloads. Then reproduce the lesson example: Sketch the Airflow task-pod and Spark driver/executor resources, including storage and resource requests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Terraform foundations:** Providers connect Terraform to APIs; resources create managed objects and data sources read existing ones. State (.tfstate) tracks objects and should use remote storage and locking when shared. plan previews changes before apply; variables, outputs and modules support reuse. Detect drift by comparing configuration and real infrastructure.
  - Example: Create a small local or sandbox plan, review its proposed changes before apply and explain remote state locking and drift.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on terraform foundations. Then reproduce the lesson example: Create a small local or sandbox plan, review its proposed changes before apply and explain remote state locking and drift.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on terraform foundations. Then reproduce the lesson example: Create a small local or sandbox plan, review its proposed changes before apply and explain remote state locking and drift.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **One cloud end to end:** Choose AWS or GCP. Learn S3/GCS buckets, lifecycle policies and storage classes; EC2/Cloud Run plus Lambda/Cloud Functions as a serverless option; IAM roles versus users and policies with least privilege and service accounts; VPCs, subnets, security groups/firewall rules; and managed RDS/Cloud SQL, MSK/Confluent Cloud, EMR/Dataproc services.
  - Example: Draw a least-privilege architecture for a batch pipeline on one provider and identify each storage, compute, identity, network and managed-data boundary.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on one cloud end to end. Then reproduce the lesson example: Draw a least-privilege architecture for a batch pipeline on one provider and identify each storage, compute, identity, network and managed-data boundary.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on one cloud end to end. Then reproduce the lesson example: Draw a least-privilege architecture for a batch pipeline on one provider and identify each storage, compute, identity, network and managed-data boundary.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **CI/CD for data pipelines:** CI runs linting, unit tests, DAG validation and dbt tests on every pull request. CD builds, tests and deploys. GitHub Actions or GitLab CI organize workflows, jobs, steps and runners. Test DAGs in CI and use dbt build --select state:modified+ where supported. Stage and validate data before promotion.
  - Example: Create a CI workflow for SQL/Python checks, DAG validation and changed dbt models; require staging validation before production promotion.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on ci/cd for data pipelines. Then reproduce the lesson example: Create a CI workflow for SQL/Python checks, DAG validation and changed dbt models; require staging validation before production promotion.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on ci/cd for data pipelines. Then reproduce the lesson example: Create a CI workflow for SQL/Python checks, DAG validation and changed dbt models; require staging validation before production promotion.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Secrets and configuration:** Never hardcode credentials. Use environment variables for local configuration and cloud secrets managers or Vault for production secrets; inject secrets safely into containers/pods. Separate environment configuration without copying business logic.
  - Example: Rotate a test credential, confirm logs and image layers do not contain it, and load distinct development and staging configuration.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on secrets and configuration. Then reproduce the lesson example: Rotate a test credential, confirm logs and image layers do not contain it, and load distinct development and staging configuration.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on secrets and configuration. Then reproduce the lesson example: Rotate a test credential, confirm logs and image layers do not contain it, and load distinct development and staging configuration.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Cost and operations:** Read a cloud bill and identify storage, compute, network and idle-resource drivers. Right-size executors and pods; spot/preemptible instances can reduce costs for retryable non-critical batch workloads, but not every task is safe to interrupt.
  - Example: Estimate costs for a small batch workload, show one right-sizing change and document which tasks could safely use interruptible compute.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on cost and operations. Then reproduce the lesson example: Estimate costs for a small batch workload, show one right-sizing change and document which tasks could safely use interruptible compute.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on cost and operations. Then reproduce the lesson example: Estimate costs for a small batch workload, show one right-sizing change and document which tasks could safely use interruptible compute.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Docker: build and run an application](https://docs.docker.com/get-started/) — Free; no registration required. No paid materials required.
2. [Kubernetes: concepts](https://kubernetes.io/docs/concepts/) — Free; no registration required. No paid materials required.

#### Lab: Phase 7 · Cloud and infrastructure

Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Implement Phase 7 · Cloud and infrastructure in Pipeline infrastructure plan. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Change data capture replay bench. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Partition and file-layout tuner. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Data quality quarantine gate. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Event schema compatibility gate. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Spark skew diagnosis lab. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Sales star-schema builder. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Late-event window counter

A product team needs per-minute order counts that stay correct when events arrive late.

**Data:** Generate a seeded event stream with out-of-order and five-minute-late records. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Late-event window counter. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart from the checkpoint and match a batch recount for every closed window.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Lakehouse time-travel auditor

An auditor needs to see what a table contained before a bad load.

**Data:** Generate three loads into an Iceberg or Delta table, the last one faulty. Use a fixed seed and keep evaluation cases separate.

**Output:** A snapshot report, rollback procedure and compaction plan.

**Effort:** 10h · Beginner → intermediate

- **Phase 7 · Cloud and infrastructure:** Extend the project with Phase 7 · Cloud and infrastructure in Lakehouse time-travel auditor. Adapt this focused lab to the project data: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.  Required concepts: Docker in depth, Kubernetes basics, Kubernetes for data workloads, Terraform foundations, One cloud end to end, CI/CD for data pipelines, Secrets and configuration, Cost and operations.
  - Deliverable: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A snapshot report, rollback procedure and compaction plan. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 7 · Cloud and infrastructure: Phase 7 · Cloud and infrastructure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Query the pre-fault snapshot, restore it and show file counts before and after compaction.
- [ ] Phase 7 · Cloud and infrastructure: Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-data-engineering"></a>

### Data engineering checkpoint

Demonstrate readiness through a reproducible practical handoff. Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Phase 1 · Distributed processing with Spark](data-engineering.md#de-spark), [Phase 2 · Orchestration mastery with Airflow](data-engineering.md#de-airflow), [Phase 3 · Streaming and CDC with Kafka](data-engineering.md#de-kafka), [Phase 4 · Lakehouse formats and storage internals](data-engineering.md#de-lakehouse), [Phase 5 · Transformation and modeling with dbt + Kimball](data-engineering.md#de-dbt-kimball), [Phase 6 · Data quality and observability](data-engineering.md#de-quality-observability), [Phase 7 · Cloud and infrastructure](data-engineering.md#de-cloud-infra) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Docker: build and run an application](https://docs.docker.com/get-started/) — Free; no registration required. No paid materials required.
2. [Kubernetes: concepts](https://kubernetes.io/docs/concepts/) — Free; no registration required. No paid materials required.

#### Data engineering checkpoint

Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Idempotent backfill orchestrator

A data owner needs to reload a broken week without duplicating rows.

**Data:** Generate seven daily partitions with one corrupted day. Use a fixed seed and keep evaluation cases separate.

**Output:** An Airflow DAG with mapped partition tasks, retries and a bounded backfill command.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Idempotent backfill orchestrator. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An Airflow DAG with mapped partition tasks, retries and a bounded backfill command. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the backfill twice and show unchanged row counts plus a DAG integrity test in CI.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Change data capture replay bench

A support team needs customer changes mirrored without losing deletes.

**Data:** Use a disposable PostgreSQL table with scripted inserts, updates and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** A Debezium-to-Kafka path landing raw events in a bronze sink.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Change data capture replay bench. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Debezium-to-Kafka path landing raw events in a bronze sink. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart the consumer mid-stream and prove deletes and updates replay without duplicates.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline infrastructure plan

A small team needs a repeatable environment without surprise cloud bills.

**Data:** Use the local pipeline containers and one chosen cloud provider's free documentation. Use a fixed seed and keep evaluation cases separate.

**Output:** A Terraform plan, local Kubernetes deployment and least-privilege diagram.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Pipeline infrastructure plan. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Terraform plan, local Kubernetes deployment and least-privilege diagram. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] terraform plan runs with no paid resources applied and the rollback steps restore the previous release.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Partition and file-layout tuner

An analyst needs date-filtered queries to stop scanning the whole table.

**Data:** Generate one year of events written once unpartitioned and once partitioned by day. Use a fixed seed and keep evaluation cases separate.

**Output:** Two table layouts with explain plans and a compaction step.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Partition and file-layout tuner. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two table layouts with explain plans and a compaction step. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show bytes scanned and file counts for the same filtered query on both layouts with identical results.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data quality quarantine gate

A downstream team needs bad records stopped before they reach reports.

**Data:** Seed 1000 rows with nulls, duplicates, out-of-range values and a schema drift. Use a fixed seed and keep evaluation cases separate.

**Output:** Great Expectations or equivalent checks with quarantine output and lineage events.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Data quality quarantine gate. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Great Expectations or equivalent checks with quarantine output and lineage events. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every seeded defect lands in quarantine, clean rows pass and the alert names the failing contract.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Event schema compatibility gate

A platform team needs producer changes that do not break existing consumers.

**Data:** Write Avro schema versions with an added optional field and one breaking rename. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema registry compatibility check and old/new consumer fixtures.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Event schema compatibility gate. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema registry compatibility check and old/new consumer fixtures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Accept the compatible change, reject the breaking one and keep old consumers passing.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Spark skew diagnosis lab

An analyst needs a slow daily aggregation to finish predictably.

**Data:** Generate 2 million events with one deliberately hot customer key. Use a fixed seed and keep evaluation cases separate.

**Output:** A PySpark job with explain plans and a salted or broadcast fix.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Spark skew diagnosis lab. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A PySpark job with explain plans and a salted or broadcast fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report task-duration spread before and after and prove both versions return identical totals.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Sales star-schema builder

A manager needs consistent revenue numbers across reports.

**Data:** Generate fictional orders, customers and products with late-arriving changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A dbt project with staging, a Kimball fact table and a type-2 customer dimension.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Sales star-schema builder. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dbt project with staging, a Kimball fact table and a type-2 customer dimension. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] dbt tests pass, grain is documented and a changed customer keeps correct historical revenue.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Late-event window counter

A product team needs per-minute order counts that stay correct when events arrive late.

**Data:** Generate a seeded event stream with out-of-order and five-minute-late records. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Late-event window counter. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark Structured Streaming or Flink job with event-time windows, a watermark and checkpointing. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart from the checkpoint and match a batch recount for every closed window.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Lakehouse time-travel auditor

An auditor needs to see what a table contained before a bad load.

**Data:** Generate three loads into an Iceberg or Delta table, the last one faulty. Use a fixed seed and keep evaluation cases separate.

**Output:** A snapshot report, rollback procedure and compaction plan.

**Effort:** 10h · Beginner → intermediate

- **Data engineering checkpoint:** Extend the project with Data engineering checkpoint in Lakehouse time-travel auditor. Adapt this focused lab to the project data: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A snapshot report, rollback procedure and compaction plan. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Data engineering checkpoint: Data engineering checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Query the pre-fault snapshot, restore it and show file counts before and after compaction.
- [ ] Data engineering checkpoint: Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

