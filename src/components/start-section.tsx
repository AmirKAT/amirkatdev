import { Button } from "@/components/button";
import { LocalStartProject } from "@/components/local-pricing";
import { Section } from "@/components/section";

export function StartSection({ titleLevel = 2 }: { titleLevel?: 1 | 2 }) {
  return (
    <Section
      id="start"
      eyebrow="Start a project"
      title="Have a project in mind?"
      intro="Tell me what you're building and I'll help turn it into something real."
      titleLevel={titleLevel}
      className="border-t border-burgundy/80 bg-ink-raised"
    >
      <div className="mb-10 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
        <Button href="#enquiry" size="lg" className="w-full min-[400px]:w-auto">
          Start a project
        </Button>
        <Button href="/#work" variant="secondary" size="lg" className="w-full min-[400px]:w-auto">
          View my work
        </Button>
      </div>
      <div id="enquiry" className="scroll-mt-[var(--header-height)]">
        <LocalStartProject questionLevel={titleLevel === 1 ? 2 : 3} />
      </div>
    </Section>
  );
}
