"use client";

import Link from "next/link";
import { PROGRAM_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

type Track = "adult" | "athlete";

const tracks: { id: Track; label: string; href: string }[] = [
  { id: "adult", label: "Adults", href: PROGRAM_ROUTES.adult },
  { id: "athlete", label: "Athletes", href: PROGRAM_ROUTES.athlete },
];

export function ProgramTrackNav({ active }: { active: Track }) {
  return (
    <nav
      className="inline-flex rounded-full border border-border bg-card p-1"
      aria-label="Program type"
    >
      {tracks.map((track) => {
        const isActive = track.id === active;
        return (
          <Link
            key={track.id}
            href={track.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80",
              isActive
                ? "bg-white text-black"
                : "text-muted-foreground hover:text-foreground-soft",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {track.label}
          </Link>
        );
      })}
    </nav>
  );
}
