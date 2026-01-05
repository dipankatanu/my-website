"use client";

import { useMemo, useState } from "react";
import { SCIENCE_PITFALLS, type Card } from "../data/sciencePitfalls";

type Pitfall = Card;

const FEATURED_COUNT = 8;

// Soft, academic color palette per category “family”.
const CATEGORY_STYLES: Array<{
  match: RegExp;
  chip: string;
  ring: string;
  glow: string;
  header: string;
}> = [
  {
    match: /genomics|sequencing|variants|vcf/i,
    chip: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-900",
    ring: "ring-emerald-200/70 dark:ring-emerald-900/60",
    glow: "hover:shadow-emerald-200/40 dark:hover:shadow-emerald-900/40",
    header: "from-emerald-500/10 to-transparent dark:from-emerald-400/10",
  },
  {
    match: /rna|transcript|single-?cell/i,
    chip: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-900",
    ring: "ring-sky-200/70 dark:ring-sky-900/60",
    glow: "hover:shadow-sky-200/40 dark:hover:shadow-sky-900/40",
    header: "from-sky-500/10 to-transparent dark:from-sky-400/10",
  },
  {
    match: /statistics|math|design|analysis/i,
    chip: "bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-900",
    ring: "ring-violet-200/70 dark:ring-violet-900/60",
    glow: "hover:shadow-violet-200/40 dark:hover:shadow-violet-900/40",
    header: "from-violet-500/10 to-transparent dark:from-violet-400/10",
  },
  {
    match: /machine learning|ai|model/i,
    chip: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-100 dark:border-amber-900",
    ring: "ring-amber-200/70 dark:ring-amber-900/60",
    glow: "hover:shadow-amber-200/40 dark:hover:shadow-amber-900/40",
    header: "from-amber-500/10 to-transparent dark:from-amber-400/10",
  },
  {
    match: /network|systems/i,
    chip: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-950/40 dark:text-fuchsia-200 dark:border-fuchsia-900",
    ring: "ring-fuchsia-200/70 dark:ring-fuchsia-900/60",
    glow: "hover:shadow-fuchsia-200/40 dark:hover:shadow-fuchsia-900/40",
    header: "from-fuchsia-500/10 to-transparent dark:from-fuchsia-400/10",
  },
  {
    match: /repro|program|data hygiene|management|reproduc/i,
    chip: "bg-teal-50 text-teal-900 border-teal-200 dark:bg-teal-950/40 dark:text-teal-100 dark:border-teal-900",
    ring: "ring-teal-200/70 dark:ring-teal-900/60",
    glow: "hover:shadow-teal-200/40 dark:hover:shadow-teal-900/40",
    header: "from-teal-500/10 to-transparent dark:from-teal-400/10",
  },
  {
    match: /visual/i,
    chip: "bg-rose-50 text-rose-900 border-rose-200 dark:bg-rose-950/40 dark:text-rose-100 dark:border-rose-900",
    ring: "ring-rose-200/70 dark:ring-rose-900/60",
    glow: "hover:shadow-rose-200/40 dark:hover:shadow-rose-900/40",
    header: "from-rose-500/10 to-transparent dark:from-rose-400/10",
  },
];

function styleForCategory(category: string) {
  const hit = CATEGORY_STYLES.find((s) => s.match.test(category));
  return (
    hit ?? {
      chip: "bg-neutral-50 text-neutral-800 border-neutral-200 dark:bg-neutral-900/40 dark:text-neutral-200 dark:border-neutral-800",
      ring: "ring-neutral-200/70 dark:ring-neutral-800/60",
      glow: "hover:shadow-neutral-200/40 dark:hover:shadow-neutral-900/40",
      header: "from-neutral-500/10 to-transparent dark:from-neutral-400/10",
    }
  );
}

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function stableId(p: Pitfall, idx: number) {
  // If your data file provides `id`, great. If not, we derive a stable-ish id.
  return (
    (p as any).id ??
    `${normalize(p.category)}::${normalize(p.title)}::${idx}`.replace(/\s+/g, "-")
  );
}

