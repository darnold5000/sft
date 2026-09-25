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
  /** Coach headshots — `public/images/coaches/` */
  coachSam: "/images/coaches/sam.webp",
  coachFletcher: "/images/coaches/fletcher.jpg",
} as const;

/** Product photography from the live SFT store (CDN). */
export const SFT_MERCH = {
  heroHoodie:
    `${CDN}/1759260845557-GFZYCSUA9LFXE1D7M8RT/unisex-heavy-blend-zip-hoodie-black-front-68dc30a60a366.jpg`,
  apparelSweatshirt:
    `${CDN}/1759261701653-9TN0LUNE49ZDO5AE1CG2/unisex-garment-dyed-sweatshirt-true-navy-front-68dc33f29b206.jpg`,
  apparelTee:
    `${CDN}/1759263119635-SI9HOZQ2QDD3WIAA1PDX/unisex-sports-tee-carolina-blue-front-68dc39718de29.jpg`,
  apparelJacket:
    `${CDN}/1759273611889-FQI9MEL5WJ5NYW54HNTE/embroidered-champion-packable-jacket-black-front-68dc627e61abd.jpg`,
  headwearTrucker:
    `${CDN}/1759273173706-MJS6IQU0TLTF80P67SM3/retro-trucker-hat-black-front-68dc60caa82f4.jpg`,
  headwearBeanie:
    `${CDN}/1759272885618-BGLKWJG7Z7HHYQK2JYLK/cuffed-beanie-black-front-68dc5fb0da76c.jpg`,
  accessoryMug:
    `${CDN}/1759261983692-KFJPVOQO92LGCD9PJ5GB/black-glossy-mug-black-11-oz-handle-on-right-68dc35145e84c.jpg`,
  accessoryTumbler:
    `${CDN}/1759262099228-L9LV7Q923YP276OBCPJB/insulated-tumbler-with-a-straw-black-20-oz-front-68dc3588752b0.jpg`,
  accessoryTote:
    `${CDN}/1759261499864-C24XCZ2FYKQT9926UZU6/large-eco-tote-black-front-68dc33327c30a.jpg`,
} as const;

/** Request a reasonable width from Squarespace CDN. */
export function sftImageUrl(
  url: string,
  width = 2000,
): string {
  if (url.includes("?format=")) return url;
  return `${url}?format=${width}w`;
}
