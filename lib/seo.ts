import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string | undefined;
  exactTitle?: boolean;
}

export function allowIndexing(): boolean {
  const explicit = process.env.NEXT_PUBLIC_ALLOW_INDEXING;
  if (explicit === "false") return false;
  if (explicit === "true") return true;
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return false;
  }
  const siteUrl = SITE.url;
  if (!siteUrl || siteUrl.includes("localhost")) return false;
  return true;
}

function robots(index: boolean): NonNullable<Metadata["robots"]> {
  return {
    index,
    follow: index,
    googleBot: { index, follow: index },
  };
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/sft/primary-logo.png",
  exactTitle = false,
}: SEOProps): Metadata {
  const url = `${SITE.url}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : new URL(image, SITE.url).toString();
  const fullTitle = exactTitle ? title : `${title} | ${SITE.shortName}`;
  const index = allowIndexing();

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    robots: robots(index),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [{ url: imageUrl, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
