import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Eyebrow } from "@/components/public/eyebrow";

type Props = {
  sectionId: string;
  scheduleUrl: string;
  scheduleTitle: string;
  headline: string;
  description: string;
};

export function OnboardingScheduleSection({
  sectionId,
  scheduleUrl,
  scheduleTitle,
  headline,
  description,
}: Props) {
  return (
    <section
      id={sectionId}
      className="scroll-mt-24 border-t border-border bg-ink py-16 sm:py-20"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Eyebrow tone="muted">Ready to get started?</Eyebrow>
        <h2
          id={`${sectionId}-heading`}
          className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl"
        >
          {headline}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
        <div className="mt-10">
          <AcuityEmbed scheduleUrl={scheduleUrl} title={scheduleTitle} />
        </div>
      </div>
    </section>
  );
}
