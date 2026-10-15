import { l } from "./curriculum.mjs";
import { resource } from "./resources.mjs";

export const detailVideoKeys = {};
const additions = [];
function add(
  domain,
  module,
  id,
  title,
  why,
  prerequisite,
  keys,
  sources,
  concepts,
  exercise,
  priority = "Useful next",
  study = 3,
  practice = 4,
) {
  const lesson = l(
    id,
    title,
    why,
    concepts,
    exercise,
    sources.map(([name, url]) => resource(name, url)),
    priority,
    study,
    practice,
  );
  lesson.domainId = domain;
  lesson.module = module;
  lesson.prerequisites = [prerequisite];
  lesson.concepts.forEach((concept) => {
    concept.videoKeys = keys;
  });
  detailVideoKeys[id] = keys;
  additions.push(lesson);
}
const torch = (path) => `https://docs.pytorch.org/${path}`;
const d2l = (path) => `https://d2l.ai/${path}.html`;
const skl = (path) => `https://scikit-learn.org/stable/${path}.html`;

add(
  "dl",
  "Tensor algebra and differentiation",
  "dl-shape-algebra",
  "Tensor indexing, broadcasting and memory layout",
  "Prevent silent shape mistakes before trusting a model loss or a batch of predictions.",
  "dl-tensors",
  ["makemore", "dlFull"],
  [
    [
      "PyTorch: tensor operations",
      torch("tutorials/beginner/basics/tensorqs_tutorial.html"),
    ],
    [
      "NumPy: broadcasting rules",
      "https://numpy.org/doc/stable/user/basics.broadcasting.html",
    ],
  ],
  `Batch, channel and feature axes~Name every axis before applying an operation; images and sequences use different layout conventions.~Annotate an image batch as N=8, C=3, H=32, W=32 and a token batch as B=8, T=20, D=16.
Broadcasting from trailing dimensions~Two aligned dimensions are compatible when equal or one; broadcasting may produce a valid but unintended result.~Subtracting targets shaped (32,) from predictions shaped (32,1) produces a (32,32) matrix instead of per-example errors.
Matrix multiplication versus elementwise multiplication~The @ operator contracts an inner dimension, while * multiplies matching or broadcast elements.~Verify (4,3) @ (3,2) gives (4,2), while (4,3) * (3,) rescales columns.
Views, reshape and contiguity~A view shares storage and some views require compatible strides; reshape may allocate a copy.~Transpose a matrix, inspect stride(), and compare reshape with contiguous().view().
Reductions and keepdim~sum and mean remove selected axes unless keepdim preserves a size-one dimension for broadcasting.~Normalise each row with mean(dim=1, keepdim=True) and assert the output shape stays unchanged.`,
  "Write a CPU shape-debug notebook with five intentional shape mistakes. Add assertions for inputs, intermediate tensors and outputs, and include a failing broadcast example plus its corrected loss.",
);

add(
  "dl",
  "Tensor algebra and differentiation",
  "dl-gradient-mechanics",
  "Gradients, computation graphs and gradient checking",
  "Explain why a parameter receives its gradient and detect broken differentiation in custom computations.",
  "dl-tensors",
  ["backpropNinja", "micrograd"],
  [
    ["PyTorch: autograd mechanics", torch("docs/stable/notes/autograd.html")],
    ["D2L: automatic differentiation", d2l("chapter_preliminaries/autograd")],
  ],
  `Chain rule along paths~A parameter influences a loss through many intermediate values; reverse-mode differentiation sums contributions from every path.~Differentiate z=x*x+x by hand and compare 2*x+1 with autograd.
Leaf tensors and gradient accumulation~Trainable leaf parameters collect .grad values; backward adds to existing gradients rather than replacing them.~Run backward twice with fresh forward passes and show how zero_grad changes the result.
Vector-Jacobian products~Backward propagates a vector through a Jacobian without materialising the full matrix.~For y=x*x with several elements, supply an upstream vector and check 2*x*v.
Detach and no_grad~detach breaks graph connectivity and no_grad avoids building a graph; neither is a substitute for switching dropout to evaluation mode.~Detach a hidden state intentionally, then explain why detaching the final loss prevents training.
Finite-difference gradient checks~A central difference estimates a derivative from nearby loss values; use double precision and avoid nondifferentiable points.~Compare (f(w+eps)-f(w-eps))/(2*eps) against autograd for a tiny smooth network.`,
  "Implement a scalar expression and a two-layer network in float64. Check five parameter derivatives numerically, demonstrate an accidental detach, and write a diagnostic explaining the mismatch.",
);

add(
  "dl",
  "Reliable training and optimisation",
  "dl-initialization-depth",
  "Initialisation, signal scale and residual connections",
  "Keep activations and gradients usable as a neural network becomes deeper.",
  "dl-activations",
  ["normalization", "mitIntro"],
  [
    ["PyTorch: initialisation methods", torch("docs/stable/nn.init.html")],
    [
      "Stanford CS231n: neural network setup",
      "https://cs231n.github.io/neural-networks-2/",
    ],
  ],
  `Symmetry breaking~Hidden units need different initial weights to learn different features; identical initial units receive identical updates in a symmetric network.~Compare two hidden neurons initialised to zero against small random weights.
Fan-in and fan-out~The number of incoming and outgoing connections helps determine an initial variance that preserves signal scale.~Compute fan-in=64 and fan-out=32 for a linear layer and inspect the initial weight standard deviation.
Xavier versus Kaiming~Xavier balances input/output scale; Kaiming accounts for rectifying activations and the chosen fan convention.~Compare activation variances over six tanh layers and six ReLU layers with suitable initialisers.
Vanishing and exploding gradients~Repeated multiplication through depth can shrink or enlarge gradients; inspect norms instead of guessing from the loss alone.~Log per-layer gradient norms for a network with deliberately oversized weights.
Residual paths~A residual block adds an identity or projected input to a learned transformation, creating a direct gradient route.~Implement x+F(x), and use a projection when input and output feature dimensions differ.`,
  "Build a six-layer CPU MLP and compare zero, overly large, Xavier and Kaiming initialisation. Plot activation and gradient statistics for one batch and compare a residual version without claiming universal superiority.",
);

add(
  "dl",
  "Reliable training and optimisation",
  "dl-data-pipeline",
  "Datasets, DataLoader, collation and padding",
  "Build batches that preserve labels, masks and reproducibility rather than hiding data errors inside training.",
  "dl-training-loop",
  ["dlFull", "makemore"],
  [
    [
      "PyTorch: datasets and data loaders",
      torch("tutorials/beginner/basics/data_tutorial.html"),
    ],
    ["PyTorch: data loading reference", torch("docs/stable/data.html")],
  ],
  `Dataset contract~A dataset maps an index to a sample and target; test individual items before enabling batch loading.~Assert each synthetic image is float32 and its class target is an integer.
Collation~A collate function combines samples into a batch and handles structures the default stack cannot combine.~Batch two variable-length sequences with lengths three and five using a custom collate function.
Padding masks~Padding makes shapes rectangular but padded positions must not contribute to attention or token losses.~Pad labels with an ignore index and verify additional padding does not change the valid-token average loss.
Sampling and shuffling~Training shuffles can reduce order effects; validation must preserve the intended grouping or time boundary.~Keep all examples from one person in one split even when a DataLoader shuffles training samples.
Workers and reproducibility~Worker count changes data loading parallelism and can change randomness; measure before increasing it.~Start with num_workers=0 on CPU, seed transforms and compare two identical runs.`,
  "Create a Dataset of 100 variable-length integer sequences with a collate function returning inputs, lengths, masks and targets. Test empty inputs, unequal lengths and deterministic seeded batching.",
);

add(
  "dl",
  "Reliable training and optimisation",
  "dl-adamw-math",
  "SGD, Adam bias correction and decoupled weight decay",
  "Understand optimiser updates well enough to distinguish a learning-rate problem from a regularisation problem.",
  "dl-optimizers",
  ["adam", "optimizers"],
  [
    ["PyTorch: AdamW", torch("docs/stable/generated/torch.optim.AdamW.html")],
    ["D2L: Adam", d2l("chapter_optimization/adam")],
  ],
  `SGD update~SGD moves opposite an estimated gradient; batch noise and learning rate jointly affect the update.~For w=2, gradient=3 and learning rate=0.1, calculate the next weight as 1.7.
Momentum state~Momentum keeps an exponentially smoothed update direction instead of using only the current gradient.~Apply alternating gradients +1 and -1 and compare the momentum trajectory with plain SGD.
Adam first and second moments~Adam tracks moving estimates of gradients and squared gradients to rescale updates per parameter.~Track m and v for three scalar gradients and print the adaptive denominator.
Bias correction and epsilon~Moment estimates start at zero; bias correction adjusts early steps and epsilon stabilises division.~Compute m/(1-beta1^t) and v/(1-beta2^t) for the first update.
AdamW versus L2 penalty~AdamW applies decoupled parameter shrinkage; adding L2 to a loss interacts differently with adaptive rescaling.~Compare explicit shrinkage w*(1-lr*decay) against adding decay*w into an Adam gradient.`,
  "Implement scalar SGD, momentum, Adam and AdamW on a quadratic objective and compare the first three updates with PyTorch. Save optimiser state and confirm that resuming reproduces the next update.",
);

add(
  "dl",
  "Reliable training and optimisation",
  "dl-learning-rate-experiments",
  "Learning-rate schedules, effective batch size and experiments",
  "Tune a training run with controlled evidence rather than changing several settings simultaneously.",
  "dl-training-settings",
  ["optimizers", "makemoreMLP"],
  [
    ["PyTorch: optimiser and scheduler usage", torch("docs/stable/optim.html")],
    ["D2L: learning-rate scheduling", d2l("chapter_optimization/lr-scheduler")],
  ],
  `Warmup~A warmup increases the learning rate during an initial period; its usefulness depends on model and optimiser rather than a universal rule.~Compare a short linear warmup with a fixed rate on the same seeded toy experiment.
Decay schedules~Step and cosine schedules change learning rate over training and must be stepped at their intended frequency.~Plot the learning rate at every optimiser update and detect an accidental per-batch step of an epoch scheduler.
Gradient accumulation~Several microbatches can contribute to one optimiser step, approximating a larger batch when loss scaling is correct.~Divide each equally sized microbatch mean loss by the accumulation count and call step only after accumulation.
Effective batch caveats~Accumulation is not always identical to one larger batch because batch statistics and unequal final batches can differ.~Explain why BatchNorm observes microbatches and weight a short final microbatch by its sample count.
Controlled ablations~Compare one change at a time using the same data split, evaluation metric and recorded seed.~Compare two rates and two batch sizes with a small fixed budget and retain the best validation checkpoint.`,
  "Run a CPU classification experiment with fixed, step and cosine learning rates. Record per-update rate, loss, validation score and runtime; compare one accumulated update against a full batch without BatchNorm.",
);

