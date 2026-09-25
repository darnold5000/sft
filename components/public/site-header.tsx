"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonLinkClass } from "@/components/ui/button";
import { ACUITY } from "@/lib/integrations";
import { SFT_IMAGES } from "@/lib/assets";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const memberHref = ACUITY.memberLogin || "/get-started";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src={SFT_IMAGES.logoHeader}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover"
          />
          <span className="truncate font-display text-lg font-semibold uppercase tracking-wide text-foreground-soft">
            {SITE.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition",
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
          <Link
            href={memberHref}
            className={buttonLinkClass("ghost", "sm")}
            {...(ACUITY.memberLogin
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
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
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className={cn(buttonLinkClass("default"), "mt-2")}
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
            <Link
              href={memberHref}
              className={cn(buttonLinkClass("secondary"), "mt-2")}
              onClick={() => setOpen(false)}
              {...(ACUITY.memberLogin
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              Member Login / Book Training
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
