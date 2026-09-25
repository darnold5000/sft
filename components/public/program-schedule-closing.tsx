import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Eyebrow } from "@/components/public/eyebrow";

type Props = {
  scheduleUrl: string;
  scheduleTitle: string;
  headline: string;
  description: string;
  /** Primary = directly under program hero; closing = end of page (unused if only primary) */
  placement?: "primary" | "closing";
};

export function ProgramScheduleClosing({
  scheduleUrl,
  scheduleTitle,
  headline,
  description,
  placement = "primary",
}: Props) {
  const isPrimary = placement === "primary";

  return (
    <section
      id="book-onboarding"
      className={
        isPrimary
          ? "scroll-mt-24 border-b border-neutral-800 bg-neutral-950 py-12 sm:py-16"
          : "scroll-mt-24 border-t border-neutral-800 bg-neutral-950 py-16 sm:py-20"
      }
      aria-labelledby="program-booking-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow tone="muted">Ready to get started?</Eyebrow>
        <h2
          id="program-booking-heading"
          className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <AcuityEmbed
            scheduleUrl={scheduleUrl}
            title={scheduleTitle}
            compact={isPrimary}
          />
        </div>
      </div>
    </section>
  );
}
