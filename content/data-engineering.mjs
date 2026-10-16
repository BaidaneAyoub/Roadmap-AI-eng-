import { d, m, l } from "./curriculum.mjs";
import { resource } from "./resources.mjs";

const source = (title, url) => resource(title, url);
const lessons = [
  l(
    "de-spark",
    "Phase 1 · Distributed processing with Spark",
    "Move from single-machine transformations to distributed processing, and learn to explain Spark plans, shuffles, skew and performance rather than treating Spark as a black box.",
    `Spark architecture and execution~The driver builds a plan, executors run tasks, and a cluster manager allocates resources; jobs contain stages, which contain tasks mapped from a DAG. Lazy transformations are evaluated by actions. Catalyst optimizes plans and Tungsten improves execution; use explain() to inspect logical and physical plans.~Trace a filter, join and aggregation from a DataFrame action to its jobs, stages and tasks in the Spark UI.
Core APIs~RDDs explain Spark's distributed collection model; DataFrames provide schema-aware select, filter, withColumn, groupBy, agg and orderBy; Spark SQL runs through temporary views. Know that typed Datasets are mainly a Scala/Java API concern in a PySpark workflow.~Create a DataFrame, register it as a temporary view, run the same aggregation in SQL and DataFrame syntax, and compare the results.
Partitions, shuffles and skew~Partitions distribute work and default counts depend on input and configuration. repartition() redistributes data; coalesce() can reduce partitions with less movement. Grouping, joins, distinct, ordering and repartitioning can trigger shuffles, with map/reduce stages and disk spill. Detect skew through task-duration spread; mitigate with salting, broadcast joins or a suitable partition strategy.~Use a deliberately skewed key, inspect task durations, then compare a salted aggregation with the unsalted result.
Join planning~Broadcast hash joins, shuffle sort-merge joins and shuffle hash joins trade memory for network and sorting work. Spark can broadcast below its size threshold or use a broadcast hint; join reordering and predicate pushdown can reduce work. Skewed keys may need their own strategy.~Compare explain() plans for a small-dimension broadcast join and a large-large join, then push a selective filter before the join.
Memory, caching and spill~MEMORY_ONLY, MEMORY_AND_DISK and DISK_ONLY have different recomputation and storage costs; serialized and deserialized storage trade CPU for memory. cache() uses a default persistence level; persist() selects one explicitly. Understand executor execution/storage memory and unpersist materialized data when it is no longer needed.~Persist a reused DataFrame, inspect storage in the Spark UI, and unpersist it after the last dependent action.
Performance diagnosis~Use Jobs, Stages, Storage and Executors in the Spark UI to find long stages, skewed tasks, excess shuffles and GC pressure. Adaptive Query Execution can coalesce partitions and handle some skew. Parquet column pruning and predicate pushdown reduce I/O when queries select few columns or rows.~Capture a baseline and an optimized run, explain the changed plan and report task-time and input-size differences.
UDFs~Python UDFs pay row-by-row serialization and Py4J costs; Pandas UDFs use Arrow-backed vectorization and can help for operations unavailable in Spark's built-ins. Built-in Spark SQL functions are generally preferable because Spark can optimize them.~Implement one normalization with a built-in expression and a Pandas UDF, compare output equality and execution plans, and avoid a Python UDF when a built-in exists.
Window functions~Window.partitionBy() and orderBy() define per-group ordered calculations. row_number, rank and dense_rank differ on ties; lag and lead access neighboring rows, while window frames support running totals and moving averages.~Compute each customer's latest event, a tied rank, a running total and a three-row moving average; test tie and boundary cases.
Structured Streaming introduction~A streaming DataFrame shares the batch DataFrame API but executes incrementally, commonly in micro-batches. Watermarks bound state while allowing late events; append, update and complete output modes have different result semantics.~Run a small local event stream with a late record and compare watermark and output-mode behavior with an equivalent batch aggregation.
Deployment and I/O~Local, standalone and cluster execution differ in resource placement; client and cluster deploy modes place the driver differently. spark-submit exposes the main job configuration. Read and write Parquet, CSV, JDBC and cloud-storage paths with explicit schemas and safe credentials.~Package a parameterized PySpark job, run it with spark-submit in local mode and round-trip a small dataset through Parquet and CSV.
Debugging and observability~Executor failures differ from driver failures; common causes include out-of-memory errors, serialization errors and schema mismatches. Combine stack traces, explain(), getNumPartitions() and the Spark UI to diagnose instead of guessing.~Inject a schema mismatch and a partition imbalance into a local job, record the evidence from the error, plan and UI, and document the fix.`,
    "Build a reproducible PySpark batch job over generated event data. Include SQL and DataFrame transformations, a skewed join diagnosis, an explain plan, a small streaming exercise, and a README with measured before/after tuning evidence.",
    [
      source(
        "Apache Spark: PySpark overview",
        "https://spark.apache.org/docs/latest/api/python/getting_started/index.html",
      ),
      source(
        "Apache Spark: SQL performance tuning",
        "https://spark.apache.org/docs/latest/sql-performance-tuning.html",
      ),
    ],
    "Core",
    12,
    16,
  ),
  l(
    "de-airflow",
    "Phase 2 · Orchestration mastery with Airflow",
    "Go beyond introductory DAGs to design, test, operate and debug reliable workflows that coordinate data systems without hiding business logic in orchestration code.",
    `Airflow architecture~The Scheduler parses DAG files and decides what is ready; the Webserver presents the UI; an Executor dispatches work; the Metadata DB stores state; and the Triggerer handles deferrable work. Sequential, Local, Celery and Kubernetes executors trade simplicity for parallel and distributed capacity. Know where DAG files are discovered and how parsing works.~Trace one scheduled task from DAG parsing through scheduler state, executor dispatch and metadata updates.
DAG configuration~DAG schedule, start_date, catchup and max_active_runs determine when runs are created and how much work may overlap. Task dependencies can use >>, <<, set_upstream and set_downstream; pools, priority_weight and task concurrency limit contention.~Configure a daily DAG with a historical start date, disable catchup, cap active runs and show which logical dates are scheduled.
TaskFlow, XCom and branching~TaskFlow uses @dag and @task and is the preferred style for new Python DAGs; classic operators remain useful. XCom passes small metadata, not large datasets. BranchPythonOperator or @task.branch chooses paths, while trigger rules such as all_success, all_failed, one_success and none_failed control downstream execution.~Build a TaskFlow DAG that branches on a data-quality result, passes only a partition identifier by XCom and joins paths with an explicit trigger rule.
Dynamic task mapping~expand() and partial() create mapped tasks at run time from a collection; a static loop creates tasks during DAG definition. Map over a bounded list of tables, files or partitions, and understand limits on mapped task counts.~Map a validation task over a run-time list of table names and contrast it with a small static DAG.
Custom components~Custom Operators subclass BaseOperator; Hooks wrap external connections; Sensors wait using poke or reschedule mode with a poke interval and timeout. Prefer maintained provider components when they satisfy the use case; avoid building custom abstractions without a concrete need.~Write a small testable Hook and Operator around a local fixture, then explain why a provider is or is not preferable.
Reliability and production~Retries, retry_delay and exponential backoff recover transient failures; timeouts bound work. SLA settings and callbacks communicate missed expectations. Tasks should be idempotent so retries and backfills do not duplicate or corrupt data. Catchup and CLI backfills need safe ranges; success/failure callbacks can notify Slack or email.~Run a task twice against the same partition, prove idempotency, simulate a transient failure and document a bounded backfill and alert.
DAG design patterns~Avoid database/network work at module import time. Choose task granularity that balances observability and overhead. Prefer reschedule or deferrable Sensors over wasteful polling. Coordinate DAGs using TriggerDagRunOperator, ExternalTaskSensor or Datasets when the dependency requires it.~Use a Dataset update to trigger a downstream DAG and verify importing the DAG does not execute its workload.
Integrations~Airflow can run dbt through a BashOperator, Cosmos or a dbt Cloud provider; Spark through SparkSubmitOperator or an API/Livy; and connect through Postgres, S3/GCS, Kafka and HTTP providers. Pick integration boundaries that keep the data work testable.~Orchestrate a local transformation and a Spark job with explicit upstream/downstream contracts and no credentials in source.
Deployment and configuration~Run Airflow locally with Docker Compose; understand KubernetesExecutor tasks as pods and set task resource requests/limits. Know essential airflow.cfg settings, Connections and Variables, and use a secrets backend such as Vault or a cloud secrets manager for sensitive values.~Start the local Compose stack, configure a non-secret connection and document how a production secrets backend would supply credentials.
Monitoring, debugging and testing~Use Grid, Graph, Gantt and task logs to investigate stuck DAGs, scheduler problems, pool exhaustion and zombie tasks. airflow tasks test and airflow dags test support local debugging. Test custom Operators/Hooks and validate imports, cycles, reachability and CI behavior before deployment.~Add DAG integrity tests and one unit test for a custom component; make CI fail on an import error and record a local task-test command.`,
    "Build and test an Airflow DAG that coordinates ingestion, dbt-style transformation and quality checks. Demonstrate idempotent retries, a branch, dynamic mapping, one integration, local debugging and CI DAG validation.",
    [
      source(
        "Apache Airflow: core concepts",
        "https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html",
      ),
      source(
        "Apache Airflow: best practices",
        "https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html",
      ),
    ],
    "Core",
    10,
    14,
  ),
  l(
    "de-kafka",
    "Phase 3 · Streaming and CDC with Kafka",
    "Ingest changes as durable ordered events, understand delivery guarantees and schemas, and operate a CDC path from a transactional database into a lake or warehouse.",
    `Kafka foundations~Topics contain partitions; offsets identify records and ordering is guaranteed within a partition, not across a topic. Brokers form clusters and replicate partitions with a replication factor and in-sync replicas. Producers choose partitioning and acknowledgements (acks=0/1/all); consumer groups distribute partitions and rebalance. Retention can delete by time/size or compact by key.~Produce keyed customer events and show that matching keys retain partition order while unrelated partitions have no global ordering.
Delivery semantics~At-most-once, at-least-once and exactly-once depend on when offsets are committed and what is transactional. Idempotent producers reduce duplicate writes; consumers choose automatic or manual commits. Kafka transactions coordinate records and offsets but do not make arbitrary external side effects exactly once.~Crash a consumer before and after committing an offset, observe possible replay, and make a downstream write idempotent.
Schema management~A schema registry governs independently deployed producer and consumer contracts. Backward, forward and full compatibility define which old/new readers and writers interoperate. Avro, Protobuf and JSON Schema trade compactness, tooling and flexibility; schema evolution must be planned before breaking downstream readers.~Add an optional field under a chosen compatibility rule and test old and new consumer fixtures.
Change data capture~CDC reads a database transaction log instead of repeatedly polling tables. Debezium connectors emit before/after images, operation type and source metadata. Initial snapshots and incremental capture have different behavior; handle deletes, source schema changes and out-of-order events explicitly.~Capture inserts, updates and deletes from a disposable PostgreSQL table and verify event key, operation and source position.
Kafka Connect~Source connectors publish records and sink connectors write topics to a lake or warehouse. Debezium is a source connector. Converters select serialization; Single Message Transforms make lightweight record changes. Connector plugins and configurations need versioning and safe secrets.~Configure a local connector pair with a converter and one SMT, validate connector status and preserve a raw event for audit.
Stream processing~Choose Spark Structured Streaming or Flink for a practical project and know the other exists. Distinguish stateless from stateful operations, tumbling/sliding/session windows, event-time watermarks and late data, stream-stream/stream-static joins, and checkpointing for fault tolerance.~Compute a windowed event count with a watermark, join a stream to static reference data and restart from a checkpoint.
Architecture patterns~A CDC-to-Kafka-to-lakehouse path commonly lands raw events in a bronze layer. Kappa emphasizes a stream as the processing source; Lambda combines batch and streaming paths. Fan-out lets independent consumers use the same CDC stream without coupling their processing.~Design a CDC event path with two independent consumers and state which records are retained for replay.
Operations and debugging~Monitor consumer lag and use kafka-topics, kafka-console-consumer/producer and kafka-consumer-groups to inspect the system. Diagnose rebalance storms, poison-pill messages and connector crashes; apply backpressure when downstream processing is slower than producers.~Create a small local topic, inspect group lag, introduce a malformed record and document a quarantine/recovery strategy.`,
    "Build a local CDC demonstration from PostgreSQL through Kafka into a raw event sink. Show schema evolution, delete handling, lag monitoring, restart/replay behavior and a short architecture diagram.",
    [
      source(
        "Apache Kafka: introduction",
        "https://kafka.apache.org/documentation/#introduction",
      ),
      source(
        "Debezium: getting started",
        "https://debezium.io/documentation/reference/stable/tutorial.html",
      ),
    ],
    "Core",
    10,
    16,
  ),
  l(
    "de-lakehouse",
    "Phase 4 · Lakehouse formats and storage internals",
    "Understand what happens beneath analytical tables, and how transactional table formats, catalogs and query engines make object storage usable for evolving batch and streaming workloads.",
    `File formats~Row-oriented formats suit record-at-a-time access; columnar formats suit analytical scans. Parquet stores row groups, column chunks, pages and footer metadata; column statistics enable pruning and predicate pushdown. Snappy, Gzip and Zstd trade compression ratio for CPU; dictionary and run-length encoding exploit repeated values. ORC is another analytical format and Avro is common for CDC events.~Inspect a Parquet file's schema and row groups, then compare a narrow projection with a full-row scan.
Why table formats matter~Raw Parquet on a filesystem becomes difficult as tables grow: small files increase metadata and planning overhead, while concurrent writers can conflict without transaction coordination.~Write many tiny files, measure listing/planning overhead, then compact them.
Iceberg and Delta internals~Iceberg and Delta add metadata and transaction layers over object storage. Iceberg manifests, manifest lists and snapshots describe files; both formats use optimistic concurrency for ACID-like updates. Time travel queries a prior snapshot; schema evolution avoids rewriting all data. Iceberg supports partition evolution and hidden partitioning.~Create snapshots, evolve a schema and query the prior snapshot; explain which metadata enables the operation.
Table maintenance~Compaction merges small files; snapshot expiration or vacuuming removes eligible historical data. Sorting or Z-ordering improves data skipping for selected query patterns; Iceberg sort orders and manifest rewrites keep metadata useful. Retention must be balanced with recovery and compliance needs.~Generate small files, compact them, compare file counts and query scan metrics, then describe safe history retention.
Catalogs~A catalog resolves table names to metadata locations. Hive Metastore is a traditional option; AWS Glue is managed; Nessie provides Git-like versioning for Iceberg; REST catalogs expose a service interface used by a growing ecosystem.~Register a table through a catalog and show that consumers resolve its metadata without hard-coded file paths.
Query engines~Trino/Presto use coordinator and worker roles plus connectors to query sources. Federated SQL can combine Postgres, Parquet on S3 and a warehouse. Engines use table metadata to skip files and partitions; Spark suits heavy ETL while Trino suits interactive/federated SQL workloads.~Run one small analytical query in Spark and Trino or compare plans on paper, explaining workload, latency and resource trade-offs.
Lakehouse architecture~Map bronze raw, silver conformed and gold aggregated data to Iceberg or Delta tables. Choose partitioning based on query predicates while avoiding over-partitioning. Batch and streaming writers may land in the same table only with a compatible commit and layout strategy.~Design a medallion table layout for time-stamped events and justify partitions, file sizing and batch/stream coordination.
Operations and platform fluency~Inspect snapshots and files metadata tables to diagnose small-file and catalog issues. Metadata size and catalog choice affect cost and performance over time. As an optional weekend extension, use Databricks Community Edition if currently available at no cost to ingest data, create Delta tables and schedule a Databricks Job; the core learning path must not depend on that service.~Write a table health report from metadata and outline a compact/expire plan; if a free Databricks environment is available, reproduce one medallion pipeline there.`,
    "Build a medallion lakehouse over local sample data using Iceberg or Delta. Document file layout, schema evolution, time travel, compaction, catalog choice and the query evidence used to validate performance.",
    [
      source(
        "Apache Iceberg: documentation",
        "https://iceberg.apache.org/docs/latest/",
      ),
      source(
        "Delta Lake: quick start",
        "https://docs.delta.io/latest/quick-start.html",
      ),
    ],
    "Core",
    10,
    16,
  ),
  l(
    "de-dbt-kimball",
    "Phase 5 · Transformation and modeling with dbt + Kimball",
    "Turn raw tables into tested, documented models that answer business questions, with incremental processing and dimensional-modeling choices that remain correct as data changes.",
    `dbt project and DAG~A dbt project organizes models, sources, seeds, snapshots, macros, tests, exposures and analyses. view, table, incremental and ephemeral materializations trade freshness, compute and reuse. ref() and source() create dependency edges; dbt build runs the selected resource graph with tests, while dbt run and dbt test focus on transformations and checks.~Create source, staging and mart models linked with source() and ref(), then inspect the generated DAG.
Incremental models~Append, merge, delete+insert and insert_overwrite strategies suit different warehouses and data shapes. is_incremental() must support both incremental and full-refresh execution. Choose a unique key and handle late-arriving or updated records; a flawed filter can silently omit corrections.~Run an incremental model twice with a late update and duplicate key, then prove both runs match the expected full-refresh result.
Snapshots and slowly changing dimensions~Snapshots preserve mutable source records over time. Timestamp strategy uses an updated-at field; check strategy compares selected columns. Implement SCD Type 2 with validity intervals and current-row indicators, and explain when Types 1, 2 or 3 are appropriate.~Track a customer's changing address and show current and historical rows with correct validity boundaries.
Testing, docs and exposures~Built-in generic tests include unique, not_null, accepted_values and relationships; singular and generic custom tests encode domain rules. dbt docs generate builds documentation and DAG visualization; exposures describe downstream dashboards and applications.~Add generic and singular tests, generate docs and declare one downstream exposure.
Dimensional modeling~Facts and dimensions begin with a declared grain. Measures can be additive, semi-additive or non-additive. Star and snowflake schemas organize analysis differently; conformed dimensions align multiple fact tables/marts. Surrogate and natural keys, plus bridge tables, address identity and many-to-many relationships.~Model orders and order lines at distinct grains, add a conformed customer dimension and a bridge for a many-to-many tag relationship.
Consumer-focused contracts~Data contracts define expected schema and semantics between producers and consumers. Gold models should answer business questions rather than mirror source convenience. Consistent naming and versioned contracts make breaking changes explicit and reviewable.~Write a gold-layer contract for a named business question and test a deliberate breaking schema change.
Macros and reuse~Jinja macros centralize repeated SQL patterns; packages.yml declares dependencies such as dbt-utils. vars pass environment or run-specific values. Abstraction should reduce duplication without obscuring generated SQL.~Create a small tested macro, pin a package version and inspect compiled SQL for two variable configurations.
Orchestration and CI~Airflow can run dbt through a BashOperator, Cosmos or dbt Cloud API. dbt build --select and state:modified+ support selective work; Slim CI checks changed models and downstream dependents before deployment.~Create a pull-request validation that builds changed models and their dependents against a disposable target, then documents promotion criteria.`,
    "Create a dbt project over a small generated commerce dataset. Build a dimensional mart, an incremental model that handles late updates, an SCD Type 2 snapshot, tests, docs, exposures and a changed-model CI workflow.",
    [
      source(
        "dbt: build your first project",
        "https://docs.getdbt.com/docs/get-started-dbt",
      ),
      source(
        "dbt: incremental models",
        "https://docs.getdbt.com/docs/build/incremental-models",
      ),
    ],
    "Core",
    8,
    14,
  ),
  l(
    "de-quality-observability",
    "Phase 6 · Data quality and observability",
    "Make data trust measurable: detect failures close to their source, trace downstream impact and route actionable alerts instead of discovering silent corruption through consumers.",
    `Quality as a discipline~Bad data can fail loudly or silently. Schema changes, upstream defects, late or missing data and duplicates are common causes. Shift checks earlier so invalid records are caught before they reach consumers.~Inject a duplicate and a missing required field at ingestion and compare early rejection with a downstream report.
Quality dimensions~Completeness, uniqueness, validity, consistency, freshness/timeliness and accuracy describe different failure modes; choose checks that match the data contract and use case.~Define one measurable check and an example failure for each dimension on a small orders table.
Great Expectations and alternatives~Expectations and Expectation Suites describe assertions; Validation Results record outcomes. Common checks cover nulls, ranges, uniqueness and row-count bounds. Data Docs report results; Checkpoints combine expectations, data and actions. Soda, dbt tests and Deequ are alternatives with different integration models.~Create a local suite, validate good and bad fixtures, review the result and compare an equivalent dbt test.
Data contracts~Contracts formalize producer-consumer expectations and can be enforced at ingestion or layer boundaries. Version contracts and define a compatibility process for breaking changes.~Publish a versioned event contract and reject a breaking producer change in a test.
Lineage~Lineage explains upstream causes and downstream blast radius. Table-level and column-level lineage have different resolution. OpenLineage standardizes lineage events; Marquez is a reference backend. Airflow and dbt can emit or expose lineage for connected workflows.~Trace a gold metric to its source columns and identify the downstream dashboard affected by one upstream change.
Monitoring and alerting~Freshness catches stale tables; volume catches row-count drops/spikes; schema drift catches changed columns or types; distribution monitoring can surface anomalies. Route alerts with owner, impact and runbook context to avoid alert fatigue.~Create freshness, volume and schema checks on generated daily partitions and route only actionable failures to a mock alert.
Lightweight anomaly detection~Rolling averages and standard-deviation thresholds can detect simple changes. Rule-based, statistical and ML-based methods differ in complexity and explainability; use simple rules when sufficient.~Compare a fixed threshold and rolling baseline on a synthetic seasonal series with one injected anomaly.
Operational quality checks~Place checks after ingestion, after transformation or both depending on the failure and recovery boundary. Fail fast for invalid data that must not propagate; quarantine recoverable bad records. Connect Airflow check failures to real alert callbacks and track quality measures over time.~Build an Airflow-style validation path that quarantines malformed records, fails a critical contract violation, emits an alert and stores trend metrics.`,
    "Create a data-quality and observability report for a generated pipeline. Include contracts, Great Expectations or equivalent checks, lineage, freshness/volume/schema monitoring, anomaly examples, quarantine behavior and an actionable alert.",
    [
      source(
        "Great Expectations: documentation",
        "https://docs.greatexpectations.io/docs/",
      ),
      source(
        "OpenLineage: documentation",
        "https://openlineage.io/docs/",
      ),
    ],
    "Core",
    7,
    12,
  ),
  l(
    "de-cloud-infra",
    "Phase 7 · Cloud and infrastructure",
    "Package, deploy and operate data workloads with reproducible infrastructure, least privilege, safe delivery and cost awareness; choose one cloud rather than surveying every provider.",
    `Docker in depth~Multi-stage builds reduce production image size; layer caching speeds repeated builds. Volumes persist container data, while bind mounts connect host paths. Bridge networking enables container communication; Compose healthchecks, depends_on conditions and resource limits shape local stacks.~Build a multi-stage worker image, demonstrate a healthcheck and distinguish a named volume from a bind mount.
Kubernetes basics~Pods run containers; Deployments manage replicas; Services provide stable access; ConfigMaps and Secrets supply configuration. Jobs and CronJobs run finite or scheduled work; Namespaces isolate projects. Resource requests and limits affect placement and throttling. Practice kubectl get, describe, logs and exec with minikube or kind.~Deploy a small CronJob locally, inspect its logs and explain a deliberately too-low CPU limit.
Kubernetes for data workloads~Airflow's KubernetesExecutor runs tasks as pods; Spark-on-Kubernetes runs driver and executor pods. Persistent Volumes and Claims provide storage for stateful workloads. Horizontal Pod Autoscaler is a conceptual starting point for scaling replicas based on metrics.~Sketch the Airflow task-pod and Spark driver/executor resources, including storage and resource requests.
Terraform foundations~Providers connect Terraform to APIs; resources create managed objects and data sources read existing ones. State (.tfstate) tracks objects and should use remote storage and locking when shared. plan previews changes before apply; variables, outputs and modules support reuse. Detect drift by comparing configuration and real infrastructure.~Create a small local or sandbox plan, review its proposed changes before apply and explain remote state locking and drift.
One cloud end to end~Choose AWS or GCP. Learn S3/GCS buckets, lifecycle policies and storage classes; EC2/Cloud Run plus Lambda/Cloud Functions as a serverless option; IAM roles versus users and policies with least privilege and service accounts; VPCs, subnets, security groups/firewall rules; and managed RDS/Cloud SQL, MSK/Confluent Cloud, EMR/Dataproc services.~Draw a least-privilege architecture for a batch pipeline on one provider and identify each storage, compute, identity, network and managed-data boundary.
CI/CD for data pipelines~CI runs linting, unit tests, DAG validation and dbt tests on every pull request. CD builds, tests and deploys. GitHub Actions or GitLab CI organize workflows, jobs, steps and runners. Test DAGs in CI and use dbt build --select state:modified+ where supported. Stage and validate data before promotion.~Create a CI workflow for SQL/Python checks, DAG validation and changed dbt models; require staging validation before production promotion.
Secrets and configuration~Never hardcode credentials. Use environment variables for local configuration and cloud secrets managers or Vault for production secrets; inject secrets safely into containers/pods. Separate environment configuration without copying business logic.~Rotate a test credential, confirm logs and image layers do not contain it, and load distinct development and staging configuration.
Cost and operations~Read a cloud bill and identify storage, compute, network and idle-resource drivers. Right-size executors and pods; spot/preemptible instances can reduce costs for retryable non-critical batch workloads, but not every task is safe to interrupt.~Estimate costs for a small batch workload, show one right-sizing change and document which tasks could safely use interruptible compute.`,
    "Deploy a small, containerized pipeline to a local Kubernetes environment and define its Terraform plan for one chosen cloud provider. Include CI, secret-handling notes, a least-privilege diagram, cost estimate and rollback steps. Cloud accounts and paid resources are optional.",
    [
      source(
        "Docker: build and run an application",
        "https://docs.docker.com/get-started/",
      ),
      source(
        "Kubernetes: concepts",
        "https://kubernetes.io/docs/concepts/",
      ),
    ],
    "Core",
    9,
    14,
  ),
  l(
    "de-mlops",
    "Phase 8 · ML engineering and MLOps",
    "Connect reliable data engineering to reproducible model training and serving, while making feature correctness, model lifecycle and production feedback explicit.",
    `Feature engineering pipelines~Feature pipelines are data pipelines with an ML consumer. Batch and online/real-time feature computation differ in latency and freshness. Feature stores support reuse but must address training-serving skew and point-in-time correctness. Feast models entities and feature views over offline and online stores; point-in-time joins prevent future information leaking into training.~Build a point-in-time feature join and show how a future event would create leakage.
Model training pipelines~Structure training as extraction, features, train, evaluate and register steps. Reproducibility pins data, code and hyperparameters together. Grid/random search provide baselines; Bayesian optimization may be worth the extra complexity for expensive searches. Cross-validation should be represented in the pipeline, not hidden in an ad hoc notebook.~Build a versioned training DAG with a fixed data snapshot and compare a small grid search with one baseline.
Experiment tracking and registry~MLflow Tracking stores parameters, metrics and artifacts; its Model Registry supports lifecycle states such as staging, production and archived. Record metrics, hyperparameters, data version/hash and environment so a run can be compared and reproduced.~Log two training runs with data hashes and promote only the evaluated artifact through explicit registry stages.
Deployment patterns~Batch inference processes a scheduled dataset; online inference serves requests with tighter latency needs. Serve through FastAPI and a container when appropriate. Shadow and canary deployments compare or gradually expose a model before full rollout.~Deploy a local model endpoint and compare batch output with a shadow request path before routing traffic.
Monitoring and drift~Data drift changes input distributions; concept drift changes the relationship between inputs and outcomes. Monitor prediction distributions as well as uptime and latency. Retraining may be scheduled or triggered by drift, but requires a verified policy. Capture ground truth to evaluate real-world performance and avoid unsafe feedback loops.~Simulate a distribution shift, report prediction changes, then compare a scheduled retrain trigger with a ground-truth-confirmed trigger.
Integration back into DE~Airflow can orchestrate retrain, evaluate, register and deploy. Predictions can return to a gold-layer table in the medallion architecture. Version data, features, model and code as one reproducible unit.~Orchestrate a local train/evaluate/register flow and write versioned predictions to a gold table with lineage back to its feature and model versions.`,
    "Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.",
    [
      source(
        "MLflow: tracking",
        "https://mlflow.org/docs/latest/ml/tracking/",
      ),
      source(
        "Feast: feature store concepts",
        "https://docs.feast.dev/getting-started/concepts",
      ),
    ],
    "Core",
    8,
    14,
  ),
  l(
    "de-llm-genai",
    "Phase 9 · LLM and GenAI engineering",
    "Understand enough model architecture and evaluation to build grounded language-model systems that fit into a data platform, without treating a model response as proof of correctness.",
    `Deep learning foundations~Perceptrons, activation functions, backpropagation and gradient descent provide conceptual fluency without derivation-heavy mathematics. CNNs and RNNs address image and sequence tasks; transformers largely replaced RNNs for many sequence workloads. Batch size, learning rate, Adam/SGD, dropout and weight decay shape training.~Explain a forward pass and gradient update in a tiny network, then identify when a CNN, RNN or transformer is a reasonable architecture.
Transformer architecture~Self-attention is the core interaction mechanism. Encoder, decoder and encoder-decoder designs correspond broadly to BERT-, GPT- and T5-style tasks. Positional encoding and multi-head attention help represent order and multiple relation patterns; this vocabulary helps interpret model cards.~Trace input tokens through positional information and multi-head self-attention, and identify the model family in a model card.
LLM-specific skills~Pretraining, fine-tuning and instruction tuning change different parts of model behavior. LoRA/QLoRA adapt fewer parameters than full fine-tuning; prompting may be preferable when data, cost or maintenance do not justify training. Few-shot and structured-output prompts are practical tools. In-context learning uses examples in the prompt without changing model weights.~Compare a prompt-only baseline with a small structured-output and few-shot evaluation; explain when adaptation would be justified.
Evaluation and responsible AI~Benchmark suites, LLM-as-judge and human evaluation measure different properties; plausible prose is not evaluation. Hallucination can be mitigated with grounded retrieval and calibrated uncertainty signals, but not eliminated by a single prompt. Discuss bias and safety at a practical level and set clear product limits.~Create a small golden set, score grounded answers and unsupported questions, and review failures with a human rubric.
LLM and RAG stack~Embeddings map text to vectors; cosine similarity and dot product rank candidates. pgvector, Qdrant and Weaviate are vector-storage options. Fixed-size, semantic and overlapping chunks have different context trade-offs. Dense, hybrid dense+BM25 and reranked retrieval are alternatives. A RAG pipeline ingests, chunks, embeds, stores, retrieves and generates; evaluate recall@k separately from answer quality.~Build a local RAG baseline and compare retrieval recall@k with grounded answer quality on the same held-out questions.
Agents, lighter touch~Tools use function calling to invoke bounded actions. A single agent with tools differs from multi-agent handoff in complexity and coordination. Identify practical DE/AI uses before adopting agents; LangChain/LangGraph are options, as is a lean custom workflow.~Add one read-only data-quality tool to a bounded assistant, require approval for changes and explain why a simple workflow may be safer than a multi-agent system.`,
    "Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.",
    [
      source(
        "Hugging Face: LLM course",
        "https://huggingface.co/learn/llm-course/chapter1/1",
      ),
      source(
        "OWASP: Top 10 for LLM applications",
        "https://genai.owasp.org/llm-top-10/",
      ),
    ],
    "Core",
    9,
    14,
  ),
  l(
    "de-system-design-interviews",
    "Phase 10 · System design and interview preparation",
    "Use the earlier phases and your own projects to communicate architecture trade-offs, solve practical data-engineering exercises and prepare for DE or AI engineering interviews.",
    `System design framework~Clarify requirements, estimate scale, sketch a high-level design, deep-dive into the critical path and explain trade-offs. Batch and streaming choices depend on throughput, latency and correctness; push back on requirements when the constraints conflict. Practice back-of-envelope data-volume estimates aloud.~Estimate daily event volume and storage for a CDC service, state assumptions, and revise the design when latency requirements change.
Case studies~Practice a CDC path from Postgres through Kafka into a lake; a real-time analytics dashboard; a domain data warehouse; a feature store/ML pipeline; a data-quality and observability service; and multi-source ingestion into a medallion architecture.~Draw one end-to-end design and include failure recovery, idempotency, ownership and measurable acceptance criteria.
Trade-off articulation~CAP theorem is a practical vocabulary for consistency and availability under partitions, not a universal product label. Discuss cost, performance and complexity; managed service versus custom build; and resolve “it depends” by naming the workload and decision criteria.~Compare managed Kafka with a self-managed cluster for a stated team size, throughput, availability target and budget.
SQL interview fluency~Use window functions, CTEs and complex joins under time pressure. Explain query optimization by identifying scans, cardinality and indexes or layout; practice through StrataScratch, DataLemur or LeetCode database exercises.~Solve a window-function query from a small fixture and explain why an intentionally slow version scans too much data.
Python interview fluency~Manipulate records without relying on pandas, refresh OOP in interview language and write readable code on a shared document or whiteboard without autocomplete.~Implement a streaming aggregation with standard Python, tests and clear handling for empty and malformed input.
Pipeline design coding~Practice implementing a simple ETL script, answering idempotency and error-handling questions, and completing documented take-home-style exercises end to end.~Build a small restartable ETL function with validation, retry-safe writes, tests and a concise README.
Behavioral preparation~Prepare STAR stories for three or four strong projects: production failure, a design decision you would change and learning quickly. Explain why decisions were made, not only what you built, and prepare thoughtful questions for interviewers.~Write three project stories with situation, task, action, result and one reflection; support each with evidence from the project.
Mock interviews~Practice with a peer, mentor or recorded self-explanation across SQL, live coding, system design and behavioral formats. Run a specific retrospective after each mock for fumbles, over-explaining and missed clarification questions.~Record a short mock design, score it with a rubric and turn the two largest gaps into follow-up exercises.
Company and role-specific preparation~Research target-company technology stacks from job postings and engineering blogs; map current skills to role expectations and flag gaps early. Tailor project explanations to DE depth or AI/RAG depth without overstating experience.~Choose a real role description, map evidence-backed skills to requirements, and prepare two versions of a project walkthrough.`,
    "Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.",
    [
      source(
        "System Design Primer",
        "https://github.com/donnemartin/system-design-primer",
      ),
      source(
        "DataLemur: SQL interview questions",
        "https://datalemur.com/questions",
      ),
    ],
    "Core",
    8,
    12,
  ),
];

