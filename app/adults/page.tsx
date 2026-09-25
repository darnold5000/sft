import Image from "next/image";
import { BackgroundWord } from "@/components/public/background-word";
import { EditorialQuote } from "@/components/public/editorial-quote";
import { Eyebrow } from "@/components/public/eyebrow";
import { ProgramPageHero } from "@/components/public/program-page-hero";
import { ProgramScheduleClosing } from "@/components/public/program-schedule-closing";
import { ProgramStepsList } from "@/components/public/program-steps-list";
import { Section } from "@/components/public/section";
import { SFT_IMAGES, sftImageUrl } from "@/lib/assets";
import { ACUITY } from "@/lib/integrations";
import { ADULT_PROGRAM } from "@/lib/program-content";
import { createMetadata } from "@/lib/seo";
import { getAllTestimonials } from "@/lib/testimonials";

export const metadata = createMetadata({
  title: "Adult Training",
  description:
    "Semi-private personalized adult training in Crown Point — individualized programs, community support, and a clear onboarding path including your 30-day Jumpstart.",
  path: "/adults",
});

export default function AdultsPage() {
  const testimonial =
    getAllTestimonials().find((t) => t.id === ADULT_PROGRAM.testimonialId) ??
    getAllTestimonials()[0];

  return (
    <>
      <ProgramPageHero
        track="adult"
        title="Adult Training"
        subtitle={ADULT_PROGRAM.heroSubtitle}
        imageSrc={SFT_IMAGES.adultTrainingPanel}
        imageAlt="Adults training at Strength For Today"
      />

      <ProgramScheduleClosing
        placement="primary"
        scheduleUrl={ACUITY.adultOnboarding}
        scheduleTitle="Adult Program Onboarding Call"
        headline={ADULT_PROGRAM.bookingHeadline}
        description={ADULT_PROGRAM.bookingDescription}
      />

      <Section className="border-b border-neutral-800 bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow tone="muted">Who it&apos;s for</Eyebrow>
            <p className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              {ADULT_PROGRAM.whoFor}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src={sftImageUrl(SFT_IMAGES.facility, 1600)}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden border-b border-neutral-800 bg-black surface-noise">
        <BackgroundWord className="right-0 top-8 translate-x-[10%]">
          Train
        </BackgroundWord>
        <div className="relative">
          <Eyebrow tone="muted">Your program</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
            Individualized semi-private training
          </h2>
          <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {ADULT_PROGRAM.benefits.map((item) => (
              <li
                key={item}
                className="border-l border-neutral-700 py-2 pl-4 text-sm leading-relaxed text-neutral-400 sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-b border-neutral-800 bg-neutral-950">
        <Eyebrow tone="muted">How it works</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
          From first visit to Jumpstart
        </h2>
        <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-muted-foreground">
          {ADULT_PROGRAM.howItWorks.map((item) => (
            <li key={item} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </Section>

      <Section className="border-b border-neutral-800 bg-background">
        <EditorialQuote
          featured
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
          context={testimonial.context}
        />
      </Section>

      <Section className="border-b border-neutral-800 bg-ink">
        <Eyebrow tone="muted">Onboarding</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
          How sign-up works
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          New adult members follow a clear path with Sam — from your onboarding
          call through your starting point session and 30-day Jumpstart.
        </p>
        <div className="mt-10 max-w-3xl">
          <ProgramStepsList steps={[...ADULT_PROGRAM.onboardingSteps]} />
        </div>
      </Section>
    </>
  );
}
