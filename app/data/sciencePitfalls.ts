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
    mistake:
      "Importing gene lists into Excel. Gene symbols like SEPT6 or MARCH1 get auto-converted into dates (e.g., “6-Sep”, “1-Mar”).",
    result:
      "Silent corruption of gene names → wrong hits, wrong enrichment, irreproducible results.",
    fix:
      "Use TSV/CSV with explicit string types. Prefer R/Python for parsing (readr/data.table/pandas). If you must use Excel, pre-format columns as Text.",
  },
  {
    category: "Genomics & Sequencing",
    title: "Ignoring Adapter Sequences",
    tag: "QC",
    mistake:
      "Skipping adapter/quality trimming before alignment or quantification.",
    result:
      "Lower alignment rates, biased counts, and artifacts that look like real variants or splicing.",
    fix:
      "Run FastQC/MultiQC and trim with cutadapt/Trim Galore. Then re-check QC before mapping.",
  },
  {
    category: "Statistics & Data Analysis",
    title: "The Multiple Testing Oversight",
    tag: "Statistics",
    mistake:
      "Running thousands of hypothesis tests and treating p < 0.05 as significant without correction.",
    result:
      "Hundreds to thousands of false positives by chance alone.",
    fix:
      "Use FDR control (Benjamini–Hochberg) and report adjusted p-values (q-values). Validate with effect sizes and independent evidence.",
  },
  {
    category: "Statistics & Data Analysis",
    title: "Batch Effects Disguised as Biology",
    tag: "Experimental design",
    mistake:
      "Case/control samples processed on different days, lanes, kits, or operators without randomization.",
    result:
      "You model the sequencing run, not the disease signal.",
    fix:
      "Randomize, balance batches, include covariates, and visualize batch structure (PCA/UMAP). Apply correction cautiously (ComBat, Harmony, integration).",
  },
  {
    category: "Systems Biology & Networks",
    title: "The Hairball Visualization",
    tag: "Networks",
    mistake:
      "Plotting 5,000 nodes and 50,000 edges and calling it insight.",
    result:
      "A beautiful mess: no interpretation, no prioritization, no story.",
    fix:
      "Focus the graph: subnetwork extraction, community detection, hub/bottleneck ranking, pathway-level modules, and clear hypotheses.",
  },
  {
    category: "Systems Biology & Networks",
    title: "Correlation ≠ Interaction",
    tag: "Causality",
    mistake:
      "Assuming co-expression implies physical interaction or regulation.",
    result:
      "False mechanistic claims; wrong targets prioritized.",
    fix:
      "Use prior knowledge (PPI/TF databases), perturbation data, causal modeling, or conditional associations. Treat correlation as a clue, not proof.",
  },
  {
    category: "Programming & Reproducibility",
    title: "Hard-coded File Paths",
    tag: "Reproducibility",
    mistake:
      "Code that only works on your machine: C:/Users/John/Desktop/data.csv",
    result:
      "Nobody can reproduce it — including future you.",
    fix:
      "Use relative paths, config files, CLI args, and project structure. Log versions and parameters. Containerize if possible (Docker/Conda).",
  },
  {
    category: "Programming & Reproducibility",
    title: "Reference Genome Mix-up",
    tag: "Coordinates",
    mistake:
      "Aligning to hg19 but interpreting coordinates from GRCh38 (or vice versa).",
    result:
      "Mis-mapped loci, wrong annotations, invalid variant interpretation.",
    fix:
      "Lock reference versions in the pipeline. Keep genome build metadata with every file. LiftOver only when explicitly required and validated.",
  },

  /* ---- keep ALL your remaining objects exactly as they are ---- */
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
