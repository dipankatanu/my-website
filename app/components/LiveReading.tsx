"use client";

import { useEffect, useState } from "react";

type Data =
  | { ok: true; title: string; link: string; source: string }
  | { ok: false; error?: string };

export default function LiveReading() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/arxiv", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((e) => setData({ ok: false, error: String(e?.message ?? e) }));
  }, []);

  return (
    <div className="rounded-2xl border border-sky-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-sky-900/40 dark:bg-slate-950/30">
      <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
        Live reading
      </h2>

      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
        Latest preprint · arXiv · q-bio.GN (Genomics)
      </p>

      {!data ? (
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
          Fetching latest preprint…
        </p>
      ) : data.ok ? (
        <>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm font-medium text-slate-900 underline underline-offset-4 dark:text-white"
          >
            {data.title}
          </a>
          <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
            Auto-updated hourly.
          </p>
        </>
      ) : (
        <>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
            Could not load the latest preprint right now.
          </p>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
            Error: {data.error ?? "Unknown error"}
          </p>
        </>
      )}
    </div>
  );
}
