import { Section, SectionHeading } from "@/components/public/section";
import { buttonLinkClass } from "@/components/ui/button";
import { SQUARESPACE_STORE_URL } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shop",
  description:
    "Official Strength For Today Training merchandise — apparel, hats, drinkware, and more.",
  path: "/store",
});

const categories = [
  "Hoodies & crewnecks",
  "Shirts & outerwear",
  "Youth apparel",
  "Hats & beanies",
  "Drinkware & totes",
];

export default function StorePage() {
  return (
    <Section>
      <SectionHeading
        title="Shop"
        subtitle="Rep Strength For Today with branded apparel and gear. Purchases are completed on our current Squarespace store — no checkout on this demo site."
      />
      <p className="max-w-2xl text-muted-foreground">
        The operational store includes product pages, variants, cart, and
        checkout on Squarespace Commerce. This page is your branded entry point
        until we finalize production commerce architecture (no DNS or store
        changes in Phase 1).
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((label) => (
          <li
            key={label}
            className="rounded-xl border border-border bg-card px-4 py-6 text-center font-semibold"
          >
            {label}
          </li>
        ))}
      </ul>
      <a
        href={SQUARESPACE_STORE_URL}
        className={buttonLinkClass("accent", "lg") + " mt-10 inline-flex"}
        target="_blank"
        rel="noreferrer"
      >
        Shop on Squarespace
      </a>
    </Section>
  );
}
