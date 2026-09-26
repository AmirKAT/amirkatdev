import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { cn } from "@/lib/cn";
import { startProject } from "@/lib/site";

const plans = [
  {
    number: "01",
    title: "Website",
    price: 0,
    description:
      "Professional business websites, landing pages, portfolios and marketing sites.",
    includes: [
      "Custom responsive design",
      "Multi-page website",
      "Mobile optimisation",
      "Contact forms",
      "Basic SEO",
      "Deployment",
    ],
    highlighted: false,
  },
  {
    number: "02",
    title: "Custom website",
    price: 1,
    description:
      "More complex websites with custom functionality, integrations, a CMS, authentication or dashboards.",
    includes: [
      "Custom UI/UX",
      "Advanced interactions",
      "Integrations",
      "Forms",
      "Analytics",
      "SEO",
      "Deployment",
    ],
    highlighted: true,
  },
  {
    number: "03",
    title: "Web app / digital product",
    price: 2,
    description:
      "SaaS products, dashboards, customer portals, internal tools and custom web applications.",
    includes: [
      "Custom application architecture",
      "Authentication where required",
      "Database integration",
      "APIs",
      "Responsive UI",
      "Testing",
      "Deployment",
    ],
    highlighted: false,
  },
] as const;

export function Pricing({
  titleLevel = 2,
  estimateHref = startProject.href,
  prices,
  index,
}: {
  titleLevel?: 1 | 2;
  estimateHref?: string;
  prices: readonly string[];
  index?: string;
}) {
  const itemLevel = titleLevel === 1 ? 2 : 3;

  return (
    <Section
      id="pricing"
      index={index}
      eyebrow="Pricing"
      title="What does it cost?"
      intro="A closer look at what each starting price covers. The quote still depends on the requirements."
      titleLevel={titleLevel}
      className="border-t border-line"
    >
      <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-8">
        {plans.map((plan) => (
          <article
            key={plan.number}
            className={cn(
              "surface rise relative flex h-full flex-col overflow-hidden rounded-lg border px-6 py-8 shadow-lift md:last:col-span-2 lg:px-6 lg:py-8 lg:last:col-span-1 xl:px-8 xl:py-10",
              plan.highlighted
                ? "border-burgundy bg-ink-raised"
                : "border-line bg-ink-soft/50 hover:border-cream/25",
            )}
          >
            {plan.highlighted ? (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-burgundy"
              />
            ) : null}
            <p className="text-eyebrow text-stone uppercase">From</p>
            <p className="mt-3 font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.02em] text-cream">
              {prices[plan.price]}
            </p>
            <Heading level={itemLevel} size="title" className="mt-6">
              {plan.title}
            </Heading>
            <p className="mt-3 text-body text-cream-muted">{plan.description}</p>
            <p className="mt-8 text-eyebrow text-stone uppercase">Includes</p>
            <ul className="mt-4 flex flex-col gap-3">
              {plan.includes.map((item) => (
                <li key={item} className="flex gap-3 text-small text-cream-muted">
                  <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-burgundy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-small text-stone">
        Final pricing depends on scope, complexity and integrations. These figures are starting
        points, not a promise of the final price.
      </p>
      <div className="mt-8">
        <Button href={estimateHref} size="lg" className="w-full sm:w-auto">
          Discuss your project
        </Button>
      </div>
    </Section>
  );
}
