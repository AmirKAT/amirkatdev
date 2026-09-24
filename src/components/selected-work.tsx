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
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3">
        {projects.map((project, position) => (
          <ProjectCard
            key={project.slug}
            project={project}
            headingLevel={cardLevel}
            variant="frame"
            index={String(position + 1).padStart(2, "0")}
            priority={position === 0}
          />
        ))}
      </div>
    </Section>
  );
}
