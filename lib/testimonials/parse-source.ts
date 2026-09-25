import fs from "node:fs";
import path from "node:path";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  context?: string | null;
};

let cached: Testimonial[] | null = null;

export function getAllTestimonials(): Testimonial[] {
  if (cached) return cached;

  const jsonPath = path.join(process.cwd(), "content/testimonials/data.json");
  if (fs.existsSync(jsonPath)) {
    const raw = fs.readFileSync(jsonPath, "utf8").replace(/^\uFEFF/, "");
    const parsed = JSON.parse(raw) as Testimonial[];
    cached = parsed.map((t) => ({
      ...t,
      context: t.context ?? undefined,
    }));
    return cached;
  }

  throw new Error(
    "Missing content/testimonials/data.json — run scripts/build-testimonials-json.ps1",
  );
}
