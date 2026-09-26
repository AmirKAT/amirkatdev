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
    title: "AmirKAT — Custom Websites & Digital Products",
    description:
      "I build custom websites, web applications and digital products for businesses and founders.",
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
      "Business websites, custom websites, and web apps or digital products, designed and built directly.",
  },
  pricing: {
    path: "/pricing",
    title: "Pricing",
    description:
      "Starting points from €1,000 for a website, €2,000 for a custom website, and €4,000 for a web app or digital product. Final pricing depends on scope.",
  },
  about: {
    path: "/about",
    title: "About",
    description:
      "I'm a software engineer and independent developer. You work directly with the person building the website or product.",
  },
  contact: {
    path: "/contact",
    title: "Start a project",
    description:
      "Tell me what you're building. A name, an email and a short note is enough to start.",
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
      images: [
        {
          url: "/opengraph-image",
          alt: "AmirKAT. Custom websites and digital products, without the agency overhead.",
        },
      ],
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
    knowsAbout: [
      "Business websites",
      "Custom websites",
      "SaaS and web applications",
      "E-commerce",
      "Internal tools",
      "AI-powered products",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Website",
        description:
          "Professional business websites, landing pages, portfolios and marketing sites.",
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
          "More complex websites with custom functionality, integrations, a CMS, authentication or dashboards.",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "2000",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Offer",
        name: "Web app / digital product",
        description:
          "SaaS products, dashboards, customer portals, internal tools and custom web applications.",
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
