import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPdfs } from "../../data/blogs";

/* ============================================================
   TYPE DEFINITIONS
   ============================================================ */

type BlogParams = { slug: string };

/* ============================================================
   HELPER FUNCTIONS
   ============================================================ */

// Helper: works whether params is a Promise or a plain object
async function unwrapParams(
  params: BlogParams | Promise<BlogParams>
): Promise<BlogParams> {
  return await params;
}

function getItem(slugRaw: string) {
  const slug = decodeURIComponent(slugRaw).trim().toLowerCase();
  return blogPdfs.find((b) => b.slug.toLowerCase() === slug) ?? null;
}

// Get related posts (same year or adjacent in list)
function getRelatedPosts(currentSlug: string, maxResults: number = 3) {
  const currentIndex = blogPdfs.findIndex((b) => b.slug === currentSlug);
  if (currentIndex === -1) return [];

  const related: typeof blogPdfs = [];
  
  // Add previous post
  if (currentIndex > 0) {
    related.push(blogPdfs[currentIndex - 1]);
  }
  
  // Add next post
  if (currentIndex < blogPdfs.length - 1) {
    related.push(blogPdfs[currentIndex + 1]);
  }
  
  // Fill remaining slots with other posts
  const remaining = maxResults - related.length;
  if (remaining > 0) {
    const others = blogPdfs
      .filter((b) => b.slug !== currentSlug && !related.includes(b))
      .slice(0, remaining);
    related.push(...others);
  }
  
  return related.slice(0, maxResults);
}

/* ============================================================
   METADATA GENERATION
   ============================================================ */

export async function generateMetadata({
  params,
}: {
  params: BlogParams | Promise<BlogParams>;
}): Promise<Metadata> {
  const { slug } = await unwrapParams(params);
  const item = getItem(slug);

  if (!item) {
    return {
      title: "Blog",
      description: "Blog post not found.",
      robots: { index: false, follow: false },
    };
  }

  const title = item.title;
  const description = item.description ?? "Blog post (PDF).";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${item.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */

export default async function BlogPdfViewer({
  params,
}: {
  params: BlogParams | Promise<BlogParams>;
}) {
  const { slug } = await unwrapParams(params);
  const item = getItem(slug);

  if (!item) return notFound();

  // Optional fields (won't break if missing in your blogPdfs objects)
  const date = (item as any).date as string | undefined;
  const tags = (item as any).tags as string[] | undefined;

  // Get related posts for suggestions
  const relatedPosts = getRelatedPosts(item.slug);

  // PDF viewer with better UX
  const pdfSrc = `${item.file}#view=FitH&toolbar=1`;

  return (
    <div className="space-y-12 py-8 sm:py-12">
      
      {/* ========================================
          BREADCRUMB NAVIGATION
          Back to blog list
          ======================================== */}
      <nav className="flex items-center gap-2 text-sm">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text-strong)]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to blog</span>
        </Link>
      </nav>

      {/* ========================================
          POST HEADER
          Title, metadata, and actions
          ======================================== */}
      <header className="space-y-6">
        <div className="space-y-4">
          {/* Date badge */}
          {date && (
            <time className="inline-flex items-center rounded-full bg-gradient-to-br from-sky-100 to-blue-100 px-4 py-1.5 text-xs font-semibold text-[color:var(--text-strong)] dark:from-sky-900/30 dark:to-blue-900/30">
              {date}
            </time>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>

          {/* Description */}
          {item.description && (
            <p className="max-w-3xl text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
              {item.description}
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[color:var(--text-muted)]">
                Topics:
              </span>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="tag transition-transform hover:scale-105"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open in new tab
          </a>
          <a
            href={item.file}
            download
            className="btn-secondary"
          >
            Download PDF
          </a>
          <Link
            href="/blog"
            className="btn-link"
          >
            ← Back to all posts
          </Link>
        </div>
      </header>

      {/* Decorative divider */}
      <div className="divider-strong" aria-hidden="true" />

      {/* ========================================
          PDF VIEWER
          Embedded PDF with paper-white background
          ======================================== */}
      <section className="space-y-4">
        {/* PDF container with shadow */}
        <div className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-white shadow-lg dark:border-[color:var(--border-medium)]">
          <iframe
            src={pdfSrc}
            className="w-full bg-white"
            style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
            title={item.title}
            loading="lazy"
          />
        </div>

        {/* Help text */}
        <p className="text-center text-xs text-[color:var(--text-muted)]">
          If the PDF does not render in your browser, use "Open in new tab" above.
        </p>
      </section>

      {/* ========================================
          RELATED POSTS (if available)
          Suggestions for further reading
          ======================================== */}
      {relatedPosts.length > 0 && (
        <>
          {/* Decorative divider */}
          <div className="divider-decorative" aria-hidden="true" />

          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
                Continue reading
              </h2>
              <p className="mt-3 text-base text-[color:var(--text-muted)]">
                More posts you might find interesting
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-interactive group block"
                >
                  {/* Date */}
                  {(post as any).date && (
                    <time className="text-xs font-medium text-[color:var(--text-muted)]">
                      {(post as any).date}
                    </time>
                  )}

                  {/* Title */}
                  <h3 className="mt-2 text-base font-bold tracking-tight text-[color:var(--text-strong)] transition-colors group-hover:text-[color:var(--accent)]">
                    {post.title}
                  </h3>

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
          </section>
        </>
      )}

      {/* ========================================
          BACK TO BLOG CTA
          ======================================== */}
      <section className="overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/90 to-blue-50/60 p-8 shadow-sm dark:from-slate-900/50 dark:to-sky-950/30 sm:p-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-2xl dark:from-sky-900/40 dark:to-blue-900/40">
            📚
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[color:var(--text-strong)]">
              Explore more posts
            </h3>
            <p className="mt-2 text-sm text-[color:var(--text)]">
              Browse the complete collection of notes and essays on computational biology
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-primary flex-shrink-0"
          >
            View all posts
          </Link>
        </div>
      </section>

    </div>
  );
}
