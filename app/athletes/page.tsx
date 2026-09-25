import { ProgramBookingHero } from "@/components/public/program-booking-hero";
import { Section } from "@/components/public/section";
import { ACUITY } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Athlete Performance",
  description:
    "Youth and high school athlete training in Crown Point — speed, agility, strength, individualized programming, and assessment-based onboarding.",
  path: "/athletes",
});

const youth = [
  "Grades 5–8: speed, agility, and safe strength foundations in a competitive, fun environment.",
  "Technique-first coaching athletes can take to the field or court.",
];

const highSchool = [
  "Sport- and position-specific strength and speed work.",
  "Hands-on form coaching — better on the field, not just in the gym.",
];

const steps = [
  "Parent contact info on the scheduler (not the athlete’s).",
  "15-minute onboarding call, then book the athlete assessment.",
  "35–40 minute assessment and consultation on results and membership options.",
];

export default function AthletesPage() {
  return (
    <>
      <ProgramBookingHero
        track="athlete"
        title="Athlete Performance"
        subtitle="Youth and high school athletes — speed, strength, and programming built for their sport."
        bookingHeadline="Book your athlete onboarding call"
        bookingDescription="Parents: 15 minutes with Sam to share athlete details, pick a time, and schedule the assessment and consultation."
        scheduleUrl={ACUITY.athleteOnboarding}
        scheduleTitle="Athlete Program Onboarding Call"
      />

      <Section className="bg-ink py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground-soft">
              Youth (grades 5–8)
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {youth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-2xl font-semibold uppercase tracking-tight text-foreground-soft">
              High school
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {highSchool.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground-soft">
              How onboarding works
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
