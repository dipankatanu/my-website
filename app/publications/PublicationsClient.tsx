"use client";

import { useMemo, useState } from "react";

/* ============================================================
   TYPE DEFINITIONS
   ============================================================ */

export type PubItem = {
  id: number;
  title: string;
  year: number | null;
  typeLabel: string | null;
  link: string | null;
  hasLink: boolean;
};

/* ============================================================
   PUBLICATIONS CLIENT COMPONENT
   Interactive filtering and display of publications
   ============================================================ */

export default function PublicationsClient({
  items,
}: {
  items: PubItem[];
}) {
  // ========================================
  // STATE & MEMOIZED DATA
  // ========================================
  
  // Extract unique years for filter dropdown
  const years = useMemo(() => {
    const ys = Array.from(
      new Set(items.map((x) => x.year).filter((y): y is number => typeof y === "number" && y > 0))
    );
    ys.sort((a, b) => b - a);
    return ys;
  }, [items]);

  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  // Filter publications based on year and search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((x) => {
      const yearOk =
        selectedYear === "All" ||
        (typeof x.year === "number" && String(x.year) === selectedYear);

      const textOk =
        q.length === 0 || x.title.toLowerCase().includes(q);

      return yearOk && textOk;
    });
  }, [items, selectedYear, query]);

  // ========================================
  // RENDER UI
  // ========================================
  
  return (
    <div className="space-y-8">
      
      {/* ========================================
          FILTER CONTROLS
          Year selector and search input
          ======================================== */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Year filter dropdown */}
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm font-medium text-[color:var(--text-muted)]">
            Filter by year
          </label>
          <select
            className="rounded-lg border border-[color:var(--border-light)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--text-strong)] shadow-sm transition-all hover:border-[color:var(--border-medium)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 dark:bg-slate-950"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="All">All years</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
            <option value="0">Unknown year</option>
          </select>

          {/* Results count badge */}
          <span className="rounded-full border border-[color:var(--border-light)] bg-gradient-to-br from-sky-50 to-blue-50 px-3 py-1 text-xs font-medium text-[color:var(--text)] dark:from-sky-950/30 dark:to-blue-950/30">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </span>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <input
            className="w-full rounded-lg border border-[color:var(--border-light)] bg-white px-4 py-2 pl-10 text-sm text-[color:var(--text-strong)] shadow-sm transition-all placeholder:text-[color:var(--text-muted)] hover:border-[color:var(--border-medium)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 dark:bg-slate-950"
            placeholder="Search publications..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Search icon */}
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* ========================================
          PUBLICATIONS LIST
          Individual publication cards
          ======================================== */}
      <div className="space-y-4">
        {filtered.map((pub) => (
          <article
            key={pub.id}
            className="card group relative overflow-hidden"
          >
            {/* Publication title */}
            {pub.link ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold leading-snug text-[color:var(--text-strong)] transition-colors hover:text-[color:var(--accent)]"
              >
                {pub.title}
                
                {/* External link icon */}
                <svg
                  className="ml-2 inline-block h-4 w-4 text-[color:var(--text-muted)] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <div className="font-semibold leading-snug text-[color:var(--text-strong)]">
                {pub.title}
              </div>
            )}

            {/* Publication metadata */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[color:var(--text-muted)]">
              {/* Year badge */}
              {pub.year ? (
                <span className="inline-flex items-center rounded-md bg-gradient-to-br from-slate-100 to-slate-50 px-2.5 py-1 text-xs font-medium text-[color:var(--text)] dark:from-slate-800/50 dark:to-slate-900/50">
                  {pub.year}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md bg-gradient-to-br from-slate-100 to-slate-50 px-2.5 py-1 text-xs font-medium italic text-[color:var(--text-muted)] dark:from-slate-800/50 dark:to-slate-900/50">
                  Year unavailable
                </span>
              )}

              {/* Publication type */}
              {pub.typeLabel && (
                <>
                  <span className="text-[color:var(--text-muted)]">•</span>
                  <span className="capitalize">{pub.typeLabel}</span>
                </>
              )}
            </div>

            {/* Missing link notice */}
            {!pub.hasLink && (
              <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-950/20">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs text-amber-800 dark:text-amber-200">
                  Link/DOI not available in ORCID for this item.
                </p>
              </div>
            )}
          </article>
        ))}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/50 to-white p-12 text-center dark:from-slate-900/20 dark:to-transparent">
            <svg
              className="mx-auto h-12 w-12 text-[color:var(--text-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-4 text-sm font-medium text-[color:var(--text)]">
              No publications match your filters
            </p>
            <p className="mt-1 text-sm text-[color:var(--text-muted)]">
              Try adjusting your search or year filter
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
