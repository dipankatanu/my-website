import { kv } from "@vercel/kv";

export async function GET() {
  const key = "site:visits";
  const count = await kv.incr(key);
  return Response.json({ count }, { headers: { "Cache-Control": "no-store" } });
}
