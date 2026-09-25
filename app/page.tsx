import Image from "next/image";
import Link from "next/link";
import { BackgroundWord } from "@/components/public/background-word";
import { CoachSpotlight } from "@/components/public/coach-spotlight";
import { CtaLink } from "@/components/public/cta-link";
import { EditorialQuote } from "@/components/public/editorial-quote";
import { Eyebrow } from "@/components/public/eyebrow";
import { ProgramPanel } from "@/components/public/program-panel";
import { Section, SectionHeading } from "@/components/public/section";
import { SFT_IMAGES, sftImageUrl } from "@/lib/assets";
import { getAllBlogPosts } from "@/lib/blog/parse-rss";
import { getAllTestimonials } from "@/lib/testimonials";
import { TEAM } from "@/lib/team";
import { createMetadata } from "@/lib/seo";
import { SQUARESPACE_STORE_URL } from "@/lib/site";
import { buttonLinkClass } from "@/components/ui/button";

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
  const featuredQuote =
    testimonials.find((t) => t.id === "martha-metzger") ?? testimonials[0];
  const secondaryQuotes = testimonials
    .filter((t) => t.id !== featuredQuote.id)
    .slice(0, 2);

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-neutral-800 bg-black max-md:h-[clamp(38.75rem,86dvh,43.75rem)] md:min-h-[min(92vh,52rem)]"
      >
        <div className="absolute inset-0">
          <Image
            src={sftImageUrl(SFT_IMAGES.trainingHero, 2500)}
            alt=""
            fill
            className="object-cover object-[78%_38%] brightness-[1.2] contrast-[1.05] saturate-[0.92] md:object-[58%_center] md:brightness-[1.12] md:contrast-[1.06] md:saturate-100"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 md:via-black/45 md:to-black/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15 md:via-black/40 md:to-black/5"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-0 w-full max-w-md bg-gradient-to-r from-black/85 to-transparent md:max-w-3xl md:from-black/75"
          aria-hidden
        />
        <div
          className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-3.5 pb-7 pt-[4.75rem] md:min-h-[min(92vh,52rem)] md:px-6 md:pb-20 md:pt-40"
        >
          <Eyebrow tone="light" className="motion-reveal max-md:text-[0.65rem]">
            Crown Point, Indiana · Northwest Indiana
          </Eyebrow>
          <h1
            className="motion-reveal mt-2 max-w-4xl font-display font-bold uppercase leading-[0.92] tracking-tight text-white max-md:mt-3 max-md:text-[clamp(1.85rem,8.2vw,2.35rem)] md:mt-4 md:text-[clamp(2.75rem,7vw,5.5rem)]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="md:hidden">
              <span className="block">Individualized</span>
              <span className="block">Training for</span>
              <span className="mt-0.5 block text-[clamp(1.9rem,8.5vw,2.4rem)] leading-[0.9]">
                <span className="font-light text-neutral-300">Adults</span>
                <span className="text-neutral-500"> &amp; </span>
                <span className="whitespace-nowrap font-extrabold text-white">
                  Athletes
                </span>
              </span>
            </span>
            <span className="hidden md:inline">
              Individualized training for{" "}
              <span className="mt-1 block font-light text-neutral-300 sm:mt-0 sm:inline">
                adults
              </span>{" "}
              <span className="text-neutral-500">&amp;</span>{" "}
              <span className="font-extrabold text-white">athletes</span>
            </span>
          </h1>
          <p
            className="motion-reveal mt-3 max-w-[19rem] text-base leading-snug text-neutral-300 md:mt-6 md:max-w-xl md:text-lg md:leading-relaxed md:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            Semi-private coaching with programs built for you — from first-time
            gym-goers to competitive athletes.
          </p>
          <div
            className="motion-reveal mt-5 flex flex-col gap-2.5 md:mt-10 md:flex-row md:flex-wrap md:gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <CtaLink
              href="/adults"
              variant="default"
              size="lg"
              className="max-md:h-10 max-md:w-full max-md:px-4 max-md:text-sm md:w-auto"
            >
              Adult Training
            </CtaLink>
            <div
              className="grid grid-cols-2 gap-2.5 max-[359px]:grid-cols-1 md:contents"
            >
              <CtaLink
                href="/athletes"
                variant="outline"
                size="lg"
                className="max-md:h-10 max-md:w-full max-md:px-3 max-md:text-sm md:w-auto"
              >
                Athlete Performance
              </CtaLink>
              <CtaLink
                href="/get-started"
                variant="secondary"
                size="lg"
                className="max-md:h-10 max-md:w-full max-md:px-3 max-md:text-sm md:w-auto"
              >
                Get Started
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <Section className="border-b border-neutral-800 bg-background max-md:!py-10">
        <div className="mb-12 max-w-3xl">
          <Eyebrow tone="muted">Programs</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            Two paths. One standard of coaching.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <ProgramPanel
            emphasis="solid"
            eyebrow="Adults"
            title="Adult Training"
            description="Personalized semi-private training — move better, feel better, and build consistency with programming every session."
            href="/adults"
            cta="Explore adult training"
            imageSrc={SFT_IMAGES.adultTrainingPanel}
            imageAlt="Adults training at Strength For Today"
          />
          <ProgramPanel
            emphasis="outline"
            eyebrow="Athletes"
            title="Athlete Performance"
            description="Youth and high school athletes — speed, agility, strength, and hands-on coaching built around sport and goals."
            href="/athletes"
            cta="Explore athlete performance"
            imageSrc={SFT_IMAGES.athleteTrainingPanel}
            imageAlt="High school athlete training at Strength For Today"
          />
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black surface-noise">
        <BackgroundWord className="left-0 top-8 -translate-x-[5%]">
          Strength
        </BackgroundWord>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow tone="muted">Why SFT</Eyebrow>
            <p className="mt-6 font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              Semi-private training for adults, high school athletes, and youth
              across greater Northwest Indiana.
            </p>
          </div>
          <div className="space-y-10 lg:col-span-7 lg:pt-4">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Who we are
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-400">
                We create individualized programs for everyone who steps through
                our door — not one-size-fits-all group workouts.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
                Our mission
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-400">
                Meet each client where they are, guide their fitness journey, and
                empower them to build a healthier, stronger, more fulfilling
                future.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                How to start
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-400">
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
              image={member.image}
              variant={i === 1 ? "muted" : "default"}
            />
          ))}
        </div>
      </Section>

      <Section className="border-y border-neutral-800 bg-neutral-950">
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
            <Eyebrow tone="muted">From the blog</Eyebrow>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl">
              Training &amp; mindset
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-wider text-neutral-400 transition hover:text-white"
          >
            View all posts →
          </Link>
        </div>

        {latest ? (
          <div className="grid gap-8 lg:grid-cols-12">
            <Link
              href={`/blog/${latest.slug}`}
              className="group relative block overflow-hidden border border-neutral-800 bg-neutral-950 lg:col-span-7 lg:min-h-[18rem]"
            >
              {latest.image ? (
                <Image
                  src={latest.image}
                  alt=""
                  fill
                  className="object-cover opacity-35 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-45"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : null}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"
                aria-hidden
              />
              <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Latest · {latest.author}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight text-white transition group-hover:text-neutral-200 sm:text-4xl">
                  {latest.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-neutral-400">
                  {stripHtml(latest.bodyHtml).slice(0, 160)}…
                </p>
              </div>
            </Link>
            <div className="flex flex-col gap-6 lg:col-span-5">
              {morePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border-l border-neutral-700 pl-6 transition hover:border-white"
                >
                  <p className="text-xs text-neutral-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {post.author}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase leading-snug text-white group-hover:text-neutral-300">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <section className="relative overflow-hidden border-y border-neutral-800 bg-black py-16 sm:py-20">
        <div
          className="absolute right-0 top-1/2 size-64 -translate-y-1/2 opacity-[0.05] sm:size-96"
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
            <Eyebrow tone="muted">Merch</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              Official SFT gear
            </h2>
            <p className="mt-4 text-neutral-400">
              Apparel, hats, drinkware, and more — rep Strength For Today on and
              off the floor.
            </p>
          </div>
          <CtaLink
            href={SQUARESPACE_STORE_URL}
            variant="default"
            size="lg"
            target="_blank"
          >
            Shop SFT
          </CtaLink>
        </div>
      </section>

      <Section className="relative overflow-hidden border-t border-neutral-800 bg-neutral-950">
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
            <p className="mt-4 max-w-lg text-neutral-400">
              Choose adult training or athlete performance — we will walk you
              through onboarding step by step.
            </p>
          </div>
          <CtaLink href="/get-started" variant="default" size="lg">
            Get started
          </CtaLink>
        </div>
      </Section>

      <Section id="newsletter" className="border-t border-neutral-800">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="muted">Newsletter</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            Stay in the loop
          </h2>
          <p className="mt-4 text-neutral-400">
            Health tips, recipes, facility updates, and more from the SFT team.
          </p>
          <a
            href="https://sft-training.com/"
            className={buttonLinkClass("default", "lg") + " mt-8 inline-flex"}
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
