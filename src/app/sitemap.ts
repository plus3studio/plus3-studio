import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://plus3studio.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/agence", priority: 0.9 },
    { path: "/plus3-players", priority: 0.9 },
    { path: "/club-ambassadeur", priority: 0.9 },
    { path: "/mentions-legales", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
