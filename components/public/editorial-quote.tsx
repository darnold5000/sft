import { cn } from "@/lib/utils";

export type EditorialQuoteProps = {
  quote: string;
  name: string;
  role: string;
  context?: string | null;
  featured?: boolean;
  className?: string;
};

export function EditorialQuote({
  quote,
  name,
  role,
  context,
  featured = false,
  className,
}: EditorialQuoteProps) {
  return (
    <blockquote
      className={cn(
        "relative",
        featured
          ? "border-l border-white py-8 pl-8 pr-4 lg:col-span-2"
          : "border-l border-neutral-700 py-6 pl-6",
        className,
      )}
    >
      <span
        className={cn(
          "font-display font-bold leading-none text-white/25",
          featured ? "text-6xl sm:text-7xl" : "text-4xl",
        )}
        aria-hidden
      >
        &ldquo;
      </span>
      <p
        className={cn(
          "leading-relaxed text-neutral-200",
          featured ? "mt-2 text-lg sm:text-xl" : "mt-1 text-sm sm:text-base",
        )}
      >
        {quote}
      </p>
      <footer className="mt-5">
        <cite className="not-italic">
          <span className="font-display text-lg font-semibold uppercase tracking-wide text-white">
            {name}
          </span>
          <span className="mt-1 block text-sm text-neutral-400">{role}</span>
          {context ? (
            <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-neutral-500">
              {context}
            </span>
          ) : null}
        </cite>
      </footer>
    </blockquote>
  );
}
