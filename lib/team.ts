import { SFT_IMAGES } from "@/lib/assets";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
};

export const TEAM: TeamMember[] = [
  {
    id: "sam-vree",
    name: "Samuel Vree",
    role: "Founder & Head Trainer",
    image: SFT_IMAGES.coachSam,
    bio: [
      "Samuel Vree is the founder and head trainer at Strength For Today. He started SFT in November of 2024 because it combines fitness and helping other people.",
      "He grew up in Lansing, Illinois and developed a love for the weight room in high school at Illiana Christian. He studied exercise science at Hope College while playing four years of varsity basketball.",
      "After college he trained at PowerStrength in Michigan, working with clients from fifth grade through seniors and learning the business side of the industry.",
      "In 2023 his father offered to partner on opening a gym. After planning and searching for a space, they signed the lease at 874 Madison St in Crown Point — where Sam lives out that dream every day.",
    ],
  },
  {
    id: "fletcher-bandstra",
    name: "Fletcher Bandstra",
    role: "Coach",
    image: SFT_IMAGES.coachFletcher,
    bio: [
      "Fletcher Bandstra joined Strength For Today after working at the Exercise Coach in college. He returned home to continue his strength and conditioning career at SFT, starting at the end of May 2026.",
      "Born and raised in Schererville, Fletcher studied Kinesiology at Calvin University and pitched for the baseball team. He stayed a fifth year to complete his masters in Exercise Science with a specialization in Sports Performance.",
      "Fletcher works with both athlete and adult clients, helping them build a stronger and healthier future.",
    ],
  },
];
