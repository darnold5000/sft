import Image from "next/image";
import Link from "next/link";
import { buttonLinkClass } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/public/section";
import { PlaceholderImage } from "@/components/public/placeholder-image";
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

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3);
  const featured = getAllTestimonials().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-ink">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={SFT_IMAGES.facility}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Crown Point, Indiana · Northwest Indiana
          </p>
          <h1 className="max-w-3xl font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Individualized training for adults &amp; athletes
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Strength For Today is a semi-private training gym. Every client gets
            an individualized program in a supportive coaching environment — from
            first-time gym-goers to competitive athletes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/adults" className={buttonLinkClass("default", "lg")}>
              Adult Training
            </Link>
            <Link href="/athletes" className={buttonLinkClass("accent", "lg")}>
              Athlete Performance
            </Link>
            <Link href="/get-started" className={buttonLinkClass("secondary", "lg")}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          title="Choose your path"
          subtitle="Two programs, one standard of coaching — meet you where you are and build a plan for where you want to go."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-heading text-2xl text-foreground">Adult Training</h3>
            <p className="mt-3 text-muted-foreground">
              Semi-private, personalized training with individualized programming
              every session — move better, feel better, and build consistency.
            </p>
            <Link
              href="/adults"
              className={cn(buttonLinkClass("secondary"), "mt-6 inline-flex")}
            >
              Explore Adult Training
            </Link>
          </article>
          <article className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-heading text-2xl text-foreground">Athlete Performance</h3>
            <p className="mt-3 text-muted-foreground">
              Youth (grades 5–8) and high school athletes — speed, agility,
              strength, and testing with hands-on coaching.
            </p>
            <Link
              href="/athletes"
              className={cn(buttonLinkClass("secondary"), "mt-6 inline-flex")}
            >
              Explore Athlete Performance
            </Link>
          </article>
        </div>
      </Section>

      <Section className="bg-card/40">
        <SectionHeading
          title="Why Strength For Today"
          subtitle="We specialize in semi-private personal training for adults, high school athletes, and youth athletes across greater Northwest Indiana."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Who we are.</strong> We create
              individualized programs for everyone who steps through our door —
              not one-size-fits-all group workouts.
            </p>
            <p>
              <strong className="text-foreground">Our mission.</strong> Meet each
              client where they are, guide their fitness journey, and empower them
              to build a healthier, stronger, more fulfilling future.
            </p>
            <p>
              <strong className="text-foreground">How to start.</strong> Adults
              and athletes follow a thorough onboarding process — questionnaire
              or intake, a conversation with Sam, then your starting point session
              or assessment.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
            <PlaceholderImage
              src={SFT_IMAGES.facility}
              alt="Strength For Today training floor"
              fill
              className="absolute inset-0"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Meet the coaches" />
        <div className="grid gap-8 md:grid-cols-2">
          {TEAM.map((member) => (
            <article
              key={member.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-40">
                <PlaceholderImage
                  src={member.image}
                  alt={member.name}
                  fill
                  className="absolute inset-0"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl">{member.name}</h3>
                <p className="text-sm font-semibold text-accent">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-5">
                  {member.bio[0]}
                </p>
                <Link
                  href="/about-me"
                  className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                >
                  Read full bio
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          title="Results"
          subtitle="Parents and clients share how individualized coaching shows up in strength, speed, confidence, and everyday life."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-accent">
                {t.name}
                <span className="block font-normal text-muted-foreground">
                  {t.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/testimonials" className={buttonLinkClass("secondary")}>
            Read more results
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="From the blog"
          subtitle="Training, nutrition, and mindset from the SFT team."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-brand/40"
            >
              <p className="text-xs text-muted-foreground">{post.author}</p>
              <h3 className="mt-2 font-heading text-lg group-hover:text-accent">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className={buttonLinkClass("ghost")}>
            View all posts
          </Link>
        </div>
      </Section>

      <Section className="border-t border-border bg-ink">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-heading text-2xl">Official SFT merchandise</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Apparel, hats, drinkware, and more — available through our current
              Squarespace store while we finalize the production commerce setup.
            </p>
          </div>
          <a
            href={SQUARESPACE_STORE_URL}
            className={buttonLinkClass("accent")}
            target="_blank"
            rel="noreferrer"
          >
            Visit the store
          </a>
        </div>
      </Section>

      <Section id="newsletter">
        <SectionHeading
          title="Stay in the loop"
          subtitle="Health tips, recipes, facility updates, and more — join the SFT email list on our current site until the new signup is wired."
          align="center"
        />
        <div className="mx-auto max-w-lg text-center">
          <a
            href="https://sft-training.com/"
            className={buttonLinkClass("default")}
            target="_blank"
            rel="noreferrer"
          >
            Newsletter signup
          </a>
        </div>
      </Section>
    </>
  );
}
