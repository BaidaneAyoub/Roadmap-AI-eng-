// Scientific-first curriculum. Existing lesson and concept identities are never renamed.
export const routeLevels = ['Foundation', 'Essential', 'Specialization'];
export const routeOrder = ['python','engineering','math-data','ml','dl','llm','backend','rag','eval-security','agents','coding-agents','deployment','product','data-engineering','ai-data'];
export const routeVideoKeys = {};
const definitions = [];
function add(id, domain, base, title, keys, lab, lines, source) {
  definitions.push({id,domain,base,title,keys,lab,lines,source});
  routeVideoKeys[id]=keys;
}

add('python-mutation-scope','python','python-control','Mutability, copying, scope and function contracts',['py0','py2'],
  'Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.',`
Object identity~Two names may reference one mutable object; assignment does not copy its contents.~Assign b=a for a list, append through b and compare a with a copied list.~Assuming assignment produces an independent list.~Which names see the appended element?
Shallow versus deep copy~A shallow copy creates an outer container but preserves references to nested objects.~Copy a list of dictionaries and change a nested tag list.~Assuming list.copy also copies nested dictionaries.~Which copy operation isolates nested edits?
Mutable defaults~Default argument objects are created at function definition time and may survive multiple calls.~Compare a default list parameter with a None sentinel that constructs a fresh list.~Reusing a default list as if it were new per call.~Why does the second call contain the first call's result?
Local scope and closures~Name lookup follows lexical scope; rebinding differs from mutating an existing object.~Return two counter closures and inspect whether their captured state is independent.~Confusing local rebinding with changing an outer variable.~Where is the counter state stored?
Pure function contracts~A pure transformation returns results without changing its inputs, simplifying testing and reuse.~Normalize a record while asserting the original dictionary is unchanged.~Mutating a caller's object without documenting the side effect.~What invariant should hold for the input after a call?
`, 'https://docs.python.org/3/tutorial/classes.html');

add('math-bayes-likelihood','math-data','math-probability','Bayes, likelihood and decision uncertainty',['statistics'],
  'Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.',`
Conditional probability~P(A given B) restricts the denominator to cases where B occurred.~Use 1000 fictional cases with 10 positives and calculate precision from the confusion table.~Swapping P(test positive given disease) with P(disease given test positive).~Which denominator changes when conditioning?
Bayes rule~A posterior combines the prior with a likelihood and normalizes over competing explanations.~Compare a detector at 1 percent and 20 percent prevalence with unchanged sensitivity.~Ignoring the base rate when interpreting a positive result.~Why can most positive results be false at low prevalence?
Likelihood versus probability~Likelihood evaluates parameter choices against fixed observed data; it is not a probability distribution over parameters by itself.~Compare the likelihood of eight heads in ten tosses under p=.5 and p=.8.~Treating a likelihood value as a normalized posterior.~What extra information creates a posterior?
Expectation and variance~Expectation averages outcomes weighted by probability; variance measures spread around that mean.~Compute the mean and variance of a three-outcome discrete variable.~Using an unweighted mean for outcomes with unequal probabilities.~How does changing a rare large outcome affect variance?
Decision costs~A decision threshold depends on false-positive and false-negative consequences, not just the largest predicted probability.~Compare expected costs of reviewing or accepting a fictional alert.~Choosing a threshold without stating the error costs.~Which decision minimizes expected cost in your example?
`, 'https://seeing-theory.brown.edu/bayesian-inference/index.html');

add('math-information','math-data','math-probability','Entropy, cross-entropy and KL divergence',['crossentropy','softmax'],
  'Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.',`
Surprisal~Negative log probability measures how surprising an observed outcome is under a distribution.~Compare -log(.9) and -log(.01) for the correct class.~Interpreting a smaller probability as a smaller penalty.~Which prediction receives the larger surprise?
Entropy~Entropy is expected surprisal under the true distribution and measures uncertainty.~Compare [0.5,0.5] with [0.99,0.01] using the same logarithm base.~Comparing entropy values computed with different log bases without converting units.~Which distribution has higher uncertainty?
Cross-entropy~Cross-entropy measures expected log loss when q models outcomes drawn from p.~Compute loss for a one-hot class target and predicted probabilities.~Passing probabilities to an API that expects unnormalized logits.~What does your chosen loss function expect as input?
KL divergence~KL compares distributions directionally and is zero when they match on their support.~Compute both KL(p||q) and KL(q||p) for unequal binary distributions.~Assuming KL is a symmetric distance.~Why do the two directions differ?
Numerical stability~Log-sum-exp computes normalization without exponentiating very large logits directly.~Subtract the maximum from logits [1000,1001] before exponentiation.~Adding arbitrary epsilon without understanding how it changes the objective.~Can you obtain a finite normalized result for large logits?
`, 'https://d2l.ai/chapter_preliminaries/information-theory.html');

