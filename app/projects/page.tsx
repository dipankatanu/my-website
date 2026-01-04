import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source projects in multi-omics, machine learning, network biology, and reproducible pipelines.",
};

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs rounded-full border px-2 py-1 text-gray-600">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        subtitle="Selected open-source work in multi-omics, machine learning, and network biology."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block rounded-2xl border p-5 hover:shadow-sm transition"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-700">{p.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
