"use client";

import { useMemo, useState } from "react";

export type PubItem = {
  id: number;
  title: string;
  year: number | null;
  typeLabel: string | null;
  link: string | null;
  hasLink: boolean;
};

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs rounded-full border px-2 py-1 text-gray-600">
      {label}
    </span>
  );
}

export default function PublicationsClient({
  items,
}: {
  items: PubItem[];
}) {
  const years = useMemo(() => {
    const ys = Array.from(
      new Set(items.map((x) => x.year).filter((y): y is number => typeof y === "number" && y > 0))
    );
    ys.sort((a, b) => b - a);
    return ys;
  }, [items]);

  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

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

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3 items-center">
          <label className="text-sm text-gray-600">Year</label>
          <select
            className="rounded-xl border px-3 py-2 text-sm"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="All">All</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
            <option value="0">Unknown</option>
          </select>

          <Tag label={`${filtered.length} shown`} />
        </div>

        <input
          className="w-full sm:w-80 rounded-xl border px-3 py-2 text-sm"
          placeholder="Search title…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.map((p) => (
          <article key={p.id} className="rounded-2xl border p-5 space-y-2">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold leading-snug hover:underline underline-offset-4"
              >
                {p.title}
              </a>
            ) : (
              <div className="font-semibold leading-snug">{p.title}</div>
            )}

            <div className="text-sm text-gray-600 flex flex-wrap gap-x-2">
              {p.year ? <span>{p.year}</span> : <span className="italic">Year unavailable</span>}
              {p.typeLabel ? <span>· {p.typeLabel}</span> : null}
            </div>

            {!p.hasLink ? (
              <p className="text-xs text-gray-500">
                Link/DOI not available in ORCID for this item.
              </p>
            ) : null}
          </article>
        ))}

        {filtered.length === 0 ? (
          <p className="text-sm text-gray-600">No publications match your filters.</p>
        ) : null}
      </div>
    </div>
  );
}
