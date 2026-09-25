const CDN = "https://images.squarespace-cdn.com/content/v1/6449775d0a95947c096e115d";

/** SFT brand & training assets from the live Squarespace site (CDN). */
export const SFT_IMAGES = {
  logoHeader:
    `${CDN}/2a567ff0-d082-48a4-8722-08bb12c03134/EhGiqJCqCoiglD7WZbtAT%7E200-1.jpg`,
  logoPrimary:
    `${CDN}/1736362824429-LMU0S84MNGZ3ESPA9V24/primary+logo.png`,
  logoSecondary:
    `${CDN}/1744070212218-RSONSN1K56WWWEEHSW7A/secondary+logo.png`,
  /** Gym / facility — used on live /adults */
  facility:
    `${CDN}/1736800722368-CT6QSDU4RTGZS3JUBMEA/IMG_0989.jpg`,
  /** Homepage hero imagery on live site */
  trainingHero:
    `${CDN}/7b012cb2-2462-4527-8af0-373e499b06fc/IMG_0992.jpg`,
  /** Live homepage program panel — adult */
  adultTrainingPanel:
    `${CDN}/dfac8da3-d0eb-4257-8137-f1d796b010d0/Website+adult+pics.png`,
  /** Live homepage program panel — athlete */
  athleteTrainingPanel:
    `${CDN}/2adaee46-3342-4539-911a-e689a44280a7/May+HS+athlete+horizontal+%281%29.png`,
  /** Live /athletes page photography */
  athleteTrainingA:
    `${CDN}/25ddc0a5-966d-46b8-9cc9-a78ec814c24b/IMG_0994.jpg`,
  athleteTrainingB:
    `${CDN}/4177d38a-86d0-450b-9fcf-d373a6b9957e/IMG_0997.jpg`,
  /** Live /about-me coach photography */
  coachSam:
    `${CDN}/5d3cfe86-e8da-422c-9319-1ae549fc44ea/IMG_1179.jpg`,
  coachFletcher:
    `${CDN}/f879b2bc-be3b-4a32-9290-348b9bf15e77/IMG_4111+2.jpeg`,
} as const;

/** Request a reasonable width from Squarespace CDN. */
export function sftImageUrl(
  url: string,
  width = 2000,
): string {
  if (url.includes("?format=")) return url;
  return `${url}?format=${width}w`;
}
