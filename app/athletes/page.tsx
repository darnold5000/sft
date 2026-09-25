import Link from "next/link";
import { buttonLinkClass } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/public/section";
import { ONBOARDING_PATHS } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Athlete Performance",
  description:
    "Youth and high school athlete training in Crown Point — speed, agility, strength, individualized programming, and assessment-based onboarding.",
  path: "/athletes",
});

const youth = [
  "Fun, competitive environment for athletes in grades 5th–8th",
  "Speed & agility drills with proper technique to make your athlete faster",
  "Safe, basic strength training to build foundations of athleticism",
  "Real differences you will see on the field and the court",
];

const highSchool = [
  "Speed & agility drills to become a quicker, faster, more effective athlete",
  "Individualized strength training based on sport, position, and experience",
  "Hands-on coaching for proper, effective form",
  "Training to make you a better athlete — not just a better weightlifter",
];

const steps = [
  {
    title: "Complete the contact form",
    body:
      "Use a parent’s contact information (not the athlete’s) on the intake form.",
  },
  {
    title: "Schedule your call",
    body:
      "After intake, schedule a call to review details and book your athlete’s assessment.",
  },
  {
    title: "Free assessment & consultation",
    body:
      "A 35–40 minute testing and workout period, followed by a group discussion of results and membership options based on your athlete’s needs.",
  },
];

export default function AthletesPage() {
  return (
    <Section>
      <SectionHeading
        title="Athlete Performance"
        subtitle="Individualized programming for youth and high school athletes — speed, strength, and measurable progress."
      />
      <Link
        href={ONBOARDING_PATHS.athleteIntake}
        className={buttonLinkClass("default", "lg")}
      >
        Start athlete onboarding
      </Link>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-heading text-2xl">Youth (grades 5–8)</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {youth.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-2xl">High school</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {highSchool.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="mt-14 font-heading text-2xl">How our program works</h3>
      <ol className="mt-6 max-w-3xl list-decimal space-y-4 pl-5 text-muted-foreground">
        {steps.map((step) => (
          <li key={step.title}>
            <strong className="text-foreground">{step.title}</strong>
            <p className="mt-1">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
