import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { blogPdfs } from "../data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and essays (viewable on-site).",
};

export default function BlogPage() {
  const sorted = [...blogPdfs].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-8">
      <PageHeader title="Blog" subtitle="Notes and essays shared as PDFs (viewable on-site)." />

      <div className="space-y-4">
        {sorted.map((b) => (
          <Link
            key={b.slug}
            href={`/blog/${b.slug}`}
            className="block rounded-2xl border p-5 hover:shadow-sm transition dark:border-zinc-800"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold">{b.title}</h2>
              <span className="text-sm text-gray-500">{b.date}</span>
            </div>
            {b.description ? (
              <p className="mt-2 text-sm text-gray-700 dark:text-zinc-300">
                {b.description}
              </p>
            ) : null}
            <p className="mt-3 text-sm underline underline-offset-4">Read →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