add('math-jacobians','math-data','math-calculus','Partial derivatives, Jacobians and vector gradients',['chain','gradient'],
  'Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.',`
Partial derivatives~A partial derivative changes one input while holding the others fixed.~For f(x,y)=x*y+x*x evaluate both partial derivatives at (2,3).~Changing both coordinates when estimating a partial derivative.~Which variable must remain fixed?
Gradient direction~The gradient points toward fastest local increase under the Euclidean norm.~Take a small negative-gradient step on x squared plus four y squared.~Treating the gradient as the parameter update without the negative sign.~Does your trial step lower the loss?
Jacobian shape~A Jacobian has one row per output and one column per input under the stated convention.~Write the 2 by 2 Jacobian for (x*y,x+y).~Dropping output dimensions when differentiating a vector-valued function.~What are the axes of your Jacobian?
Chain rule composition~The derivative of composed maps combines their local derivatives in the correct order.~Compose a linear map with a sigmoid and compare the matrix product with autograd.~Multiplying derivative matrices in a dimensionally invalid order.~Which intermediate shape determines the product order?
Vector-Jacobian products~Reverse-mode differentiation propagates an output-weighted gradient without materializing the full Jacobian.~Differentiate a weighted sum of two outputs and compare with a manual product.~Assuming backward always returns a full Jacobian.~Which scalar objective does your backward call differentiate?
`, 'https://docs.pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html');

add('data-inference-causality','math-data','data-statistics-validation','Confidence intervals, bootstrap and causal limits',['statistics','data'],
  'Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.',`
Sampling unit~Independent sampling units determine the meaning of uncertainty estimates.~Group repeated sessions by fictional user before splitting and resampling.~Treating many sessions from one user as independent people.~Which unit should be resampled here?
Standard error~The standard error describes variability of an estimator across samples, not variability of individual observations.~Compare sample standard deviation with estimated standard error of the mean.~Using standard deviation as the uncertainty of the mean.~What changes when sample size quadruples?
Bootstrap~Resampling observed units approximates the sampling distribution under assumptions about representativeness.~Draw 1000 seeded bootstrap samples of 80 users and form a percentile interval.~Bootstrapping rows when the experimental unit is a group.~What assumptions can this interval not repair?
Confidence interpretation~A confidence procedure has long-run coverage under its assumptions; an individual fixed interval is not a probability distribution over a fixed parameter.~Compare coverage over 200 simulated datasets with a known mean.~Claiming 95 percent of observations lie in a mean confidence interval.~What population quantity does this interval estimate?
Confounding~A shared cause can produce an association without a causal effect.~Generate different device mixes across groups and compare pooled and stratified means.~Calling an observational correlation a causal treatment effect.~What randomization or additional assumptions would support a causal claim?
`, 'https://seeing-theory.brown.edu/frequentist-inference/index.html');

add('ml-knn-distance','ml','ml-neighbors','kNN, distance weighting and dimensionality',['knn'],
  'Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.',`
Distance metrics~Euclidean and Manhattan distance encode different notions of proximity.~Compare nearest neighbors before and after multiplying one feature by 100.~Ignoring measurement units before computing distance.~Which feature dominates your unscaled distances?
Choosing k~Small k follows local details while large k smooths decisions and can erase minority regions.~Plot validation error across odd k values on one fixed split.~Choosing k from final test performance.~Which split should decide k?
Weighted voting~Distance weighting makes nearby neighbors contribute more strongly than distant ones.~Handle an exact training-point match separately from inverse-distance voting.~Dividing by zero for identical points.~What should happen when a zero-distance neighbor exists?
Curse of dimensionality~Distances can become less discriminative as irrelevant dimensions accumulate.~Add 50 noise features and compare neighbor rankings and error.~Assuming more features always improve a distance-based model.~How does distance contrast change with noise dimensions?
Inference cost~Brute-force neighbor search stores training examples and compares them at inference time.~Measure query latency at three reference-set sizes.~Treating fast fitting as proof of fast prediction.~What grows when the reference set doubles?
`, 'https://scikit-learn.org/stable/modules/neighbors.html');

add('ml-pca-reconstruction','ml','ml-neighbors','PCA, explained variance and reconstruction',['pca','algebra'],
  'Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.',`
Centering~PCA identifies directions of variation around the training mean.~Subtract the training mean from both training and test rows.~Refitting centering on the test set.~Which mean should inference reuse?
Principal components~Orthogonal directions maximize successively remaining variance.~Rotate a correlated 2D cloud into its component coordinates.~Interpreting components as original input features.~How is one component expressed in the original features?
Explained variance~Variance ratios quantify retained training variation, not downstream predictive accuracy.~Compare two components retaining 95 percent variance with classification results.~Equating high retained variance with useful class information.~Could a low-variance direction carry the label?
Reconstruction~Projection followed by inverse transformation gives a low-rank approximation.~Plot the held-out squared reconstruction error at ranks one and two.~Comparing reconstruction errors under incompatible feature scaling.~What baseline is needed to interpret the error?
Leakage and pipelines~PCA must be fitted inside the training fold during model selection.~Place scaling and PCA inside a cross-validation pipeline.~Fitting PCA on all rows before cross-validation.~What information leaks from validation rows?
`, 'https://scikit-learn.org/stable/modules/decomposition.html#pca');

