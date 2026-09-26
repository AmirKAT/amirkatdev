import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

const capabilities = [
  {
    title: "Business websites",
    description: "Fast, responsive websites designed to turn visitors into customers.",
  },
  {
    title: "SaaS and web applications",
    description: "Custom platforms, dashboards, portals and subscription products.",
  },
  {
    title: "E-commerce",
    description: "Custom shopping experiences, payments and integrations.",
  },
  {
    title: "Internal tools",
    description: "Custom software that removes repetitive manual processes.",
  },
  {
    title: "AI-powered products",
    description: "AI integrations and AI-first products using modern APIs.",
  },
] as const;

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="03"
      eyebrow="Capabilities"
      title="What I build."
      intro="From a business website to a full web application, built for the way you actually work."
      className="border-t border-line"
    >
      <ul className="divide-y divide-line border-y border-line">
        {capabilities.map((capability) => (
          <li
            key={capability.title}
            className="rise grid gap-2 py-7 sm:grid-cols-[minmax(14rem,18rem)_minmax(0,1fr)] sm:items-baseline sm:gap-10 sm:py-8"
          >
            <Heading level={3} size="title">
              {capability.title}
            </Heading>
            <p className="max-w-xl text-body text-cream-muted">{capability.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
