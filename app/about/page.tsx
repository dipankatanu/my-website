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

function Card({ title, text }: { title: string; text: string }) {
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

export default function AboutPage() {
  return (
    <div className="container-lab space-y-12 py-8">
      <PageHeader
        title="About"
        subtitle="Computational biology, multi-omics systems biology, and network-centric modeling."
      />

      {/* Intro band */}
      <section className="rounded-3xl bg-slate-50/70 p-8 dark:bg-white/5">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: narrative */}
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
              . My goal is to extract mechanistic insight from complex
              biological data using principled computational and mathematical
              approaches.
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
              machine learning—because results should be transparent and repeatable.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Pill>Multi-omics integration</Pill>
              <Pill>Network biology</Pill>
              <Pill>Reproducible pipelines</Pill>
              <Pill>Mathematical modeling</Pill>
              <Pill>Interpretable ML</Pill>
            </div>
          </div>

          {/* Right: Snapshot grid + CTA */}
          <div className="space-y-4">
            {/* Snapshot (colored glass grid) */}
            <div className="rounded-3xl border border-sky-200/60 bg-white/40 p-5 backdrop-blur-md dark:border-sky-900/40 dark:bg-slate-950/25">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Snapshot
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  at a glance
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/90 to-white/60 p-4 dark:border-emerald-900/50 dark:from-emerald-950/35 dark:to-slate-950/20">
                  <div className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-200">
                    Focus
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Systems biology
                  </div>
                  <div className="mt-1 text-xs text-slate-700 dark:text-slate-200">
                    Multi-omics integration
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200/60 bg-gradient-to-b from-sky-50/90 to-white/60 p-4 dark:border-sky-900/50 dark:from-sky-950/35 dark:to-slate-950/20">
                  <div className="text-[11px] font-semibold text-sky-800 dark:text-sky-200">
                    Methods
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Networks & modeling
                  </div>
                  <div className="mt-1 text-xs text-slate-700 dark:text-slate-200">
                    ML with interpretability
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-200/60 bg-gradient-to-b from-violet-50/90 to-white/60 p-4 dark:border-violet-900/50 dark:from-violet-950/35 dark:to-slate-950/20">
                  <div className="text-[11px] font-semibold text-violet-800 dark:text-violet-200">
                    Principles
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Reproducibility
                  </div>
                  <div className="mt-1 text-xs text-slate-700 dark:text-slate-200">
                    Transparency & rigor
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200/60 bg-gradient-to-b from-amber-50/90 to-white/60 p-4 dark:border-amber-900/50 dark:from-amber-950/35 dark:to-slate-950/20">
                  <div className="text-[11px] font-semibold text-amber-900 dark:text-amber-200">
                    Open to
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Collaboration
                  </div>
                  <div className="mt-1 text-xs text-slate-700 dark:text-slate-200">
                    Consulting / advising
                  </div>
                </div>
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

            {/* Matching callout */}
            <div className="rounded-3xl border border-slate-200 bg-white/60 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/25 dark:text-slate-200">
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

      {/* What I build */}
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