add('ml-boosting-objectives','ml','ml-trees','Decision trees, bagging and boosting mechanisms',['trees','forest','boost'],
  'Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.',`
Split criteria~A tree chooses a partition that reduces an impurity or regression-error objective.~Compute Gini impurity before and after a small binary split.~Selecting a split from test labels.~Which rows are allowed to determine the split?
Tree depth~Deeper trees can represent finer interactions but fit noise more easily.~Compare training and validation errors for depths 1, 3 and unrestricted.~Calling perfect training accuracy sufficient validation.~Which curve reveals overfitting?
Bagging~Bootstrap aggregation averages models fitted on resampled training sets to reduce instability.~Train several small trees on bootstrap samples and average predictions.~Confusing bootstrap training samples with a held-out test set.~Why can averaging unstable estimators help?
Boosting~Sequential learners correct errors under a chosen objective rather than training independently.~Fit a weak regression tree to residuals of an initial mean predictor.~Assuming boosting is identical to independently averaging trees.~What target does the second learner fit?
Learning-rate tradeoff~Smaller boosting steps usually require more trees and still need validation.~Compare learning-rate and estimator-count pairs under one compute budget.~Increasing estimators indefinitely without monitoring validation loss.~When should the boosting sequence stop?
`, 'https://scikit-learn.org/stable/modules/ensemble.html');

add('llm-model-provenance','llm','llm-model-selection','Model cards, licences and reproducible model selection',['ollama','llmFull'],
  'Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.',`
Model identity~A model name alone does not identify the exact weights, tokenizer or revision used.~Record repository, revision and tokenizer revision in a local manifest.~Comparing runs from changing latest revisions as if they were identical.~What must be pinned to reproduce a run?
Model cards~A card describes intended use, training information and known limits but does not replace your own evaluation.~Extract supported tasks and limitations into a comparison table.~Treating a benchmark claim as proof of performance on your users' data.~Which task-specific checks remain necessary?
Licence review~Weight, code and dataset licences may impose different conditions and should be recorded separately.~List each relevant licence link without assuming open weights means unrestricted use.~Equating downloadable weights with unrestricted redistribution.~Which artifact's licence covers the weights?
Trusted loading~Model packages can contain executable code or unsafe serialization formats.~Prefer supported tensor formats and inspect any request to execute remote code.~Enabling remote code execution simply to make loading succeed.~What code is being trusted during loading?
Selection evidence~Quality, latency, memory and deployment constraints jointly determine suitability.~Compare two models on the same 20 tasks and hardware or explicitly mark an unmeasured cell.~Inventing latency or quality numbers from documentation alone.~Which scorecard cells are measured versus estimated?
`, 'https://huggingface.co/docs/hub/model-cards');

add('llm-stream-contracts','llm','llm-tools','Structured output, streaming and cancellation contracts',['api','llmFull'],
  'Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.',`
Schema enforcement~Syntactically valid JSON may still violate your application schema.~Reject a response with a string price where a numeric field is required.~Treating successful JSON parsing as full validation.~Which constraints must the schema enforce?
Partial streams~Chunks may split tokens, Unicode sequences or JSON structures before a complete response exists.~Split a JSON string at every position and reconstruct before validating.~Parsing each arbitrary chunk as a complete object.~When is a response complete enough to validate?
Cancellation~A user cancellation must propagate to pending work and prevent stale updates.~Cancel a delayed local stream and verify later chunks do not overwrite the UI.~Hiding the UI while leaving expensive work running.~Which task and resource should cancellation close?
Repair bounds~Retries or schema-repair calls must have a finite budget and preserve original evidence.~Allow one deterministic repair attempt, then surface a validation failure.~Retrying forever until a valid-looking response appears.~What should the user see when repair fails?
Output trust~Generated strings remain untrusted when passed into HTML, SQL, shell commands or tools.~Render a generated script tag as text and reject a proposed shell operation.~Executing generated content merely because it matched a schema.~Which downstream boundary still needs validation?
`, 'https://docs.pydantic.dev/latest/concepts/json/');

