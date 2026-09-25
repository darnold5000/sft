import Link from "next/link";
import { Section, SectionHeading } from "@/components/public/section";
import { getAllBlogPosts } from "@/lib/blog/parse-rss";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Training, nutrition, and mindset articles from Strength For Today Training in Crown Point, Indiana.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <Section>
      <SectionHeading
        title="Blog"
        subtitle="Insights on training, nutrition, and building a healthier future."
      />
      <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block px-6 py-5 transition hover:bg-muted/40"
            >
              <p className="text-xs text-muted-foreground">
                {post.author} ·{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-1 font-heading text-xl">{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