add(
  "dl",
  "Reliable training and optimisation",
  "dl-normalization-modes",
  "BatchNorm, LayerNorm, dropout and train/eval modes",
  "Avoid predictions that change unexpectedly because normalisation or dropout stayed in training mode.",
  "dl-regularization",
  ["normalization", "layernorm"],
  [
    [
      "PyTorch: BatchNorm1d",
      torch("docs/stable/generated/torch.nn.BatchNorm1d.html"),
    ],
    [
      "PyTorch: LayerNorm",
      torch("docs/stable/generated/torch.nn.LayerNorm.html"),
    ],
  ],
  `Batch normalisation statistics~BatchNorm normalises features using batch statistics during training and usually running estimates during evaluation.~Run the same sample with two different training batches and compare its normalised value.
Layer normalisation axes~LayerNorm normalises specified trailing dimensions within each example, so its behaviour differs from batch normalisation.~Normalise the last D features of a B,T,D tensor and inspect per-token means.
Dropout scaling~Training randomly drops activations and scales retained values so the expected output matches the unmasked value.~Estimate the average of repeated dropout outputs and compare evaluation output with the original input.
Evaluation mode versus gradient mode~model.eval changes modules such as dropout and BatchNorm, while inference_mode controls gradient bookkeeping.~Show that no_grad with a training-mode dropout model still produces random predictions.
Small-batch caveats~Tiny or shifted batches can make BatchNorm statistics unreliable; choose an appropriate normalisation and test its assumptions.~Compare per-sample output consistency for a small MLP with BatchNorm and one with LayerNorm.`,
  "Write a CPU notebook showing repeated predictions under train, eval, no_grad and inference_mode. Include BatchNorm running-stat checks and a test that deterministic inference uses the intended mode.",
);

add(
  "dl",
  "Computer vision",
  "dl-convolution-arithmetic",
  "Convolutions, padding, stride, dilation and pooling",
  "Calculate convolution shapes and parameter counts before designing a computer-vision model.",
  "dl-cnn",
  ["stanfordCNN", "mitVision"],
  [
    [
      "Stanford CS231n: convolutional networks",
      "https://cs231n.github.io/convolutional-networks/",
    ],
    ["PyTorch: Conv2d", torch("docs/stable/generated/torch.nn.Conv2d.html")],
  ],
  `Convolution output size~For each spatial axis, output=floor((input+2*padding-dilation*(kernel-1)-1)/stride+1).~A size-32 image with kernel 3, padding 1 and stride 2 produces size 16.
Channels and parameter sharing~Each output channel learns a kernel across its input channels and reuses that kernel at spatial positions.~A 3-to-8 channel 3x3 layer has 8*(3*3*3+1)=224 parameters when bias is enabled.
Receptive field~Stacking layers changes the input region that can influence one output; stride and dilation alter that growth.~Compare two stride-one 3x3 layers with one 5x5 layer for receptive-field size and parameter count.
Pooling and spatial information~Max or average pooling aggregates local values and reduces resolution; fine position information may be lost.~Apply 2x2 max pooling to a hand-written 4x4 matrix and trace which values survive.
Grouped and depthwise convolution~Groups restrict which input channels connect to an output group; depthwise convolution processes channels separately before optional mixing.~Compare parameter counts for a standard convolution and depthwise-plus-pointwise layers.`,
  "Implement a single-channel convolution with Python loops and compare it against Conv2d on generated 8x8 images. Check predicted shapes for three stride/padding settings and verify a hand-computed pooling example.",
);

add(
  "dl",
  "Computer vision",
  "dl-vision-tasks",
  "Classification, detection and segmentation",
  "Choose outputs and evaluation criteria that match the visual question instead of treating all image tasks as classification.",
  "dl-cnn",
  ["mitVision", "stanfordCNN"],
  [
    [
      "TorchVision: object detection tutorial",
      torch("tutorials/intermediate/torchvision_tutorial.html"),
    ],
    ["TorchVision model task families", torch("vision/stable/models.html")],
  ],
  `Classification outputs~An image classifier predicts a class distribution for a whole image and does not directly identify object locations.~Classify generated images containing either a vertical or horizontal bar.
Detection boxes~An object detector predicts a variable set of classes, boxes and scores; box coordinate conventions must be explicit.~Convert a box from x,y,width,height to x1,y1,x2,y2 and reject negative dimensions.
Segmentation masks~Semantic segmentation assigns a class to each pixel, while instance segmentation distinguishes separate objects of a class.~Generate a 16x16 square mask and compare a pixel classifier with a whole-image label.
Intersection over union~IoU measures overlap divided by union for boxes or masks and is different from classification accuracy.~Compute IoU for identical, disjoint and partially overlapping rectangles.
Task-specific errors~Missed objects, duplicate detections and incorrect boundaries require different error analysis than a wrong image class.~Create an error table separating missed rectangles from incorrect mask boundaries.`,
  "Generate tiny images with rectangular objects and annotations. Implement box conversion, IoU and a threshold-based segmentation baseline on CPU; report classification and localisation errors separately.",
);

add(
  "dl",
  "Computer vision",
  "dl-transfer-augmentation",
  "Transfer learning, augmentation and frozen backbones",
  "Reuse visual representations without leaking evaluation data or assuming all layers should be fine-tuned.",
  "dl-cnn",
  ["mitVision", "dlFull"],
  [
    [
      "PyTorch: transfer learning",
      torch("tutorials/beginner/transfer_learning_tutorial.html"),
    ],
    ["TorchVision transforms", torch("vision/stable/transforms.html")],
  ],
  `Label-preserving augmentation~A transform is useful only when it preserves the target meaning for the intended task.~A horizontal flip may preserve a cat class but invert left/right labels in a navigation dataset.
Frozen features versus fine-tuning~A frozen backbone learns only a new head; fine-tuning updates selected pretrained layers and can overfit small data.~Freeze a tiny feature extractor and assert that its weights do not change after one training step.
Input preprocessing contracts~Pretrained weights assume particular ranges, channels and normalisation; mismatches can damage inference.~Write one preprocessing function shared by the training evaluation path and the API.
Discriminative learning rates~Different parameter groups can use smaller updates for pretrained layers and larger updates for a new head.~Create two optimiser groups and log their rates before the first update.
Train-only randomness~Random augmentations belong on training data; evaluation uses a documented deterministic transform.~Call evaluation preprocessing twice and assert identical outputs for the same generated image.`,
  "Train a tiny feature extractor on generated image shapes, transfer it to a related shape task and compare frozen versus unfrozen training on CPU. Include a shared preprocessing contract and a test that frozen parameters stay fixed.",
);

add(
  "dl",
  "Sequences and transformers",
  "dl-recurrent-state",
  "RNN, LSTM, GRU and teacher forcing",
  "Understand sequence state and training/inference differences before using a sequence model.",
  "dl-sequences",
  ["mitSequence", "lstm"],
  [
    [
      "D2L: recurrent neural networks",
      d2l("chapter_recurrent-neural-networks/rnn"),
    ],
    ["PyTorch: LSTM", torch("docs/stable/generated/torch.nn.LSTM.html")],
  ],
  `Hidden-state recurrence~An RNN repeatedly transforms the current input and previous state; the state summarises a sequence prefix.~Trace a two-step scalar recurrence by hand before running a batched RNN.
LSTM and GRU gates~Gates regulate what information is retained and updated; LSTM has a separate cell state while GRU uses a different state update.~Draw the shapes of LSTM hidden and cell states for two layers and a batch of four.
Teacher forcing~A decoder may receive the true preceding token during training but its own output during generation, creating a mismatch.~Compare next-token prediction when the previous symbol is correct versus deliberately corrupted.
Truncated backpropagation through time~Breaking a long sequence into segments controls memory by detaching state at chosen boundaries.~Carry a hidden state across three chunks and detach it between optimiser updates.
Sequence leakage and splits~Overlapping windows from the same underlying series can leak nearly identical information across splits.~Split a generated series by time before constructing training and validation windows.`,
  "Train a tiny recurrent predictor on a generated repeating integer sequence on CPU. Compare teacher-forced accuracy with free-running generation and show that a time-based split precedes window creation.",
);

add(
  "dl",
  "Sequences and transformers",
  "dl-attention-math",
  "Queries, keys, values, masks and multi-head attention",
  "Trace attention calculations and masking explicitly instead of treating a transformer layer as a black box.",
  "dl-sequences",
  ["gpt", "attention"],
  [
    [
      "D2L: scaled dot-product attention",
      d2l(
        "chapter_attention-mechanisms-and-transformers/attention-scoring-functions",
      ),
    ],
    [
      "PyTorch: scaled dot-product attention",
      torch(
        "docs/stable/generated/torch.nn.functional.scaled_dot_product_attention.html",
      ),
    ],
  ],
  `Queries, keys and values~Learned projections create vectors used to match positions and aggregate information; Q and K determine weights applied to V.~For a three-token sequence, write the Q, K and V shapes and the resulting 3x3 score matrix.
Scaled dot-product scores~Attention weights are softmax(QK^T/sqrt(d_k)) along the key dimension; scaling moderates score magnitudes.~Compute two attention scores by hand and verify each query row sums to one after softmax.
Causal and padding masks~A causal mask hides future positions and a padding mask hides non-data positions; APIs can differ in boolean-mask conventions.~Alter a future token and assert that an earlier token output does not change in a causal layer.
Multi-head projections~Heads learn different subspace attention patterns, then concatenate and project their outputs.~Split D=16 into four heads of size four and assert each reshape and transpose.
Quadratic attention cost~A dense attention score matrix grows with sequence length squared, even though implementations may reduce stored intermediates.~Compare the score-matrix element count for 64 versus 128 tokens before allocating a large example.`,
  "Implement a one-head causal attention layer for four toy tokens using CPU tensors. Compare with the library operation, verify row sums and mask behaviour, then extend it to two heads with shape assertions.",
);

