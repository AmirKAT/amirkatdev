import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/lib/projects";

export function SelectedWork({
  titleLevel = 2,
  showHeading = true,
}: {
  titleLevel?: 1 | 2;
  showHeading?: boolean;
}) {
  const [featured, ...rest] = projects;
  const cardLevel = showHeading && titleLevel === 1 ? 2 : 3;

  return (
    <Section
      id="work"
      index={showHeading ? "01" : undefined}
      eyebrow={showHeading ? "Selected work" : undefined}
      title={showHeading ? "Things I've built." : undefined}
      intro={showHeading ? "Real websites, products and digital experiences." : undefined}
      titleLevel={titleLevel}
      padding={showHeading ? "default" : "none"}
      className={showHeading ? "border-t border-line" : "scroll-mt-[var(--header-height)] pb-14 md:pb-section-sm lg:pb-section"}
      labelledBy={showHeading ? undefined : "work-lead"}
    >
      {showHeading ? null : (
        <h2 id="work-lead" className="sr-only">
          Selected work
        </h2>
      )}
      <div className="flex flex-col gap-14 md:gap-20 lg:gap-28">
        {featured ? (
          <ProjectCard
            project={featured}
            variant="feature"
            index="01"
            headingLevel={cardLevel}
            priority
          />
        ) : null}
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-x-10">
          {rest.map((project, position) => (
            <ProjectCard
              key={project.slug}
              project={project}
              headingLevel={cardLevel}
              variant={position === 0 ? "portrait" : "frame"}
              index={String(position + 2).padStart(2, "0")}
              className={
                position === 0 ? "lg:col-span-5" : "lg:col-span-6 lg:col-start-7 lg:mt-36"
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
