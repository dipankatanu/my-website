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

export default async function PublicationsPage() {
  const res = await fetch(`https://pub.orcid.org/v3.0/${ORCID}/works`, {
    headers: { Accept: "application/json" },
    next: { revalidate },
  });

  // Fallback UI if ORCID is temporarily unavailable
  if (!res.ok) {
    return (
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>
          <p className="text-gray-600">
            ORCID is temporarily unavailable. Please use my{" "}
            <a
              className="underline underline-offset-4"
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar profile
            </a>{" "}
            for the full list.
          </p>
        </header>

        <a
          className="rounded-xl border px-4 py-2 text-sm inline-block hover:shadow-sm transition"
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Scholar
        </a>
      </div>
    );
  }

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

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>

        <p className="text-gray-600">
          Auto-synced from ORCID. Full and authoritative record available on{" "}
          <a
            className="underline underline-offset-4"
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          .
        </p>

        <p className="text-sm text-gray-500">
          {total} publications · {withLink} with DOI or external link
        </p>
      </header>

      <PublicationsClient items={items} />

      <section className="pt-6 border-t">
        <p className="text-sm text-gray-600">
          Note: Citation counts, author order, and venue details are maintained on
          Google Scholar. For the most up-to-date metrics, please refer to my{" "}
          <a
            className="underline underline-offset-4"
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar profile
          </a>
          .
        </p>
      </section>
    </div>
  );
}
