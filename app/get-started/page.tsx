import Link from "next/link";
import { Section, SectionHeading } from "@/components/public/section";
import { buttonLinkClass } from "@/components/ui/button";
import { ONBOARDING_PATHS } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Get Started",
  description:
    "Start your Strength For Today journey — adult consultation or athlete assessment onboarding.",
  path: "/get-started",
});

export default function GetStartedPage() {
  return (
    <Section>
      <SectionHeading
        title="Get started"
        subtitle="Choose the path that fits you. Both programs use a thorough onboarding process with Sam and the SFT team."
        align="center"
      />
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-heading text-2xl">Adult Training</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Questionnaire, onboarding call, consultation, and 30-day Jumpstart
            before membership fit.
          </p>
          <Link
            href={ONBOARDING_PATHS.adultIntake}
            className={buttonLinkClass("default") + " mt-6 inline-flex"}
          >
            Adult onboarding
          </Link>
        </article>
        <article className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-heading text-2xl">Athlete Performance</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Parent intake, call, free assessment (~35–40 minutes), and
            consultation on membership options.
          </p>
          <Link
            href={ONBOARDING_PATHS.athleteIntake}
            className={buttonLinkClass("accent") + " mt-6 inline-flex"}
          >
            Athlete onboarding
          </Link>
        </article>
      </div>
    </Section>
  );
}
