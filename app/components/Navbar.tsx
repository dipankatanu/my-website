"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close menu on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-neutral-200/70 bg-white/70 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/50">
        <nav className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between py-3">
            {/* Left: Brand + desktop links */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-semibold tracking-tight text-slate-900 hover:opacity-80 dark:text-white"
              >
                Dipanka Tanu Sarmah
              </Link>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "relative rounded-md px-3 py-2 text-sm font-medium transition",
                        active
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                      <span
                        className={[
                          "absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full transition-opacity",
                          active
                            ? "bg-sky-500 opacity-100"
                            : "bg-transparent opacity-0",
                        ].join(" ")}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: actions + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/cv.pdf"
                className="hidden sm:inline-flex h-10 items-center rounded-md border border-sky-300/70 bg-white/70 px-4 text-sm font-semibold text-slate-900 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/60 dark:border-sky-800/60 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/40"
              >
                CV
              </a>

              <div className="h-10 flex items-center">
                <ThemeToggle />
              </div>

              {/* Mobile hamburger button */}
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white/70 text-slate-900 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/60 dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-slate-100 dark:hover:bg-neutral-900 md:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {/* simple hamburger icon */}
                <span className="block h-[2px] w-5 bg-current" />
                <span className="block h-[2px] w-5 bg-current mt-1.5" />
                <span className="block h-[2px] w-5 bg-current mt-1.5" />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open ? (
            <div className="md:hidden pb-4">
              <div className="rounded-xl border border-neutral-200 bg-white/80 p-2 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "block rounded-lg px-3 py-2 text-sm font-medium transition",
                        active
                          ? "bg-sky-50 text-slate-900 dark:bg-sky-950/40 dark:text-white"
                          : "text-slate-700 hover:bg-neutral-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-neutral-900 dark:hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <a
                  href="/cv.pdf"
                  className="mt-2 block rounded-lg border border-sky-300/60 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white dark:border-sky-800/60 dark:bg-neutral-950/40 dark:text-slate-100 dark:hover:bg-neutral-900"
                >
                  Download CV
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
