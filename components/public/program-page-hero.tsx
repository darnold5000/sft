import Image from "next/image";
import { Eyebrow } from "@/components/public/eyebrow";
import { ProgramTrackNav } from "@/components/public/program-track-nav";
import { sftImageUrl } from "@/lib/assets";

type Track = "adult" | "athlete";

type Props = {
  track: Track;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

export function ProgramPageHero({
  track,
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section className="relative min-h-[min(70vh,36rem)] overflow-hidden border-b border-neutral-800 bg-black">
      <Image
        src={sftImageUrl(imageSrc, 2400)}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Programs</Eyebrow>
            <h1
              className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
            >
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300 sm:text-xl">
              {subtitle}
            </p>
          </div>
          <ProgramTrackNav active={track} />
        </div>
      </div>
    </section>
  );
}
