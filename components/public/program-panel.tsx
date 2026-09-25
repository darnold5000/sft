import Link from "next/link";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/public/eyebrow";
import { ArrowRight } from "lucide-react";

type ProgramPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  variant: "adult" | "athlete";
};

export function ProgramPanel({
  eyebrow,
  title,
  description,
  href,
  cta,
  variant,
}: ProgramPanelProps) {
  const isAthlete = variant === "athlete";

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[22rem] flex-col justify-end overflow-hidden p-8 sm:min-h-[26rem] sm:p-10",
        "bg-gradient-to-br from-card via-background to-ink",
        "transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_0_1px_rgba(196,30,58,0.35)]",
        isAthlete
          ? "lg:skew-y-0"
          : "",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-90",
          isAthlete
            ? "bg-[linear-gradient(135deg,#0a0c10_0%,#12161f_45%,#1a1200_100%)]"
            : "bg-[linear-gradient(160deg,#06080c_0%,#12161f_55%,#0a0c10_100%)]",
        )}
        aria-hidden
      />
      {isAthlete ? (
        <>
          <div
            className="absolute -right-8 top-0 h-full w-1/2 skew-x-[-12deg] bg-accent/10"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-accent/80 to-transparent"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute left-0 top-8 h-24 w-1 bg-brand"
          aria-hidden
        />
      )}
      <span
        className={cn(
          "absolute right-6 top-6 font-display text-7xl font-bold uppercase leading-none opacity-[0.07] sm:text-8xl",
          isAthlete ? "text-accent" : "text-brand",
        )}
        aria-hidden
      >
        {isAthlete ? "PERF" : "TRAIN"}
      </span>
      <div className="relative z-10 max-w-md">
        <Eyebrow tone={isAthlete ? "accent" : "brand"}>{eyebrow}</Eyebrow>
        <h3 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-white/75">
          {description}
        </p>
        <span
          className={cn(
            "mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider",
            isAthlete ? "text-accent" : "text-white",
          )}
        >
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
