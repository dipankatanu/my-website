import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPdfs } from "../../data/blogs";

type BlogParams = { slug: string };

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

  // If you later add fields like `summary`, `description`, `date`, `tags`,
  // this will automatically leverage them.
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

  // Viewer: FitH is nice; add toolbar for convenience.
  const pdfSrc = `${item.file}#view=FitH`;

  return (
    <div className="space-y-7">
      <header className="space-y-3">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            {date ? <time>{date}</time> : null}

            {tags && tags.length > 0 ? (
              <>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Link
                      key={t}
                      href={`/blog?tag=${encodeURIComponent(t)}`}
                      className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {item.description ? (
            <p className="text-neutral-700 dark:text-neutral-200">
              {item.description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF in new tab
          </a>

          <a
            className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
            href={item.file}
            download
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* PDF frame: keep paper-white so it looks good in dark mode */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800">
        <iframe
          src={pdfSrc}
          className="w-full bg-white"
          style={{ height: "82vh" }}
          title={item.title}
          loading="lazy"
        />
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        If the PDF does not render in your browser, use “Open PDF in new tab”.
      </p>
    </div>
  );
}
