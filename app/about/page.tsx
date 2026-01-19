import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computational biologist working on multi-omics systems biology, network-centric target discovery, and reproducible methods.",
};

/* ============================================================
   ABOUT PAGE - ENHANCED VERSION
   Professional, clean, research-focused design with improved
   visual hierarchy and engagement
   ============================================================ */

export default function AboutPage() {
  return (
    <div className="space-y-20 py-8 sm:py-12">
      
      {/* ========================================
          HERO SECTION
          Main introduction with CTAs
          ======================================== */}
      <section className="space-y-8">
        <PageHeader
          eyebrow="About"
          title="I work on multi-omics systems biology."
          subtitle="My work focuses on extracting mechanistic insight from complex biological data using network-centric modeling, mathematical reasoning, and reproducible computational pipelines."
        />

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="btn-primary">
            View projects
          </Link>
          <Link href="/publications" className="btn-secondary">
            Publications
          </Link>
          <Link href="/contact" className="btn-link">
            Contact →
          </Link>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          RESEARCH PHILOSOPHY SECTION
          Core approach and principles
          ======================================== */}
      <section className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
          Research philosophy
        </h2>

        <div className="space-y-5 text-base leading-relaxed text-[color:var(--text)]">
          <p>
            I approach biological systems as{" "}
            <span className="font-semibold text-[color:var(--text-strong)]">
              interacting, dynamic networks
            </span>{" "}
            rather than isolated components. My goal is to move beyond descriptive
            analysis and identify{" "}
            <span className="font-semibold text-[color:var(--text-strong)]">
              regulatory bottlenecks, causal structure, and therapeutic vulnerabilities
            </span>
            .
          </p>

          <p>
            I work across neurodegeneration and cancer, integrating transcriptomics,
            proteomics, phosphoproteomics, and metabolomics to connect molecular
            regulation with phenotype.
          </p>

          <p className="text-sm text-[color:var(--text-muted)]">
            <strong className="font-semibold text-[color:var(--text)]">Core principle:</strong>{" "}
            Every computational result should be reproducible, interpretable, and grounded 
            in biological mechanism—not just statistically significant.
          </p>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          WHAT I WORK ON SECTION
          Research areas with enhanced cards
          ======================================== */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            What I work on
          </h2>
          <p className="mt-3 text-base text-[color:var(--text-muted)]">
            Four interconnected pillars of my research approach
          </p>
        </div>

        {/* Research areas grid with enhanced cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {[
            {
              number: "01",
              title: "Multi-omics integration",
              description:
                "Joint analysis of RNA, protein, phospho-signaling, and metabolites to link regulation to phenotype.",
              icon: "🧬",
            },
            {
              number: "02",
              title: "Network-centric target discovery",
              description:
                "PPI and regulatory networks, centrality and diffusion methods, and module-level interpretation.",
              icon: "🕸️",
            },
            {
              number: "03",
              title: "Modeling & interpretability",
              description:
                "Mathematical and machine-learning models with an emphasis on explanation, uncertainty, and robustness.",
              icon: "📊",
            },
            {
              number: "04",
              title: "Reproducible methods",
              description:
                "Transparent pipelines, parameter logging, versioned datasets, and rerunnable analyses.",
              icon: "🔬",
            },
          ].map((area) => (
            <div
              key={area.number}
              className="card group relative overflow-hidden"
            >
              {/* Number badge - top right */}
              <div className="absolute right-4 top-4 text-5xl font-bold opacity-5 transition-opacity group-hover:opacity-10">
                {area.number}
              </div>

              {/* Icon container */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-2xl transition-transform duration-200 group-hover:scale-110 dark:from-sky-900/30 dark:to-blue-900/30">
                {area.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold tracking-tight text-[color:var(--text-strong)]">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          METHODS & TOOLS SECTION
          Technical toolkit with better organization
          ======================================== */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            Methods & tools
          </h2>
          <p className="mt-3 text-base text-[color:var(--text-muted)]">
            Computational approaches and software I use regularly
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          
          {/* Computational methods */}
          <div className="space-y-4 rounded-2xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/50 to-white p-6 dark:from-slate-900/20 dark:to-transparent sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 text-xl dark:from-sky-900/30 dark:to-blue-900/30">
                📐
              </div>
              <h3 className="text-lg font-bold text-[color:var(--text-strong)]">
                Computational methods
              </h3>
            </div>
            
            <ul className="space-y-3 text-sm leading-relaxed text-[color:var(--text)]">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                <span>Differential expression & pathway activity analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                <span>Network construction and module discovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                <span>Trajectory / pseudotime analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                <span>Evidence-aware interpretation layers</span>
              </li>
            </ul>
          </div>

          {/* Software & platforms */}
          <div className="space-y-4 rounded-2xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/50 to-white p-6 dark:from-slate-900/20 dark:to-transparent sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 text-xl dark:from-purple-900/30 dark:to-pink-900/30">
                💻
              </div>
              <h3 className="text-lg font-bold text-[color:var(--text-strong)]">
                Software & platforms
              </h3>
            </div>
            
            <ul className="space-y-3 text-sm leading-relaxed text-[color:var(--text)]">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                <span>R / Bioconductor, Python, MATLAB</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                <span>Nextflow-based reproducible workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                <span>Seurat, Monocle, limma, DESeq2</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                <span>STRING, igraph, network analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          EXPERTISE AREAS SECTION (NEW!)
          Visual breakdown of domain expertise
          ======================================== */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            Domain expertise
          </h2>
          <p className="mt-3 text-base text-[color:var(--text-muted)]">
            Disease contexts and biological systems I focus on
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Neurodegeneration */}
          <div className="card-interactive group">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 text-3xl transition-transform duration-200 group-hover:scale-110 dark:from-orange-900/30 dark:to-red-900/30">
              🧠
            </div>
            
            <h3 className="text-lg font-bold text-[color:var(--text-strong)]">
              Neurodegeneration
            </h3>
            
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
              Alzheimer's, Parkinson's, and related disorders. Focus on protein aggregation, 
              synaptic dysfunction, and neuroinflammation through multi-omics lens.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Alzheimer's", "Parkinson's", "ALS", "Tau pathology"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cancer biology */}
          <div className="card-interactive group">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-3xl transition-transform duration-200 group-hover:scale-110 dark:from-green-900/30 dark:to-emerald-900/30">
              🎗️
            </div>
            
            <h3 className="text-lg font-bold text-[color:var(--text-strong)]">
              Cancer biology
            </h3>
            
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
              Tumor heterogeneity, drug resistance mechanisms, and biomarker discovery. 
              Systems-level analysis of signaling dysregulation and metabolic rewiring.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Drug resistance", "Biomarkers", "Signaling", "Metabolism"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          COLLABORATION CTA SECTION
          Encouraging engagement
          ======================================== */}
      <section className="overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/90 to-blue-50/60 p-8 shadow-sm dark:from-slate-900/50 dark:to-sky-950/30 sm:p-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-2xl dark:from-sky-900/40 dark:to-blue-900/40">
              🤝
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
              Let's collaborate
            </h2>
          </div>

          <p className="text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            I am open to research collaborations, consulting, and interdisciplinary
            projects involving complex biological datasets and systems-level analysis.
            If you have interesting data, challenging problems, or novel hypotheses to test,
            I'd love to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <a href="/cv.pdf" className="btn-secondary">
              Download CV
            </a>
            <Link href="/publications" className="btn-link">
              View publications →
            </Link>
          </div>

          {/* Quick stats / highlights */}
          <div className="mt-10 grid gap-6 border-t border-[color:var(--border-light)] pt-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-[color:var(--text-strong)]">
                Multi-omics
              </div>
              <div className="mt-1 text-sm text-[color:var(--text-muted)]">
                Integration expertise
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[color:var(--text-strong)]">
                Network-driven
              </div>
              <div className="mt-1 text-sm text-[color:var(--text-muted)]">
                Target discovery
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[color:var(--text-strong)]">
                100% reproducible
              </div>
              <div className="mt-1 text-sm text-[color:var(--text-muted)]">
                Computational pipelines
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
