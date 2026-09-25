import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog/parse-rss";
import { SITE } from "@/lib/site";

const staticPaths = [
  "/",
  "/adults",
  "/athletes",
  "/about-me",
  "/testimonials",
  "/blog",
  "/store",
  "/member-login",
  "/contact-us",
  "/get-directions",
  "/get-started",
  "/adults-intake-1",
  "/athletes-intake",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const staticEntries = staticPaths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: now,
  }));
  const posts = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));
  return [...staticEntries, ...posts];
}
