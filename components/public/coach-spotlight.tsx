import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/public/eyebrow";
import { cn } from "@/lib/utils";

export function CoachSpotlight({
  name,
  role,
  teaser,
  image,
  variant = "default",
}: {
  name: string;
  role: string;
  teaser: string;
  image: string;
  variant?: "default" | "muted";
}) {
  return (
    <article className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
      <div
        className={cn(
          "relative size-28 shrink-0 overflow-hidden border border-neutral-700 bg-neutral-950 sm:size-32",
          variant === "muted" && "border-neutral-800",
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="128px"
        />
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
