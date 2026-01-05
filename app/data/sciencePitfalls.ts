// app/constants/sciencePitfalls.ts

export type Card = {
  id?: string; // auto-generated
  category: string;
  title: string;
  mistake: string;
  result: string;
  fix: string;
  tag: string;
};

export type SciencePitfall = Card;

/* ------------------------------------------------------------------
   RAW DATA (unchanged – NO manual ids needed)
------------------------------------------------------------------- */
const RAW_SCIENCE_PITFALLS: Omit<Card, "id">[] = [
  {
    category: "Genomics & Sequencing",
    title: "The Excel Gene Name Trap",
    tag: "Data hygiene",
    mistake: "Importing gene lists into Excel. Gene symbols like SEPT6 or MARCH1 get auto-converted into dates (e.g., “6-Sep”, “1-Mar”).",
    result: "Silent corruption of gene names → wrong hits, wrong enrichment, irreproducible results.",
    fix: "Use TSV/CSV with explicit string types. Prefer R/Python for parsing (readr/data.table/pandas). If you must use Excel, pre-format columns as Text.",
  },
  {
    category: "Genomics & Sequencing",
    title: "Ignoring Adapter Sequences",
    tag: "QC",
    mistake: "Skipping adapter/quality trimming before alignment or quantification.",
    result: "Lower alignment rates, biased counts, and artifacts that look like real variants or splicing.",
    fix: "Run FastQC/MultiQC and trim with cutadapt/Trim Galore. Then re-check QC before mapping.",
  },
  {
    category: "Statistics & Data Analysis",
    title: "The Multiple Testing Oversight",
    tag: "Statistics",
    mistake: "Running thousands of hypothesis tests and treating p < 0.05 as significant without correction.",
    result: "Hundreds to thousands of false positives by chance alone.",
    fix: "Use FDR control (Benjamini–Hochberg) and report adjusted p-values (q-values). Validate with effect sizes and independent evidence.",
  },
  {
    category: "Statistics & Data Analysis",
    title: "Batch Effects Disguised as Biology",
    tag: "Experimental design",
    mistake: "Case/control samples processed on different days, lanes, kits, or operators without randomization.",
    result: "You model the sequencing run, not the disease signal.",
    fix: "Randomize, balance batches, include covariates, and visualize batch structure (PCA/UMAP). Apply correction cautiously (ComBat, Harmony, integration).",
  },
  {
    category: "Systems Biology & Networks",
    title: "The Hairball Visualization",
    tag: "Networks",
    mistake: "Plotting 5,000 nodes and 50,000 edges and calling it insight.",
    result: "A beautiful mess: no interpretation, no prioritization, no story.",
    fix: "Focus the graph: subnetwork extraction, community detection, hub/bottleneck ranking, pathway-level modules, and clear hypotheses.",
  },
  {
    category: "Systems Biology & Networks",
    title: "Correlation ≠ Interaction",
    tag: "Causality",
    mistake: "Assuming co-expression implies physical interaction or regulation.",
    result: "False mechanistic claims; wrong targets prioritized.",
    fix: "Use prior knowledge (PPI/TF databases), perturbation data, causal modeling, or conditional associations. Treat correlation as a clue, not proof.",
  },
  {
    category: "Programming & Reproducibility",
    title: "Hard-coded File Paths",
    tag: "Reproducibility",
    mistake: "Code that only works on your machine: C:/Users/John/Desktop/data.csv",
    result: "Nobody can reproduce it — including future you.",
    fix: "Use relative paths, config files, CLI args, and project structure. Log versions and parameters. Containerize if possible (Docker/Conda).",
  },
  {
    category: "Programming & Reproducibility",
    title: "Reference Genome Mix-up",
    tag: "Coordinates",
    mistake: "Aligning to hg19 but interpreting coordinates from GRCh38 (or vice versa).",
    result: "Mis-mapped loci, wrong annotations, invalid variant interpretation.",
    fix: "Lock reference versions in the pipeline. Keep genome build metadata with every file. LiftOver only when explicitly required and validated.",
  },

  // --- RNA-SEQ & TRANSCRIPTOMICS ---
  {
    category: "RNA-seq",
    title: "FPKM for Differential Expression",
    tag: "Statistics",
    mistake: "Using FPKM/RPKM to compare gene expression between different experimental groups.",
    result: "Inaccurate fold-changes due to the way FPKM normalizes across samples.",
    fix: "Use raw counts with specialized packages like DESeq2 or edgeR which use sophisticated normalization (TMM/RLE)."
  },
  {
    category: "RNA-seq",
    title: "The Low-Count Noise Floor",
    tag: "Filtering",
    mistake: "Failing to filter out genes with very low counts across all samples.",
    result: "Increased multiple-testing burden and false positives in high-fold-change, low-count genes.",
    fix: "Apply a 'minimal count' filter (e.g., at least 10 counts in at least 3 samples) before analysis."
  },
  {
    category: "Single-Cell",
    title: "Over-clustering",
    tag: "Analysis",
    mistake: "Increasing resolution until every tiny variation becomes a 'new cell type.'",
    result: "Biological noise is interpreted as novel discovery; impossible to replicate.",
    fix: "Use silhouette scores or Clustree to find stable resolutions; validate clusters with known markers."
  },
  {
    category: "RNA-seq",
    title: "Forgetting Mitochondrial Content",
    tag: "QC",
    mistake: "Ignoring the percentage of reads mapping to the mitochondrial genome.",
    result: "High MT% usually indicates cell stress or membrane rupture, biasing 'high quality' data.",
    fix: "Calculate MT% during QC; remove samples or cells exceeding a threshold (typically >5-10% in scRNA-seq)."
  },
  {
    category: "Transcriptomics",
    title: "Library Size Confounding",
    tag: "Sequencing",
    mistake: "Assuming a sample with 40M reads is twice as 'deep' as one with 20M without checking saturation.",
    result: "False negatives for lowly expressed genes in the 'shallower' sample.",
    fix: "Generate saturation curves to ensure sequencing depth has reached a plateau for your genes of interest."
  },
  {
    category: "RNA-seq",
    title: "Strand-Specific Mixup",
    tag: "Quantification",
    mistake: "Using the wrong library strandedness parameter (Forward vs. Reverse) in quantification.",
    result: "Drastically lower mapping rates or quantifying the 'antisense' strand instead of the gene.",
    fix: "Use tools like check_ness or infer_experiment.py to verify strandedness before the main run."
  },

  // --- MACHINE LEARNING & AI ---
  {
    category: "Machine Learning",
    title: "Class Imbalance Blindness",
    tag: "Evaluation",
    mistake: "Evaluating a model on a 99:1 imbalanced dataset using Accuracy.",
    result: "A model that predicts 'Healthy' 100% of the time gets 99% accuracy but is useless.",
    fix: "Use Precision-Recall curves, F1-score, or MCC (Matthews Correlation Coefficient)."
  },
  {
    category: "Machine Learning",
    title: "The Hidden Random Seed",
    tag: "Reproducibility",
    mistake: "Not setting a global random seed for stochastic algorithms.",
    result: "Results change every time the script runs; 'magic' findings that disappear.",
    fix: "Set numpy.random.seed(), torch.manual_seed(), and random.seed() at the start."
  },
  {
    category: "Machine Learning",
    title: "Feature Scaling Neglect",
    tag: "Preprocessing",
    mistake: "Mixing features like Age (0-100) and Gene Expression (0-10,000) in K-Means or SVM.",
    result: "Features with larger magnitudes dominate the distance calculations.",
    fix: "Scale data using StandardScaler or MinMaxScaler before training."
  },
  {
    category: "Machine Learning",
    title: "K-fold Leakage",
    tag: "Validation",
    mistake: "Performing feature selection on the whole dataset before K-fold cross-validation.",
    result: "Massive over-fitting; the model 'knows' which genes are important across the whole set.",
    fix: "Embed feature selection inside each fold of the cross-validation loop."
  },
  {
    category: "AI in Biology",
    title: "Black Box Hallucinations",
    tag: "Interpretability",
    mistake: "Trusting a Deep Learning prediction without checking saliency maps or feature importance.",
    result: "The model might be predicting 'Cancer' based on a watermark on the digital slide, not biology.",
    fix: "Use SHAP or LIME to visualize which pixels/features are driving the prediction."
  },
  {
    category: "Machine Learning",
    title: "Training on Replicates",
    tag: "Data Splitting",
    mistake: "Putting 'Technical Replicate A' in Training and 'Technical Replicate B' in Testing.",
    result: "99% accuracy that fails on any truly independent new sample.",
    fix: "Always split data at the 'Subject' or 'Biological' level, not the 'Sample' level."
  },

  // --- STATISTICS & MATH ---
  {
    category: "Statistics",
    title: "Correlation is not Causation",
    tag: "Logic",
    mistake: "Assuming a high Pearson correlation (r=0.9) proves a mechanistic link.",
    result: "Wasteful follow-up experiments on 'spurious correlations.'",
    fix: "Use Granger causality, perturbation (knockouts), or structural equation modeling."
  },
  {
    category: "Statistics",
    title: "The p-hacking Trap",
    tag: "Ethics",
    mistake: "Trying 5 different statistical tests and only reporting the one that gave p < 0.05.",
    result: "Irreproducible science; finding patterns in pure noise.",
    fix: "Pre-register your analysis plan or apply strict Bonferroni/FDR corrections."
  },
  {
    category: "Statistics",
    title: "Small N Power Paradox",
    tag: "Design",
    mistake: "Drawing sweeping conclusions from a sample size of N=3 per group.",
    result: "Low statistical power means any 'significant' finding is likely an exaggeration of effect size.",
    fix: "Perform a Power Analysis before the experiment to determine the required N."
  },
  {
    category: "Statistics",
    title: "Binning Continuous Data",
    tag: "Data Loss",
    mistake: "Turning a continuous variable (like Age) into 'Young vs Old' (Binary).",
    result: "Loss of information and increased risk of false positives near the arbitrary cutoff.",
    fix: "Use linear regression or splines to keep the variable continuous."
  },
  {
    category: "Statistics",
    title: "Log-Transforming Zeros",
    tag: "Math",
    mistake: "Adding an arbitrary 'pseudocount' (e.g., +1) to zero-heavy data before log transformation.",
    result: "The choice of pseudocount can drastically change the statistical results.",
    fix: "Use models that handle zeros naturally (Zero-inflated Poisson) or use a Log1p function."
  },
  {
    category: "Statistics",
    title: "Forgetting Normality Tests",
    tag: "Assumptions",
    mistake: "Using a T-test on data that is heavily skewed or bimodal.",
    result: "Inaccurate p-values; the T-test assumes a normal distribution.",
    fix: "Use Shapiro-Wilk to test normality or switch to a non-parametric Wilcoxon test."
  },

  // --- GENOMICS & SEQUENCING (Part 2) ---
  {
    category: "Genomics",
    title: "PCR Duplicate Blindness",
    tag: "Bioinformatics",
    mistake: "Counting PCR duplicates as independent biological observations.",
    result: "Artificial inflation of coverage and false variant calls.",
    fix: "Use Picard MarkDuplicates or samtools markdup to flag and remove duplicates."
  },
  {
    category: "Genomics",
    title: "Multi-mapping Reads",
    tag: "Mapping",
    mistake: "Ignoring reads that map to multiple locations (repetitive elements).",
    result: "Underestimating expression of paralogous genes or repetitive regions.",
    fix: "Use tools like Salmon or Kallisto that use EM algorithms to handle multi-mappers."
  },
  {
    category: "Genomics",
    title: "Contamination Oversight",
    tag: "QC",
    mistake: "Sequencing human samples and not checking for Mycoplasma or bacterial DNA.",
    result: "'Novel' genes that are actually just bacterial contamination.",
    fix: "Use Kraken2 or Centrifuge to profile non-target species in your library."
  },
  {
    category: "Genomics",
    title: "VCF Filter Neglect",
    tag: "Variants",
    mistake: "Using raw VCF files without quality score (QUAL) or depth (DP) filtering.",
    result: "Thousands of false-positive SNP/Indel calls.",
    fix: "Apply GATK Best Practices (VQSR) or hard filters (QD < 2.0, FS > 60.0, etc.)."
  },
  {
    category: "Genomics",
    title: "The 'Chr' Prefix Nightmare",
    tag: "Interoperability",
    mistake: "Mixing files where one uses 'chr1' and the other uses '1'.",
    result: "Silent failure of scripts or tools returning empty results.",
    fix: "Standardize chromosome naming across all inputs (FASTA, GFF, VCF)."
  },
  {
    category: "Genomics",
    title: "Over-reliance on Defaults",
    tag: "Alignment",
    mistake: "Running BWA/Bowtie2 with default settings on non-standard organisms.",
    result: "Missing significant alignments because the default mismatch penalty is too high.",
    fix: "Tune alignment parameters based on expected evolutionary distance/divergence."
  },

  // --- DATA HYGIENE & MANAGEMENT ---
  {
    category: "Data Hygiene",
    title: "Version Control by Naming",
    tag: "Management",
    mistake: "Managing versions by renaming files 'Final_v2_really_final.csv'.",
    result: "Losing track of which file was actually used for the published figure.",
    fix: "Use Git for code and DVC (Data Version Control) for large datasets."
  },
  {
    category: "Data Hygiene",
    title: "Undocumented Outlier Removal",
    tag: "Reproducibility",
    mistake: "Deleting 'weird' data points from a spreadsheet without logging why.",
    result: "Selection bias; the data is no longer an honest representation of the experiment.",
    fix: "Keep raw data untouched; perform filtering in a script and document the logic."
  },
  {
    category: "Programming",
    title: "Floating Point Precision",
    tag: "Math",
    mistake: "Saving high-precision coordinates as low-precision floats (Float16).",
    result: "Accumulation of rounding errors that shift coordinates in long pipelines.",
    fix: "Use Double precision (Float64) for sensitive intermediate calculations."
  },
  {
    category: "Data Hygiene",
    title: "Hard-coded Metadata",
    tag: "Organization",
    mistake: "Including sample info (like 'Day1_Control') only in the filename.",
    result: "Filenames get truncated or changed, and the metadata is lost forever.",
    fix: "Create a separate, machine-readable metadata.csv mapping sample IDs to conditions."
  },
  {
    category: "Data Hygiene",
    title: "UTC vs Local Time",
    tag: "Time",
    mistake: "Recording timestamps from different instruments without timezone offsets.",
    result: "Analysis shows 'Cause' happening after 'Effect' due to daylight savings shifts.",
    fix: "Always store timestamps in ISO 8601 format in UTC."
  },

  // --- VISUALIZATION ---
  {
    category: "Visualization",
    title: "The Truncated Y-Axis",
    tag: "Ethics",
    mistake: "Starting a bar chart Y-axis at a non-zero value to exaggerate differences.",
    result: "Visual deception; viewers misinterpret the magnitude of the effect.",
    fix: "Always start bar chart axes at zero. For dot plots, use an honest range."
  },
  {
    category: "Visualization",
    title: "Over-plotting Chaos",
    tag: "Design",
    mistake: "Plotting a scatter plot with 100,000 overlapping points.",
    result: "Density of the data is hidden; only outliers are visible.",
    fix: "Use hexagonal binning (geom_hex) or reduce point opacity (Alpha)."
  },
  {
    category: "Visualization",
    title: "Colorblind Unfriendly Palettes",
    tag: "Accessibility",
    mistake: "Using Red and Green to represent 'Up' and 'Down' regulated.",
    result: "8% of male readers cannot distinguish the two categories.",
    fix: "Use Red/Blue or Magenta/Green color schemes."
  },
  {
    category: "Visualization",
    title: "Font Size Fail",
    tag: "Communication",
    mistake: "Exporting a figure with 6pt font for a journal.",
    result: "Labels are completely unreadable when printed or viewed on a screen.",
    fix: "Ensure minimum font size of 8-10pt at the final intended figure size."
  },

  // --- EXPERIMENTAL DESIGN & MISC ---
  {
    category: "Experimental Design",
    title: "Selection Bias",
    tag: "Bias",
    mistake: "Only analyzing the 'most responsive' cells or mice.",
    result: "Overestimation of treatment efficacy; 'The Winner's Curse.'",
    fix: "Define inclusion/exclusion criteria before seeing the data results."
  },
  {
    category: "Experimental Design",
    title: "Confounding Variables",
    tag: "Design",
    mistake: "Testing Drug A in Young mice and Drug B in Old mice.",
    result: "Impossible to tell if the effect is due to the drug or the age.",
    fix: "Use a Full Factorial design: both drugs in both age groups."
  },
  {
    category: "Experimental Design",
    title: "Lack of Negative Controls",
    tag: "Validation",
    mistake: "Running an assay without a vehicle/scramble control.",
    result: "Any change is attributed to the drug, even if it's just the solvent effect.",
    fix: "Always include 'mock' treatments (DMSO, water, or non-targeting RNA)."
  },
  {
    category: "Proteomics",
    title: "The One-Peptide Wonder",
    tag: "Mass Spec",
    mistake: "Identifying a protein based on a single unique peptide match.",
    result: "High false-discovery rate; many identified proteins are just noise.",
    fix: "Require at least 2 unique peptides for a confident protein identification."
  },
  {
    category: "Bioinformatics",
    title: "Ignoring Decoy Scaffolds",
    tag: "Mapping",
    mistake: "Deleting 'unplaced' scaffolds from the reference genome to save space.",
    result: "Reads are forced into main chromosomes, creating false variants.",
    fix: "Use the full reference genome, including decoys and unplaced scaffolds."
  },
  {
    category: "Microbiome",
    title: "Compositional Blindness",
    tag: "Statistics",
    mistake: "Analyzing relative abundance without realizing it is zero-sum.",
    result: "Spurious correlations; as one taxon increases, others must decrease mathematically.",
    fix: "Use Log-ratio transformations (CLR) or specialized tools like ANCOM-BC."
  }
];

/* ------------------------------------------------------------------
   AUTO-GENERATED, STABLE IDS
------------------------------------------------------------------- */

export const SCIENCE_PITFALLS: Card[] = RAW_SCIENCE_PITFALLS.map(
  (c, idx) => ({
    ...c,
    id: `${slugify(c.category)}-${String(idx + 1).padStart(3, "0")}`,
  })
);

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------- */

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
  