export async function GET() {
  // NOTE: arXiv RSS endpoint expects http:// (not https://)
  const url = "http://rss.arxiv.org/rss/q-bio.GN";

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "DipankaSite/1.0",
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
      // keep default redirect behavior (follow)
    });

    if (!res.ok) {
      return Response.json(
        { ok: false, error: `Fetch failed: ${res.status}` },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    const xml = await res.text();

    // Extract first RSS item
    const itemMatch = xml.match(/<item\b[^>]*>([\s\S]*?)<\/item>/i);
    if (!itemMatch) {
      // Return a small snippet to help debugging without flooding logs
      const snippet = xml.slice(0, 300).replace(/\s+/g, " ").trim();
      return Response.json(
        {
          ok: false,
          error: "No <item> found in arXiv RSS (unexpected response).",
          snippet,
        },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    const item = itemMatch[1];

    const titleMatch = item.match(/<title>([\s\S]*?)<\/title>/i);
    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/i);

    const title = (titleMatch?.[1] ?? "")
      .replace(/<!\[CDATA\[|\]\]>/g, "")
      .trim();

    const link = (linkMatch?.[1] ?? "").trim();

    if (!title || !link) {
      return Response.json(
        { ok: false, error: "Parsed item but title/link missing." },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    return Response.json(
      { ok: true, title, link, source: "arXiv · q-bio.GN (Genomics)" },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (e: any) {
    return Response.json(
      { ok: false, error: String(e?.message ?? e) },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
