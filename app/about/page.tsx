import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computational biologist working on multi-omics systems biology, network-centric target discovery, and reproducible methods.",
};

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-900"
    >
      {children}
    </Link>
  );
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function AboutPage() {
  const para =
    "text-base leading-relaxed text-slate-700 dark:text-slate-200 text-justify hyphens-auto";

  return (
    <div className="container-lab space-y-16 py-12">
      {/* Hero */}
      <section className="space-y-8">
        <PageHeader
          eyebrow="About"
          title="I work on multi-omics systems biology."
          subtitle="My work focuses on extracting mechanistic insight from complex biological data using network-centric modeling, mathematical reasoning, and reproducible computational pipelines."
        />

        <div className="flex flex-wrap gap-3">
  <Link href="/projects" className="btn-primary">View projects</Link>
  <Link href="/publications" className="btn-secondary">Publications</Link>
  <Link href="/contact" className="btn-link">Contact</Link>
</div>

      </section>

      {/* Stronger divider */}
      <div className="divider-strong" />

      {/* Philosophy (keep readable width consistent) */}
      <section className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Research philosophy
        </h2>

        <p className={para}>
          I approach biological systems as{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            interacting, dynamic networks
          </span>{" "}
          rather than isolated components. My goal is to move beyond descriptive
          analysis and identify{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            regulatory bottlenecks, causal structure, and therapeutic vulnerabilities
          </span>
          .
        </p>

        <p className={para}>
          I work across neurodegeneration and cancer, integrating transcriptomics,
          proteomics, phosphoproteomics, and metabolomics to connect molecular
          regulation with phenotype.
        </p>
      </section>

      <div className="divider-strong" />

      {/* What I do (full width but still readable) */}
      <section className="space-y-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          What I work on
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Multi-omics integration
            </h3>
            <p className={para}>
              Joint analysis of RNA, protein, phospho-signaling, and metabolites to
              link regulation to phenotype.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Network-centric target discovery
            </h3>
            <p className={para}>
              PPI and regulatory networks, centrality and diffusion methods, and
              module-level interpretation.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Modeling & interpretability
            </h3>
            <p className={para}>
              Mathematical and machine-learning models with an emphasis on
              explanation, uncertainty, and robustness.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Reproducible methods
            </h3>
            <p className={para}>
              Transparent pipelines, parameter logging, versioned datasets, and
              rerunnable analyses.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-strong" />

      {/* Toolkit (match width rules) */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Methods & tools
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <ul className="space-y-2 text-slate-700 dark:text-slate-200">
            <li>• Differential expression & pathway activity analysis</li>
            <li>• Network construction and module discovery</li>
            <li>• Trajectory / pseudotime analysis</li>
            <li>• Evidence-aware interpretation layers</li>
          </ul>

          <ul className="space-y-2 text-slate-700 dark:text-slate-200">
            <li>• R / Bioconductor, Python, MATLAB</li>
            <li>• Nextflow-based reproducible workflows</li>
            <li>• Seurat, Monocle, limma, DESeq2</li>
            <li>• STRING, igraph, network analytics</li>
          </ul>
        </div>
      </section>

      <div className="divider-strong" />

      {/* Collaboration (consistent readable width) */}
      <section className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Collaboration
        </h2>

        <p className={para}>
          I am open to research collaborations, consulting, and interdisciplinary
          projects involving complex biological datasets and systems-level analysis.
        </p>

        <Link
          href="/contact"
          className="inline-block font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-300"
        >
          Get in touch →
        </Link>
      </section>
    </div>
  );
}
