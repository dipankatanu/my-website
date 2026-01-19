import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source projects in multi-omics, machine learning, network biology, and reproducible pipelines.",
};

/* ============================================================
   PROJECTS PAGE - ENHANCED VERSION
   Improved cards, better organization, and visual polish
   ============================================================ */

export default function Projects() {
  // Extract unique tags for the stats section
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  ).sort();

  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* ========================================
          HEADER SECTION
          Title, description, and quick stats
          ======================================== */}
      <section className="space-y-8">
        <PageHeader
          title="Projects"
          subtitle="Selected open-source work in multi-omics, machine learning, and network biology. All projects emphasize reproducibility and transparency."
        />

        {/* Quick stats cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {projects.length}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Total projects
            </div>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {allTags.length}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Technologies used
            </div>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              100%
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Open source
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          FEATURED PROJECTS (Top 3)
          Highlighted projects with larger cards
          ======================================== */}
      {projects.length >= 3 && (
        <>
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
                Featured projects
              </h2>
              <p className="mt-3 text-base text-[color:var(--text-muted)]">
                Highlighted work with significant impact or ongoing development
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.slice(0, 3).map((project, index) => {
                const isExternal = project.href.startsWith("http");

                return (
                  <a
                    key={project.title}
                    href={project.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="card-interactive group relative overflow-hidden"
                  >
                    {/* Featured badge */}
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-gradient-to-br from-sky-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        Featured
                      </span>
                    </div>

                    {/* Number indicator */}
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-sm font-bold text-[color:var(--text-strong)] dark:from-sky-900/30 dark:to-blue-900/30">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Title with external link icon */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="flex-1 text-lg font-bold tracking-tight text-[color:var(--text-strong)] transition-colors group-hover:text-[color:var(--accent)]">
                        {project.title}
                      </h3>
                      
                      {isExternal && (
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-[color:var(--text-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="tag"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-[color:var(--text-muted)]">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Decorative divider */}
          <div className="divider-decorative" aria-hidden="true" />
        </>
      )}

      {/* ========================================
          ALL PROJECTS GRID
          Complete list of projects
          ======================================== */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            {projects.length > 3 ? "All projects" : "Projects"}
          </h2>
          <p className="mt-3 text-base text-[color:var(--text-muted)]">
            Browse the complete collection of open-source work
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(projects.length > 3 ? projects.slice(3) : projects).map((project) => {
            const isExternal = project.href.startsWith("http");

            return (
              <a
                key={project.title}
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="card-interactive group"
              >
                {/* Title with external link icon */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="flex-1 text-base font-bold tracking-tight text-[color:var(--text-strong)] transition-colors group-hover:text-[color:var(--accent)]">
                    {project.title}
                  </h3>
                  
                  {isExternal && (
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-[color:var(--text-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-[color:var(--text-muted)]">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          COLLABORATION CTA
          Encourage project contributions
          ======================================== */}
      <section className="overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/90 to-blue-50/60 p-8 shadow-sm dark:from-slate-900/50 dark:to-sky-950/30 sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-3xl dark:from-sky-900/40 dark:to-blue-900/40">
              🚀
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            Interested in collaborating?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            I'm always open to contributions, feedback, and collaboration on these projects.
            If you have ideas for improvements or want to discuss similar work, let's connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/dipankatanu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
            <a
              href="mailto:dipankatanusarmah@gmail.com"
              className="btn-secondary"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
