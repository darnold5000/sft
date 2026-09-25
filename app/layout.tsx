import type { Metadata } from "next";
import { SiteFooter } from "@/components/public/site-footer";
import { SiteHeader } from "@/components/public/site-header";
import { LocalBusinessJsonLd } from "@/components/public/local-business-json-ld";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const siteMetadata = createMetadata({
  title: SITE.shortName,
  description: SITE.description,
  path: "/",
  exactTitle: true,
});

export const metadata: Metadata = {
  ...siteMetadata,
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased font-sans">
        <LocalBusinessJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
