"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex h-10 items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 text-sm font-semibold hover:bg-neutral-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/60 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="select-none">{current === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
