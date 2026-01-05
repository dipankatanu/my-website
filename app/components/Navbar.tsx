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

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Light, text-first bar */}
      <div className="border-b border-neutral-200/70 bg-white/75 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/55">
        <nav className="container-lab">
          <div className="flex items-center justify-between py-3">
            {/* Brand */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-semibold tracking-tight text-slate-900 hover:opacity-80 dark:text-white"
              >
                Dipanka Tanu Sarmah
              </Link>

              {/* Desktop links (text only) */}
              <div className="hidden md:flex items-center gap-5">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "relative text-sm transition",
                        active
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                      <span
                        className={[
                          "absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-opacity",
                          active ? "bg-sky-500/80 opacity-100" : "opacity-0",
                        ].join(" ")}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* CV as a quiet text link */}
              <a
                href="/cv.pdf"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700 dark:text-slate-100 dark:hover:text-white"
              >
                CV
              </a>

              {/* Theme toggle (keep your component) */}
              <div className="flex items-center">
                <ThemeToggle />
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white/70 text-slate-900 hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-slate-100 dark:hover:bg-neutral-900"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="block h-[2px] w-5 bg-current" />
                <span className="mt-1.5 block h-[2px] w-5 bg-current" />
                <span className="mt-1.5 block h-[2px] w-5 bg-current" />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open ? (
            <div className="md:hidden pb-4">
              <div className="rounded-2xl border border-neutral-200 bg-white/85 p-2 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/65">
                <div className="px-2 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Menu
                </div>

                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "block rounded-xl px-3 py-2 text-sm transition",
                        active
                          ? "bg-sky-50 text-slate-900 dark:bg-sky-950/40 dark:text-white"
                          : "text-slate-700 hover:bg-neutral-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-neutral-900/50 dark:hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <a
                  href="/cv.pdf"
                  className="mt-2 block rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-neutral-50 dark:text-slate-100 dark:hover:bg-neutral-900/50"
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
