import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "muted",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "muted" | "dim";
}) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-xs",
        tone === "light" && "text-white/90",
        tone === "muted" && "text-neutral-400",
        tone === "dim" && "text-neutral-500",
        className,
      )}
    >
      {children}
    </p>
  );
}