add(
  "dl",
  "Sequences and transformers",
  "dl-transformer-blocks",
  "Transformer blocks, positions and encoder/decoder tasks",
  "Connect transformer internals to the model interfaces used in embedding, classification and text generation.",
  "dl-attention-math",
  ["gpt", "mitSequence"],
  [
    [
      "D2L: transformer architecture",
      d2l("chapter_attention-mechanisms-and-transformers/transformer"),
    ],
    [
      "The Annotated Transformer",
      "https://nlp.seas.harvard.edu/annotated-transformer/",
    ],
  ],
  `Residual and feed-forward sublayers~A transformer block combines attention, residual paths, normalisation and a position-wise feed-forward network.~Print the shape after every sublayer of a tiny block and verify the residual addition dimensions.
Position information~Attention alone does not encode token order; absolute or relative positional mechanisms provide order information.~Compare token embeddings before and after adding sinusoidal positions to the same permuted sequence.
Encoder, decoder and cross-attention~Encoders commonly use bidirectional context; causal decoders predict continuations; cross-attention reads a separate source representation.~Sketch masks for sentence embedding, autoregressive generation and sequence-to-sequence translation.
Next-token label shifting~A language model predicts the next token from preceding tokens, so inputs and targets are offset by one position.~For [A,B,C,D], train inputs [A,B,C] against targets [B,C,D].
Pre-norm versus post-norm~The position of normalisation relative to residual addition affects the block computation and training behaviour.~Implement both block orders with identical shapes and document the actual equations used.`,
  "Build a two-block character transformer with D=16 and a context of eight tokens on CPU. Demonstrate label shifting, causal masks and generation, and compare its held-out loss with a bigram baseline.",
);

add(
  "dl",
  "Representation and generative learning",
  "dl-representation-learning",
  "Embeddings, contrastive learning and metric losses",
  "Learn why an embedding space must match the downstream similarity task and evaluation setup.",
  "dl-losses",
  ["embedding", "makemoreMLP"],
  [
    [
      "Sentence Transformers: losses",
      "https://sbert.net/docs/sentence_transformer/loss_overview.html",
    ],
    [
      "PyTorch: TripletMarginLoss",
      torch("docs/stable/generated/torch.nn.TripletMarginLoss.html"),
    ],
  ],
  `Learned embedding tables~An embedding lookup selects trainable rows rather than computing a meaningful representation from the integer ID itself.~Train a tiny token table and show that renumbering tokens consistently does not change the task.
Cosine and Euclidean distance~Distance choices interact with vector norms; normalised vectors make cosine and dot-product rankings agree.~Compare the nearest neighbours before and after normalising synthetic vectors with different magnitudes.
Positive and negative pairs~Contrastive training requires a meaningful rule for related and unrelated examples; false negatives can damage learning.~Construct two augmented views of one generated shape as a positive pair and document possible false negatives.
Triplet margin~A triplet loss penalises an anchor whose positive is not closer than its negative by a chosen margin.~Compute max(0, d(a,p)-d(a,n)+margin) for three two-dimensional points.
Retrieval evaluation~Evaluate neighbours against held-out relevance labels instead of trusting an attractive two-dimensional plot.~Measure recall@3 on a small labelled vector set and inspect failures from hard negatives.`,
  "Train a tiny two-dimensional embedding on generated labelled points with triplet loss. Keep train and evaluation point IDs separate, compare cosine and Euclidean retrieval, and report recall@3 with hard-negative errors.",
  "Advanced",
);

add(
  "dl",
  "Representation and generative learning",
  "dl-autoencoders-vae",
  "Autoencoders, latent spaces and variational objectives",
  "Distinguish reconstruction from probabilistic generation before choosing an anomaly or generation method.",
  "dl-losses",
  ["mitGenerative", "neural"],
  [
    [
      "PyTorch: variational autoencoder example",
      "https://github.com/pytorch/examples/tree/main/vae",
    ],
    ["PyTorch: distributions", torch("docs/stable/distributions.html")],
  ],
  `Encoder and decoder bottlenecks~An autoencoder compresses and reconstructs inputs; a useful bottleneck restricts what can be copied.~Train a 20-to-2-to-20 network on generated vectors and inspect reconstruction error.
Denoising reconstruction~A denoising model receives corrupted inputs and learns a clean target; corruption must resemble the intended use case.~Add Gaussian noise to generated waveforms and reconstruct the clean signal.
Variational latent distributions~A VAE encoder parameterises a distribution instead of one fixed code, enabling a regularised latent-space objective.~Produce a mean and log variance for each latent dimension and inspect their shapes.
Reparameterisation trick~A Gaussian latent sample can be written as mean+standard_deviation*epsilon so gradients reach the distribution parameters.~Use fixed sampled epsilon to check gradients through a two-dimensional latent sample.
Reconstruction plus KL terms~The VAE objective balances data reconstruction with divergence from a prior; loss reduction and scaling affect that balance.~Log reconstruction and KL components separately rather than comparing only their total.`,
  "Build a tiny CPU denoising autoencoder for generated sine waves. Add a two-dimensional variational bottleneck, plot reconstruction and KL terms separately, and describe why reconstruction error alone does not prove anomaly-detection quality.",
  "Advanced",
);

add(
  "dl",
  "Representation and generative learning",
  "dl-gan-diffusion",
  "GAN and diffusion mechanics on toy distributions",
  "Compare adversarial and denoising generation objectives without needing large image models or paid compute.",
  "dl-autoencoders-vae",
  ["mitGenerative"],
  [
    [
      "D2L: generative adversarial networks",
      d2l("chapter_generative-adversarial-networks/gan"),
    ],
    [
      "Hugging Face: diffusion course introduction",
      "https://huggingface.co/learn/diffusion-course/unit1/1",
    ],
  ],
  `Adversarial objectives~A generator and discriminator optimise different objectives in an interacting process; improving one loss does not guarantee better samples.~Fit a generator to points from two Gaussian clusters and inspect whether both clusters appear.
Alternating updates and detach~Discriminator training uses generated examples without updating the generator; generator training must preserve its gradient path.~Check parameter changes after each half-step and catch an accidental generator detach during its own update.
Mode collapse~A generator can produce only a subset of the data distribution while fooling a limited discriminator.~Measure coverage of both toy clusters rather than showing only a few appealing samples.
Forward noise and reverse denoising~A diffusion setup progressively adds noise and learns a reverse denoising process conditioned on noise level.~Plot a two-dimensional point distribution after several increasing noise levels.
Sampling steps and evaluation~A learned denoiser must be paired with a specified sampling procedure; more steps change runtime and may change quality.~Compare a few denoising steps on generated points and report coverage and runtime without extrapolating to image quality.`,
  "On CPU, simulate forward diffusion on two-dimensional Gaussian mixtures and fit a small noise-prediction MLP. Implement a minimal documented sampler; compare its outputs with a tiny GAN or a recorded GAN failure example.",
  "Advanced",
  4,
  5,
);

add(
  "dl",
  "Diagnostics and efficiency",
  "dl-training-diagnostics",
  "Overfit one batch, diagnose loss and debug numerical failures",
  "Locate implementation problems before spending time on bigger models or long training runs.",
  "dl-training-loop",
  ["normalization", "backpropNinja"],
  [
    [
      "Stanford CS231n: learning diagnostics",
      "https://cs231n.github.io/neural-networks-3/",
    ],
    ["PyTorch: anomaly detection", torch("docs/stable/autograd.html")],
  ],
  `Overfit a tiny batch~A sufficiently flexible model should reduce the loss of a small consistent training set; failure often signals a pipeline or optimisation bug.~Disable regularisation and fit eight generated labelled examples before training on a larger dataset.
Loss baselines~Compare the initial objective to a simple expected baseline rather than assuming any decreasing number is good.~For a balanced K-class task, compare initial cross-entropy with log(K).
Gradient and update checks~A nonzero loss is not enough: parameters must receive finite gradients and actual updates.~Record grad norm and parameter delta before and after one optimiser step.
Numerical non-finites~NaN and infinity can enter through invalid operations, unstable exponentials or exploding updates; find the first failing tensor.~Inject log(0) into a toy graph and use finite checks to locate its origin.
Train/validation curves and errors~Learning curves suggest hypotheses about underfitting, overfitting or shift, but require examples and controlled experiments to confirm.~Compare a wrong-label dataset with a leaky split and explain why their curves can mislead.`,
  "Create three deliberately broken CPU training runs: detached output, mismatched targets and excessive learning rate. Write a diagnostic checklist, show the first failing assertion and demonstrate each corrected run.",
);

add(
  "dl",
  "Diagnostics and efficiency",
  "dl-profiling-deployment",
  "Profiling, batching, precision and portable model artifacts",
  "Measure the actual serving bottleneck and package the preprocessing and model state needed to reproduce predictions.",
  "dl-efficiency",
  ["mixed", "dlFull"],
  [
    [
      "PyTorch: profiler recipe",
      torch("tutorials/recipes/recipes/profiler_recipe.html"),
    ],
    [
      "PyTorch: saving and loading models",
      torch("tutorials/beginner/saving_loading_models.html"),
    ],
  ],
  `Warmup and measurement boundaries~Initial setup and caching can distort timings; define whether a measurement includes preprocessing and queueing.~Warm up a tiny CPU model, then time preprocessing, inference and total request work separately.
Batch throughput versus latency~Batching amortises overhead but waiting to fill a batch can increase individual request latency.~Compare batch sizes one, eight and sixteen on the same 128 generated examples.
Precision and hardware support~Reduced precision is useful only where supported and accurate enough; CPU execution does not require a GPU mixed-precision lab.~Keep the required baseline in float32 and inspect alternative dtype support before testing it.
Checkpoint contracts~Weights alone do not describe architecture, preprocessing, label order or training provenance.~Save state_dict with a versioned configuration, normalisation constants and a label map.
Prediction parity~An exported or reloaded artifact must produce sufficiently similar outputs on fixed representative fixtures.~Compare logits before and after a save/load round trip using an explicit numerical tolerance.`,
  "Profile a small CPU network with three batch sizes, save weights plus metadata, reload in a fresh process and assert prediction parity. Report latency and throughput separately and document unsupported hardware-specific optimisations.",
);