add('rag-parsing-ocr','rag','rag-ingestion','Document parsing, OCR limits and source provenance',['rag','data'],
  'Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.',`
Extraction versus interpretation~Parsing extracts representations while OCR estimates text from pixels; neither guarantees correct meaning.~Compare text extracted from a digital page with a deliberately corrupted OCR fixture.~Treating extracted text as an authoritative transcription.~Which extraction errors could change an answer?
Reading order~Columns, headers and tables can be flattened into misleading token sequences.~Reconstruct a two-column fixture and retain section boundaries.~Joining unrelated columns into one paragraph.~How do you verify reading order?
Table semantics~Cells require row and column context to remain meaningful.~Serialize a price table with headers repeated in each row record.~Embedding isolated values without their headers.~Which metadata makes a price interpretable?
Provenance~Stable source IDs, offsets and version hashes let answers be traced back after ingestion.~Store source ID, page, extraction version and content hash per chunk.~Overwriting source identity when filenames change.~How can a citation locate the original evidence?
Extraction quality~Missing text and low-confidence spans need warnings or rejection before retrieval.~Seed five unreadable spans and test the ingestion rejection report.~Silently indexing empty or badly corrupted documents.~What quality check stops a bad document entering the index?
`, 'https://pymupdf.readthedocs.io/en/latest/recipes-text.html');

add('security-output-supply','eval-security','security-threat-boundaries','Output handling, model supply chains and resource limits',['injection','evaluation'],
  'Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.',`
Supply-chain provenance~Downloaded models, plugins and dependencies are separate trust decisions from a model's textual answers.~Record origin and revision for every executable dependency in a toy manifest.~Trusting an artifact solely because its name resembles a popular package.~How do you verify the exact artifact identity?
Unsafe output handling~Generated text must not become executable HTML, SQL or shell syntax without a trusted boundary.~Test a response containing an HTML handler and a proposed SQL write.~Assuming a system prompt prevents downstream injection.~Which operation enforces the boundary outside the model?
Retrieval poisoning~An attacker-controlled document can manipulate retrieval or introduce misleading evidence.~Insert a conflicting source into a fixture corpus and trace its influence.~Treating a retrieved passage as trusted because similarity is high.~What provenance or access check should accompany retrieval?
Unbounded consumption~Token, payload, time and tool-call budgets limit denial-of-service and accidental loops.~Reject an oversized input and stop a workflow after five tool calls.~Relying only on a model instruction to stop looping.~Where is the hard limit enforced?
Failure containment~A rejected or failed action should not leave partial writes or hidden side effects.~Fail a multi-step local operation after validation and inspect stored state.~Returning an error while leaving an unauthorized write committed.~What evidence proves the action had no side effect?
`, 'https://genai.owasp.org/llm-top-10/');

add('agents-mcp-versioning','agents','agents-mcp','MCP versions, discovery and authorization boundaries',['mcp','injection'],
  'Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.',`
Version pinning~Protocol examples must match a specific specification and SDK version; older tutorials may describe a different lifecycle.~Record the official 2026-07-28 specification and the installed SDK's advertised support.~Combining initialization examples from incompatible protocol versions.~Which version does each endpoint implement?
Capability discovery~The current specification describes server/discover and per-request metadata; implementations must be checked against their supported version.~Create discovery request and response fixtures with advertised tool capabilities.~Assuming a tutorial's session handshake applies to every version.~How does your chosen version advertise capabilities?
Transport boundaries~Local stdio and remote Streamable HTTP have different process and network trust boundaries.~Document a local child process versus an HTTP service boundary.~Exposing a local-only tool remotely without re-evaluating permissions.~What additional boundary appears with a remote endpoint?
Authorization~A discovered tool schema is not permission to call it; trusted authorization remains necessary.~Reject a read request for another user's document before invoking the tool.~Treating model selection of a tool as user authorization.~Where is the caller's access checked?
Compatibility failures~Unsupported versions and capabilities should fail explicitly rather than silently changing semantics.~Return a documented failure for an unsupported request version in a stub.~Silently accepting a request with unknown capability assumptions.~What diagnostic tells the client how to recover?
`, 'https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture');

add('deployment-backup-restore','deployment','docker-compose','Backup, restore and data recovery drills',['incident','sre'],
  'Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.',`
Recovery point objective~RPO describes the tolerated loss window, not the time needed to restart a process.~Compare hourly and daily backups against a two-hour loss tolerance.~Confusing recovery point with recovery time.~How much data could the schedule lose?
Recovery time objective~RTO bounds acceptable restoration duration including validation.~Time a restore into a clean local database and run a query smoke test.~Timing only file copying and excluding verification.~When is recovery actually complete?
Consistent backups~A backup must represent a recoverable database state rather than an arbitrary copy during writes.~Use the database backup mechanism and compare with a naive live file copy.~Assuming every copied data directory is transactionally consistent.~Which method guarantees a consistent snapshot?
Restore verification~A backup is useful only if it can be restored and checked.~Verify expected rows, constraints and application queries after restoration.~Calling an uploaded archive a tested backup.~Which checks prove restored data is usable?
Retention and access~Backup retention and permissions should match data sensitivity and recovery needs.~Keep two disposable generations and restrict access to the test backup folder.~Making backups readable to everyone because they are offline.~Who can read or delete the recovery artifacts?
`, 'https://www.postgresql.org/docs/current/backup.html');

