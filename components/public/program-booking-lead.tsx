import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Eyebrow } from "@/components/public/eyebrow";
import {
  ProgramWhatToExpect,
  type WhatToExpectStep,
} from "@/components/public/program-what-to-expect";
import { ProgramTrackNav } from "@/components/public/program-track-nav";

type Track = "adult" | "athlete";

type Props = {
  track: Track;
  title: string;
  subtitle: string;
  bookingHeadline: string;
  bookingDescription: string;
  whatToExpect: WhatToExpectStep[];
  scheduleUrl: string;
  scheduleTitle: string;
};

export function ProgramBookingLead({
  track,
  title,
  subtitle,
  bookingHeadline,
  bookingDescription,
  whatToExpect,
  scheduleUrl,
  scheduleTitle,
}: Props) {
  return (
    <section
      id="book-onboarding"
      className="scroll-mt-24 border-b border-neutral-800 bg-black pt-10 sm:pt-12"
    >
      <div className="mx-auto w-full max-w-[85rem] px-4 pb-8 sm:px-6 sm:pb-10">
        {/* 800px scheduler col is required for Acuity calendar|times row; grid fits ~1232px content at xl */}
        <div
          className="grid w-full grid-cols-1 items-start gap-10 xl:ml-auto xl:w-max xl:max-w-full xl:grid-cols-[minmax(360px,420px)_800px] xl:gap-12 2xl:grid-cols-[460px_800px] 2xl:gap-14"
        >
          <div className="flex min-w-0 flex-col 2xl:max-w-[460px]">
            <Eyebrow tone="muted">Programs</Eyebrow>
            <h1
              className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
            >
              {title}
            </h1>
            <div className="mt-5 w-full max-w-sm">
              <ProgramTrackNav active={track} />
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 border-t border-neutral-800 pt-8">
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

            <ProgramWhatToExpect steps={whatToExpect} />
          </div>

          <div className="w-full shrink-0 xl:w-[800px] xl:max-w-[800px]">
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