add(
  "python",
  "Practical Python details",
  "python-resources-context",
  "Context managers, paths and safe file operations",
  "Handle files and resources predictably when an AI pipeline stops halfway through an operation.",
  "python-files",
  ["py6", "pythonFull"],
  [
    [
      "Python: reading and writing files",
      "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
    ],
    ["Python: pathlib", "https://docs.python.org/3/library/pathlib.html"],
  ],
  `Context manager lifecycle~A with statement releases a resource when its block exits, including when an exception is raised.~Open a temporary text file inside with, raise an error and check that the handle closes.
Path resolution~Relative paths depend on the current working directory; use explicit project or data roots for repeatable execution.~Run a script from a different directory and demonstrate how Path(__file__) can locate a fixture.
Encoding and newline contracts~Text decoding needs an explicit encoding and a documented policy for malformed input.~Read a UTF-8 file containing Arabic and French text without losing characters.
Atomic replacement~Writing to a temporary file and replacing a destination on the same filesystem can avoid partially written outputs; atomicity is not the same as crash durability.~Simulate a failed JSON serialisation before replacement and verify the old destination remains readable.
Bounded input handling~Read limits and validation prevent an unexpectedly large or malformed file from exhausting memory or corrupting a dataset.~Reject a fixture larger than a small documented byte limit before parsing its JSON.`,
  "Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.",
);

add(
  "python",
  "Practical Python details",
  "python-async-testing",
  "Async cancellation, timeouts and test doubles",
  "Make concurrent network-style work predictable and testable without requiring a live paid API.",
  "python-async",
  ["async", "py5"],
  [
    [
      "Python: asyncio tasks and cancellation",
      "https://docs.python.org/3/library/asyncio-task.html",
    ],
    [
      "pytest: monkeypatching",
      "https://docs.pytest.org/en/stable/how-to/monkeypatch.html",
    ],
  ],
  `Coroutine versus blocking work~An async function can cooperate at await points but a blocking call still blocks the event loop.~Compare asyncio.sleep with time.sleep inside two concurrent toy tasks.
Timeout boundaries~A timeout limits a particular operation; choose whether the budget includes retries and upstream waiting.~Give a fake model request a 50ms budget and handle a deliberately slower response.
Cancellation cleanup~Cancellation is a control signal; cleanup belongs in finally and swallowed cancellation can keep unwanted work alive.~Cancel a worker and assert that its temporary resource is released.
Bounded concurrency~A semaphore limits simultaneous work instead of creating an unbounded number of in-flight calls.~Run twenty fake requests with a concurrency limit of three and record peak active workers.
Dependency fakes~Replace an external dependency at a clear boundary to simulate successful, malformed and failing responses deterministically.~Inject a fake client returning recorded JSON instead of calling a hosted model.`,
  "Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.",
);

add(
  "engineering",
  "Maintainable service engineering",
  "engineering-api-contracts",
  "HTTP contracts, pagination and idempotency",
  "Design predictable service calls so retries and changing datasets do not create inconsistent application behaviour.",
  "engineering-http",
  ["api", "system"],
  [
    [
      "MDN: HTTP request methods",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
    ],
    [
      "MDN: HTTP status codes",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
    ],
  ],
  `Safe and idempotent semantics~Safe methods are intended to retrieve without state changes; idempotent methods have the same intended effect when repeated.~Explain why repeating a GET should not create a new project and why a POST needs a separate deduplication contract.
Client versus server failures~Status codes describe classes of outcomes and should accompany a machine-readable error contract.~Return a validation error for an invalid page size rather than treating it as an internal server failure.
Pagination stability~Offset and cursor pagination have different behaviour as records change; a cursor needs an ordering contract.~Page a sorted list using a stable ID cursor and demonstrate how insertion affects offset pages.
Idempotency keys~A key associates repeated create attempts with one logical request; the server must check conflicting reuse and save the result coherently.~Replay a create request with one key and assert one record exists.
Contract compatibility~Adding optional fields is often easier to evolve than changing field meaning or removing a required response property.~Test an old client fixture against a response with one additional optional field.`,
  "Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.",
);

add(
  "engineering",
  "Maintainable service engineering",
  "engineering-testing-layers",
  "Unit, integration and contract tests",
  "Choose tests that catch boundary failures while keeping the feedback loop small and reliable.",
  "engineering-design",
  ["py5", "coding"],
  [
    [
      "pytest: fixtures",
      "https://docs.pytest.org/en/stable/how-to/fixtures.html",
    ],
    [
      "Python: unittest.mock",
      "https://docs.python.org/3/library/unittest.mock.html",
    ],
  ],
  `Unit boundaries~A unit test checks a small deterministic rule and avoids depending on live infrastructure.~Test a token-budget calculation with explicit fixtures instead of invoking a language model.
Integration boundaries~An integration test exercises real collaboration between components and can catch wiring or serialisation problems.~Send a request through a local API into a temporary SQLite database and verify the saved record.
Contract fixtures~A contract test protects assumptions about an interface independently of model-quality evaluation.~Validate recorded model responses against the same schema used in production.
Fixture isolation~Each test must receive controlled state so previous tests do not change its outcome.~Give each database test a fresh temporary directory and verify it does not read a developer database.
Failure-path assertions~A useful check verifies the intended error and state after failure, not only that some exception occurred.~Assert a timed-out create attempt leaves no half-written project and returns the documented error.`,
  "Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.",
);

add(
  "math-data",
  "Mathematical tools in detail",
  "math-linear-decompositions",
  "Norms, projections, eigenvectors and SVD intuition",
  "Connect vector operations to embeddings, dimensionality reduction and stable numerical code.",
  "math-linear",
  ["algebra", "pca"],
  [
    [
      "NumPy: linear algebra",
      "https://numpy.org/doc/stable/reference/routines.linalg.html",
    ],
    ["scikit-learn: PCA", skl("modules/generated/sklearn.decomposition.PCA")],
  ],
  `Vector norms~A norm measures vector size; normalisation requires handling the zero vector explicitly.~Compute L1 and L2 norms for [3,4] and reject division by zero when normalising [0,0].
Projection geometry~Projecting one vector onto another measures its component in that direction and underlies many similarity calculations.~Project [2,2] onto the x axis and compare the remaining orthogonal component.
Eigenvector intuition~For a square matrix, an eigenvector keeps its direction under the transformation up to scaling.~Apply a diagonal matrix to its coordinate-axis vectors and identify the scale factors.
SVD and low rank~Singular value decomposition represents a matrix using orthogonal directions and singular values; truncation approximates it with fewer components.~Reconstruct a small matrix with one singular component and measure the remaining error.
Numerical conditioning~Nearly dependent inputs can amplify numerical error; solving a system is preferable to explicitly forming an inverse when possible.~Compare solve(A,b) on a well-conditioned and a nearly singular two-by-two system.`,
  "Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.",
);

add(
  "math-data",
  "Statistical reasoning and data contracts",
  "data-statistics-validation",
  "Sampling, uncertainty, joins and dataset validation",
  "Recognise misleading metrics and data transformations before fitting an AI model.",
  "data-pandas",
  ["statistics", "data"],
  [
    [
      "pandas: merge and join",
      "https://pandas.pydata.org/docs/user_guide/merging.html",
    ],
    [
      "NumPy: random sampling",
      "https://numpy.org/doc/stable/reference/random/index.html",
    ],
  ],
  `Sampling unit~The unit being sampled may be a person, document or time period rather than one row; uncertainty depends on that independence assumption.~Keep repeated records from one customer together when resampling a customer-level metric.
Bootstrap intervals~Resampling observed units estimates variability under assumptions; an interval is not a guarantee about unseen distribution shift.~Bootstrap the mean of fifty generated values and compare interval widths for smaller samples.
Join cardinality~Joining duplicate keys can multiply rows and silently change model weighting.~Join two tables with repeated customer IDs, predict the row count and use merge validation to catch a mistaken one-to-one assumption.
Schema and range checks~Types alone do not establish valid data; enforce required columns, units, allowed values and missingness limits.~Reject a negative duration and distinguish milliseconds from seconds in a service log dataset.
Missingness and provenance~Missing values can encode how data was collected; record source and transformation decisions before imputation.~Compare missing values by source system and preserve a missingness flag for downstream analysis.`,
  "Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.",
);

add(
  "ml",
  "Model development in detail",
  "ml-pipelines-search",
  "Column transformers, nested validation and tuning budgets",
  "Tune models while keeping preprocessing and model selection inside a leakage-safe validation procedure.",
  "ml-preprocessing",
  ["crossvalidation", "mlFull"],
  [
    ["scikit-learn: ColumnTransformer", skl("modules/compose")],
    ["scikit-learn: tuning estimator parameters", skl("modules/grid_search")],
  ],
  `Per-column preprocessing~Different feature types need explicit transformations that are fit only on the training fold.~Impute and scale numeric columns while one-hot encoding categorical columns in one ColumnTransformer.
Pipeline fit boundaries~A Pipeline ensures fit-dependent preprocessing is repeated within each validation split instead of learning from all rows.~Compare a deliberately leaked feature selector with the same selector placed inside the cross-validation pipeline.
Search-space design~A bounded search expresses hypotheses about influential parameters rather than trying every possible combination.~Compare a small logarithmic range of regularisation strengths instead of a huge dense grid.
Nested validation~An outer validation estimates the complete model-selection procedure while inner validation chooses hyperparameters.~Use two outer folds and two inner folds on a tiny synthetic dataset and record which observations each stage sees.
Search accounting~Compare procedures under similar computational budgets and retain validation results, seeds and configuration.~Log each candidate score and runtime; keep a final untouched test set for the selected procedure.`,
  "Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.",
);

add(
  "ml",
  "Model development in detail",
  "ml-threshold-imbalance",
  "Class imbalance, decision thresholds and calibration",
  "Translate classifier scores into a defensible decision rule rather than relying on accuracy or a default threshold.",
  "ml-metrics",
  ["calibration", "confusion"],
  [
    ["scikit-learn: threshold tuning", skl("modules/classification_threshold")],
    ["scikit-learn: probability calibration", skl("modules/calibration")],
  ],
  `Base rate and accuracy~A rare positive class makes a majority predictor look accurate without solving the intended detection problem.~For 1% positives, calculate the accuracy and recall of predicting every example negative.
Precision-recall tradeoff~Changing a threshold changes the set of predicted positives and therefore false-positive and false-negative counts.~Compute a confusion matrix at thresholds 0.2, 0.5 and 0.8 on a fixed score vector.
Class weights and resampling~Weighting or resampling changes the training objective or distribution and must be confined to training folds.~Compare weighted and unweighted logistic regression without modifying the validation class balance.
Calibration meaning~A calibrated probability should match observed outcome frequency for similar scores under the evaluation distribution.~Group predictions near 0.8 and compare their average score with the observed positive fraction.
Decision cost and threshold validation~Choose thresholds on validation data using a declared utility or capacity limit; the test set must not tune the decision.~Select a threshold meeting a review budget and evaluate that fixed threshold once on the test split.`,
  "Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.",
);