add('dl-distributed-training','dl','dl-training-loop','Distributed training: ranks, synchronization and effective batches',['dlFull','mixed'],
  'Simulate two workers on CPU, split a fixed batch and compare averaged gradients with one-worker training. Explain synchronization, effective batch size and checkpoint ownership; no multi-GPU hardware is required.',`
Data parallelism~Each worker holds a model copy and processes a different shard before gradients are combined.~Split eight samples into two four-sample shards and compare averaged gradients.~Summing mean gradients without accounting for different shard sizes.~Which weighting reproduces the full-batch gradient?
Ranks and world size~Ranks identify workers and world size counts participating processes.~Label two CPU worker fixtures as ranks zero and one.~Treating rank zero as the only worker that should train.~Which tasks should only rank zero perform?
Gradient synchronization~Workers must agree on parameter updates to keep replicated models consistent.~Average two gradient vectors and apply the same update to both model copies.~Updating each model independently and expecting identical weights.~Where does synchronization occur relative to the optimizer step?
Effective batch size~Per-worker batch size, worker count and accumulation determine samples per update.~Compute 4 samples times 2 workers times 3 accumulation steps.~Comparing runs with different effective batches without noting the change.~How many samples contribute to one update?
Distributed failure modes~A missing worker or inconsistent collective order can stall training.~Model a timed-out worker in a deterministic coordinator simulation.~Waiting forever for a failed participant.~What timeout and checkpoint policy permits recovery?
`, 'https://docs.pytorch.org/tutorials/intermediate/ddp_tutorial.html');

add('dl-kernel-profiling','dl','dl-profiling-deployment','Profiling, memory bandwidth and kernel optimization decisions',['mixed','dlFull'],
  'Profile a small tensor pipeline on CPU, identify repeated allocation and Python-loop overhead, then compare vectorized results. Explain when a GPU or custom kernel would be justified without claiming unmeasured speedups.',`
Measurement boundaries~Warmup, synchronization and repeated trials affect valid performance measurements.~Measure median runtime after warmup and separate setup from repeated inference.~Timing asynchronous launch rather than completed GPU work.~What operation marks measurement completion?
Compute versus memory~A workload may be limited by arithmetic throughput or by moving data.~Compare a matrix multiplication with repeated elementwise copies.~Assuming a faster arithmetic device fixes all bottlenecks.~Which resource dominates your example?
Allocation and layout~Temporary tensors and noncontiguous access can increase memory traffic.~Compare a repeated allocation loop with a reusable contiguous buffer.~Changing layout without checking output equivalence.~How do you verify correctness after optimization?
Fusion intuition~Combining elementwise operations may reduce intermediate memory traffic.~Count intermediate arrays in separate versus combined expressions.~Assuming fewer source-code lines guarantee a fused kernel.~What evidence demonstrates actual fusion?
Optimization threshold~Custom kernels create maintenance and correctness costs that require measured justification.~Write an ADR comparing a simple library operation with a proposed custom kernel.~Writing custom GPU code before profiling the end-to-end application.~Which bottleneck and expected benefit justify the complexity?
`, 'https://docs.pytorch.org/tutorials/recipes/recipes/profiler_recipe.html');

add('rag-ann-indexes','rag','rag-embeddings','Approximate nearest neighbors and index tradeoffs',['embedding','rag'],
  'Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.',`
Exact search baseline~A brute-force reference is needed to measure approximation error.~Compute every cosine score for twenty fixed queries.~Evaluating an approximate index without known nearest neighbors.~What is your ground truth for recall?
Candidate search~Approximate methods reduce search work by exploring a subset of candidates.~Search a fixed subset and compare top-five results with exhaustive scoring.~Assuming faster search preserves all relevant neighbors.~How much recall is lost at this candidate budget?
Index parameters~Construction and query parameters trade memory, build time and query recall.~Record settings beside measurements rather than comparing unnamed defaults.~Comparing indexes on different hardware or different vectors.~Which variables must remain fixed?
Filtering~Filtering before versus after candidate retrieval can change recall and permission guarantees.~Query a small authorized subset and compare prefilter with postfilter behavior.~Returning unauthorized candidates and hiding them only in the UI.~At which boundary are access constraints enforced?
Updates and freshness~Deletion and replacement semantics determine whether stale records remain retrievable.~Delete ten source IDs and verify none appear after an index update.~Assuming a source-file deletion automatically removes indexed vectors.~How is deletion propagated to the index?
`, 'https://github.com/facebookresearch/faiss/wiki');

