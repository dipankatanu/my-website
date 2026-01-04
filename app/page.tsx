import Link from "next/link";
import { projects } from "./data/projects";

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs rounded-full border px-2 py-1 text-gray-600">
      {label}
    </span>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal website of Dipanka Tanu Sarmah — computational biology, multi-omics, networks, and ML.",
};

export default function Home() {
  const featured = projects.slice(0, 3); // pick top 3 in projects.ts order

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-semibold tracking-tight">Hi, I’m Dipanka</h1>

      <p className="text-lg text-gray-600 max-w-2xl">
        Computational biologist working on multi-omics, systems biology, and machine learning.
      </p>

      <div className="flex gap-3">
        <a
          href="/cv.pdf"
          className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm transition"
        >
          Download CV
        </a>
        <Link
          href="/projects"
          className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:shadow-sm transition"
        >
          View Projects
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What I do</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Multi-omics data analysis</li>
          <li>Network biology & target discovery</li>
          <li>Mathematical modeling & ML</li>
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link className="text-sm underline underline-offset-4" href="/projects">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block rounded-2xl border p-4 hover:shadow-sm transition"
            >
              <div className="space-y-2">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-700">{p.description}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Publications</h2>
        <p className="text-gray-600">
          Auto-synced from ORCID. Full list on the Publications page.
        </p>
        <Link className="underline underline-offset-4" href="/publications">
          View publications →
        </Link>
      </section>
    </div>
  );
}