add(
  "ml",
  "Model development in detail",
  "ml-interpretation-errors",
  "Permutation importance, partial dependence and error slices",
  "Explain a model carefully and identify which examples fail without confusing predictive association with causation.",
  "ml-generalization",
  ["trees", "bias"],
  [
    [
      "scikit-learn: permutation importance",
      skl("modules/permutation_importance"),
    ],
    ["scikit-learn: partial dependence", skl("modules/partial_dependence")],
  ],
  `Held-out permutation importance~Shuffling one feature estimates how much a fitted model relies on it for a chosen metric and evaluation dataset.~Shuffle a useful numeric column in held-out data and compare the score drop with a random-noise column.
Correlated features~Importance can be shared or hidden among interchangeable features, so a low individual score does not prove irrelevance.~Duplicate a predictive column and compare individual permutation scores before and after duplication.
Partial dependence assumptions~A partial-dependence plot averages predictions while varying selected features and can query unrealistic combinations.~Plot a model response while checking whether the varied values are plausible for the observed subgroup.
Error slices~Aggregate quality can hide failures in specific sources, lengths or groups; require sample counts and uncertainty.~Compare false-negative rates for short versus long synthetic records and display each slice size.
Association versus intervention~A predictive explanation describes model behaviour, not the result of changing the real world.~Explain why a feature importance for support history does not establish what happens if support history is artificially changed.`,
  "Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.",
);

add(
  "ml",
  "Time and anomaly tasks",
  "ml-time-anomalies",
  "Time-series validation and anomaly-detection baselines",
  "Handle ordered observations and rare events without training on future information.",
  "ml-splits",
  ["mlFull", "statistics"],
  [
    [
      "scikit-learn: TimeSeriesSplit",
      skl("modules/generated/sklearn.model_selection.TimeSeriesSplit"),
    ],
    ["scikit-learn: outlier detection", skl("modules/outlier_detection")],
  ],
  `Forecast horizon and lag features~A forecasting target specifies how far into the future to predict; lagged features must exist at the decision time.~Predict tomorrow's count using yesterday's count rather than a rolling mean that includes tomorrow.
Walk-forward evaluation~Training expands or rolls through time and validation follows it, respecting the intended deployment chronology.~Evaluate three chronological windows and compare with a shuffled split that looks unrealistically strong.
Seasonal naive baseline~Simple repetition or moving averages provide a meaningful baseline before adding a learned forecaster.~Predict a day using the same weekday one week earlier and calculate mean absolute error.
Anomaly score versus label~An unsupervised detector produces an unusualness score; the alert threshold depends on operating needs and validation evidence.~Rank points by IsolationForest score and choose a review threshold on a separate validation period.
Alert evaluation~Evaluate event coverage, false alerts and review volume rather than assuming every rare point is useful to a user.~Group adjacent anomalous windows into events and compare event recall with raw pointwise recall.`,
  "Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.",
);

add(
  "backend",
  "Service boundaries in detail",
  "backend-fastapi-boundaries",
  "FastAPI dependencies, schemas and testable error boundaries",
  "Keep model calls replaceable and validate both inputs and outputs at the API boundary.",
  "fastapi",
  ["api", "py5"],
  [
    [
      "FastAPI: dependencies",
      "https://fastapi.tiangolo.com/tutorial/dependencies/",
    ],
    ["FastAPI: testing", "https://fastapi.tiangolo.com/tutorial/testing/"],
  ],
  `Request versus response schema~An input schema validates client data while a response schema controls the public contract and accidental field exposure.~Accept a prompt and return only the declared answer fields rather than internal tracing metadata.
Dependency injection~Dependencies supply services or identity context without hard-coding a model client into every route.~Inject a fake predictor in tests and a local predictor in the normal application.
Validation versus upstream failure~Bad user input and a malformed model response require different handling and error codes.~Return a validation response for a missing prompt and a controlled upstream error for invalid predictor output.
Sync versus async boundaries~Async routes should not directly perform long blocking work in the event loop; choose a suitable execution boundary.~Compare a fake awaited network call with a CPU-bound loop and document where the latter runs.
Dependency overrides in tests~An override lets tests exercise the real route and validation path while replacing only the external boundary.~Override authentication and prediction independently to test authorised, forbidden and malformed-response cases.`,
  "Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.",
);

add(
  "backend",
  "Service boundaries in detail",
  "backend-sql-performance",
  "SQL query plans, transaction races and migrations",
  "Recognise database bottlenecks and correctness failures before they become unexplained API behaviour.",
  "backend-transactions",
  ["postgres", "system"],
  [
    [
      "PostgreSQL: using EXPLAIN",
      "https://www.postgresql.org/docs/current/using-explain.html",
    ],
    [
      "PostgreSQL: concurrency control",
      "https://www.postgresql.org/docs/current/mvcc.html",
    ],
  ],
  `Indexes and predicates~An index can help a matching query but consumes storage and write work; usefulness depends on filters and row counts.~Compare an indexed equality lookup with a sequential scan on a generated table.
Query plans~EXPLAIN describes a chosen execution plan; estimated costs are not milliseconds and ANALYZE actually executes the statement.~Use EXPLAIN on a read query and explain the difference between estimated rows and measured rows.
Lost updates and conditional writes~Two clients can overwrite one another unless the update enforces a concurrency rule.~Update a project only when revision equals the version the client read, then reject a stale second update.
Transactions and invariants~Several writes that establish one invariant should succeed or fail together.~Create a project and its owner participation in one transaction, then inject a failure to verify rollback.
Migration compatibility~A deployment may temporarily run old and new code together; expand/backfill/contract reduces breaking schema transitions.~Add a nullable field, backfill it and only later require it after both code versions can handle it.`,
  "Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.",
);

add(
  "llm",
  "Inference internals and control",
  "llm-sampling-decoding",
  "Decoding: temperature, top-k, top-p and stop rules",
  "Understand how a model's logits become tokens and why sampling settings affect output variability rather than guaranteeing factuality.",
  "llm-foundations",
  ["makemore", "gpt"],
  [
    [
      "Hugging Face: generation strategies",
      "https://huggingface.co/docs/transformers/generation_strategies",
    ],
    [
      "Hugging Face: generation configuration",
      "https://huggingface.co/docs/transformers/main_classes/text_generation",
    ],
  ],
  `Temperature on logits~Temperature rescales logits before sampling; implementations may use a separate greedy mode instead of accepting a literal zero temperature.~Compare probabilities from logits [1,2,3] at temperatures 0.5 and 1.5.
Top-k truncation~Top-k samples only among the k largest-scoring candidates and renormalises their probabilities.~Filter a five-token distribution to two tokens and show which candidates become impossible.
Nucleus sampling~Top-p retains a probability-mass prefix, so the candidate count changes with distribution shape.~Compare the retained count for a peaked and a nearly uniform token distribution at p=0.9.
Stop conditions~End tokens, maximum new tokens and explicit stop sequences are different termination mechanisms.~Generate from a fake token stream and test that a multi-token stop marker is not leaked into the answer.
Sampling and correctness~Low randomness does not establish truth, and reproducibility can depend on seed, hardware and runtime settings.~Evaluate a fixed set of toy prompts with repeated seeded sampling and document the limits of the comparison.`,
  "Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.",
);

add(
  "llm",
  "Inference internals and control",
  "llm-kv-cache-serving",
  "Prefill, decoding, KV cache and model memory budgets",
  "Estimate whether a local model and its context fit available memory and distinguish throughput from response latency.",
  "llm-context",
  ["gpt", "llmFull"],
  [
    [
      "Hugging Face: KV cache strategies",
      "https://huggingface.co/docs/transformers/kv_cache",
    ],
    [
      "Hugging Face: quantisation overview",
      "https://huggingface.co/docs/transformers/quantization/overview",
    ],
  ],
  `Prefill versus token decoding~Prefill processes the prompt; decoding repeatedly extends it, so long prompts and long answers stress different parts of serving.~Use recorded timings to separate time to first token from time per subsequent token.
KV cache role~Cached keys and values avoid recomputing previous token representations in standard autoregressive attention, at a memory cost that grows with context and batch size.~Calculate how doubling a cached sequence length changes the stored key/value element count for a fixed toy model.
Weight and activation memory~Model weights are only one part of memory usage; runtime buffers, activations and caches also matter.~Estimate float32 parameter bytes separately from a small simulated cache and add an explicit overhead allowance.
Quantisation tradeoffs~Reduced-bit weights may lower memory use but require compatible kernels and quality checks; they do not automatically reduce every runtime cost.~Compare stored sizes and reconstruction errors for a tiny weight vector quantised to a small integer range.
Caching boundaries and privacy~Response caching needs keys that capture relevant input/configuration and permission context; shared caches can leak private content.~Test that identical prompts from different tenants do not hit a shared private-response cache.`,
  "Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.",
);

add(
  "llm",
  "Training choices and alignment",
  "llm-lora-objectives",
  "SFT datasets, LoRA, preference tuning and evaluation boundaries",
  "Choose adaptation only when it addresses a measured failure and understand what is actually being trained.",
  "llm-finetuning",
  ["mitPostTraining", "llmFull"],
  [
    [
      "Hugging Face PEFT: LoRA",
      "https://huggingface.co/docs/peft/conceptual_guides/lora",
    ],
    [
      "Hugging Face TRL: supervised fine-tuning",
      "https://huggingface.co/docs/trl/sft_trainer",
    ],
  ],
  `Supervised fine-tuning targets~SFT learns from example completions under an explicit formatting and label-masking contract; poor examples can teach undesirable patterns.~Construct ten synthetic instruction/answer pairs and mark which tokens contribute to the training objective.
Low-rank adapters~LoRA represents a weight update using a product of smaller matrices while the chosen base weights remain frozen.~For a 16x16 toy weight, compare a rank-two adapter parameter count with a full update.
Adapter configuration~Target modules, rank, scaling and dropout change what can be adapted and must be recorded with the base-model version.~Save a configuration specifying which toy linear layers have trainable adapters.
Preference optimisation~Preference methods train from comparative feedback under a specific objective and do not remove the need for task evaluation.~Create chosen/rejected synthetic response pairs and identify pairs with ambiguous or inconsistent preferences.
Contamination and regression~Adaptation data must be separated from evaluation examples; measure regressions in general behaviour as well as target-task improvement.~Hash and deduplicate a toy training set against a held-out evaluation set before computing metrics.`,
  "Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.",
  "Advanced",
);

