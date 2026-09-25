import Image from "next/image";
import Link from "next/link";
import { SFT_IMAGES } from "@/lib/assets";
import { NAV_LINKS, SITE, SQUARESPACE_STORE_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-4">
            <Image
              src={SFT_IMAGES.logoHeader}
              alt="Strength For Today"
              width={240}
              height={64}
              className="h-10 w-auto max-w-[220px] object-contain object-left"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Semi-private personal training for adults and athletes in Crown Point,
            Indiana — individualized programs and measurable progress.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-sm tracking-widest text-neutral-400">
            Navigate
          </h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/get-started" className="hover:text-white">
                Get Started
              </Link>
            </li>
            <li>
              <Link href="/get-directions" className="hover:text-white">
                Directions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-display text-sm tracking-widest text-neutral-400">
            Contact & hours
          </h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{SITE.address.full}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            {SITE.hours.map((row) => (
              <li key={row.days} className="text-muted-foreground">
                <span className="text-white/90">{row.days}:</span> {row.time}
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a
                href={SITE.facebookUrl}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href={SITE.instagramUrl}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-white/70">
            Shop official SFT gear on our{" "}
            <a
              href={SQUARESPACE_STORE_URL}
              className="text-neutral-300 underline-offset-2 hover:text-white hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              online store
            </a>
            .
          </p>
          <a
            href={SITE.signalWorks.url}
            target="_blank"
            rel="noreferrer"
            title="Professional websites, software & AI solutions."
            className="text-white/70 hover:text-white"
          >
            Powered by the <span className="text-white">Signal Works Platform</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
