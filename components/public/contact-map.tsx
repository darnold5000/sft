import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "default" | "featured";
};

export function ContactMap({ className, size = "default" }: Props) {
  const heightClass =
    size === "featured"
      ? "h-[min(280px,42vh)] lg:min-h-[min(520px,58vh)]"
      : "h-[min(280px,42vh)] lg:min-h-[22rem]";

  return (
    <div className={className}>
      <Link
        href={SITE.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3 inline-flex font-display text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 transition hover:text-white"
      >
        Get directions
        <span aria-hidden> →</span>
      </Link>
      <div
        className={cn(
          "overflow-hidden border border-neutral-800 bg-neutral-950",
          heightClass,
        )}
      >
        <iframe
          title="Strength For Today Training on Google Maps"
          src={SITE.mapsEmbedUrl}
          className="h-full w-full border-0 grayscale-[0.15] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
