export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "ppiDrugR",
    description:
      "PPI-based drug target prioritization using STRING expansion, centrality analysis, and embedding-informed ranking.",
    tags: ["R", "Networks", "PPI", "Drug Discovery"],
    href: "#",
  },
  {
  title: "SciNexus",
  href: "https://github.com/dipankatanu/SciNexus",
  description:
    "An interactive platform for exploring scientific concepts, networks, and relationships, aimed at improving scientific reasoning and reproducibility through visual and computational tools.",
  tags: [
    "Scientific reasoning",
    "Networks",
    "Visualization",
    "Reproducibility",
    "Open source",
  ],
},
{
    title: "RNA–Protein Discordance (Nextflow)",
    description:
      "Reproducible workflow for paired RNA–protein analysis with QC, normalization, discordance scoring, and figures.",
    tags: ["Nextflow", "R", "Python", "CPTAC"],
    href: "#",
  },
  {
    title: "Antibiotic Resistance Predictor",
    description:
      "ML framework for predicting antibiotic resistance using accessory gene profiles, feature selection, and explainability.",
    tags: ["Python", "ML", "AMR", "SHAP"],
    href: "https://github.com/dipankatanu/Antibiotic-Resistance-Predictor",
  },
  {
    title: "Protein Mutation Predictor",
    description:
      "Predictive modeling of protein mutations integrating sequence-derived features and statistical learning.",
    tags: ["Python", "Proteomics", "Mutation", "ML"],
    href: "https://github.com/dipankatanu/protein-mutation-predictor",
  },
  {
    title: "LINCS State Space Navigator",
    description:
      "State-space exploration of LINCS L1000 perturbation signatures to study drug-induced transcriptional trajectories.",
    tags: ["LINCS", "Transcriptomics", "MATLAB", "Systems Biology"],
    href: "https://github.com/dipankatanu/lincs-state-space-navigator",
  },
  {
    title: "ImmunoSurv",
    description:
      "Computational framework for immune surveillance analysis using transcriptomic signatures and immune pathway activity.",
    tags: ["Immunology", "RNA-seq", "R", "Systems Biology"],
    href: "https://github.com/dipankatanu/immunosurv",
  },
  {
    title: "Decoding Disease with Network Biology",
    description:
      "Network-centric analysis of disease mechanisms using graph theory, centrality measures, and interaction networks.",
    tags: ["Network Biology", "Graph Theory", "Disease Modeling"],
    href: "https://github.com/dipankatanu/Decoding_Disease_with_network_biology",
  },
];
