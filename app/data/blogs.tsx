export type BlogPdf = {
  slug: string;        // must match URL
  title: string;
  date: string;        // YYYY-MM-DD
  file: string;        // under /public
  description?: string;
};

export const blogPdfs: BlogPdf[] = [
  {
    slug: "illusion-lab-coat",
    title: "The Illusion in the Lab Coat: How Computational Biology Can Deceive Itself",
    date: "2025-03-01",
    file: "/blogs/illusion-in-the-lab-coat.pdf",
    description:
      "A critical essay on self-deception, statistical illusion, and methodological fragility in computational biology.",
  },
  {
    slug: "vivo-seq",
    title: "Vivo-seq: A New Era of Single-Cell Biology Beyond Transcriptomics",
    date: "2025-02-10",
    file: "/blogs/vivo-seq-beyond-transcriptomics.pdf",
    description:
      "An overview of Vivo-seq and why integrating phospho-signaling with transcriptomics changes how we interpret cell states.",
  },
  {
    slug: "lenvatinib-autophagy",
    title: "Lenvatinib Resistance and the Role of Autophagy in Hepatocellular Carcinoma",
    date: "2025-01-18",
    file: "/blogs/lenvatinib-resistance-autophagy.pdf",
    description:
      "Mechanistic insights into drug resistance in HCC, focusing on autophagy and therapeutic implications.",
  },
  {
    slug: "lung-cancer-drugs-2024-2025",
    title: "FDA-Approved Lung Cancer Drugs (2024–March 2025): Targets and Mechanisms",
    date: "2025-01-05",
    file: "/blogs/lung-cancer-drugs-2024-2025.pdf",
    description:
      "A concise review of recently approved lung cancer drugs, their molecular targets, and mechanisms.",
  },
  {
  slug: "scale-free-networks-in-biology",
  title: "Scale-Free Networks in Biology: Power, Pitfalls, and the Seduction of Universality",
  date: "2026-01-05",
  file: "/blogs/Scale_Free_Networks_in_Biology.pdf",
  description:
    "A critical essay on scale-free networks in biology, examining why the concept became dominant, where it provides insight, and where it can mislead biological interpretation.",
},
{
  slug: "nsg-proximity-graphs-biology",
  title: "Navigating Spreading-out Graphs: Efficient Search in Biological Networks",
  date: "2026-01-19",
  file: "/nsg-proximity-graphs-biology.pdf",
  description:
    "A deep dive into the NSG paper, exploring how l2 norm proximity graphs and out-degree reduction enable fast complex detection and drug-response mapping in LINCS L1000.",
  },
  {
  slug: "geometry-of-interaction-proximity-graphs",
  title: "The Geometry of Interaction: Proximity Graphs in Modern Network Biology",
  date: "2026-01-19",
  file: "/blogs/Proximity_Graphs_Theory.pdf", 
  description: "An expert-level exploration of how k-NN, RNG, and NSG frameworks transform topological 'hairballs' into precise geometric manifolds for drug discovery and spatial transcriptomics."
},
{
  slug: "information-bottleneck-of-life",
  title: "The Information Bottleneck of Life: Geometry, Entropy, and Topology in Biological Systems",
  date: "2026-01-19",
  file: "/blogs/The_Information_Bottleneck_of_Life.pdf",
  description: "A masterclass-style synthesis arguing that biological function and disease emerge from geometric constraints on information flow. Integrates spectral graph theory, curvature, entropy, graph signal processing, and persistent homology to frame life as a navigable manifold shaped by evolution and thermodynamics."
},
{
  slug: "demystifying_git",
  title: "Demystifying Git: The Content-Addressable Filesystem",
  date: "2026-01-20",
  file: "/blogs/Demystifying_Git.pdf",
  description: "A technical synthesis of Git's inner architecture, framing version control as a navigable manifold. This guide integrates the mechanics of SHA-1 hashing, directed acyclic graphs (DAG), and content-addressable storage to explain how Git manages project entropy."
},
{
  slug: "machine-learning-notes",
  title: "Notes on Machine Learning: From Linear Models to Multimodal Transformers",
  date: "2026-01-21",
  file: "/blogs/Machine_Learning_Notes.pdf",
  description: "Personal yet rigorous notes tracing the evolution of machine learning from linear and tree-based models to Transformers, language models, and vision–language systems. Written as a structured synthesis for learning and reflection, rather than a definitive textbook."
},
{
  slug: "Markdown_and_LLM",
  title: "The Structured Dialogue: How Markdown Elevates LLM Outputs",
  date: "2026-01-23",
  file: "/blogs/Markdown_and_LLM.pdf",
  description: "Master the art of structured prompting by using Markdown to transform generic AI responses into precise, high-quality outputs for complex fields like bioinformatics."
},
{
  slug: "Programming_Languages_Philosophy",
  title: "The Soul of Code: Philosophy and Design of Programming Languages",
  date: "2026-01-25",
  file: "/blogs/Programming_Languages_Philosophy.pdf",
  description: "A deep dive into the design motivations and tradeoffs behind major programming languages, highlighting how abstraction, control, and community shape modern software systems."
}
];
