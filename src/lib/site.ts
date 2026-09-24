export const site = {
  name: "AmirKAT",
  domain: "amirkat.dev",
  url: "https://amirkat.dev",
  tagline: "Build · Ship · Improve",
  description:
    "I build custom websites, web apps and digital products for businesses, brands and ambitious ideas.",
  audiences: ["Businesses", "Brands", "Individuals"],
} as const;

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const startProject = {
  label: "Start a project",
  href: "/contact",
} as const;

export const profiles = {
  email: { label: "Email", href: "mailto:hello@amirkat.dev" },
} as const;
