import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/public/eyebrow";
import { sftImageUrl } from "@/lib/assets";
import { ArrowRight } from "lucide-react";

type ProgramPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  /** Visual distinction without color — e.g. outline vs solid label */
  emphasis?: "solid" | "outline";
};

export function ProgramPanel({
  eyebrow,
  title,
  description,
  href,
  cta,
  imageSrc,
  imageAlt,
  emphasis = "solid",
}: ProgramPanelProps) {
  const src = sftImageUrl(imageSrc, 1500);

  return (
    <Link
      href={href}
      className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden sm:min-h-[26rem]"
    >
      <Image
        src={src}
        alt={imageAlt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20"
        aria-hidden
      />
      <div className="relative z-10 p-8 sm:p-10">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h3
          className={
            emphasis === "outline"
              ? "mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-outline-ghost sm:text-5xl"
              : "mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl"
          }
        >
          {title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-300">
          {description}
        </p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
          {cta}
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
