import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://YOUR_DOMAIN_HERE.com"; // update after deploy

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/publications`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
