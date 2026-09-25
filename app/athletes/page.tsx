import Image from "next/image";
import { EditorialQuote } from "@/components/public/editorial-quote";
import { Eyebrow } from "@/components/public/eyebrow";
import { ProgramBookingLead } from "@/components/public/program-booking-lead";
import { Section } from "@/components/public/section";
import { SFT_IMAGES, sftImageUrl } from "@/lib/assets";
import { ACUITY } from "@/lib/integrations";
import { ATHLETE_PROGRAM } from "@/lib/program-content";
import { createMetadata } from "@/lib/seo";
import { getAllTestimonials } from "@/lib/testimonials";

export const metadata = createMetadata({
  title: "Athlete Performance",
  description:
    "Youth and high school athlete training in Crown Point — speed, agility, strength, individualized programming, and assessment-based onboarding.",
  path: "/athletes",
});

export default function AthletesPage() {
  const testimonial =
    getAllTestimonials().find((t) => t.id === ATHLETE_PROGRAM.testimonialId) ??
    getAllTestimonials()[0];

  return (
    <>
      <ProgramBookingLead
        track="athlete"
        title="Athlete Performance"
        subtitle={ATHLETE_PROGRAM.heroSubtitle}
        bookingHeadline={ATHLETE_PROGRAM.bookingHeadline}
        bookingDescription={ATHLETE_PROGRAM.bookingDescription}
        whatToExpect={[...ATHLETE_PROGRAM.whatToExpect]}
        scheduleUrl={ACUITY.athleteOnboarding}
        scheduleTitle="Athlete Program Onboarding Call"
      />

      <Section className="border-b border-neutral-800 bg-background">
        <Eyebrow tone="muted">Programs by age</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
          Youth &amp; high school
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
              Youth (grades 5–8)
            </h3>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
              {ATHLETE_PROGRAM.youth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
              High school
            </h3>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
              {ATHLETE_PROGRAM.highSchool.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-b border-neutral-800 bg-black">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border lg:aspect-auto lg:min-h-[20rem]">
            <Image
              src={sftImageUrl(SFT_IMAGES.athleteTrainingA, 1600)}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border lg:aspect-auto lg:min-h-[20rem]">
            <Image
              src={sftImageUrl(SFT_IMAGES.athleteTrainingB, 1600)}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
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

    </>
  );
}
