import type { Metadata } from "next";
import Link from "next/link";
import DebugYourScience from "../components/DebugYourScience";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dipanka Tanu Sarmah — collaboration, consulting, and research inquiries.",
};

function Chip({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900/40"
    >
      {label}
    </a>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
}) {
  const base =
    "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
      : "border border-neutral-200 bg-white text-slate-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900/40";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  // Use Link for internal paths (like /cv.pdf) for consistency
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default function ContactPage() {
  const email = "dipankatanusarmah@gmail.com";

  const links = [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=0YYPcf7-VukC&hl=en",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dipankatanusarmah-9555aa1a7",
    },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Dipanka-Sarmah-2",
    },
    {
      label: "GitHub",
      href: "https://github.com/dipankatanu",
    },
  ];

  const submitSubject = "Debug Your Science — pitfall submission";
  const submitBody = `Hi Dipanka,

I’d like to submit a pitfall for "Debug Your Science".

Category (Genomics/Stats/Networks/Repro/Other):
Title:
Mistake:
Result:
Fix:
(Optional) Example / short snippet / reference:

Thanks!
`;

  const submitMailto = `mailto:${email}?subject=${encodeURIComponent(
    submitSubject
  )}&body=${encodeURIComponent(submitBody)}`;

  const inquiryMailto = `mailto:${email}?subject=${encodeURIComponent(
    "Hello Dipanka — inquiry"
  )}`;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4 py-8">
      {/* HERO (no boxed cards) */}
      <header className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Contact
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            I’m happy to discuss research collaborations, project supervision,
            consulting, and reproducible computational workflows. The fastest
            way to reach me is by email.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {links.map((l) => (
              <Chip key={l.label} href={l.href} label={l.label} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <ButtonLink href={inquiryMailto} variant="primary" external>
              Email me
            </ButtonLink>

            <ButtonLink href="/cv.pdf" variant="outline">
              View CV
            </ButtonLink>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 md:text-right">
            Preferred contact:{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href={inquiryMailto}
            >
              {email}
            </a>
          </p>

          <p className="max-w-sm text-xs text-slate-600 dark:text-slate-300 md:text-right">
            For project-related messages, a short dataset summary + goals +
            timeline helps me respond faster.
          </p>
        </div>
      </header>

      {/* SUBMIT A PITFALL (single slim callout) */}
      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-slate-950/30">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              Submit a pitfall
            </h2>
            <p className="mt-1 text-xs text-slate-700 dark:text-slate-200">
              Have a bioinformatics “gotcha” you’ve seen in the wild? Send it
              and I can add it to the Debug Your Science collection.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <ButtonLink href={submitMailto} variant="primary" external>
              Submit via email
            </ButtonLink>

            <ButtonLink
              href="https://github.com/dipankatanu"
              variant="outline"
              external
            >
              Open a GitHub issue
            </ButtonLink>
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
          Tip: include a short example (code snippet or plot) and what the
          correct fix looks like.
        </p>
      </section>

      {/* DEBUG YOUR SCIENCE (no outer boxed wrapper here) */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Debug Your Science
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-200">
            Common pitfalls that turn good data into bad conclusions. Click any
            card to reveal the fix.
          </p>
        </div>

        <DebugYourScience />
      </section>

      <footer className="border-t border-neutral-200 pt-6 text-xs text-slate-600 dark:border-neutral-800 dark:text-slate-300">
        © {new Date().getFullYear()} Dipanka Tanu Sarmah
      </footer>
    </div>
  );
}
