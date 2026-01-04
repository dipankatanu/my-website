import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "./data/projects";
import NetworkBackground from "./components/NetworkBackground";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website of Dipanka Tanu Sarmah — computational biology, multi-omics, networks, and ML.",
};

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-200/70 bg-white/40 px-2.5 py-1 text-xs text-slate-700 backdrop-blur dark:border-sky-900/50 dark:bg-slate-950/30 dark:text-slate-200">
      {label}
    </span>
  );
}

function SectionTitle({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        ) : null}
      </div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* HERO (Blue glass + animated network) */}
      <section className="relative overflow-hidden rounded-2xl border border-sky-200/60 bg-white/50 p-8 shadow-sm backdrop-blur-md dark:border-sky-900/40 dark:bg-slate-950/30 sm:p-10">
        {/* Animated network */}
        <NetworkBackground opacity={0.8} />

        {/* Blue glass overlay (stronger via tint) */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-b
            from-sky-50/90 via-sky-200/65 to-sky-50/92
            dark:from-slate-950/88 dark:via-sky-950/65 dark:to-slate-950/92
          "
        />

        {/* Subtle vignette to add depth */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(2,6,23,0.08)] dark:shadow-[inset_0_0_160px_rgba(0,0,0,0.45)]" />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Computational Biology • Multi-omics • Network Biology • ML
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Hi, I’m Dipanka
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
            I work on multi-omics systems biology, network-centric target discovery,
            and reproducible computational methods across neurodegeneration and cancer.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
            >
              Download CV
            </a>

            <Link
              href="/projects"
              className="rounded-md border border-sky-300/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white dark:border-sky-800/60 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/40"
            >
              View Projects
            </Link>

            <Link
              href="/publications"
              className="rounded-md border border-sky-300/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white dark:border-sky-800/60 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/40"
            >
              Publications
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
            <span className="rounded-full border border-sky-200/60 bg-white/45 px-3 py-1 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25">
              Based in Ireland
            </span>
            <span className="rounded-full border border-sky-200/60 bg-white/45 px-3 py-1 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25">
              Open to collaborations
            </span>
            <span className="rounded-full border border-sky-200/60 bg-white/45 px-3 py-1 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25">
              Reproducible research
            </span>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="space-y-4">
        <SectionTitle
          title="What I do"
          subtitle="Core areas I work on and the kinds of problems I like solving."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/40">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Multi-omics analysis
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              Integration and interpretation across transcriptomics, proteomics,
              phosphoproteomics, metabolomics, and single-cell data.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/40">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Network biology
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              PPI and regulatory networks for target discovery, centrality-based
              prioritization, and pathway-level insights.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/40">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Modeling & ML
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              Mathematical models and machine learning for prediction, mechanism
              exploration, and robust validation.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="A few highlighted projects. See the Projects page for the full list."
          right={
            <Link
              className="text-sm underline underline-offset-4 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              href="/projects"
            >
              View all
            </Link>
          }
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => {
            const external = p.href.startsWith("http");
            return (
              <a
                key={p.title}
                href={p.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group block rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950/40"
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold tracking-tight text-slate-900 group-hover:underline dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-200">
                    {p.description}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* PUBLICATIONS CALLOUT */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/40">
        <SectionTitle
          title="Publications"
          subtitle="Auto-synced from ORCID. Full list, filters, and external links are available."
          right={
            <Link
              className="rounded-md border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-medium hover:bg-white dark:border-neutral-700 dark:bg-neutral-950/40 dark:hover:bg-neutral-900"
              href="/publications"
            >
              View publications
            </Link>
          }
        />
      </section>
    </div>
  );
}
