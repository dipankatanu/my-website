"use client";

import { useMemo } from "react";

const FACTS = [
  "The human brain contains ~86 billion neurons, but the number of synapses is orders of magnitude larger.",
  "Single-cell RNA-seq captures only a fraction of transcripts per cell due to dropout—zero counts often mean 'not detected', not 'not expressed'.",
  "Protein abundance often correlates only moderately with mRNA abundance because translation and degradation add extra regulation layers.",
  "Network centrality does not always imply causality—highly connected nodes can be essential, but context matters.",
  "In CRISPR screens, guide efficiency and copy-number effects can create false positives if not modeled carefully.",
  "Batch effects can dominate biology; integration methods reduce them, but strong correction can also remove real signal.",
];

export default function DidYouKnow() {
  // Stable “fact of the day” (changes daily, but consistent for everyone that day)
  const fact = useMemo(() => {
    const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    return FACTS[day % FACTS.length];
  }, []);

  return (
    <div className="rounded-2xl border border-sky-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-sky-900/40 dark:bg-slate-950/30">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
          Did you know?
        </h2>
        <span className="rounded-full border border-sky-200/60 bg-white/50 px-3 py-1 text-xs text-slate-700 dark:border-sky-900/40 dark:bg-slate-950/25 dark:text-slate-200">
          Fact of the day
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
        {fact}
      </p>
    </div>
  );
}
