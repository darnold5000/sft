import Link from "next/link";
import { buttonLinkClass } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/public/section";
import { ONBOARDING_PATHS } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Adult Training",
  description:
    "Semi-private personalized adult training in Crown Point — individualized programs, community support, and a clear onboarding path including your 30-day Jumpstart.",
  path: "/adults",
});

const programPoints = [
  "SFT specializes in semi-private, personalized training — personal training benefits without the steep price tag.",
  "Each member has an individualized program suited to their goals every single session.",
  "Whether this is your first gym experience or you are a seasoned veteran, we have a program for you.",
  "Access a community of guidance and support like you have not experienced before.",
  "Designed to help you move better, feel better, and look better.",
];

const onboarding = [
  "Fill out a brief questionnaire so we can understand your goals.",
  "Schedule a call to discuss details and schedule your free consultation.",
  "During your consultation, discuss your experiences and goals and get set up on a 30-day Jumpstart package.",
  "After the first 30 days, meet again to choose the right membership based on your goals and first-month experience.",
];

export default function AdultsPage() {
  return (
    <Section>
      <SectionHeading
        title="Adult Training"
        subtitle="Focused, personalized training built to meet you where you are at, and take you where you want to go."
      />
      <div className="mb-10">
        <Link
          href={ONBOARDING_PATHS.adultIntake}
          className={buttonLinkClass("default", "lg")}
        >
          Schedule your free consultation
        </Link>
      </div>
      <h3 className="font-heading text-2xl">What the adult program looks like</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
        {programPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="mt-12 font-heading text-2xl">Onboarding process</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
        {onboarding.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
