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
    <span
      className="
        text-xs rounded-full border border-slate-200 bg-white/50
        px-2.5 py-1 text-slate-600
        dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300
      "
    >
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <div className="container-lab space-y-12 py-8">
      <PageHeader
        title="Projects"
        subtitle="Selected open-source work in multi-omics, machine learning, and network biology."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => {
          const external = p.href.startsWith("http");

          return (
            <a
              key={p.title}
              href={p.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="
                group rounded-2xl bg-slate-50/70 p-6 transition
                hover:bg-slate-50
                dark:bg-white/5 dark:hover:bg-white/10
              "
            >
              <div className="space-y-2">
                <h2
                  className="
                    text-base font-semibold tracking-tight
                    text-slate-900 group-hover:underline
                    dark:text-white
                  "
                >
                  {p.title}
                </h2>

                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
