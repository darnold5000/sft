import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  pubDate: string;
  publishedAt: string;
  image?: string;
  bodyHtml: string;
};

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, "\u00a0");
}

function extractTag(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const match = block.match(re);
  return match ? decodeEntities(match[1].trim()) : null;
}

function extractLinkSlug(link: string): string {
  return link.replace(/^https?:\/\/[^/]+\/blog\//, "").replace(/\/$/, "");
}

function extractMediaUrl(block: string): string | undefined {
  const match = block.match(
    /<media:content[^>]+url="([^"]+)"/i,
  );
  return match?.[1];
}

function toIsoDate(pubDate: string): string {
  const d = new Date(pubDate);
  return Number.isNaN(d.getTime()) ? pubDate : d.toISOString();
}

let cached: BlogPost[] | null = null;

export function getAllBlogPosts(): BlogPost[] {
  if (cached) return cached;

  const rssPath = path.join(process.cwd(), "content/blog/source.rss.xml");
  const raw = fs.readFileSync(rssPath, "utf8");
  const items = raw.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  cached = items
    .flatMap((block) => {
      const link = extractTag(block, "link");
      if (!link) return [];
      const title = extractTag(block, "title") ?? "Untitled";
      const author =
        block.match(/<dc:creator>([\s\S]*?)<\/dc:creator>/i)?.[1]?.trim() ??
        "Sam Vree";
      const pubDate = extractTag(block, "pubDate") ?? "";
      const descMatch = block.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/i,
      );
      const bodyHtml = descMatch?.[1] ?? "";

      const post: BlogPost = {
        slug: extractLinkSlug(link),
        title,
        author: decodeEntities(author),
        pubDate,
        publishedAt: toIsoDate(pubDate),
        image: extractMediaUrl(block),
        bodyHtml,
      };
      return [post];
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  return cached;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}
