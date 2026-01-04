import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, research interests, and focus areas of Dipanka Tanu Sarmah in computational biology and systems biology.",
};

export default function About() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="About"
        subtitle="Computational biology, multi-omics systems biology, and network-centric modeling."
      />

      <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl">
        <p>
          I am a computational biologist working at the intersection of
          multi-omics data analysis, systems biology, and network-based modeling.
          My research focuses on extracting mechanistic insight from complex
          biological data using principled computational and mathematical
          approaches.
        </p>

        <p>
          My work spans diverse application areas including neurodegeneration,
          cancer biology, immune regulation, and drug response modeling. I am
          particularly interested in integrating transcriptomics, proteomics,
          phosphoproteomics, and metabolomics to identify regulatory bottlenecks
          and therapeutic vulnerabilities.
        </p>

        <p>
          In parallel, I develop reproducible pipelines and open-source tools for
          large-scale data analysis, network-centric target discovery, and
          interpretable machine learning. I strongly value transparency,
          reproducibility, and methodological rigor in computational research.
        </p>
      </div>
    </div>
  );
}
