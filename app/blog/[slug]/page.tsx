import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/public/section";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog/parse-rss";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.title,
    path: `/blog/${post.slug}`,
    image: post.image ?? undefined,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <Section>
      <Link
        href="/blog"
        className="text-sm font-semibold text-accent hover:underline"
      >
        ← All posts
      </Link>
      <header className="mt-6 max-w-3xl">
        <p className="text-sm text-muted-foreground">
          {post.author} ·{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 font-heading text-4xl">{post.title}</h1>
      </header>
      <article
        className="prose-sft mt-10 max-w-3xl text-foreground/90"
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      />
    </Section>
  );
}
