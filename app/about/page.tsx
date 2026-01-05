import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computational biologist working on multi-omics systems biology, network-centric target discovery, and reproducible methods.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
      {children}
    </span>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50/70 p-6 transition hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10">
      <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
        {text}
      </p>
    </div>
  );
}

function MiniRow({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div className="text-sm font-semibold text-slate-900 dark:text-white">
        {left}
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-300">
        {right}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="container-lab space-y-12 py-8">
      <PageHeader
        title="About"
        subtitle="Computational biology, multi-omics systems biology, and network-centric modeling."
      />

      {/* Intro band (more than plain paragraphs, still academic) */}
      <section className="rounded-3xl bg-slate-50/70 p-8 dark:bg-white/5">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              I’m a computational biologist working at the intersection of{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                multi-omics data analysis
              </span>
              ,{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                systems biology
              </span>
              , and{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                network-centric modeling
              </span>
              . My goal is to extract mechanistic insight from complex biological
              data using principled computational and mathematical approaches.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              I work across neurodegeneration and cancer, with a strong interest
              in integrating transcriptomics, proteomics, phosphoproteomics, and
              metabolomics to identify regulatory bottlenecks and therapeutic
              vulnerabilities.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              In parallel, I build reproducible pipelines and open-source tools
              for large-scale analysis, network prioritization, and interpretable
              machine learning—because results should be transparent and
              repeatable.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Pill>Multi-omics integration</Pill>
              <Pill>Network biology</Pill>
              <Pill>Reproducible pipelines</Pill>
              <Pill>Mathematical modeling</Pill>
              <Pill>Interpretable ML</Pill>
            </div>
          </div>

          {/* Right column: quick facts */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/70 p-5 dark:bg-slate-950/30">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                Snapshot
              </div>
              <div className="mt-3 space-y-3">
                <MiniRow left="Focus" right="Systems biology & multi-omics" />
                <MiniRow left="Methods" right="Networks, modeling, ML" />
                <MiniRow left="Principles" right="Reproducibility & rigor" />
                <MiniRow left="Open to" right="Collaboration & consulting" />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
                >
                  Explore projects
                </Link>
                <Link
                  href="/publications"
                  className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
                >
                  View publications
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200">
              If you’d like to discuss a dataset, a pipeline, or a collaboration,
              the fastest way is via the{" "}
              <Link
                href="/contact"
                className="font-semibold text-slate-900 underline underline-offset-4 dark:text-white"
              >
                contact page
              </Link>
              .
            </div>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Research focus */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            Research focus
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            The themes I keep returning to—across projects and datasets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Multi-omics integration"
            text="Joint analysis across RNA, protein, phospho-signaling, and metabolites to connect regulation to phenotype."
          />
          <Card
            title="Network-centric target discovery"
            text="PPI/regulatory networks, centrality + diffusion ideas, and module-level interpretation for prioritization."
          />
          <Card
            title="Modeling & interpretability"
            text="Mathematical and ML models with an emphasis on explanation, uncertainty, and reproducible evaluation."
          />
        </div>
      </section>

      <div className="hairline" />

      {/* Methods & tools */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            Methods & tools
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            A practical toolkit for end-to-end analysis—from QC to interpretation.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50/70 p-8 dark:bg-white/5">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Core analyses
              </div>
              <div className="flex flex-wrap gap-2">
                <Pill>QC & preprocessing</Pill>
                <Pill>Differential analysis</Pill>
                <Pill>Pathway activity</Pill>
                <Pill>Network construction</Pill>
                <Pill>Module discovery</Pill>
                <Pill>Trajectory / pseudotime</Pill>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Ecosystem
              </div>
              <div className="flex flex-wrap gap-2">
                <Pill>R / Bioconductor</Pill>
                <Pill>Python</Pill>
                <Pill>MATLAB</Pill>
                <Pill>Nextflow</Pill>
                <Pill>Seurat / Monocle</Pill>
                <Pill>limma / DESeq2</Pill>
                <Pill>STRING / igraph</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* What I build / contributions */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            What I build
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Patterns across my open-source work—useful beyond a single dataset.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Reproducible pipelines"
            text="Structured repo layouts, parameter logging, and analysis reports that are easy to rerun and extend."
          />
          <Card
            title="Network algorithms"
            text="Prioritization and robustness ideas (centrality, diffusion, graph structure) for biological networks."
          />
          <Card
            title="Interpretation layers"
            text="From GO/pathway grouping to evidence-aware summaries that connect signals to a mechanistic narrative."
          />
        </div>

        <div className="pt-2">
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
          >
            Browse projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
