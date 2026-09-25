import { ProgramBookingHero } from "@/components/public/program-booking-hero";
import { Section } from "@/components/public/section";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Adult Training",
  description:
    "Semi-private personalized adult training in Crown Point — individualized programs, community support, and a clear onboarding path including your 30-day Jumpstart.",
  path: "/adults",
});

const programPoints = [
  "Semi-private, personalized training — personal training benefits without the steep price tag.",
  "Individualized programming every session, whether you are new to the gym or a seasoned lifter.",
  "A supportive community focused on moving better, feeling better, and building consistency.",
];

const onboarding = [
  "Brief questionnaire, then your 15-minute onboarding call with Sam.",
  "Starting point session (conversation, not a workout) and your 30-day Jumpstart.",
  "After 30 days, choose the membership that fits your goals and experience.",
];

export default function AdultsPage() {
  return (
    <>
      <ProgramBookingHero
        track="adult"
        title="Adult Training"
        subtitle="Focused, personalized coaching in Crown Point — built around your goals and your schedule."
        bookingHeadline="Book your adult onboarding call"
        bookingDescription="15 minutes with Sam: a few quick questions, pick a time, and we will outline your starting point session and Jumpstart."
        scheduleUrl={ACUITY.adultOnboarding}
        scheduleTitle="Adult Program Onboarding Call"
      />

      <Section className="bg-ink py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground-soft">
              What you get
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {programPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground-soft">
              How onboarding works
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {onboarding.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