const domain = d(
  "data-engineering-ai",
  "Data Engineering + AI",
  "A distinct 10-phase roadmap: the data engineering backbone, AI/ML and LLM engineering, and a capstone for system design and interviews. It assumes SQL, Python, medallion warehousing, FastAPI and introductory Airflow are already familiar.",
  lessons.map((lesson, index) => m(`Phase ${index + 1}`, [lesson])),
  ["backend-sql", "python-values", "data-pandas"],
)[0];

domain.description +=
  " Phases 1–7 build the DE backbone; Phases 8–9 can run alongside Phases 5–7 once the foundation is comfortable. Start Phase 10 after Phase 4 and keep it active throughout the rest of the roadmap. The two-year framing is a pace estimate, not a calendar schedule.";

const phase1 = domain.modules[0].lessons[0];
phase1.prerequisites = ["backend-sql", "python-values", "data-pandas"];
domain.modules[1].lessons[0].prerequisites = [phase1.id];
domain.modules[2].lessons[0].prerequisites = [
  phase1.id,
  domain.modules[1].lessons[0].id,
];
domain.modules[3].lessons[0].prerequisites = [
  domain.modules[2].lessons[0].id,
];
domain.modules[4].lessons[0].prerequisites = [
  domain.modules[3].lessons[0].id,
];
domain.modules[5].lessons[0].prerequisites = [
  domain.modules[4].lessons[0].id,
];
domain.modules[6].lessons[0].prerequisites = [
  domain.modules[5].lessons[0].id,
];
domain.modules[7].lessons[0].prerequisites = [
  domain.modules[3].lessons[0].id,
];
domain.modules[8].lessons[0].prerequisites = [
  domain.modules[7].lessons[0].id,
];
domain.modules[9].lessons[0].prerequisites = [
  domain.modules[3].lessons[0].id,
];

export const dataEngineering = [domain];