export default function DebugYourScience() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const [libraryOpen, setLibraryOpen] = useState(false);
  const [selected, setSelected] = useState<Pitfall | null>(null);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of SCIENCE_PITFALLS) {
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    }
    return [{ category: "All", count: SCIENCE_PITFALLS.length }].concat(
      Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => ({ category, count }))
    );
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return SCIENCE_PITFALLS.filter((p) => {
      const catOk = activeCategory === "All" || p.category === activeCategory;
      if (!catOk) return false;
      if (!q) return true;

      const hay = normalize(
        `${p.category} ${p.title} ${p.tag} ${p.mistake} ${p.result} ${p.fix}`
      );
      return hay.includes(q);
    });
  }, [query, activeCategory]);

  const featured = useMemo(() => filtered.slice(0, FEATURED_COUNT), [filtered]);
  const total = SCIENCE_PITFALLS.length;

  return (
    <div className="space-y-5">
      {/* Controls (fixed layout, no blank box) */}
      <div className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pitfalls (e.g., batch, FDR, strandedness)..."
            className="h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none focus:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:border-neutral-700 sm:max-w-md"
          />

          <button
            type="button"
            onClick={() => setLibraryOpen(true)}
            className="h-10 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            View all ({filtered.length}/{total})
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = activeCategory === c.category;
            const s = styleForCategory(c.category);
            return (
              <button
                key={c.category}
                type="button"
                onClick={() => setActiveCategory(c.category)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition",
                  s.chip,
                  isActive && "ring-2",
                  isActive && s.ring
                )}
                title={`${c.category} (${c.count})`}
              >
                <span>{c.category}</span>
                <span className="opacity-70">({c.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((p, idx) => {
          const id = stableId(p, idx);
          const isOpen = openId === id;
          const s = styleForCategory(p.category);

          return (
            <div
              key={id}
              className={cn(
                "group rounded-2xl border border-neutral-200 bg-white shadow-sm transition dark:border-neutral-800 dark:bg-neutral-950",
                "hover:shadow-md",
                s.glow
              )}
            >
              <div className={cn("rounded-2xl bg-gradient-to-r p-4", s.header)}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                          s.chip
                        )}
                      >
                        {p.category}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="mt-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {p.title}
                    </h3>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900"
                    >
                      {isOpen ? "Hide fix" : "Reveal fix"}
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <p>
                    <span className="font-semibold">Mistake:</span> {p.mistake}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Result:</span> {p.result}
                  </p>
                </div>

                {isOpen && (
                  <div className="mt-3 rounded-xl border border-neutral-200 bg-white/70 p-3 text-xs text-neutral-900 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100">
                    <span className="font-semibold">Fix:</span> {p.fix}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {featured.length === 0 && (
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-200">
          No pitfalls matched your search. Try a broader term (e.g., “batch”,
          “FDR”, “QC”).
        </div>
      )}

      {/* Library modal */}
      {libraryOpen && (
        <Modal title={`All pitfalls (${filtered.length})`} onClose={() => setLibraryOpen(false)}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search in library..."
              className="h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none focus:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:border-neutral-700"
            />
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm dark:border-neutral-800 dark:bg-neutral-950 sm:w-64"
            >
              {categories.map((c) => (
                <option key={c.category} value={c.category}>
                  {c.category} ({c.count})
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid gap-2">
            {filtered.map((p, idx) => {
              const id = stableId(p, idx);
              const s = styleForCategory(p.category);

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelected(p)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white p-4 text-left transition",
                    "hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900/40"
                  )}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                          s.chip
                        )}
                      >
                        {p.category}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
                        {p.tag}
                      </span>
                    </div>
                    <div className="mt-2 truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {p.title}
                    </div>
                    <div className="mt-1 line-clamp-1 text-xs text-neutral-700 dark:text-neutral-300">
                      {p.mistake}
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    Open →
                  </span>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-200">
              No results in the library for this query/category.
            </div>
          )}
        </Modal>
      )}

      {/* Detail modal */}
      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <div className="flex flex-wrap gap-2">
            <span
              className={cn(
                "rounded-full border px-2 py-0.5 text-xs font-semibold",
                styleForCategory(selected.category).chip
              )}
            >
              {selected.category}
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-xs font-semibold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
              {selected.tag}
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm text-neutral-800 dark:text-neutral-200">
            <p>
              <span className="font-semibold">Mistake:</span> {selected.mistake}
            </p>
            <p>
              <span className="font-semibold">Result:</span> {selected.result}
            </p>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/30">
              <span className="font-semibold">Fix:</span> {selected.fix}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            Close
          </button>
        </div>
        <div className="max-h-[70vh] overflow-auto px-5 py-5">{children}</div>
      </div>
    </div>
  );
}
