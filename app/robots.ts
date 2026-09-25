import type { MetadataRoute } from "next";
import { allowIndexing } from "@/lib/seo";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const index = allowIndexing();
  return {
    rules: {
      userAgent: "*",
      allow: index ? "/" : undefined,
      disallow: index ? undefined : "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
