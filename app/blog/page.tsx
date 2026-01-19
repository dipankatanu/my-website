import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { blogPdfs } from "../data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and essays on computational biology, bioinformatics, and research methods.",
};

/* ============================================================
   BLOG PAGE - ENHANCED VERSION
   Improved cards, better layout, and visual polish
   ============================================================ */

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sorted = [...blogPdfs].sort((a, b) => b.date.localeCompare(a.date));

  // Extract years for organization
  const postsByYear = sorted.reduce((acc, post) => {
    const year = post.date.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof blogPdfs>);

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* ========================================
          HEADER SECTION
          Title, description, and stats
          ======================================== */}
      <section className="space-y-8">
        <PageHeader
          title="Blog"
          subtitle="Notes and essays on computational biology, bioinformatics, and research methods. Shared as PDFs and viewable directly on-site."
        />

        {/* Stats cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {sorted.length}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Total posts
            </div>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {years.length}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Years of writing
            </div>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              PDF
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Viewable format
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          LATEST POST (Featured)
          Highlight the most recent post
          ======================================== */}
      {sorted.length > 0 && (
        <>
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 text-xl dark:from-sky-900/30 dark:to-blue-900/30">
                ✨
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
                Latest post
              </h2>
            </div>

            <Link
              href={`/blog/${sorted[0].slug}`}
              className="card-interactive group block"
            >
              {/* Featured badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                <span>Latest</span>
                <span>•</span>
                <time>{sorted[0].date}</time>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight text-[color:var(--text-strong)] transition-colors group-hover:text-[color:var(--accent)] sm:text-2xl">
                {sorted[0].title}
              </h3>

              {/* Description */}
              {sorted[0].description && (
                <p className="mt-3 text-base leading-relaxed text-[color:var(--text)]">
                  {sorted[0].description}
                </p>
              )}

              {/* Read more link */}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                <span>Read post</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </section>

          {/* Decorative divider */}
          <div className="divider-decorative" aria-hidden="true" />
        </>
      )}

      {/* ========================================
          ALL POSTS (Organized by Year)
          Complete list grouped by year
          ======================================== */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            All posts
          </h2>
          <p className="mt-3 text-base text-[color:var(--text-muted)]">
            Browse posts organized by year
          </p>
        </div>

        {/* Posts by year */}
        {years.map((year) => (
          <div key={year} className="space-y-6">
            {/* Year header */}
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-[color:var(--text-strong)] sm:text-2xl">
                {year}
              </h3>
              <div className="flex-1 border-t border-[color:var(--border-light)]" />
              <span className="pill">
                {postsByYear[year].length} {postsByYear[year].length === 1 ? 'post' : 'posts'}
              </span>
            </div>

            {/* Posts grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {postsByYear[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-interactive group block"
                >
                  {/* Date */}
                  <time className="text-xs font-medium text-[color:var(--text-muted)]">
                    {post.date}
                  </time>

                  {/* Title */}
                  <h4 className="mt-2 text-base font-bold tracking-tight text-[color:var(--text-strong)] transition-colors group-hover:text-[color:var(--accent)]">
                    {post.title}
                  </h4>

                  {/* Description */}
                  {post.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[color:var(--text)]">
                      {post.description}
                    </p>
                  )}

                  {/* Read link */}
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[color:var(--accent)]">
                    <span>Read post</span>
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ========================================
          EMPTY STATE (if no posts)
          ======================================== */}
      {sorted.length === 0 && (
        <section className="rounded-3xl border border-dashed border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/50 to-white p-12 text-center dark:from-slate-900/20 dark:to-transparent">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 text-3xl dark:from-slate-800/50 dark:to-slate-900/50">
            📝
          </div>
          <h3 className="mt-4 text-lg font-bold text-[color:var(--text-strong)]">
            No posts yet
          </h3>
          <p className="mt-2 text-sm text-[color:var(--text-muted)]">
            Check back soon for new content!
          </p>
        </section>
      )}

    </div>
  );
}