add(
  "rag",
  "Retrieval systems in detail",
  "rag-chunking-experiments",
  "Chunk boundaries, document identity and ingestion updates",
  "Make retrieval reproducible when documents are parsed, edited, deleted or ingested more than once.",
  "rag-ingestion",
  ["rag", "data"],
  [
    [
      "Hugging Face: advanced RAG",
      "https://huggingface.co/learn/cookbook/advanced_rag",
    ],
    [
      "Python: hashlib content hashes",
      "https://docs.python.org/3/library/hashlib.html",
    ],
  ],
  `Parsing fidelity~A parser may lose reading order, tables or headings; inspect extracted text before embedding it.~Create a two-column text fixture and detect whether its extracted sentence order is sensible.
Chunk boundaries and overlap~Chunk size and overlap trade context continuity against duplication and retrieval cost; compare choices on actual questions.~Split the same document by fixed length and headings and inspect which method keeps a definition with its conditions.
Stable document and chunk IDs~Identity should distinguish a logical document from one version and its chunks, allowing updates without orphaning records.~Use a document ID plus version/content hash and deterministic chunk positions.
Upserts and deletions~A repeated ingestion should not duplicate unchanged content, while a new version should replace outdated chunks and remove stale ones.~Ingest one document twice, then edit it and verify no previous-version chunks remain searchable.
Metadata and access filters~Store provenance, timestamps and access scope so retrieval can enforce the same permissions as source data.~Index two users' notes and assert a query with one user's filter never returns the other user's chunks.`,
  "Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.",
);

add(
  "rag",
  "Retrieval systems in detail",
  "rag-hybrid-reranking",
  "BM25-style retrieval, vector fusion and reranking evaluation",
  "Measure which retrieval stage improves relevance rather than assuming that adding a reranker always helps.",
  "rag-retrieval",
  ["rag", "embedding"],
  [
    [
      "Hugging Face: advanced RAG and reranking",
      "https://huggingface.co/learn/cookbook/advanced_rag",
    ],
    [
      "Sentence Transformers: retrieve and rerank",
      "https://sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html",
    ],
  ],
  `Lexical versus semantic signals~Lexical matching preserves exact names and identifiers while embedding similarity can connect paraphrases.~Compare queries for an exact error code and a paraphrased policy question over the same small corpus.
Score-scale mismatch~Lexical and vector scores have different scales; adding their raw numbers may create arbitrary rankings.~Multiply one retriever's scores by 100 and observe how naive score addition changes the result.
Reciprocal rank fusion~Rank fusion combines ranked lists using reciprocal rank contributions with a chosen stabilising constant.~Fuse two five-document lists and show how a document present in both lists gains support.
Cross-encoder reranking~A reranker scores query-document pairs jointly and usually runs after a cheaper candidate retriever.~Rerank only the best ten candidates and compare with scoring every document using a recorded score fixture.
Stage-by-stage metrics~Measure candidate recall before reranking and ranking quality after it, alongside latency and cost.~Report recall@10 and reciprocal rank@3 on ten hand-labelled queries before and after fusion/reranking.`,
  "Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.",
);

add(
  "rag",
  "Retrieval systems in detail",
  "rag-citations-abstention",
  "Evidence selection, citation validation and abstention",
  "Make grounded answers traceable and explicitly handle questions whose evidence is missing or conflicting.",
  "rag-answers",
  ["rag", "evaluation"],
  [
    [
      "Hugging Face: RAG evaluation",
      "https://huggingface.co/learn/cookbook/rag_evaluation",
    ],
    [
      "Google PAIR: explainability and trust",
      "https://pair.withgoogle.com/guidebook/chapters/explainability-trust/",
    ],
  ],
  `Evidence budget~Select evidence within a token budget while preserving useful passages and source identity rather than truncating arbitrary text.~Pack three passages into a toy budget and keep the quoted span beside its document ID.
Claim-level support~One citation attached to a whole paragraph does not automatically support every claim inside it.~Break a generated answer into two factual claims and map each to the passage that actually supports it.
Citation validity versus faithfulness~A source ID can exist while its content fails to support an answer; both checks are needed.~Create a response citing a real but irrelevant source and show why ID validation alone passes incorrectly.
Conflicting or stale evidence~A retrieved corpus may contain several versions or contradictory statements; preserve dates and surface unresolved conflicts.~Retrieve two dated policy fixtures and report the newer rule with its version rather than merging them silently.
Abstention and escalation~A system needs an explicit path when evidence is missing, insufficient or forbidden; a confident unsupported answer is not a successful completion.~Include out-of-corpus questions and verify a deterministic insufficient-evidence response.`,
  "Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.",
);

add(
  "agents",
  "Stateful workflows and tool boundaries",
  "agents-state-machines",
  "Typed state, checkpoints and bounded execution graphs",
  "Keep multi-step workflows inspectable and resumable without relying on an unconstrained agent conversation.",
  "agents-loops",
  ["langgraph", "system"],
  [
    [
      "LangGraph: graph API",
      "https://docs.langchain.com/oss/python/langgraph/graph-api",
    ],
    [
      "LangGraph: persistence",
      "https://docs.langchain.com/oss/python/langgraph/persistence",
    ],
  ],
  `State schema~Explicit state fields describe what each step reads and writes, avoiding accidental dependence on a hidden conversation history.~Represent a workflow with query, evidence IDs, approval status, attempts and final answer.
Nodes, edges and routing~Nodes perform bounded work and routing selects the next allowed transition based on state.~Route a validation failure back to one repair step and prohibit an unbounded self-loop.
Reducers and concurrent updates~Concurrent branches need a clear merge rule or can overwrite each other's changes.~Merge two evidence lists with stable-ID deduplication instead of last-write-wins replacement.
Checkpoints and replay~A checkpoint records resumable state, but replay may execute work again and requires deliberate treatment of side effects.~Resume a paused toy workflow from a JSON checkpoint and verify its completed write is not duplicated.
Budgets and terminal states~Maximum steps, attempts and elapsed-time budgets limit runaway work; success and exhaustion should be distinct outcomes.~Stop a looping fake planner after three attempts with an explicit budget-exhausted result.`,
  "Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.",
);

add(
  "agents",
  "Stateful workflows and tool boundaries",
  "agents-mcp-contracts",
  "MCP tool schemas, transport lifecycle and permission checks",
  "Separate protocol discovery from authorisation so a reachable tool does not automatically become an allowed action.",
  "agents-mcp-client",
  ["mcp", "injection"],
  [
    [
      "MCP: architecture",
      "https://modelcontextprotocol.io/docs/learn/architecture",
    ],
    [
      "MCP: security best practices",
      "https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices",
    ],
  ],
  `Tool discovery and schemas~A client discovers tool names and input schemas, then validates arguments before dispatch; a tool description is untrusted content.~Expose a read_note tool taking an ID and reject an unexpected filesystem path argument.
Transport lifecycle~A local stdio process and a network HTTP server have different startup, connection and shutdown concerns.~Test that a local server process exits when its client shuts down and document a timeout path.
Resources, prompts and tools~Resources expose context, prompts provide reusable interaction templates and tools perform operations; none bypass application permissions.~Classify a note document, a summarisation template and a write_note operation under the appropriate primitive.
Authorisation per operation~Validate the caller and object scope for every action instead of trusting a successful discovery step.~Deny a tool call attempting to read another user's note even when the tool itself is enabled.
Approval and audit context~Sensitive side effects need a defined approval boundary and a recorded decision context; tool text must not grant itself permission.~Record an approval for one exact write payload and reject a changed payload reusing that approval.`,
  "Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.",
);

add(
  "eval-security",
  "Evaluation reliability",
  "eval-judges-statistics",
  "Judge rubrics, disagreement and uncertain improvements",
  "Avoid shipping a change because an unreliable judge or a tiny benchmark produced an attractive average.",
  "eval-human-judge",
  ["evaluation", "statistics"],
  [
    [
      "Hugging Face: evaluate a RAG system",
      "https://huggingface.co/learn/cookbook/rag_evaluation",
    ],
    [
      "Google PAIR: evaluation and feedback",
      "https://pair.withgoogle.com/guidebook/",
    ],
  ],
  `Operational rubrics~A judge rubric needs observable criteria, examples and an output schema rather than a vague instruction to be helpful.~Define factual support, task completion and forbidden disclosure as separately scored fields.
Position and presentation bias~Judges may prefer the first answer, longer text or a familiar style; randomisation and swaps help reveal these effects.~Evaluate answer pairs in both orders and count how often the preferred answer changes.
Human disagreement~Disagreement can expose ambiguous labels or criteria instead of simply identifying a bad annotator.~Have two teammates label ten examples, inspect disagreements and revise the rubric before computing a final score.
Paired uncertainty~Compare systems on the same examples and inspect per-example differences; a small mean difference may not be reliable.~Bootstrap paired score differences on a fixed toy benchmark and display the interval with sample size.
Regression slices and holdouts~A global improvement can hide a safety regression; keep slices and a protected holdout separate from tuning examples.~Require no new privacy failures while improving a retrieval score on development examples.`,
  "Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.",
);

add(
  "eval-security",
  "Evaluation reliability",
  "security-threat-boundaries",
  "Threat modelling, indirect injection and data minimisation",
  "Place controls at real trust boundaries rather than assuming a prompt can secure every operation.",
  "security-injection",
  ["injection", "fairness"],
  [
    [
      "OWASP: LLM prompt injection",
      "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
    ],
    [
      "OWASP: sensitive information disclosure",
      "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/",
    ],
  ],
  `Assets and trust boundaries~A threat model identifies valuable data, actors and transitions between trusted instructions and untrusted content.~Draw where retrieved documents, user inputs and tool outputs enter a note assistant.
Indirect prompt injection~Instructions embedded in retrieved material or tool responses can try to redirect the application and should remain data.~Put a fake instruction to reveal a secret inside a retrieved Markdown document and verify it grants no tool permission.
Least privilege and output validation~Limit tool capabilities and validate side-effect payloads outside the model, even if its answer follows an expected format.~Allow note reads in one workspace and reject a model-generated write to a different workspace.
Data minimisation and logging~Send and retain only data needed for the task; logs can expose sensitive prompts even when the UI is private.~Redact fake secrets from request logs and test that raw credentials never reach an error record.
Defence-in-depth testing~Input filters, isolation, permissions and human review address different failure modes and none establishes total immunity alone.~Show an injection test that bypasses a keyword filter but is stopped by an object-level permission check.`,
  "Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.",
);

