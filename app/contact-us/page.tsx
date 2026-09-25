import { Section, SectionHeading } from "@/components/public/section";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact Strength For Today Training — ${SITE.phone}, ${SITE.email}, Crown Point, Indiana.`,
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading title="Contact us" />
      <div className="max-w-lg space-y-4 text-lg">
        <p>
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-accent hover:underline"
          >
            {SITE.email}
          </a>
        </p>
        <p>
          <a href={SITE.phoneHref} className="font-semibold hover:underline">
            {SITE.phone}
          </a>
        </p>
        <p className="text-muted-foreground">{SITE.address.full}</p>
      </div>
    </Section>
  );
}
