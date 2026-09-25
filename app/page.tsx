import Image from "next/image";
import Link from "next/link";
import { BackgroundWord } from "@/components/public/background-word";
import { CoachSpotlight } from "@/components/public/coach-spotlight";
import { CtaLink } from "@/components/public/cta-link";
import { EditorialQuote } from "@/components/public/editorial-quote";
import { Eyebrow } from "@/components/public/eyebrow";
import { ProgramPanel } from "@/components/public/program-panel";
import { Section, SectionHeading } from "@/components/public/section";
import { SFT_IMAGES } from "@/lib/assets";
import { getAllBlogPosts } from "@/lib/blog/parse-rss";
import { getAllTestimonials } from "@/lib/testimonials";
import { TEAM } from "@/lib/team";
import { createMetadata } from "@/lib/seo";
import { SQUARESPACE_STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Strength For Today Training",
  description:
    "Semi-private personal training for adults and athletes in Crown Point, Indiana. Individualized programs, experienced coaching, and a clear path to get started.",
  path: "/",
  exactTitle: true,
});

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export default function HomePage() {
  const posts = getAllBlogPosts();
  const latest = posts[0];
  const morePosts = posts.slice(1, 3);
  const testimonials = getAllTestimonials();
  const featuredQuote = testimonials.find((t) => t.id === "martha-metzger") ?? testimonials[0];
  const secondaryQuotes = testimonials
    .filter((t) => t.id !== featuredQuote.id)
    .slice(0, 2);

  return (
    <>
      <section className="relative min-h-[min(92vh,52rem)] overflow-hidden border-b border-border/60 bg-ink">
        <div className="absolute inset-0">
          <Image
            src={SFT_IMAGES.facility}
            alt=""
            fill
            className="object-cover object-center scale-105 motion-safe:transition-transform motion-safe:duration-[1.2s] hover:scale-100"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/50 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:min-h-[min(92vh,52rem)]">
          <Eyebrow className="motion-reveal text-accent">
            Crown Point, Indiana · Northwest Indiana
          </Eyebrow>
          <h1
            className="motion-reveal mt-4 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
            style={{ animationDelay: "80ms" }}
          >
            Individualized training for{" "}
            <span className="text-brand">adults</span> &amp;{" "}
            <span className="text-accent">athletes</span>
          </h1>
          <p
            className="motion-reveal mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            Semi-private coaching with programs built for you — from first-time
            gym-goers to competitive athletes.
          </p>
          <div
            className="motion-reveal mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "200ms" }}
          >
            <CtaLink href="/adults" variant="default" size="lg">
              Adult Training
            </CtaLink>
            <CtaLink href="/athletes" variant="accent" size="lg">
              Athlete Performance
            </CtaLink>
            <CtaLink href="/get-started" variant="secondary" size="lg">
              Get Started
            </CtaLink>
          </div>
        </div>
      </section>

      <Section className="border-b border-border/40 bg-background">
        <div className="mb-12 max-w-3xl">
          <Eyebrow tone="brand">Programs</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Two paths. One standard of coaching.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <ProgramPanel
            variant="adult"
            eyebrow="Adults"
            title="Adult Training"
            description="Personalized semi-private training — move better, feel better, and build consistency with programming every session."
            href="/adults"
            cta="Explore adult training"
          />
          <ProgramPanel
            variant="athlete"
            eyebrow="Athletes"
            title="Athlete Performance"
            description="Youth and high school athletes — speed, agility, strength, and hands-on coaching built around sport and goals."
            href="/athletes"
            cta="Explore athlete performance"
          />
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-ink surface-noise">
        <BackgroundWord className="left-0 top-8 -translate-x-[5%]">
          Strength
        </BackgroundWord>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Why SFT</Eyebrow>
            <p className="mt-6 font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              Semi-private training for adults, high school athletes, and youth
              across greater Northwest Indiana.
            </p>
          </div>
          <div className="space-y-10 lg:col-span-7 lg:pt-4">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Who we are
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We create individualized programs for everyone who steps through
                our door — not one-size-fits-all group workouts.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Our mission
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Meet each client where they are, guide their fitness journey, and
                empower them to build a healthier, stronger, more fulfilling
                future.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                How to start
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Adults and athletes follow a thorough onboarding process —
                questionnaire or intake, a conversation with Sam, then your
                starting point session or assessment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Meet the coaches" />
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {TEAM.map((member, i) => (
            <CoachSpotlight
              key={member.id}
              name={member.name}
              role={member.role}
              teaser={member.bio[0]}
              monogramTone={i === 0 ? "brand" : "accent"}
            />
          ))}
        </div>
      </Section>

      <Section className="border-y border-border/50 bg-gradient-to-b from-card/30 to-background">
        <SectionHeading
          title="Results"
          subtitle="Parents and clients share how individualized coaching shows up in strength, speed, confidence, and everyday life."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <EditorialQuote
            featured
            quote={featuredQuote.quote}
            name={featuredQuote.name}
            role={featuredQuote.role}
            context={featuredQuote.context}
          />
          <div className="flex flex-col gap-8">
            {secondaryQuotes.map((t) => (
              <EditorialQuote
                key={t.id}
                quote={t.quote}
                name={t.name}
                role={t.role}
                context={t.context}
              />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <CtaLink href="/testimonials" variant="secondary">
            Read more results
          </CtaLink>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>From the blog</Eyebrow>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Training &amp; mindset
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-wider text-accent hover:text-white"
          >
            View all posts →
          </Link>
        </div>

        {latest ? (
          <div className="grid gap-8 lg:grid-cols-12">
            <Link
              href={`/blog/${latest.slug}`}
              className="group relative block overflow-hidden bg-brand/10 lg:col-span-7 lg:min-h-[18rem]"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-brand/25 via-card to-ink"
                aria-hidden
              />
              {latest.image ? (
                <Image
                  src={latest.image}
                  alt=""
                  fill
                  className="object-cover opacity-40 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-50"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : null}
              <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Latest · {latest.author}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight text-white transition group-hover:text-accent sm:text-4xl">
                  {latest.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-white/75">
                  {stripHtml(latest.bodyHtml).slice(0, 160)}…
                </p>
              </div>
            </Link>
            <div className="flex flex-col gap-6 lg:col-span-5">
              {morePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border-l-2 border-border pl-6 transition hover:border-accent"
                >
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {post.author}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase leading-snug text-white group-hover:text-accent">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <section className="relative overflow-hidden border-y border-border/60 bg-ink py-16 sm:py-20">
        <div
          className="absolute right-0 top-1/2 size-64 -translate-y-1/2 opacity-[0.06] sm:size-96"
          aria-hidden
        >
          <Image
            src={SFT_IMAGES.logoPrimary}
            alt=""
            fill
            className="object-contain"
            sizes="384px"
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="max-w-xl">
            <Eyebrow tone="accent">Merch</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              Official SFT gear
            </h2>
            <p className="mt-4 text-muted-foreground">
              Apparel, hats, drinkware, and more — rep Strength For Today on and
              off the floor.
            </p>
          </div>
          <CtaLink
            href={SQUARESPACE_STORE_URL}
            variant="accent"
            size="lg"
            target="_blank"
          >
            Shop SFT
          </CtaLink>
        </div>
      </section>

      <Section className="relative overflow-hidden bg-brand">
        <span
          className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[clamp(5rem,20vw,14rem)] font-bold uppercase leading-none text-outline-ghost"
          aria-hidden
        >
          Start
        </span>
        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              Ready when you are
            </h2>
            <p className="mt-4 max-w-lg text-white/90">
              Choose adult training or athlete performance — we will walk you
              through onboarding step by step.
            </p>
          </div>
          <CtaLink
            href="/get-started"
            variant="secondary"
            size="lg"
            className="border-white/30 bg-ink text-white hover:bg-ink/90"
          >
            Get started
          </CtaLink>
        </div>
      </Section>

      <Section id="newsletter" className="border-t border-border/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="muted">Newsletter</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">
            Stay in the loop
          </h2>
          <p className="mt-4 text-muted-foreground">
            Health tips, recipes, facility updates, and more from the SFT team.
          </p>
          <a
            href="https://sft-training.com/"
            className={cn(
              "mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-brand px-6 text-base font-semibold text-brand-foreground transition hover:bg-brand/90",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Join the email list
          </a>
        </div>
      </Section>
    </>
  );
}
