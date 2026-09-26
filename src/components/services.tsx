import Link from "next/link";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { startProject } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Website",
    description:
      "Professional business websites, landing pages, portfolios and marketing sites.",
    example: { href: "/work/stepwithserg", label: "See StepWithSerg" },
  },
  {
    number: "02",
    title: "Custom website",
    description:
      "More complex websites with custom functionality, integrations, a CMS, authentication or dashboards.",
    example: { href: "/work/katalyst-media", label: "See Katalyst Media" },
  },
  {
    number: "03",
    title: "Web app / digital product",
    description:
      "SaaS products, dashboards, customer portals, internal tools and custom web applications.",
    example: { href: "/work/wizume", label: "See Wizume" },
  },
] as const;

export function Services({
  titleLevel = 2,
  discussHref = startProject.href,
  index,
}: {
  titleLevel?: 1 | 2;
  discussHref?: string;
  index?: string;
}) {
  const itemLevel = titleLevel === 1 ? 2 : 3;

  return (
    <Section
      id="services"
      index={index}
      eyebrow="Services"
      title="A clear place to start."
      intro="Three kinds of work, from a business website to a custom web application."
      titleLevel={titleLevel}
      className="border-t border-line"
    >
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <li
            key={service.number}
            className="surface rise flex h-full flex-col rounded-lg border border-line bg-ink-raised px-6 py-8 shadow-lift hover:border-cream/25 md:px-7 md:py-10 md:last:col-span-2 lg:last:col-span-1"
          >
            <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-stone">
              {service.number}
            </p>
            <Heading level={itemLevel} size="title" className="mt-4">
              {service.title}
            </Heading>
            <p className="mt-4 max-w-md text-body text-cream-muted">{service.description}</p>
            <div className="mt-auto flex flex-col items-start gap-1 pt-8">
              <Button href={discussHref} className="w-full sm:w-auto">
                Discuss your project
              </Button>
              <Link
                href={service.example.href}
                className="quiet-link inline-flex min-h-11 items-center text-sm text-cream"
              >
                {service.example.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
