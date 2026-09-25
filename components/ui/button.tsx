import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-neutral-200",
        secondary:
          "border border-neutral-500 bg-transparent text-white hover:border-white hover:bg-white/5",
        ghost: "text-white/90 hover:bg-white/10",
        outline:
          "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
        accent:
          "border border-white bg-white text-black hover:bg-neutral-200",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export function buttonLinkClass(
  variant: VariantProps<typeof buttonVariants>["variant"] = "default",
  size: VariantProps<typeof buttonVariants>["size"] = "default",
) {
  return buttonVariants({ variant, size });
}
