import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";

type ProjectCardVariant = "feature" | "portrait" | "frame";

type ProjectCardProps = {
  project: Project;
  variant?: ProjectCardVariant;
  index?: string;
  className?: string;
  priority?: boolean;
  headingLevel?: 2 | 3;
};

const frameClass: Record<ProjectCardVariant, string> = {
  feature: "aspect-[16/10]",
  portrait: "aspect-[16/10] lg:aspect-[2/1]",
  frame: "aspect-[16/10]",
};

const focalClass: Record<Project["image"]["focal"], string> = {
  left: "object-[left_center]",
  center: "object-center",
  top: "object-top",
};

function projectHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

const imageSizes: Record<ProjectCardVariant, string> = {
  feature: "(min-width: 64rem) 72rem, 100vw",
  portrait: "(min-width: 64rem) 32rem, 100vw",
  frame: "(min-width: 64rem) 40rem, 100vw",
};

export function ProjectCard({
  project,
  variant = "frame",
  index,
  className,
  priority = false,
  headingLevel = 3,
}: ProjectCardProps) {
  const media = (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-ink-soft shadow-lift ring-1 ring-cream/10 motion-safe:transition-shadow motion-safe:duration-base motion-safe:ease-out-soft motion-safe:group-hover:ring-cream/25",
        frameClass[variant],
      )}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        priority={priority}
        sizes={imageSizes[variant]}
        className={cn(
          "object-cover motion-safe:transition-transform motion-safe:duration-slow motion-safe:ease-out-soft motion-safe:group-hover:scale-[1.025]",
          focalClass[project.image.focal],
        )}
      />
    </div>
  );

  const title = (
    <Heading
      level={headingLevel}
      size={variant === "feature" ? "headline" : "title"}
      className="mt-4"
    >
      {project.title}
    </Heading>
  );

  const meta = (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-stone">
      {index ? (
        <span className="font-mono text-[0.6875rem] tracking-[0.08em] text-cream-muted">{index}</span>
      ) : null}
      {index ? <span className="h-px w-6 bg-burgundy" aria-hidden="true" /> : null}
      <span className="text-eyebrow uppercase">{project.category}</span>
      <span className="font-mono text-[0.6875rem] tracking-[0.04em]">{projectHost(project.url)}</span>
    </p>
  );

  const technologies =
    project.technologies && project.technologies.length > 0 ? (
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology}>
            <Tag>{technology}</Tag>
          </li>
        ))}
      </ul>
    ) : null;

  const viewProject = (
    <span className="inline-flex min-h-11 items-center gap-3 text-eyebrow text-cream uppercase">
      View project
      <span className="sr-only">, opens in a new tab</span>
      <span
        className="h-px w-8 bg-burgundy motion-safe:transition-all motion-safe:duration-base motion-safe:ease-out-soft motion-safe:group-hover:w-14"
        aria-hidden="true"
      />
    </span>
  );

  const summary = (
    <p
      className={cn(
        "text-cream-muted",
        variant === "feature" ? "max-w-md text-body" : "mt-4 max-w-md text-small",
      )}
    >
      {project.summary}
    </p>
  );

  const copyClass =
    variant === "feature"
      ? "mt-8 grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.72fr)] lg:items-end lg:gap-12"
      : "mt-6 flex flex-1 flex-col";

  if (project.caseStudyHref) {
    return (
      <article className={cn("group rise flex flex-col", className)}>
        <Link href={project.caseStudyHref} className="block rounded-sm">
          {media}
        </Link>
        <div className={copyClass}>
          <Link href={project.caseStudyHref} className="block rounded-sm">
            {meta}
            {title}
          </Link>
          <div className="flex flex-1 flex-col">
            {summary}
            {technologies}
            <a
              href={project.url}
              className="mt-auto inline-flex rounded-sm pt-5"
              rel="noreferrer"
              target="_blank"
            >
              {viewProject}
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={cn("group rise flex flex-col", className)}>
      <a href={project.url} className="flex flex-1 flex-col rounded-sm" rel="noreferrer" target="_blank">
        {media}
        <div className={copyClass}>
          <div>
            {meta}
            {title}
          </div>
          <div className="flex flex-1 flex-col">
            {summary}
            {technologies}
            <span className="mt-auto pt-5">{viewProject}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
