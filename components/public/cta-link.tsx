import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "ghost" | "accent";
  size?: "default" | "sm" | "lg";
  className?: string;
  showArrow?: boolean;
} & Pick<ComponentProps<typeof Link>, "target" | "rel">;

export function CtaLink({
  href,
  children,
  variant = "default",
  size = "default",
  className,
  showArrow = true,
  target,
  rel,
}: CtaLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={cn(
        buttonLinkClass(variant, size),
        "group",
        className,
      )}
      target={target}
      rel={rel ?? (isExternal ? "noreferrer" : undefined)}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
