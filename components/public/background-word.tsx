import { cn } from "@/lib/utils";

export function BackgroundWord({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute font-display text-[clamp(4rem,18vw,12rem)] font-bold uppercase leading-none tracking-tight text-white/[0.04] select-none",
        className,
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}
