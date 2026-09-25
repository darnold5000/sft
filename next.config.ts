import type { NextConfig } from "next";

function allowIndexing(): boolean {
  const explicit = process.env.NEXT_PUBLIC_ALLOW_INDEXING;
  if (explicit === "false") return false;
  if (explicit === "true") return true;
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return false;
  }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  if (!siteUrl || siteUrl.includes("localhost")) return false;
  return true;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/content/**",
      },
    ],
  },
  async headers() {
    const robotsTag = allowIndexing() ? "index, follow" : "noindex, nofollow";
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: robotsTag }],
      },
    ];
  },
};

export default nextConfig;
