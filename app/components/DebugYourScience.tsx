"use client";

import { useMemo, useState } from "react";
import { SCIENCE_PITFALLS, type SciencePitfall } from "../data/sciencePitfalls";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-200/60 bg-white/50 px-2.5 py-1 text-[11px] font-medium text-slate-700 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25 dark:text-slate-200">
      {children}
    </span>
  );
}

export default function DebugYourScience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // If you want to show ALL 40, keep as-is.
  // If you want only a few each load, uncomment the slice line below.
  const cards = useMemo<SciencePitfall[]>(() => {
    return SCIENCE_PITFALLS;
    // return [...SCIENCE_PITFALLS].sort(() => 0.5 - Math.random()).slice(0, 8);
  }, []);

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-sky-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-sky-900/40 dark:bg-slate-950/30">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Debug Your Science
            </h2>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              A small “bioinformatics hall of shame”: common pitfalls that turn
              great data into garbage conclusions. Click any card to reveal the
              fix.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>Garbage in → garbage out</Badge>
            <Badge>Practical fixes</Badge>
            <Badge>{cards.length} pitfalls</Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c, idx) => {
          const open = openIdx === idx;

          return (
            <button
              key={c.id ?? `${c.title}-${idx}`}
              type="button"
              onClick={() => setOpenIdx(open ? null : idx)}
              className="text-left rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400/60 dark:border-neutral-800 dark:bg-neutral-950/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{c.category}</Badge>
                  <Badge>{c.tag}</Badge>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {open ? "Hide fix" : "Reveal fix"}
                </span>
              </div>

              <h3 className="mt-3 text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                {c.title}
              </h3>

              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="font-semibold">Mistake:</span> {c.mistake}
              </p>

              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="font-semibold">Result:</span> {c.result}
              </p>

              <div
                className={[
                  "grid transition-all duration-200 ease-out",
                  open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr] mt-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="rounded-xl border border-sky-200/60 bg-sky-50/60 p-4 text-sm text-slate-800 dark:border-sky-900/40 dark:bg-slate-950/30 dark:text-slate-100">
                    <span className="font-semibold">Fix:</span> {c.fix}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
