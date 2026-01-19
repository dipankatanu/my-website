import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "./data/projects";
import NetworkBackground from "./components/NetworkBackground";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website of Dipanka Tanu Sarmah — computational biology, multi-omics, networks, and ML.",
};

/* ============================================================
   REUSABLE COMPONENTS
   ============================================================ */

/**
 * Tag component for project categories
 * Small, subtle badges with light background
 */
function Tag({ label }: { label: string }) {
  return (
    <span className="tag">
      {label}
    </span>
  );
}

/**
 * Pill component for metadata/status indicators
 * Slightly larger than tags, used for hero section info
 */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="pill">
      {children}
    </span>
  );
}

/**
 * Section title with optional subtitle and right-aligned action
 * Provides consistent heading hierarchy across sections
 */
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
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex-1">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div className="flex-shrink-0">{right}</div>}
    </div>
  );
}

/* ============================================================
   MAIN HOME PAGE COMPONENT
   ============================================================ */

export default function Home() {
  // Get first 3 projects for featured section
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-20 py-8 sm:py-12">
      
      {/* ========================================
          HERO SECTION
          Large, eye-catching introduction with animated background
          ======================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-white/60 p-8 shadow-sm backdrop-blur-sm dark:bg-slate-950/40 sm:p-12 lg:p-16">
        
        {/* Animated network background */}
        <NetworkBackground opacity={0.65} />

        {/* Gradient overlay for depth and readability */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50/95 via-white/90 to-blue-50/95 dark:from-slate-950/95 dark:via-slate-900/90 dark:to-sky-950/95"
          aria-hidden="true"
        />

        {/* Subtle vignette effect */}
        <div 
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(2,6,23,0.06)] dark:shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]"
          aria-hidden="true"
        />

        {/* Main content */}
        <div className="relative z-10 max-w-4xl">
          
          {/* Eyebrow text - small caps descriptor */}
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--text-muted)]">
            Computational Biology • Multi-omics • Network Biology • ML
          </p>

          {/* Main headline */}
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.1] tracking-tight text-[color:var(--text-strong)] sm:text-6xl lg:text-7xl">
            Hi, I'm Dipanka
          </h1>

          {/* Subheading / value proposition */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--text)] sm:text-xl">
            I work on multi-omics systems biology, network-centric target
            discovery, and reproducible computational methods across
            neurodegeneration and cancer.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a 
              href="/cv.pdf" 
              className="btn-primary"
              aria-label="Download my curriculum vitae"
            >
              Download CV
            </a>
            <Link 
              href="/projects" 
              className="btn-secondary"
            >
              View projects
            </Link>
            <Link 
              href="/publications" 
              className="btn-link"
            >
              Publications →
            </Link>
          </div>

          {/* Info pills - location, availability, etc. */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill>📍 Based in Ireland</Pill>
            <Pill>🤝 Open to collaborations</Pill>
            <Pill>🔬 Reproducible research</Pill>
          </div>
        </div>
      </section>

      {/* Decorative divider with center dot */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          WHAT I DO SECTION
          Core competencies and research areas
          ======================================== */}
      <section className="space-y-8">
        <SectionTitle
          title="What I do"
          subtitle="Core areas I work on and the kinds of problems I like solving."
        />

        {/* Competency cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🧬",
              title: "Multi-omics analysis",
              text: "Integration and interpretation across transcriptomics, proteomics, phosphoproteomics, metabolomics, and single-cell data.",
            },
            {
              icon: "🕸️",
              title: "Network biology",
              text: "PPI and regulatory networks for target discovery, centrality-based prioritization, and pathway-level insights.",
            },
            {
              icon: "🤖",
              title: "Modeling & ML",
              text: "Mathematical models and machine learning for prediction, mechanism exploration, and robust validation.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card group"
            >
              {/* Icon - optimized size and opacity for light mode */}
              <div className="mb-4 text-3xl opacity-90 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100 dark:opacity-100">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold tracking-tight text-[color:var(--text-strong)]">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          FEATURED PROJECTS SECTION
          Showcase of top 3 projects
          ======================================== */}
      <section className="space-y-8">
        <SectionTitle
          title="Featured projects"
          subtitle="A few highlighted projects. See the Projects page for the full list."
          right={
            <Link 
              href="/projects" 
              className="btn-link"
            >
              View all →
            </Link>
          }
        />

        {/* Project cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => {
            const isExternal = project.href.startsWith("http");
            
            return (
              <a
                key={project.title}
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="card-interactive group"
                aria-label={`View project: ${project.title}`}
              >
                {/* Project title with external link indicator */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="flex-1 text-lg font-bold tracking-tight text-[color:var(--text-strong)] transition-colors group-hover:text-[color:var(--accent)]">
                    {project.title}
                  </h3>
                  
                  {/* External link icon */}
                  {isExternal && (
                    <svg 
                      className="h-4 w-4 flex-shrink-0 text-[color:var(--text-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>

                {/* Project description */}
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text)]">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                  
                  {/* Show "+N more" if there are additional tags */}
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
          PUBLICATIONS TEASER SECTION
          Call-to-action for publications page
          ======================================== */}
      <section className="overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/90 to-blue-50/60 p-8 shadow-sm dark:from-slate-900/50 dark:to-sky-950/30 sm:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left side - Title and description */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
              Publications
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
              Auto-synced from ORCID. Full list, filters, and external links are available on the dedicated page.
            </p>
          </div>

          {/* Right side - CTA button */}
          <div className="flex-shrink-0">
            <Link 
              href="/publications" 
              className="btn-primary"
            >
              View publications
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
