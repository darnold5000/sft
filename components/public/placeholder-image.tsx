import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function PlaceholderImage({
  src,
  alt,
  className,
  priority,
  fill,
  width = 800,
  height = 600,
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(fill && "object-cover", className)}
        sizes={fill ? "(max-width: 768px) 100vw, 50vw" : undefined}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-muted text-center text-sm font-medium text-muted-foreground",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      Image coming soon
    </div>
  );
}
