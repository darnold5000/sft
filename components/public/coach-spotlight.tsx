import Link from "next/link";
import { Eyebrow } from "@/components/public/eyebrow";
import { cn } from "@/lib/utils";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CoachSpotlight({
  name,
  role,
  teaser,
  monogramTone = "brand",
}: {
  name: string;
  role: string;
  teaser: string;
  monogramTone?: "brand" | "accent";
}) {
  return (
    <article className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
      <div
        className={cn(
          "relative flex size-28 shrink-0 items-center justify-center sm:size-32",
          "before:absolute before:inset-0 before:rotate-3 before:bg-brand/20",
          monogramTone === "accent"
            ? "after:absolute after:inset-0 after:-rotate-2 after:border after:border-accent/40"
            : "after:absolute after:inset-0 after:-rotate-2 after:border after:border-brand/50",
        )}
      >
        <span
          className={cn(
            "relative z-10 font-display text-4xl font-bold uppercase tracking-tight",
            monogramTone === "accent" ? "text-accent" : "text-brand",
          )}
        >
          {initials(name)}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <Eyebrow tone="muted">Coach</Eyebrow>
        <h3 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">
          {role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
          {teaser}
        </p>
        <Link
          href="/about-me"
          className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-white transition hover:text-accent"
        >
          Full bio →
        </Link>
      </div>
    </article>
  );
}
