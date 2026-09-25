import Link from "next/link";
import { AcuityEmbed } from "@/components/public/acuity-embed";
import { Section, SectionHeading } from "@/components/public/section";
import { buttonLinkClass } from "@/components/ui/button";

type Step = { title: string; body: string };

type Props = {
  title: string;
  intro: string;
  steps: Step[];
  scheduleUrl: string;
  scheduleTitle: string;
};

export function IntakePage({
  title,
  intro,
  steps,
  scheduleUrl,
  scheduleTitle,
}: Props) {
  return (
    <Section>
      <SectionHeading title={title} subtitle={intro} />
      <ol className="mb-10 max-w-3xl list-decimal space-y-4 pl-5 text-muted-foreground">
        {steps.map((step) => (
          <li key={step.title}>
            <strong className="text-foreground">{step.title}</strong>
            <p className="mt-1">{step.body}</p>
          </li>
        ))}
      </ol>
      <AcuityEmbed scheduleUrl={scheduleUrl} title={scheduleTitle} />
      <p className="mt-8 text-sm text-muted-foreground">
        Questions?{" "}
        <Link
          href="/contact-us"
          className="text-neutral-200 underline-offset-2 hover:text-white hover:underline"
        >
          Contact us
        </Link>
        .
      </p>
      <Link href="/get-started" className={cnLink("mt-4 inline-flex")}>
        ← Explore program pages
      </Link>
    </Section>
  );
}

function cnLink(extra: string) {
  return buttonLinkClass("ghost", "sm") + " " + extra;
}
