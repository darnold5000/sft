import { ContactForm } from "@/components/public/contact-form";
import { ContactMap } from "@/components/public/contact-map";
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
      <div className="grid gap-12 lg:grid-cols-3 lg:items-start lg:gap-8 xl:gap-10">
        <div className="lg:pr-2">
          <h1
            className="font-display text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl"
          >
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
            Questions about adult training, athlete performance, or how to get
            started? Reach out — we&apos;ll help you find the right next step.
          </p>

          <div className="mt-8 space-y-5 border-t border-neutral-800 pt-8 text-sm">
            <p className="font-display text-base font-semibold uppercase tracking-wide text-white">
              {SITE.name}
            </p>
            <p className="leading-relaxed text-neutral-400">{SITE.address.full}</p>
            <p>
              <a
                href={SITE.phoneHref}
                className="font-medium text-neutral-200 transition hover:text-white"
              >
                {SITE.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-neutral-200 transition hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          <div className="mt-6 border-t border-neutral-800/80 pt-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Hours
            </p>
            <ul className="mt-3 space-y-1.5 text-xs leading-snug text-neutral-400">
              {SITE.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-3">
                  <span className="text-neutral-500">{row.days}</span>
                  <span className="text-right text-neutral-300">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:border-l lg:border-neutral-800/80 lg:pl-8 xl:pl-10">
          <ContactForm />
        </div>

        <div className="lg:border-l lg:border-neutral-800/80 lg:pl-8 xl:pl-10">
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 lg:sr-only">
            Location
          </p>
          <ContactMap className="lg:flex lg:h-full lg:flex-col" />
        </div>
      </div>
    </Section>
  );
}
