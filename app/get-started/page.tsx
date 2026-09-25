import Link from "next/link";
import { Eyebrow } from "@/components/public/eyebrow";
import { Section } from "@/components/public/section";
import { buttonLinkClass } from "@/components/ui/button";
import { PROGRAM_ROUTES } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Get Started",
  description:
    "Start your Strength For Today journey — adult consultation or athlete assessment onboarding.",
  path: "/get-started",
});

export default function GetStartedPage() {
  return (
    <Section className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow tone="muted">Get started</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          Choose your path
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Both programs use a thorough onboarding process with Sam and the SFT
          team. Explore the program that fits you, then book your onboarding
          call when you are ready.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
            Adult Training
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Questionnaire, onboarding call, consultation, and 30-day Jumpstart
            before membership fit.
          </p>
          <Link
            href={PROGRAM_ROUTES.adult}
            className={buttonLinkClass("default") + " mt-8 inline-flex"}
          >
            Explore adult training
          </Link>
        </article>
        <article className="flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
            Athlete Performance
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Parent intake, call, free assessment (~35–40 minutes), and
            consultation on membership options.
          </p>
          <Link
            href={PROGRAM_ROUTES.athlete}
            className={buttonLinkClass("outline") + " mt-8 inline-flex"}
          >
            Explore athlete performance
          </Link>
        </article>
      </div>
    </Section>
  );
}
