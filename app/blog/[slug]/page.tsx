import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPdfs } from "../../data/blogs";

type Params = { slug: string };

function getItem(slugRaw: string) {
  const slug = decodeURIComponent(slugRaw).trim().toLowerCase();

  // Exact match (preferred)
  const exact = blogPdfs.find((b) => b.slug.toLowerCase() === slug);
  if (exact) return exact;

  // Fallback: tolerate underscores/spaces, etc.
  const normalized = slug.replace(/[\s_]+/g, "-");
  return blogPdfs.find((b) => b.slug.toLowerCase() === normalized) ?? null;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = getItem(params.slug);
  if (!item) {
    return {
      title: "Blog",
      description: "Blog post not found.",
    };
  }

  return {
    title: item.title,
    description: item.description ?? "Blog post (PDF).",
  };
}

export default function BlogPdfViewer({ params }: { params: Params }) {
  const item = getItem(params.slug);
  if (!item) return notFound();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
        {item.description ? <p className="text-gray-600">{item.description}</p> : null}

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm transition dark:border-zinc-800"
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF in new tab
          </a>

          <a
            className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm transition dark:border-zinc-800"
            href={item.file}
            download
          >
            Download PDF
          </a>
        </div>
      </header>

      <div className="rounded-2xl border overflow-hidden dark:border-zinc-800">
        <iframe
          src={`${item.file}#view=FitH`}
          className="w-full"
          style={{ height: "82vh" }}
          title={item.title}
        />
      </div>

      <p className="text-xs text-gray-500">
        If the PDF does not render in your browser, use “Open PDF in new tab”.
      </p>
    </div>
  );
}
