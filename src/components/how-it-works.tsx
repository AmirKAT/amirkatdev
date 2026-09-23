import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

const stages = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the idea, goals, users and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Shape the structure, experience and visual direction.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the design into a real, production-ready product.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy, test, polish and get it into the hands of your customers.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      index="03"
      eyebrow="How it works"
      title="From idea to launch."
      intro="No unnecessary layers. We figure out what needs building, build it, and get it live."
      className="border-t border-line"
    >
      <ol className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14 xl:grid-cols-4 xl:gap-0">
        {stages.map((stage, index) => {
          const connected = index < stages.length - 1;

          return (
            <li
              key={stage.number}
              className="relative pl-8 last:pb-0 md:pb-0 md:pl-0 xl:pr-12 xl:last:pr-0"
            >
              {connected ? (
                <span
                  aria-hidden="true"
                  className="absolute top-3 -bottom-12 left-[3px] w-px bg-line md:hidden"
                />
              ) : null}
              {connected ? (
                <span
                  aria-hidden="true"
                  className="absolute top-[0.45rem] right-0 left-10 hidden h-px bg-line xl:block"
                />
              ) : null}
              <p className="relative z-10 w-fit font-mono text-[0.6875rem] tracking-[0.08em] text-stone xl:bg-ink xl:pr-4">
                {stage.number}
              </p>
              <Heading level={3} size="title" className="mt-6">
                {stage.title}
              </Heading>
              <p className="mt-3 max-w-xs text-body text-cream-muted">{stage.description}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
