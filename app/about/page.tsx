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
    <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
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

function StatCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200/70 bg-white/65 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/35 dark:hover:bg-slate-950/45">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-2 text-base font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
        {text}
      </div>
    </div>
  );
}

function SoftGlow() {
  return (
    <>
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-500/10" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-500/10" />
    </>
  );
}

export default function AboutPage() {
  return (
    <div className="container-lab space-y-12 py-8">
      <PageHeader
        title="About"
        subtitle="Computational biology, multi-omics systems biology, and network-centric modeling."
      />

      {/* Full-width intro (no sidebar) */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50/70 p-8 dark:border-slate-800 dark:bg-white/5">
        <SoftGlow />

        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* Left: narrative */}
          <div className="space-y-4">
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

          {/* Right: one clean “identity” block, not a stack of cards */}
          <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/30">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Snapshot
                </div>
                <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  One-liner + quick actions
                </div>
              </div>
              <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200">
                Open to work
              </span>
            </div>

            <div className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-white">
                Multi-omics systems biology
              </span>{" "}
              with network interpretation and reproducible pipelines—focused on
              turning complex datasets into mechanistic, testable hypotheses.
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Explore projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-slate-800 dark:bg-slate-950/25 dark:text-white dark:hover:bg-slate-950/40"
              >
                Contact
              </Link>
            </div>

            <div className="mt-3">
              <Link
                href="/publications"
                className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              >
                View publications →
              </Link>
            </div>
          </div>
        </div>

        {/* Signature strip (this is what replaces the ugly RHS column) */}
        <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Focus"
            title="Systems biology"
            text="Mechanistic interpretation across multi-omics and phenotypes."
          />
          <StatCard
            label="Data"
            title="Multi-omics integration"
            text="RNA • protein • phospho-signaling • metabolomics."
          />
          <StatCard
            label="Methods"
            title="Networks & modeling"
            text="PPI/regulatory structure, modeling, interpretable ML."
          />
          <StatCard
            label="Principle"
            title="Reproducibility"
            text="Transparent workflows, rerunnable analyses, clean outputs."
          />
        </div>

        {/* CTA bar */}
        <div className="relative mt-6 rounded-3xl border border-slate-200/70 bg-white/60 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-200">
          If you’d like to discuss a dataset, a pipeline, or collaboration, the
          fastest way is via the{" "}
          <Link
            href="/contact"
            className="font-semibold text-slate-900 underline underline-offset-4 dark:text-white"
          >
            contact page
          </Link>
          .
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
