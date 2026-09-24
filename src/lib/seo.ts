import type { Metadata } from "next";
import { projects, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

type PageSeo = {
  path: string;
  title: string;
  description: string;
  absolute?: boolean;
};

export const pages = {
  home: {
    path: "/",
    title: "AmirKAT — Digital studio",
    description:
      "Independent digital studio. I build custom websites, web apps and digital products for businesses, brands and ambitious ideas.",
    absolute: true,
  },
  work: {
    path: "/work",
    title: "Selected work",
    description:
      "Websites, products and digital experiences from AmirKAT, including Wizume, StepWithSerg, TactiqClub and Katalyst Media.",
  },
  services: {
    path: "/services",
    title: "Services",
    description:
      "Custom websites, web apps, SaaS and digital products, from a straightforward site to a fully custom product.",
  },
  pricing: {
    path: "/pricing",
    title: "Pricing",
    description:
      "Starting points from €1,000 for a website, €2,000 for a custom website, and €4,000 for a web app or product. Final pricing depends on scope.",
  },
  about: {
    path: "/about",
    title: "About",
    description:
      "AmirKAT is an independent studio. The work is built by an engineer and designed for the people who use it.",
  },
  contact: {
    path: "/contact",
    title: "Start a project",
    description:
      "Tell me what you're trying to build. Even if it's just an idea, that's enough to start a conversation.",
  },
} as const satisfies Record<string, PageSeo>;

export function pageMetadata(page: PageSeo): Metadata {
  return {
    title: page.absolute ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: "/opengraph-image", alt: "AmirKAT. Websites and digital products, built properly." }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image"],
    },
  };
}

export function projectMetadata(project: Project): Metadata {
  const path = `/work/${project.slug}`;
  const title = project.title;
  const description = project.summary;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: "en_GB",
      type: "article",
      images: [{ url: project.image.src, alt: project.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [project.image.src],
    },
  };
}

export function studioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    image: `${site.url}/brand/logo.png`,
    description: pages.home.description,
    email: "hello@amirkat.dev",
    sameAs: ["https://github.com/AmirKAT"],
    knowsAbout: ["Websites", "Web app / SaaS", "Digital products"],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Website",
        description: "Professional websites for businesses, services and personal brands.",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "1000",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Offer",
        name: "Custom website",
        description:
          "More bespoke websites with custom functionality, integrations and richer experiences.",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "2000",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Offer",
        name: "Web app / product",
        description: "Custom web applications and digital products with real functionality.",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "4000",
          priceCurrency: "EUR",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Selected work",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          url: `${site.url}/work/${project.slug}`,
          description: project.summary,
        },
      })),
    },
  };
}

export function pageJsonLd(page: PageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${site.url}${page.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${site.url}/work/${project.slug}`,
    image: `${site.url}${project.image.src}`,
    creator: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}
