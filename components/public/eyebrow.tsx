import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "accent",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "brand" | "muted";
}) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-xs",
        tone === "accent" && "text-accent",
        tone === "brand" && "text-brand",
        tone === "muted" && "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
