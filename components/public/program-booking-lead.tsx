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
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-10">
        {/* Wider scheduler column (~58%) so iframe clears Acuity’s desktop breakpoint */}
        <div
          className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-8 xl:gap-10"
        >
          <div className="min-w-0">
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

            <div className="mt-8 border-t border-neutral-800 pt-8 lg:mt-10 lg:pt-10">
              <Eyebrow tone="muted">Ready to get started?</Eyebrow>
              <h2
                className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl"
              >
                {bookingHeadline}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {bookingDescription}
              </p>
            </div>
          </div>

          <div className="min-w-0 w-full">
            <AcuityEmbed
              scheduleUrl={scheduleUrl}
              title={scheduleTitle}
              layout="program"
              bare
            />
          </div>
        </div>
      </div>
    </section>
  );
}
