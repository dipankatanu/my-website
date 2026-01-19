import type { Metadata } from "next";
import Link from "next/link";
import DebugYourScience from "../components/DebugYourScience";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dipanka Tanu Sarmah — collaboration, consulting, and research inquiries.",
};

/* ============================================================
   CONTACT PAGE - ENHANCED VERSION
   Clean, professional design with better visual hierarchy
   ============================================================ */

export default function ContactPage() {
  const email = "dipankatanusarmah@gmail.com";

  const links = [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=0YYPcf7-VukC&hl=en",
      icon: "🎓",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dipankatanusarmah-9555aa1a7",
      icon: "💼",
    },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Dipanka-Sarmah-2",
      icon: "🔬",
    },
    {
      label: "GitHub",
      href: "https://github.com/dipankatanu",
      icon: "💻",
    },
  ];

  const submitSubject = "Debug Your Science — pitfall submission";
  const submitBody = `Hi Dipanka,

I'd like to submit a pitfall for "Debug Your Science".

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
    <div className="space-y-20 py-8 sm:py-12">
      
      {/* ========================================
          HERO / MAIN CONTACT SECTION
          Primary contact information with CTAs
          ======================================== */}
      <section className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          
          {/* Left column - Main content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">
                Contact
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
                I'm happy to discuss research collaborations, project supervision,
                consulting, and reproducible computational workflows. The fastest
                way to reach me is by email.
              </p>
            </div>

            {/* Social links as cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-interactive group flex flex-col items-center justify-center p-4 text-center"
                >
                  <div className="mb-2 text-2xl transition-transform duration-200 group-hover:scale-110">
                    {link.icon}
                  </div>
                  <span className="text-xs font-medium text-[color:var(--text)]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right column - Contact actions */}
          <div className="flex flex-col gap-6 lg:items-end">
            
            {/* CTA buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
              <a 
                href={inquiryMailto}
                className="btn-primary"
              >
                Email me
              </a>
              <Link 
                href="/cv.pdf"
                className="btn-secondary"
              >
                View CV
              </Link>
            </div>

            {/* Contact details card */}
            <div className="w-full space-y-3 rounded-2xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/50 to-white p-6 dark:from-slate-900/20 dark:to-transparent lg:text-right">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--text-muted)]">
                  Preferred contact
                </p>
                <a
                  className="mt-1 block text-sm font-semibold text-[color:var(--text-strong)] underline decoration-[color:var(--border-medium)] underline-offset-4 transition-colors hover:decoration-[color:var(--accent)]"
                  href={inquiryMailto}
                >
                  {email}
                </a>
              </div>

              <div className="border-t border-[color:var(--border-light)] pt-3">
                <p className="text-xs leading-relaxed text-[color:var(--text-muted)]">
                  For project-related messages, a short dataset summary + goals +
                  timeline helps me respond faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          SUBMIT A PITFALL SECTION
          Call-to-action for Debug Your Science contributions
          ======================================== */}
      <section className="overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-gradient-to-br from-purple-50/60 to-pink-50/40 p-8 shadow-sm dark:from-purple-950/20 dark:to-pink-950/10 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left side - Description */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-2xl dark:from-purple-900/40 dark:to-pink-900/40">
                🐛
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
                Submit a pitfall
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)]">
              Have a bioinformatics "gotcha" you've seen in the wild? Send it
              and I can add it to the Debug Your Science collection.
            </p>

            <p className="text-sm text-[color:var(--text-muted)]">
              <strong className="font-medium text-[color:var(--text)]">Tip:</strong>{" "}
              Include a short example (code snippet or plot) and what the
              correct fix looks like.
            </p>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={submitMailto}
              className="btn-primary"
            >
              Submit via email
            </a>
            <a
              href="https://github.com/dipankatanu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Open a GitHub issue
            </a>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-decorative" aria-hidden="true" />

      {/* ========================================
          DEBUG YOUR SCIENCE SECTION
          Interactive pitfall cards
          ======================================== */}
      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-3xl">
            Debug Your Science
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)]">
            Common pitfalls that turn good data into bad conclusions. Click any
            card to reveal the fix.
          </p>
        </div>

        {/* DebugYourScience component renders here */}
        <DebugYourScience />
      </section>

    </div>
  );
}
