export const SITE = {
  name: "Strength For Today Training",
  shortName: "SFT",
  tagline: "Individualized training for adults and athletes in Crown Point, Indiana.",
  description:
    "Semi-private personal training for adults, high school athletes, and youth athletes in Crown Point, Indiana — individualized programs, measurable progress, and a supportive community.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/+$/,
    "",
  ),
  phone: "(219) 200-2142",
  phoneHref: "tel:+12192002142",
  email: "sam@sft-training.com",
  address: {
    line1: "874 N Madison St",
    city: "Crown Point",
    state: "IN",
    postalCode: "46307",
    full: "874 N Madison St, Crown Point, IN 46307",
  },
  facebookUrl: "https://www.facebook.com/profile.php?id=61564419907697",
  instagramUrl: "https://www.instagram.com/sfttraining_/",
  timezone: "America/Chicago",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Strength+For+Today+Training+Crown+Point+IN",
  hours: [
    { days: "Monday – Thursday", time: "6:00am – 7:30pm" },
    { days: "Friday", time: "6:00am – 5:30pm" },
    { days: "Saturday", time: "9:30am – 11:30am" },
    { days: "Sunday", time: "Closed" },
  ],
  signalWorks: {
    name: "Signal Works",
    url: "https://hiresignalworks.com",
  },
} as const;

/** Operational Squarespace store — no DNS changes in Phase 1. */
export const SQUARESPACE_STORE_URL =
  process.env.NEXT_PUBLIC_SQUARESPACE_STORE_URL?.trim() ||
  "https://sft-training.com/store";

export const NAV_LINKS = [
  { href: "/adults", label: "Adult Training" },
  { href: "/athletes", label: "Athlete Performance" },
  { href: "/about-me", label: "About" },
  { href: "/testimonials", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/store", label: "Shop" },
] as const;
