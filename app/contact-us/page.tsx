import { ContactForm } from "@/components/public/contact-form";
import { ContactMap } from "@/components/public/contact-map";
import { Eyebrow } from "@/components/public/eyebrow";
import { Section } from "@/components/public/section";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact Strength For Today Training — ${SITE.phone}, ${SITE.email}, Crown Point, Indiana.`,
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <Section className="border-b border-neutral-900 bg-black py-10 sm:py-12 lg:py-14">
      <div
        className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-12 xl:gap-14"
      >
        <div className="min-w-0">
          <Eyebrow tone="muted">Contact</Eyebrow>
          <h1
            className="mt-3 font-display text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl"
          >
            Let&apos;s talk
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Questions about adult training, athlete performance, or how to get
            started? Send us a message and we&apos;ll help you find the right
            next step.
          </p>

          <div className="mt-8 max-w-md sm:max-w-lg">
            <ContactForm />
          </div>
        </div>

        <div className="min-w-0 lg:pt-0">
          <ContactMap size="featured" />

          <div className="mt-5 border-t border-neutral-800 pt-5 lg:mt-6 lg:pt-6">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              {SITE.name}
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-neutral-400">
              <span className="block">{SITE.address.line1}</span>
              <span className="block">
                {SITE.address.city}, {SITE.address.state}{" "}
                {SITE.address.postalCode}
              </span>
            </address>
            <p className="mt-4 space-y-1 text-sm">
              <a
                href={SITE.phoneHref}
                className="block font-medium text-neutral-200 transition hover:text-white"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block font-medium text-neutral-200 transition hover:text-white"
              >
                {SITE.email}
              </a>
            </p>

            <div className="mt-6 border-t border-neutral-800/80 pt-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Hours
              </p>
              <ul className="mt-3 space-y-1.5 text-xs leading-snug text-neutral-400">
                {SITE.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4">
                    <span className="text-neutral-500">{row.days}</span>
                    <span className="shrink-0 text-right text-neutral-300">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