add('rag-graph-grounding','rag','rag-sql-graphs','Graph-grounded retrieval and GraphRAG limits',['rag','embedding'],
  'Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.',`
Entity resolution~Different names may refer to one entity while identical names may refer to different entities.~Resolve two aliases using explicit source metadata and preserve an ambiguous name.~Merging entities solely because their strings match.~What evidence supports an entity merge?
Typed edges~Relations need direction, type and provenance to support meaningful traversal.~Store prerequisite-of and related-to as separate edge types.~Treating every relationship as interchangeable similarity.~Which edge type can justify the requested inference?
Multi-hop retrieval~Following several edges can expose connected evidence but compounds extraction mistakes.~Trace a two-edge path and show the source for each edge.~Claiming a path proves a causal relationship.~What exactly does each edge establish?
Extraction confidence~Model-extracted relations are hypotheses until supported and checked.~Mark an unsupported extracted edge and exclude it from an evidence answer.~Presenting generated graph edges as verified facts.~How do you represent uncertain edges?
Graph value test~A graph is justified when it improves a measured task compared with simpler retrieval.~Compare answers on ten relational and ten direct-lookup questions.~Adding a graph because it is fashionable without a baseline.~On which query slice does the graph help?
`, 'https://microsoft.github.io/graphrag/');

add('llm-preference-evaluation','llm','llm-lora-objectives','Preference data, DPO and post-training evaluation',['mitPostTraining','llmFull'],
  'Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.',`
Preference pairs~A chosen and rejected response encode a relative judgment for a specific prompt and rubric.~Write two responses differing in factual support while keeping style comparable.~Assuming longer responses are automatically preferred.~Which criterion explains the preference label?
Label quality~Ambiguous or inconsistent pairs can teach undesired shortcuts.~Blind-review five conflicting pairs and record disagreements.~Forcing a label when reviewers disagree without a rubric.~Which pairs should be revised or excluded?
Reference policy~Preference objectives may compare a trained policy with a reference to constrain changes.~Compare chosen/rejected log-probability ratios for two toy policies.~Ignoring the reference term when interpreting a DPO-style objective.~What behavior does the reference constrain?
Overoptimization~Improvement on a preference proxy can worsen real task performance.~Construct a pairwise judge that rewards verbosity and inspect its failure cases.~Treating preference-win rate as complete evidence of quality.~What independent checks catch reward shortcuts?
Holdout evaluation~Post-training requires untouched tasks, contamination checks and capability regressions.~Evaluate a candidate on factuality, format and refusal fixtures not used in training.~Reusing preference-training prompts as the final benchmark.~Which cases were withheld from optimization?
`, 'https://huggingface.co/docs/trl/dpo_trainer');

add('llm-multimodal-contracts','llm','llm-tools','Multimodal input contracts and uncertainty',['mitVision','mitSequence'],
  'Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.',`
Modality preprocessing~Images, audio and text need different preprocessing contracts before a model consumes them.~Record image dimensions, color channels and normalization alongside a caption.~Passing arbitrarily resized inputs without recording the transformation.~Which preprocessing choices affect interpretation?
Alignment~Cross-modal inputs must refer to the same example and compatible time or spatial units.~Pair a generated image with a caption using a stable example ID.~Joining audio and captions by list position after filtering one list.~Which key prevents misaligned pairs?
Budget accounting~Image patches and audio duration can consume context or compute differently from text.~Set explicit image dimensions and duration limits in a request validator.~Applying a text-character limit as the only multimodal resource bound.~What limit controls each modality?
Grounding limits~A generated description may claim details not visible in the input.~Flag a fixture caption claiming a hidden object that the image does not contain.~Treating fluent visual descriptions as evidence of visibility.~What source supports each claimed observation?
Evaluation slices~OCR, object descriptions and temporal audio tasks require different acceptance tests.~Separate count, transcription and spatial-relation fixtures.~Using one overall score without task-specific slices.~Which failure slice matters for your user task?
`, 'https://huggingface.co/docs/transformers/tasks/image_text_to_text');

const specialized = new Set(['dl-efficiency','dl-causal-convolutions','dl-representation-learning','dl-autoencoders-vae','dl-gan-diffusion','dl-vision-tasks','dl-audio-multimodal','dl-reinforcement-basics','dl-profiling-deployment','llm-finetuning','llm-lora-objectives','llm-kv-cache-serving','rag-sql-graphs','rag-hybrid-reranking','agents-recovery','deployment-scaling','backend-stores','dl-distributed-training','dl-kernel-profiling','rag-ann-indexes','rag-graph-grounding','llm-preference-evaluation']);
const foundationDomains = new Set(routeOrder.slice(0,5));
export function levelFor(lesson) { return specialized.has(lesson.id) || lesson.priority==='Advanced' ? 'Specialization' : foundationDomains.has(lesson.domainId) ? 'Foundation' : 'Essential'; }

