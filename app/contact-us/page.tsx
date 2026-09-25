import Link from "next/link";
import { ContactForm } from "@/components/public/contact-form";
import { CtaLink } from "@/components/public/cta-link";
import { Eyebrow } from "@/components/public/eyebrow";
import { Section } from "@/components/public/section";
import { ONBOARDING_PATHS } from "@/lib/integrations";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact Strength For Today Training — ${SITE.phone}, ${SITE.email}, Crown Point, Indiana.`,
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-border bg-background pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col">
            <Eyebrow tone="muted">Contact</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-tight text-foreground">
              Let&apos;s talk about your goals.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you are exploring adult training, athlete performance, or
              not sure where to start, we can help you figure out the right next
              step for your goals and schedule.
            </p>

            <div className="mt-10 space-y-8 border-t border-border pt-10 text-sm sm:text-base">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Phone
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 block font-medium text-foreground-soft transition hover:text-foreground"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block font-medium text-foreground-soft transition hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Location
                </p>
                <p className="mt-2 text-muted-foreground">{SITE.address.full}</p>
                <Link
                  href="/get-directions"
                  className="mt-2 inline-block text-sm font-semibold uppercase tracking-wider text-foreground-soft/80 hover:text-foreground-soft"
                >
                  Directions →
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Hours
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {SITE.hours.map((row) => (
                    <li key={row.days} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                      <span className="min-w-[10rem] text-foreground-soft/80">
                        {row.days}
                      </span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      <section className="border-b border-border bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center lg:max-w-none lg:text-left">
            <Eyebrow tone="muted" className="lg:mx-0">
              Onboarding
            </Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-xl">
              If you already know which program fits you, skip the general
              contact form and begin onboarding — we will walk you through intake
              and scheduling with Sam and the team.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <CtaLink href={ONBOARDING_PATHS.adultIntake} variant="default" size="lg">
                Start adult training
              </CtaLink>
              <CtaLink href={ONBOARDING_PATHS.athleteIntake} variant="outline" size="lg">
                Start athlete training
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
