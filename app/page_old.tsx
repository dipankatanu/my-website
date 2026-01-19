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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-sky-200/60 bg-white/45 px-3 py-1 text-xs text-slate-700 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25 dark:text-slate-200">
      {children}
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
        <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-base text-[color:var(--text)]">
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
    <div className="container-lab space-y-14 py-10">
      {/* HERO */}
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

        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
            Computational Biology • Multi-omics • Network Biology • ML
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-6xl">
            Hi, I’m Dipanka
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            I work on multi-omics systems biology, network-centric target
            discovery, and reproducible computational methods across
            neurodegeneration and cancer.
          </p>

          {/* CTAs (token buttons fix dark/light issues) */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/cv.pdf" className="btn-primary">
              Download CV
            </a>
            <Link href="/projects" className="btn-secondary">
              View projects
            </Link>
            <Link href="/publications" className="btn-link">
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

      <div className="divider-strong" />

      {/* WHAT I DO */}
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
              <h3 className="text-sm font-semibold tracking-tight text-[color:var(--text-strong)]">
                {x.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text)]">
                {x.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-strong" />

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <SectionTitle
          title="Featured projects"
          subtitle="A few highlighted projects. See the Projects page for the full list."
          right={
            <Link href="/projects" className="btn-link">
              View all →
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
                <h3 className="text-sm font-semibold tracking-tight text-[color:var(--text-strong)] group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text)]">
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

      <div className="divider-strong" />

      {/* PUBLICATIONS */}
      <section className="rounded-3xl bg-slate-50/70 p-8 dark:bg-white/5">
        <SectionTitle
          title="Publications"
          subtitle="Auto-synced from ORCID. Full list, filters, and external links are available."
          right={
            <Link href="/publications" className="btn-secondary">
              View publications
            </Link>
          }
        />
      </section>
    </div>
  );
}
