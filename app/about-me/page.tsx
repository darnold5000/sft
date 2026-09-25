import { Section, SectionHeading } from "@/components/public/section";
import { PlaceholderImage } from "@/components/public/placeholder-image";
import { TEAM } from "@/lib/team";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Meet Samuel Vree and Fletcher Bandstra — the coaching team behind Strength For Today Training in Crown Point, Indiana.",
  path: "/about-me",
});

export default function AboutPage() {
  return (
    <Section>
      <SectionHeading
        title="About Strength For Today"
        subtitle="Experienced coaches, individualized programming, and a gym built for adults and athletes alike."
      />
      <div className="space-y-16">
        {TEAM.map((member) => (
          <article
            key={member.id}
            className="grid gap-8 border-b border-border pb-16 last:border-0 lg:grid-cols-[240px_1fr]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <PlaceholderImage
                src={member.image}
                alt={member.name}
                fill
                className="absolute inset-0"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl">{member.name}</h2>
              <p className="mt-1 text-lg font-semibold text-neutral-300">
                {member.role}
              </p>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {member.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
