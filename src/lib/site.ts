export const site = {
  name: "AmirKAT",
  domain: "amirkat.dev",
  url: "https://amirkat.dev",
  tagline: "Build · Ship · Improve",
  description:
    "I build custom websites, web applications and digital products for businesses and founders.",
  audiences: ["Businesses", "Founders", "Individuals"],
} as const;

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const pricingLink = {
  label: "Pricing",
  href: "/pricing",
} as const;

export const startProject = {
  label: "Start a project",
  href: "/contact",
} as const;

export const profiles = {
  email: { label: "Email", href: "mailto:hello@amirkat.dev" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/amir-mk" },
  whatsapp: { label: "WhatsApp", href: "https://wa.me/447923152158" },
} as const;