add(
  "deployment",
  "Reliable operations in detail",
  "deployment-jobs-retries",
  "Durable jobs, backoff, deduplication and overload",
  "Make background ingestion recover from retries without duplicate effects or unlimited work.",
  "deployment-queues",
  ["system", "async"],
  [
    [
      "AWS Builders Library: timeouts, retries and jitter",
      "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",
    ],
    ["Python: queue", "https://docs.python.org/3/library/queue.html"],
  ],
  `At-least-once delivery~A queue can deliver a job more than once, so receiving a message does not prove its side effect has not already happened.~Process the same ingestion ID twice and assert one logical document version is created.
Exponential backoff and jitter~Retries should be spaced and randomised to avoid synchronised retry bursts, with a cap and attempt budget.~Compute retry delays for five fake failures using a seeded random source.
Transient versus permanent errors~A temporary timeout may warrant retry while an invalid input usually needs correction rather than repeated execution.~Retry a fake network timeout but send a malformed-document job directly to a terminal failure state.
Deduplication transaction~Deduplication and the protected state change must be coordinated to avoid a crash between effect and acknowledgement.~Simulate a crash after a write but before acknowledgement and verify replay remains safe.
Backpressure and capacity~A bounded queue and explicit rejection or waiting policy prevent overload from consuming all memory.~Submit more jobs than a toy queue can hold and verify the chosen full-queue behaviour.`,
  "Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.",
);

add(
  "deployment",
  "Reliable operations in detail",
  "deployment-observability-slos",
  "Service objectives, traces, latency percentiles and rollback",
  "Turn operational telemetry into concrete user-facing reliability decisions rather than collecting logs without a purpose.",
  "deployment-monitoring",
  ["sre", "incident"],
  [
    [
      "Google SRE: service level objectives",
      "https://sre.google/sre-book/service-level-objectives/",
    ],
    [
      "OpenTelemetry: signals",
      "https://opentelemetry.io/docs/concepts/signals/",
    ],
  ],
  `SLI versus SLO~An indicator measures a service property while an objective sets a target over a declared population and time window.~Define successful-request fraction and a latency target for the local inference API without treating fake traffic as a real production guarantee.
Latency percentiles~Averages can hide slow-tail requests; percentiles depend on sample count and aggregation method.~Compute median and p95 from a generated latency list containing a few large outliers.
Trace correlation~A trace links work across request handling, retrieval and model calls so delays can be attributed to stages.~Pass a trace ID through a fake ingestion, retrieval and answer flow and display stage durations.
Low-cardinality labels~Unbounded labels such as raw prompt text or unique user IDs can increase cost and leak data.~Use route and result-category metrics while keeping per-request IDs in controlled logs.
Release and rollback criteria~A release needs an observable success/failure rule and a way to restore a compatible previous artifact.~Compare two recorded release windows and trigger a simulated rollback when a documented error-rate threshold is exceeded.`,
  "Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.",
);

add(
  "coding-agents",
  "Verifiable coding workflows",
  "coding-specification-review",
  "Acceptance tests, change scope and evidence-based review",
  "Make coding-agent work reviewable by defining a concrete problem, bounded changes and observable completion criteria.",
  "coding-review",
  ["coding", "py5"],
  [
    [
      "GitHub: responsible use of coding assistants",
      "https://docs.github.com/en/copilot/responsible-use/copilot-code-completion",
    ],
    [
      "pytest: good integration practices",
      "https://docs.pytest.org/en/stable/explanation/goodpractices.html",
    ],
  ],
  `Problem and counterexample~A useful task describes an observed failure and expected behaviour rather than only requesting a technology.~Provide an input where duplicate ingestion occurs and the exact record count expected after the fix.
Bounded context~Give relevant files, contracts and constraints without assuming every instruction found in a repository or document is trusted.~Separate project instructions from an untrusted sample document containing an attempted tool instruction.
Acceptance versus implementation checks~Tests should verify user-visible behaviour and important invariants rather than copying the chosen algorithm.~Assert repeated ingestion is idempotent without asserting which helper function implements it.
Diff and dependency review~Review changed callers, schemas and dependency effects in addition to reading a generated summary.~Check whether a migration or added package changes the deployment requirements before approving a feature.
Verification evidence~A report must distinguish code changes, tests actually run and checks that remain unverified.~Write a completion note with the exact test command and a clear statement that hosted OAuth was not tested.`,
  "Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.",
);

add(
  "coding-agents",
  "Verifiable coding workflows",
  "coding-autonomy-controls",
  "Tool permissions, untrusted context and recoverable task steps",
  "Allow useful autonomous work while keeping credentials, side effects and review boundaries explicit.",
  "coding-autonomy",
  ["coding", "mcp"],
  [
    [
      "MCP: security best practices",
      "https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices",
    ],
    [
      "GitHub: responsible use of coding assistants",
      "https://docs.github.com/en/copilot/responsible-use/copilot-code-completion",
    ],
  ],
  `Capability scope~A tool's availability is not unlimited authorisation; permission should match the task, data and destination.~Permit reading a fixture folder while prohibiting a write to a real production database.
Untrusted repository content~Comments, issue text and dependency files can contain malicious instructions; treat them as evidence rather than authority.~Place a fake instruction to print environment secrets inside a test fixture and document why it must be ignored.
Checkpointed task decomposition~Break work into verifiable increments so an interruption does not require guessing which effects occurred.~Record whether a migration was generated, locally tested or actually applied as three distinct states.
Secret handling~Credentials should stay outside source, prompts and generated logs; use placeholders in examples and inspect outputs for accidental disclosure.~Scan a sample diff for a fake API key and ensure the final report redacts it.
Review and escalation rules~Define which reversible actions may proceed and which consequential actions need a human decision before execution.~Create a policy permitting local tests but requiring an explicit approval for a simulated production deploy.`,
  "Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.",
);

add(
  "product",
  "Product decisions and documentation details",
  "product-discovery-metrics",
  "User interviews, baselines and measurable AI value",
  "Choose a problem and success measure before assuming a model or autonomous workflow is the solution.",
  "product-discovery",
  ["product", "evaluation"],
  [
    [
      "Google PAIR: user needs",
      "https://pair.withgoogle.com/guidebook/chapters/user-needs/",
    ],
    [
      "Google PAIR: feedback and control",
      "https://pair.withgoogle.com/guidebook/chapters/feedback-controls/",
    ],
  ],
  `Problem interviews~Ask about actual recent workflows, failures and alternatives instead of asking whether a hypothetical AI feature sounds attractive.~Ask a teammate to walk through the last time they searched a document and record the failed steps.
Non-AI baseline~Rules, search or a simple form may solve enough of the problem to be a valuable baseline.~Compare keyword search with a proposed RAG assistant on the same ten user questions.
Outcome and guardrail metrics~A success metric needs a defined measurement process and constraints that prevent gaming.~Measure correctly resolved tasks and time saved while separately tracking unsupported answers and privacy failures.
Prototype learning goals~A prototype should test the riskiest assumption with the least expensive setup, not imitate every production component.~Use recorded answers and a clickable workflow to test whether citations help users verify results.
Feedback interpretation~User comments and behaviour need context; a small convenience sample does not establish broad product-market demand.~Record participant count, task success and the limitations of testing only with the four-person team.`,
  "Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.",
);

add(
  "product",
  "Product decisions and documentation details",
  "docs-delivery-contracts",
  "Data cards, evaluation plans and operational handover",
  "Document the actual assumptions needed to reproduce and operate an AI feature after its original developer leaves.",
  "docs-ai",
  ["documentation", "incident"],
  [
    [
      "Google: technical writing one",
      "https://developers.google.com/tech-writing/one",
    ],
    [
      "Google SRE: incident management",
      "https://sre.google/sre-book/managing-incidents/",
    ],
  ],
  `Requirements traceability~Connect requirements to tests and evidence so a delivered feature can be assessed without relying on a verbal explanation.~Map a citation requirement to its schema check, relevance fixture and known limitation.
Dataset and source provenance~Document origin, permissions, collection date, transformations and intended uses of each dataset or document corpus.~Write a data card for five synthetic policy documents and label them explicitly as fabricated fixtures.
Evaluation plan~Specify task population, datasets, metrics, thresholds, slices and failure handling before selecting a winning model.~Define a ten-question retrieval evaluation with answerability labels and an abstention check.
Model and prompt version contracts~Record model identity, prompt/configuration version and preprocessing so outputs can be traced to the deployed configuration.~Save a manifest connecting a checkpoint hash, prompt template and label mapping.
Runbook ownership~An operational guide needs symptoms, diagnosis, safe recovery, rollback and an owner; commands must match the delivered environment.~Write a local service recovery procedure and verify it against the exact Docker Compose setup.`,
  "Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.",
);

add(
  "dl",
  "Reliable training and optimisation",
  "dl-loss-derivatives",
  "Log-sum-exp, cross-entropy gradients and label semantics",
  "Connect stable loss implementations to gradients and choose target encodings that match the task.",
  "dl-losses",
  ["backpropNinja", "crossentropy"],
  [
    [
      "PyTorch: CrossEntropyLoss",
      torch("docs/stable/generated/torch.nn.CrossEntropyLoss.html"),
    ],
    [
      "PyTorch: BCEWithLogitsLoss",
      torch("docs/stable/generated/torch.nn.BCEWithLogitsLoss.html"),
    ],
  ],
  `Log-sum-exp stability~Computing log(sum(exp(z))) needs a stabilising offset for large logits; adding the offset back preserves the mathematical result.~Evaluate logits [1000,1001] using max subtraction and compare with the overflowing naive expression.
Softmax cross-entropy gradient~For a single one-hot target and unweighted softmax cross-entropy, the logit gradient is predicted probability minus target indicator.~Calculate the gradient for probabilities [0.2,0.8] with class zero as the target and verify autograd.
Binary versus multiclass versus multilabel~Binary classification, mutually exclusive classes and independent multiple labels need different output/target contracts.~Use one logit for one binary decision, K logits for one-of-K classification and K independent logits for multilabel outputs.
Label smoothing~Smoothing changes the target distribution rather than adding noise to the input and must be considered when interpreting the loss.~Replace a three-class one-hot target with a documented smoothed distribution and verify it still sums to one.
Reduction and masked losses~A mean over examples, tokens or weighted targets is not automatically the same quantity; document the normalisation denominator.~Mask padded token positions and compare sums and means across batches with different valid-token counts.`,
  "Implement stable softmax cross-entropy and binary logistic loss on CPU in float64. Compare losses and gradients against PyTorch, test very large logits and demonstrate correct masking for a variable-length token batch.",
);

