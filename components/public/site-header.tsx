"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonLinkClass } from "@/components/ui/button";
import { SFT_IMAGES } from "@/lib/assets";
import { NAV_LINKS, PROGRAM_NAV_PREFIXES, PROGRAM_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Strength For Today — home"
          onClick={() => setOpen(false)}
        >
          <Image
            src={SFT_IMAGES.logoHeader}
            alt="Strength For Today"
            width={360}
            height={96}
            priority
            className="h-14 w-auto max-w-[min(360px,62vw)] object-contain object-left mix-blend-lighten sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active =
              link.label === "Programs"
                ? PROGRAM_NAV_PREFIXES.some(
                    (p) => pathname === p || pathname.startsWith(`${p}/`),
                  )
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80",
                  active
                    ? "text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-white"
                    : "text-foreground-soft/70 hover:text-foreground-soft",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/get-started" className={buttonLinkClass("default", "sm")}>
            Get Started
          </Link>
          <Link href="/member-login" className={buttonLinkClass("ghost", "sm")}>
            Member Login
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-ink px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.label === "Programs" ? (
                  <div className="mb-2 flex gap-3 px-6">
                    <Link
                      href={PROGRAM_ROUTES.adult}
                      className="text-sm font-semibold text-muted-foreground hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      Adults
                    </Link>
                    <Link
                      href={PROGRAM_ROUTES.athlete}
                      className="text-sm font-semibold text-muted-foreground hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      Athletes
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/get-started"
              className={cn(buttonLinkClass("default"), "mt-2")}
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
            <Link
              href="/member-login"
              className={cn(buttonLinkClass("secondary"), "mt-2")}
              onClick={() => setOpen(false)}
            >
              Member Login / Book Training
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
