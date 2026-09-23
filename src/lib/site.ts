export const site = {
  name: "AmirKAT",
  domain: "amirkat.dev",
  url: "https://amirkat.dev",
  tagline: "Build · Ship · Improve",
  description:
    "I build custom websites, web applications and digital products for businesses, brands and individuals.",
  audiences: ["Businesses", "Brands", "Individuals"],
} as const;

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const startProject = {
  label: "Start a project",
  href: "/start",
} as const;
