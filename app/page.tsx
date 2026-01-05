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
    <span className="inline-flex items-center rounded-full border border-sky-200/60 bg-white/40 px-2.5 py-1 text-xs text-slate-700 backdrop-blur dark:border-sky-900/50 dark:bg-slate-950/25 dark:text-slate-200">
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
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        ) : null}
      </div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-sky-200/60 bg-white/45 px-3 py-1 text-xs text-slate-700 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25 dark:text-slate-200">
      {children}
    </span>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="container-lab space-y-14 py-10">
      {/* HERO (calm, modern lab; keep your network background) */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-200/50 bg-white/40 p-8 backdrop-blur-md dark:border-sky-900/35 dark:bg-slate-950/20 sm:p-12">
        <NetworkBackground opacity={0.8} />

        {/* Soft blue wash */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-b
            from-sky-50/90 via-sky-200/55 to-sky-50/92
            dark:from-slate-950/88 dark:via-sky-950/55 dark:to-slate-950/92
          "
        />

        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(2,6,23,0.07)] dark:shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />

        <div className="relative z-10">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Computational Biology • Multi-omics • Network Biology • ML
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Hi, I’m Dipanka
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
            I work on multi-omics systems biology, network-centric target
            discovery, and reproducible computational methods across
            neurodegeneration and cancer.
          </p>

          {/* CTAs: one primary + two quiet links (more “lab site”, less “SaaS”) */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="/cv.pdf"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
            >
              Download CV
            </a>

            <Link
              href="/projects"
              className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
            >
              View projects
            </Link>

            <Link
              href="/publications"
              className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
            >
              Publications
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            <Pill>Based in Ireland</Pill>
            <Pill>Open to collaborations</Pill>
            <Pill>Reproducible research</Pill>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* WHAT I DO (tiles, not boxed cards) */}
      <section className="space-y-6">
        <SectionTitle
          title="What I do"
          subtitle="Core areas I work on and the kinds of problems I like solving."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Multi-omics analysis",
              text:
                "Integration and interpretation across transcriptomics, proteomics, phosphoproteomics, metabolomics, and single-cell data.",
            },
            {
              title: "Network biology",
              text:
                "PPI and regulatory networks for target discovery, centrality-based prioritization, and pathway-level insights.",
            },
            {
              title: "Modeling & ML",
              text:
                "Mathematical models and machine learning for prediction, mechanism exploration, and robust validation.",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl bg-slate-50/70 p-6 transition hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                {x.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {x.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* FEATURED PROJECTS (lighter tiles, less shadow/border) */}
      <section className="space-y-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A few highlighted projects. See the Projects page for the full list."
          right={
            <Link
              className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              href="/projects"
            >
              View all
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => {
            const external = p.href.startsWith("http");
            return (
              <a
                key={p.title}
                href={p.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group rounded-2xl bg-slate-50/70 p-6 transition hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <h3 className="text-sm font-semibold tracking-tight text-slate-900 group-hover:underline dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <div className="hairline" />

      {/* PUBLICATIONS (calm callout band, not a boxed card) */}
      <section className="rounded-3xl bg-slate-50/70 p-8 dark:bg-white/5">
        <SectionTitle
          title="Publications"
          subtitle="Auto-synced from ORCID. Full list, filters, and external links are available."
          right={
            <Link
              className="inline-flex h-10 items-center justify-center rounded-xl border border-neutral-200 bg-white/70 px-4 text-sm font-semibold text-slate-900 hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-slate-100 dark:hover:bg-neutral-900"
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
