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
  file: "/NSG.pdf",
  description:
    "A deep dive into the NSG paper, exploring how l2 norm proximity graphs and out-degree reduction enable fast complex detection and drug-response mapping in LINCS L1000.",
  },
];
