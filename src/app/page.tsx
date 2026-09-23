import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { Tag } from "@/components/tag";
import { site, startProject } from "@/lib/site";

export default function Home() {
  return (
    <Section
      id="intro"
      padding="none"
      labelledBy="intro-heading"
      className="min-h-[calc(100svh-var(--header-height))]"
      containerClassName="flex min-h-[calc(100svh-var(--header-height))] flex-col justify-end pt-20 pb-16 md:pb-20"
    >
      <div className="max-w-5xl">
        <p className="mb-6 flex items-center gap-3 text-eyebrow text-stone uppercase">
          <span className="h-px w-10 bg-burgundy" aria-hidden="true" />
          Independent digital studio
        </p>
        <Heading id="intro-heading" level={1} size="display">
          Websites, applications and digital products.
        </Heading>
        <p className="mt-8 max-w-xl text-body text-cream-muted">{site.description}</p>
        <div className="mt-10">
          <Button href={startProject.href} size="lg">
            {startProject.label}
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Who this studio is for">
          {site.audiences.map((audience) => (
            <li key={audience}>
              <Tag>{audience}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-20 text-eyebrow text-stone uppercase md:mt-28">{site.tagline}</p>
    </Section>
  );
}
