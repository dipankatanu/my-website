export const revalidate = 86400; // refresh daily
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publication list auto-synced from ORCID with links to DOIs and external records.",
};

import PublicationsClient, { type PubItem } from "./PublicationsClient";

const ORCID = "0009-0008-1174-3885";
const SCHOLAR_URL = "https://scholar.google.com/citations?hl=en&user=0YYPcf7-VukC";

/* ============================================================
   TYPE DEFINITIONS
   ORCID API response types
   ============================================================ */

type OrcidWorksSummary = {
  group?: Array<{
    "work-summary"?: Array<{
      "put-code": number;
      title?: { title?: { value?: string } };
      "publication-date"?: {
        year?: { value?: string };
        month?: { value?: string };
        day?: { value?: string };
      };
      "external-ids"?: {
        "external-id"?: Array<{
          "external-id-type"?: string;
          "external-id-value"?: string;
          "external-id-url"?: { value?: string };
        }>;
      };
      url?: { value?: string };
      type?: string;
    }>;
  }>;
};

/* ============================================================
   HELPER FUNCTIONS
   Extract and format data from ORCID response
   ============================================================ */

function getYear(w: any): number | null {
  const y = w?.["publication-date"]?.year?.value;
  const n = y ? parseInt(y, 10) : NaN;
  return Number.isFinite(n) ? n : null;
}

function bestLink(w: any): string | null {
  const ext = w?.["external-ids"]?.["external-id"] ?? [];

  // Prefer DOI
  const doi = ext.find(
    (e: any) => (e?.["external-id-type"] || "").toLowerCase() === "doi"
  );
  if (doi?.["external-id-url"]?.value) return doi["external-id-url"].value;
  if (doi?.["external-id-value"]) return `https://doi.org/${doi["external-id-value"]}`;

  // Otherwise any external-id URL
  const anyUrl = ext.find((e: any) => e?.["external-id-url"]?.value);
  if (anyUrl?.["external-id-url"]?.value) return anyUrl["external-id-url"].value;

  // Otherwise ORCID work url field
  if (w?.url?.value) return w.url.value;

  return null;
}

function formatType(t?: string) {
  if (!t) return null;
  return t.replaceAll("_", " ").toLowerCase();
}

/* ============================================================
   MAIN PAGE COMPONENT
   Server-side data fetching and rendering
   ============================================================ */

export default async function PublicationsPage() {
  // Fetch publications from ORCID API
  const res = await fetch(`https://pub.orcid.org/v3.0/${ORCID}/works`, {
    headers: { Accept: "application/json" },
    next: { revalidate },
  });

  // ========================================
  // FALLBACK UI - ORCID UNAVAILABLE
  // ========================================
  if (!res.ok) {
    return (
      <div className="space-y-8 py-8 sm:py-12">
        <section className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">
              Publications
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--text)]">
              ORCID is temporarily unavailable. Please use my{" "}
              <a
                className="font-semibold text-[color:var(--accent)] underline decoration-[color:var(--border-medium)] underline-offset-4 transition-colors hover:decoration-[color:var(--accent)]"
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar profile
              </a>{" "}
              for the full list.
            </p>
          </div>

          <a
            className="btn-primary inline-flex"
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Scholar →
          </a>
        </section>
      </div>
    );
  }

  // ========================================
  // DATA PROCESSING
  // ========================================
  const data = (await res.json()) as OrcidWorksSummary;

  const works =
    data.group
      ?.flatMap((g) => g["work-summary"] ?? [])
      .filter((w) => w?.title?.title?.value) ?? [];

  // Convert to display items
  const items: PubItem[] = works
    .map((w: any) => {
      const title = w.title.title.value as string;
      const year = getYear(w);
      const link = bestLink(w);
      const typeLabel = formatType(w.type);
      return {
        id: w["put-code"] as number,
        title,
        year,
        typeLabel,
        link,
        hasLink: !!link,
      };
    })
    .sort((a, b) => {
      const ya = a.year ?? 0;
      const yb = b.year ?? 0;
      if (yb !== ya) return yb - ya;
      return a.title.localeCompare(b.title);
    });

  const total = items.length;
  const withLink = items.filter((x) => x.hasLink).length;

  // ========================================
  // RENDER UI
  // ========================================
  return (
    <div className="space-y-12 py-8 sm:py-12">
      
      {/* ========================================
          HEADER SECTION
          Title, stats, and Scholar link
          ======================================== */}
      <section className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">
            Publications
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
            Auto-synced from ORCID. Full and authoritative record available on{" "}
            <a
              className="font-semibold text-[color:var(--accent)] underline decoration-[color:var(--border-medium)] underline-offset-4 transition-colors hover:decoration-[color:var(--accent)]"
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {total}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Total publications
            </div>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {withLink}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              With DOI/external link
            </div>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-[color:var(--text-strong)]">
              {new Date().getFullYear()}
            </div>
            <div className="mt-1 text-sm text-[color:var(--text-muted)]">
              Current year
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="divider-strong" aria-hidden="true" />

      {/* ========================================
          PUBLICATIONS LIST
          Interactive client-side filtering
          ======================================== */}
      <PublicationsClient items={items} />

      {/* Decorative divider */}
      <div className="divider-strong" aria-hidden="true" />

      {/* ========================================
          FOOTER NOTE
          Additional information about citations
          ======================================== */}
      <section className="rounded-2xl border border-[color:var(--border-light)] bg-gradient-to-br from-slate-50/50 to-white p-6 dark:from-slate-900/20 dark:to-transparent sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 text-xl dark:from-sky-900/30 dark:to-blue-900/30">
            ℹ️
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[color:var(--text-strong)]">
              About citations & metrics
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
              Citation counts, author order, and venue details are maintained on
              Google Scholar. For the most up-to-date metrics, please refer to my{" "}
              <a
                className="font-medium text-[color:var(--text)] underline decoration-[color:var(--border-medium)] underline-offset-2 transition-colors hover:text-[color:var(--accent)] hover:decoration-[color:var(--accent)]"
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar profile
              </a>
              .
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
