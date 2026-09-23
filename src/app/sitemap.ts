import type { MetadataRoute } from "next";
import { pages } from "@/lib/seo";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries = [
    pages.home,
    pages.work,
    ...projects.map((project) => ({ path: `/work/${project.slug}` })),
    pages.services,
    pages.pricing,
    pages.about,
    pages.contact,
  ];

  return entries.map((entry) => ({
    url: `${site.url}${entry.path}`,
    lastModified,
  }));
}
