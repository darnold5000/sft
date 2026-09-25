import Link from "next/link";
import { Section, SectionHeading } from "@/components/public/section";
import { buttonLinkClass } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Directions",
  description:
    "Find Strength For Today Training at 874 N Madison St, Crown Point, Indiana — map tips and directions.",
  path: "/get-directions",
});

export default function DirectionsPage() {
  return (
    <Section>
      <SectionHeading
        title="Directions"
        subtitle={SITE.address.full}
      />
      <div className="max-w-2xl space-y-4 text-muted-foreground">
        <p>
          We have run into issues with Apple and Google Maps taking people to a
          residential neighborhood. Search for{" "}
          <strong className="text-foreground">
            &ldquo;Strength For Today Training&rdquo;
          </strong>{" "}
          in your directions app, or use the link below.
        </p>
      </div>
      <a
        href={SITE.directionsUrl}
        className={buttonLinkClass("default") + " mt-8 inline-flex"}
        target="_blank"
        rel="noreferrer"
      >
        Open in Google Maps
      </a>
      <p className="mt-6 text-sm">
        <Link
          href="/contact-us"
          className="text-neutral-200 underline-offset-2 hover:text-white hover:underline"
        >
          Contact us
        </Link>{" "}
        if you need help finding the gym.
      </p>
    </Section>
  );
}
