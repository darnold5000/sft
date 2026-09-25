import { Section, SectionHeading } from "@/components/public/section";
import { getAllTestimonials } from "@/lib/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Results",
  description:
    "Testimonials from Strength For Today parents and clients — strength, speed, confidence, and community in Crown Point, Indiana.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();

  return (
    <Section>
      <SectionHeading
        title="Results"
        subtitle="Stories from parents and clients training at Strength For Today."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote
            key={t.id}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
              Image coming soon
            </div>
            <p className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-accent">
              — {t.name}, {t.role}
              {t.context ? (
                <span className="mt-1 block font-normal text-muted-foreground">
                  {t.context}
                </span>
              ) : null}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
