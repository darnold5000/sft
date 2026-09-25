import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Eyebrow } from "@/components/public/eyebrow";
import { ProgramTrackNav } from "@/components/public/program-track-nav";

type Track = "adult" | "athlete";

type Props = {
  track: Track;
  title: string;
  subtitle: string;
  bookingHeadline: string;
  bookingDescription: string;
  scheduleUrl: string;
  scheduleTitle: string;
};

export function ProgramBookingHero({
  track,
  title,
  subtitle,
  bookingHeadline,
  bookingDescription,
  scheduleUrl,
  scheduleTitle,
}: Props) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="muted">Programs</Eyebrow>
            <h1
              className="mt-2 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-foreground-soft sm:text-5xl"
            >
              {title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          </div>
          <ProgramTrackNav active={track} />
        </div>

        <div className="mt-8 lg:mt-10">
          <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-white sm:text-2xl">
            {bookingHeadline}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {bookingDescription}
          </p>
          <div className="mt-6">
            <AcuityEmbed scheduleUrl={scheduleUrl} title={scheduleTitle} compact />
          </div>
        </div>
      </div>
    </section>
  );
}
