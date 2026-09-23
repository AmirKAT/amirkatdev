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
    title: "Web applications",
    description:
      "Custom web apps, dashboards, portals and interactive experiences built around the way your business actually works.",
    example: { href: "/work/wizume", label: "See Wizume" },
  },
  {
    number: "03",
    title: "Digital products",
    description:
      "Turn an idea into a real product — from concept and design through development and launch.",
    example: { href: "/work/tactiqclub", label: "See TactiqClub" },
  },
  {
    number: "04",
    title: "SaaS",
    description:
      "Customer-facing software with accounts, payments, data, integrations and the infrastructure needed to run it.",
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
      <ol className="grid md:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.number}
            className="border-t border-line py-8 md:py-10 md:odd:pr-12 md:even:pl-12 lg:odd:pr-16 lg:even:pl-16"
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
                className="quiet-link mt-5 inline-flex min-h-11 items-center text-sm text-cream"
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
