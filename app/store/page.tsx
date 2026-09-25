import Image from "next/image";
import { BackgroundWord } from "@/components/public/background-word";
import { CtaLink } from "@/components/public/cta-link";
import { Eyebrow } from "@/components/public/eyebrow";
import { SFT_IMAGES, SFT_MERCH, sftImageUrl } from "@/lib/assets";
import { createMetadata } from "@/lib/seo";
import { SQUARESPACE_STORE_URL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Shop",
  description:
    "Official Strength For Today Training apparel, headwear, and accessories.",
  path: "/store",
});

const groups = [
  {
    title: "Apparel",
    subtitle: "Hoodies, shirts & outerwear",
    description:
      "Layer up with SFT-branded hoodies, crewnecks, jackets, and tees — built for the gym and everyday wear.",
    images: [
      { src: SFT_MERCH.heroHoodie, alt: "SFT zip hoodie" },
      { src: SFT_MERCH.apparelSweatshirt, alt: "SFT sweatshirt" },
      { src: SFT_MERCH.apparelJacket, alt: "SFT packable jacket" },
    ],
  },
  {
    title: "Headwear",
    subtitle: "Hats & beanies",
    description:
      "Trucker caps, beanies, and bucket hats with the Strength For Today mark.",
    images: [
      { src: SFT_MERCH.headwearTrucker, alt: "SFT trucker cap" },
      { src: SFT_MERCH.headwearBeanie, alt: "SFT cuffed beanie" },
    ],
  },
  {
    title: "Accessories",
    subtitle: "Drinkware, totes & more",
    description:
      "Mugs, insulated tumblers, and totes to rep SFT off the training floor.",
    images: [
      { src: SFT_MERCH.accessoryMug, alt: "SFT mug" },
      { src: SFT_MERCH.accessoryTumbler, alt: "SFT tumbler" },
      { src: SFT_MERCH.accessoryTote, alt: "SFT tote bag" },
    ],
  },
] as const;

export default function StorePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-800 bg-black">
        <div className="absolute inset-0">
          <Image
            src={sftImageUrl(SFT_MERCH.heroHoodie, 2200)}
            alt=""
            fill
            className="object-cover object-center opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow tone="light">SFT gear</Eyebrow>
          <h1
            className="mt-4 font-display text-[clamp(3rem,10vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-tight text-white"
          >
            Rep SFT.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            Official Strength For Today apparel and gear — hoodies, hats,
            drinkware, youth styles, and more. Wear the brand that stands for
            individualized training in Crown Point.
          </p>
        </div>
      </section>

      {groups.map((group, index) => (
        <section
          key={group.title}
          className={
            index % 2 === 0
              ? "relative overflow-hidden border-b border-neutral-800 bg-background py-16 sm:py-20"
              : "relative overflow-hidden border-b border-neutral-800 bg-neutral-950 py-16 sm:py-20 surface-noise"
          }
        >
          {index === 1 ? (
            <BackgroundWord className="right-0 top-8 translate-x-[8%]">
              Gear
            </BackgroundWord>
          ) : null}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <Eyebrow tone="muted">{group.title}</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                  {group.subtitle}
                </h2>
                <p className="mt-4 text-muted-foreground">{group.description}</p>
              </div>
              <div
                className={`grid gap-3 lg:col-span-8 ${
                  group.images.length === 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
              >
                {group.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-square overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <Image
                      src={sftImageUrl(img.src, 1200)}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden border-b border-neutral-800 bg-black py-20 sm:py-24">
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
          <Image
            src={sftImageUrl(SFT_IMAGES.logoPrimary, 800)}
            alt=""
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Full catalog
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Shop every style &amp; size
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-400 lg:mx-0">
            Browse the complete SFT merchandise collection — variants, youth
            sizes, and checkout in one place.
          </p>
          <CtaLink
            href={SQUARESPACE_STORE_URL}
            variant="default"
            size="lg"
            className="mt-10"
            target="_blank"
          >
            Shop SFT
          </CtaLink>
        </div>
      </section>
    </>
  );
}
