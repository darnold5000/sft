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

export function ProgramBookingLead({
  track,
  title,
  subtitle,
  bookingHeadline,
  bookingDescription,
  scheduleUrl,
  scheduleTitle,
}: Props) {
  return (
    <section
      id="book-onboarding"
      className="scroll-mt-24 border-b border-neutral-800 bg-black pt-10 sm:pt-12"
    >
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-8 xl:gap-12">
          <div className="lg:sticky lg:top-24">
            <Eyebrow tone="muted">Programs</Eyebrow>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <h1
                className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
              >
                {title}
              </h1>
              <ProgramTrackNav active={track} />
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 border-t border-neutral-800 pt-10">
              <Eyebrow tone="muted">Ready to get started?</Eyebrow>
              <h2
                className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl"
              >
                {bookingHeadline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {bookingDescription}
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:pt-1">
            <AcuityEmbed
              scheduleUrl={scheduleUrl}
              title={scheduleTitle}
              compact
            />
          </div>
        </div>
      </div>
    </section>
  );
}
