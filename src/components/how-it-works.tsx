import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

const stages = [
  {
    number: "01",
    title: "Discovery",
    description: "We discuss your idea, requirements and goals.",
  },
  {
    number: "02",
    title: "Design",
    description: "I turn the requirements into a clear, polished user experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "I develop the website or product using a modern, maintainable stack.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Everything is tested, deployed and handed over ready to use.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      id="process"
      index="04"
      eyebrow="Process"
      title="From the first conversation to launch."
      intro="You deal with me throughout. Four steps, and no account manager in between."
      className="border-t border-line"
    >
      <ol className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14 xl:grid-cols-4 xl:gap-0">
        {stages.map((stage, index) => {
          const connected = index < stages.length - 1;

          return (
            <li
              key={stage.number}
              className="rise relative pl-8 last:pb-0 md:pb-0 md:pl-0 xl:pr-12 xl:last:pr-0"
            >
              {connected ? (
                <span
                  aria-hidden="true"
                  className="absolute top-10 -bottom-12 left-5 w-px -translate-x-1/2 bg-line md:hidden"
                />
              ) : null}
              {connected ? (
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-0 left-10 hidden h-px bg-line xl:block"
                />
              ) : null}
              <p className="relative z-10 flex size-10 items-center justify-center rounded-md border border-line bg-ink-raised font-mono text-[0.6875rem] tracking-[0.08em] text-cream-muted">
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
