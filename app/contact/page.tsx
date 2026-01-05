import type { Metadata } from "next";
import Link from "next/link";
import DebugYourScience from "../components/DebugYourScience";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dipanka Tanu Sarmah — collaboration, consulting, and research inquiries.",
};

function ContactCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-sky-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-sky-900/40 dark:bg-slate-950/30">
      <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-3 text-sm text-slate-700 dark:text-slate-200">
        {children}
      </div>
    </div>
  );
}

function PillLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-full border border-sky-200/60 bg-white/50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-white dark:border-sky-900/40 dark:bg-slate-950/25 dark:text-slate-200 dark:hover:bg-slate-900/30"
    >
      {label}
    </a>
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

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h1>
        <p className="max-w-2xl text-slate-700 dark:text-slate-200">
          I’m happy to discuss research collaborations, project supervision,
          consulting, and reproducible computational workflows. The fastest way
          to reach me is by email.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <ContactCard title="Email">
          <p>
            <span className="text-slate-600 dark:text-slate-300">
              Preferred contact:
            </span>{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href={`mailto:${email}?subject=${encodeURIComponent(
                "Hello Dipanka — inquiry"
              )}`}
            >
              {email}
            </a>
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                "Hello Dipanka — inquiry"
              )}`}
              className="inline-flex h-10 items-center rounded-md bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
            >
              Email me
            </a>

            <Link
              href="/cv.pdf"
              className="inline-flex h-10 items-center rounded-md border border-sky-300/70 bg-white/70 px-4 text-sm font-semibold text-slate-900 hover:bg-white dark:border-sky-800/60 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/40"
            >
              View CV
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">
            For project-related messages, a short dataset summary + goals +
            timeline helps me respond faster.
          </p>
        </ContactCard>

        <ContactCard title="Profiles & Academic Links">
          <p>Research outputs, code, and professional profiles:</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l) => (
              <PillLink key={l.label} href={l.href} label={l.label} />
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">
            Sharing a DOI, preprint link, or GitHub issue is ideal for technical
            queries.
          </p>
        </ContactCard>
      </div>

      {/* NEW: Submit a pitfall */}
      <ContactCard title="Submit a pitfall">
        <p>
          Have a bioinformatics “gotcha” you’ve seen in the wild? Send it and I
          can add it to the Debug Your Science collection.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={submitMailto}
            className="inline-flex h-10 items-center rounded-md border border-sky-300/70 bg-white/70 px-4 text-sm font-semibold text-slate-900 hover:bg-white hover:shadow-sm dark:border-sky-800/60 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/40"
          >
            Submit a pitfall via email
          </a>

          <a
            href="https://github.com/dipankatanu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-md border border-neutral-200 bg-white/60 px-4 text-sm font-semibold text-slate-800 hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/30 dark:text-slate-100 dark:hover:bg-neutral-900/40"
          >
            Or open a GitHub issue
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">
          Tip: include a short example (code snippet or plot) and what the
          correct fix looks like.
        </p>
      </ContactCard>

      {/* Debug Your Science section */}
      <DebugYourScience />
    </div>
  );
}
