import Link from "next/link";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

const services = [
  {
    number: "01",
    title: "Custom websites",
    description:
      "High-quality websites designed around your business, brand and customers — not a generic template.",
    example: { href: "/work/stepwithserg", label: "See StepWithSerg" },
  },
  {
    number: "02",
    title: "Web app / SaaS",
    description:
      "Custom web apps, dashboards and portals, including customer-facing products with accounts, payments and the infrastructure to run them.",
    example: { href: "/work/wizume", label: "See Wizume" },
  },
  {
    number: "03",
    title: "Digital products",
    description:
      "Turn an idea into a real product — from concept and design through development and launch.",
    example: { href: "/work/tactiqclub", label: "See TactiqClub" },
  },
] as const;

export function Services({ titleLevel = 2 }: { titleLevel?: 1 | 2 }) {
  const itemLevel = titleLevel === 1 ? 2 : 3;

  return (
    <Section
      id="services"
      index="02"
      eyebrow="Services"
      title="What I build."
      intro="From simple websites to fully custom digital products."
      titleLevel={titleLevel}
      className="border-t border-line"
    >
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <li
            key={service.number}
            className="surface rise flex h-full flex-col border border-line bg-ink-raised px-6 py-8 shadow-lift hover:border-cream/25 md:px-7 md:py-10 md:last:col-span-2 lg:last:col-span-1"
          >
            <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-stone">
              {service.number}
            </p>
            <Heading level={itemLevel} size="title" className="mt-4">
              {service.title}
            </Heading>
            <p className="mt-3 max-w-md text-body text-cream-muted">{service.description}</p>
            {"example" in service ? (
              <Link
                href={service.example.href}
                className="quiet-link mt-auto inline-flex min-h-11 items-center pt-8 text-sm text-cream"
              >
                {service.example.label}
              </Link>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
