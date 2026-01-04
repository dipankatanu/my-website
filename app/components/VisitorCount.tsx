"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visits", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setCount(typeof d.count === "number" ? d.count : null))
      .catch(() => setCount(null));
  }, []);

  return (
    <span className="rounded-full border border-sky-200/60 bg-white/40 px-3 py-1 text-xs text-slate-700 backdrop-blur dark:border-sky-900/40 dark:bg-slate-950/25 dark:text-slate-200">
      {count === null ? "Visitors: …" : `Visitors: ${count.toLocaleString()}`}
    </span>
  );
}