const checkpoints = {
  python: ['Python reliability checkpoint','Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.'],
  engineering: ['Engineering handoff checkpoint','Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.'],
  'math-data': ['Mathematics and data checkpoint','Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.'],
  ml: ['Machine learning checkpoint','Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.'],
  dl: ['Foundation capstone: classical versus neural models','Use bundled digits to compare a dummy baseline, logistic regression, a tree model and a small PyTorch network on identical splits. Explain gradients, loss, optimizer and tensor shapes. Save artifacts, reproduce inference, report errors and CPU latency, and document limitations.'],
  llm: ['Model integration checkpoint','Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.'],
  backend: ['Backend and data checkpoint','Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.'],
  'data-engineering': ['Data engineering checkpoint','Run a local CDC-to-lakehouse pipeline from disposable PostgreSQL through Kafka into bronze, silver and gold tables. Demonstrate an idempotent replay, a schema change, a failing quality check with quarantine, lineage evidence and a Terraform plan for one provider.'],
  'ai-data': ['AI + data capstone','Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.'],
  rag: ['Grounded retrieval checkpoint','Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.'],
  'eval-security': ['Evaluation and security checkpoint','Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.'],
  agents: ['Bounded tools checkpoint','Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.'],
  'coding-agents': ['Coding-agent verification checkpoint','Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.'],
  deployment: ['Operations checkpoint','Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.'],
  product: ['Application capstone: evidence-grounded AI service','Deliver the local assistant with source citations, validated API, permissions, quality and security evaluation, and Docker startup. Include user-task feedback, requirements, architecture, API contract, measured results, limitations and an operational runbook.'],
};

const mistakes = [
  [/split|validation|leakage|fold/i,'Allowing held-out observations to influence fitting or model selection.'],
  [/shape|tensor|broadcast|matrix|axis|dimension/i,'Accepting a numerically valid operation without checking what each axis represents.'],
  [/gradient|derivative|backprop|jacobian/i,'Comparing derivatives at different inputs or forgetting which scalar objective is differentiated.'],
  [/probab|bayes|distribution|likelihood|entropy/i,'Confusing conditional probabilities or treating unnormalized scores as probabilities.'],
  [/loss|logit|softmax|cross.entropy/i,'Passing probabilities to a loss that expects logits, or using targets with the wrong shape.'],
  [/metric|accuracy|calibr|threshold|precision|recall/i,'Reporting one aggregate number without the denominator, baseline or failure cases.'],
  [/cache|memory|state|persist|checkpoint/i,'Reusing stale state without checking its identity, scope and version.'],
  [/permission|auth|secret|security|sandbox|injection/i,'Trusting model output or client claims instead of enforcing the boundary in trusted code.'],
  [/retriev|chunk|citation|embedding|source/i,'Treating a retrieved match as supported evidence without checking provenance and access.'],
  [/async|retry|timeout|queue|concurr/i,'Leaving retries or concurrent work unbounded and ignoring cancellation or duplicate effects.'],
];