add(
  "dl",
  "Sequences and transformers",
  "dl-causal-convolutions",
  "Causal convolutions, dilation and hierarchical sequence models",
  "Compare recurrent, convolutional and attention-based sequence processing using explicit context boundaries.",
  "dl-convolution-arithmetic",
  ["wavenet", "mitSequence"],
  [
    [
      "D2L: convolutions for sequences",
      d2l(
        "chapter_natural-language-processing-applications/sentiment-analysis-cnn",
      ),
    ],
    ["PyTorch: Conv1d", torch("docs/stable/generated/torch.nn.Conv1d.html")],
  ],
  `One-dimensional channel layout~Conv1d commonly uses batch, channels, length, whereas token embeddings are often stored as batch, length, features.~Transpose a B,T,D embedding tensor to B,D,T before a sequence convolution.
Causal padding~A causal convolution must not read a future position; ordinary symmetric padding can leak later tokens.~Left-pad a toy sequence and assert that changing its final value leaves earlier outputs unchanged.
Dilation~Dilated kernels space their input positions apart, expanding the receptive field without increasing kernel element count.~Trace which input indices influence one output for kernel size three and dilation two.
Hierarchical context aggregation~Stacking local transformations combines longer context while preserving explicit shape and ordering contracts.~Build a two-level character-context aggregator and show which characters influence a prediction.
Architecture comparison~Recurrent, convolutional and attention models differ in state, receptive field and computation; compare them on one fixed task.~Compare a tiny recurrent predictor and a causal Conv1d predictor using the same synthetic sequence split.`,
  "Build a CPU causal Conv1d predictor for a generated character sequence. Test future-token isolation, calculate its receptive field and compare with a bigram baseline; treat the WaveNet video as the hierarchical-model foundation, not a full dilated-convolution implementation.",
  "Advanced",
);

add(
  "dl",
  "Audio and multimodal learning",
  "dl-audio-multimodal",
  "Audio sampling, spectrograms and multimodal fusion",
  "Understand how non-text signals become model inputs and evaluate alignment before combining modalities.",
  "dl-sequences",
  ["mitSequence", "mitVision"],
  [
    [
      "Hugging Face: audio course introduction",
      "https://huggingface.co/learn/audio-course/chapter1/introduction",
    ],
    [
      "librosa: mel spectrogram",
      "https://librosa.org/doc/0.11.0/generated/librosa.feature.melspectrogram.html",
    ],
  ],
  `Sampling rate and duration~The number of audio samples depends on duration and sampling rate; changing metadata without resampling changes interpretation.~Generate one second of a 440Hz sine wave at 16kHz and verify it contains 16000 samples.
Windows and spectrograms~A short-time Fourier transform computes local frequency content using a window and hop length; a spectrogram trades time and frequency resolution.~Compare two window sizes on generated tones and annotate the time/frequency axes.
Mel scaling and log values~Mel filterbanks group frequencies using a perceptual scale, and log energy needs a safe floor for silence.~Compute a mel spectrogram for a synthetic signal and verify a silent input produces finite log values.
Early versus late fusion~Modalities can be combined at feature level or after separate predictions, but their sample identity and timing must agree.~Join a tiny audio-feature table with text labels by a stable sample ID and detect one mismatched pair.
Modality-specific evaluation~An overall multimodal score can hide dependence on one modality or failure on missing inputs.~Compare both-input, audio-only, text-only and missing-audio conditions using deterministic toy predictors.`,
  "Generate short sine-wave audio fixtures locally and compute waveform/spectrogram features on CPU. Fuse them with synthetic text labels by sample ID, detect a deliberate alignment error and evaluate missing-modality behaviour. The linked videos cover sequence/vision foundations; audio-specific preprocessing is in the written course.",
  "Advanced",
);

add(
  "dl",
  "Reinforcement learning overview",
  "dl-reinforcement-basics",
  "Rewards, policies, value estimates and exploration",
  "Distinguish reward-based decision learning from ordinary tool orchestration before choosing a reinforcement-learning approach.",
  "ml-problem",
  ["mitRL"],
  [
    [
      "D2L: Markov decision processes",
      d2l("chapter_reinforcement-learning/mdp"),
    ],
    [
      "Hugging Face: deep reinforcement learning introduction",
      "https://huggingface.co/learn/deep-rl-course/unit1/introduction",
    ],
  ],
  `States, actions and transitions~A sequential decision problem specifies what is observed, which actions are allowed and how the environment changes.~Define a three-state toy environment with two actions and explicit terminal transitions.
Reward and return~Immediate rewards differ from discounted future return, and reward design determines what behaviour is incentivised.~Calculate the discounted sum for a short reward sequence at two discount factors.
Policy versus value~A policy chooses actions while a value estimate predicts expected return under specified assumptions.~Represent an epsilon-greedy bandit policy separately from its action-value estimates.
Exploration versus exploitation~Learning about uncertain actions can improve future choices while lowering immediate reward.~Compare always taking the first apparently good action with seeded epsilon-greedy exploration on a two-arm bandit.
Evaluation and reward hacking~A higher training reward may reflect exploiting the reward definition rather than meeting the real user goal.~Add a misleading reward bonus in a toy environment and show why an independent success measure is needed.`,
  "Implement a seeded two-arm bandit simulation entirely on CPU. Compare greedy and epsilon-greedy policies over repeated runs, plot average reward/regret and document why a tool-calling application does not automatically need reinforcement learning.",
  "Advanced",
);

add(
  "ml",
  "Model development in detail",
  "ml-svm-kernels",
  "SVM margins, kernels, C and feature scale",
  "Understand what changes when a linear classifier becomes a kernel method and why preprocessing matters.",
  "ml-neighbors",
  ["svm", "mlFull"],
  [
    ["scikit-learn: support vector machines", skl("modules/svm")],
    [
      "scikit-learn: RBF parameter example",
      skl("auto_examples/svm/plot_rbf_parameters"),
    ],
  ],
  `Separating margin~A maximum-margin classifier chooses a boundary using support vectors close to the margin rather than every point equally.~Plot a two-dimensional linear decision boundary and highlight the fitted support vectors.
Soft-margin C~C controls the cost of violations relative to the regularisation objective and should be tuned within validation.~Compare a small and a large C on a generated dataset with one mislabeled outlier.
Kernel similarity~A kernel defines an implicit feature-space similarity; an RBF kernel depends on distance and its bandwidth parameter.~Compute exp(-gamma*distance_squared) for two distances and two gamma values.
Scale and preprocessing~Feature units affect distances and therefore kernel similarity; scale within a training pipeline to avoid leakage.~Rescale one feature by 100 and compare unscaled with pipeline-scaled performance.
Compute and probability caveats~Kernel methods may become expensive as training size grows, and a decision score is not automatically a calibrated probability.~Record fit time for two small sample sizes and report decision scores separately from any calibrated estimate.`,
  "Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.",
);

add(
  "ml",
  "Unsupervised learning in detail",
  "ml-cluster-validation",
  "K-means, density clustering and PCA diagnostics",
  "Interpret unsupervised outputs in terms of assumptions instead of treating every cluster label as a discovered truth.",
  "ml-neighbors",
  ["cluster", "pca"],
  [
    ["scikit-learn: clustering", skl("modules/clustering")],
    ["scikit-learn: decomposition", skl("modules/decomposition")],
  ],
  `K-means objective~K-means minimises squared distance to cluster centres and is sensitive to scaling and its preferred cluster geometry.~Compare fitted centres for two blobs and for a curved two-moons dataset.
Initialisation and stability~Different starts can find different local solutions; inspect repeated runs and sensible n_init settings.~Fit several seeded runs and compare centre positions and objective values.
Density and noise~Density-based methods group connected dense regions and may label sparse points as noise rather than forcing them into a cluster.~Compare DBSCAN outputs under two eps values and report the number of noise points.
Silhouette limitations~An internal score evaluates a geometric criterion and can disagree with the business meaning of a grouping.~Compare silhouette scores and visual structure on synthetic curved groups before choosing a method.
PCA variance versus usefulness~PCA retains directions of high variance, which need not preserve the information relevant to a downstream target.~Create a noisy high-variance feature and a low-variance predictive feature and inspect what the first component preserves.`,
  "Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.",
);

add(
  "llm",
  "Inference internals and control",
  "llm-tokenization-unicode",
  "Tokenisation, BPE, special tokens and multilingual budgets",
  "Make token budgets and dataset preparation correct for code, Arabic, French and mixed-language prompts.",
  "llm-foundations",
  ["tokenizer", "makemore"],
  [
    [
      "Hugging Face LLM course: byte-pair encoding",
      "https://huggingface.co/learn/llm-course/chapter6/5",
    ],
    ["Python: Unicode HOWTO", "https://docs.python.org/3/howto/unicode.html"],
  ],
  `Bytes, code points and tokens~String length, UTF-8 byte length and model-token count describe different representations and are not interchangeable.~Compare lengths for an English word, an Arabic word and an emoji sequence before using any model tokenizer.
Byte-pair merges~BPE repeatedly merges common symbol pairs under a learned vocabulary; a toy implementation makes the merge process inspectable.~Learn three merges from a tiny text corpus and print the vocabulary after each merge.
Special-token contracts~Chat formatting may add role, boundary or end tokens; incorrect duplication changes the actual model input.~Construct a toy chat template once and test that applying it twice is rejected or clearly detected.
Truncation and padding~Truncation removes content while padding adds masked positions; their side and maximum length affect model behaviour.~Keep a required instruction within a small budget and mark which document text is truncated.
Multilingual budget evaluation~Token cost depends on the tokenizer and text distribution, so one characters-per-token rule is not reliable across languages.~Compare token counts on equivalent synthetic English, French and Arabic prompts using an optional downloaded tokenizer or a labelled byte-level baseline.`,
  "Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.",
);

export function expandDomains(domains) {
  const expanded = structuredClone(domains);
  for (const lesson of additions) {
    const domain = expanded.find((d) => d.id === lesson.domainId);
    let module = domain.modules.find((m) => m.title === lesson.module);
    if (!module) {
      module = { title: lesson.module, lessons: [] };
      domain.modules.push(module);
    }
    module.lessons.push(structuredClone(lesson));
  }
  return expanded;
}
