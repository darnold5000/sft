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
  variant = "default",
}: {
  name: string;
  role: string;
  teaser: string;
  variant?: "default" | "muted";
}) {
  return (
    <article className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
      <div
        className={cn(
          "relative flex size-28 shrink-0 items-center justify-center border border-neutral-700 bg-neutral-950 sm:size-32",
          variant === "muted" && "border-neutral-800",
        )}
      >
        <span className="font-display text-4xl font-bold uppercase tracking-tight text-white">
          {initials(name)}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <Eyebrow tone="dim">Coach</Eyebrow>
        <h3 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-neutral-400">
          {role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-400 line-clamp-4">
          {teaser}
        </p>
        <Link
          href="/about-me"
          className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-white transition hover:text-neutral-300"
        >
          Full bio →
        </Link>
      </div>
    </article>
  );
}
