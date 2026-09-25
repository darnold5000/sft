"use client";

import type { ReactNode } from "react";
import { buttonLinkClass, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  targetId: string;
  children: ReactNode;
  variant?: NonNullable<ButtonProps["variant"]>;
  size?: NonNullable<ButtonProps["size"]>;
  className?: string;
};

export function ScrollToLink({
  targetId,
  children,
  variant = "default",
  size = "lg",
  className,
}: Props) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(buttonLinkClass(variant, size), className)}
      onClick={(e) => {
        const el = document.getElementById(targetId);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}