export function deepenDomains(input) {
  const domains=structuredClone(input);
  const existing=domains.flatMap(d=>d.modules.flatMap(m=>m.lessons));
  for(const def of definitions) {
    const base=existing.find(l=>l.id===def.base);
    if(!base) throw new Error(`Missing base lesson ${def.base}`);
    const lesson={...structuredClone(base), id:def.id, title:def.title, summary:def.title,
      domainId:def.domain, module:'Focused studies', prerequisites:[def.base], priority:specialized.has(def.id)?'Advanced':'Core',
      why:`${def.title} helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.`,
      studyHours:4,practiceHours:5,
      resources:[{title:`Official reference: ${def.title}`,url:def.source,access:'Free reading; no registration required',extras:'Use the local CPU exercise; optional hosted services and downloads are not required.'},base.resources[0]],
      concepts:def.lines.trim().split('\n').map(line=>{const [name,explanation,example,commonMistake,checkQuestion]=line.split('~');return {name,explanation,example,commonMistake,checkQuestion,exercise:`Reproduce this example and test one changed input: ${example}`,videoKeys:def.keys};}),
      exercise:{title:`Lab: ${def.title}`,brief:def.lab,deliverables:['Runnable CPU notebook or script with deterministic fixtures','Measured outputs, failure cases and a README explaining decisions'],acceptance:[def.lab,'Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.']},
    };
    domains.find(d=>d.id===def.domain).modules.push({title:def.title,lessons:[lesson]});
  }
  let order=0;
  for(const domainId of routeOrder) {
    const d=domains.find(d=>d.id===domainId);
    const required=d.modules.flatMap(m=>m.lessons).filter(l=>levelFor(l)!=='Specialization');
    const [title,brief]=checkpoints[domainId];
    const base=required.at(-1);
    const cp={...structuredClone(base),id:`checkpoint-${domainId}`,title,summary:title,module:'Stage checkpoint',why:`Demonstrate readiness through a reproducible practical handoff. ${brief}`,isCheckpoint:true,studyHours:1,practiceHours:domainId==='dl'||domainId==='product'?18:6,prerequisites:required.map(l=>l.id),priority:'Core',
      concepts:[
        {name:'Define the success contract',explanation:'Write observable checks before implementation so success is not just a plausible demonstration.',example:`Turn this task into a numbered acceptance checklist: ${brief}`},
        {name:'Reproduce the baseline',explanation:'Keep a simple reference output and deterministic inputs so changes can be compared honestly.',example:'Run a fixed input twice and compare saved outputs with the documented baseline.'},
        {name:'Test a failure boundary',explanation:'A working happy path does not establish robustness to malformed data or dependency failures.',example:'Inject one malformed input and one controlled failure, then record the resulting state.'},
        {name:'Explain the decisions',explanation:'Describe why each technique was chosen and what evidence would make you choose differently.',example:'Write a short decision note comparing the chosen approach with one simpler alternative.'},
        {name:'Hand off the evidence',explanation:'Another learner must be able to reproduce the result from your instructions and supplied inputs.',example:'Ask a teammate to run the README commands in a clean environment and record missing steps.'},
      ],exercise:{title,brief,deliverables:['Runnable project and reproducible input fixtures','README, results and decision notes','Failure evidence and clean-start instructions'],acceptance:[brief,'Explain the code and results without relying on an AI-generated summary.','A teammate can reproduce the demo without paid credentials.']}};
    routeVideoKeys[cp.id]=base.concepts[0]?.videoKeys ?? null;
    cp.videoBase=base.id;
    d.modules.push({title:'Stage checkpoint',lessons:[cp]});
    for(const module of d.modules) for(const l of module.lessons) {
      l.learningLevel=levelFor(l); l.studyOrder=++order;
      l.legacyPriority=l.priority; l.priority=l.learningLevel;
      l.mastery=l.isCheckpoint?'Compare': /diagnos|error|security|failure|debug/i.test(l.title)?'Diagnose': /compar|selection|tradeoff|calibr|tuning/i.test(l.title)?'Compare': /math-|llm-foundations/.test(l.id)?'Explain':'Implement';
      l.priorityReason=l.learningLevel==='Foundation'?'Learn this before application specialization: it supports reproducible scientific and software reasoning.':l.learningLevel==='Essential'?'Use this after the scientific foundation to build, evaluate and operate a reliable AI application.':'Defer until the project needs this capability and the prerequisite experiments are understood.';
      l.whenNeeded=l.learningLevel==='Specialization'?`Choose this branch when your project specifically needs ${l.title.toLowerCase()}; demonstrate a benefit against a simpler baseline.`:`Use ${l.title.toLowerCase()} in the next stage exercise and explain its limitations.`;
      l.canDefer=l.learningLevel==='Specialization'?'Yes. Complete Foundation and Essential first; return when a measured need appears.':'Part of the recommended route. You may navigate ahead, but skipped work does not establish readiness.';
      l.reviewedAt='2026-10-15';
      for(const c of l.concepts) {
        c.commonMistake ??= mistakes.find(([rx])=>rx.test(c.name))?.[1] ?? `Claiming the ${c.name.toLowerCase()} example is correct without checking its inputs, output and failure case.`;
        c.checkQuestion ??= `Explain ${c.name.toLowerCase()} using the example. What result do you expect, and what changed input would invalidate that expectation?`;
        c.exercise ??= `Reproduce and explain this worked case, then test an edge case: ${c.example}`;
      }
    }
  }
  const all=domains.flatMap(d=>d.modules.flatMap(m=>m.lessons));
  // Prerequisite closure prevents an essential lesson from requiring an undisclosed specialization.
  const byId=new Map(all.map(l=>[l.id,l]));
  const visit=(l,seen=new Set())=>{if(seen.has(l.id))return;seen.add(l.id);for(const id of l.prerequisites){const p=byId.get(id);if(!p)throw new Error(`Unknown prerequisite ${id}`);visit(p,seen);}};
  all.forEach(l=>visit(l));
  return domains;
}

export function learningStages(domains) {
  const all=domains.flatMap(d=>d.modules.flatMap(m=>m.lessons));
  return routeLevels.flatMap(level=>routeOrder.map(domainId=>{
    const lessons=all.filter(l=>l.domainId===domainId&&l.learningLevel===level);
    return {id:`${level.toLowerCase()}-${domainId}`,level,domainId,title:domains.find(d=>d.id===domainId).title,lessonIds:lessons.map(l=>l.id),checkpointId:lessons.find(l=>l.isCheckpoint)?.id??null};
  }).filter(s=>s.lessonIds.length));
}
