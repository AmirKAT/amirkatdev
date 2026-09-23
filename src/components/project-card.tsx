import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/cn";

export type Project = {
  title: string;
  summary: string;
  href?: string;
  image: {
    src: string;
    alt: string;
  };
  tags?: string[];
};

type ProjectCardProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  const card = (
    <article className={cn("group flex h-full flex-col", className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 64rem) 36rem, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-slow motion-safe:ease-out-soft motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <Heading level={3} size="subtitle">
          {project.title}
        </Heading>
        <p className="mt-3 max-w-prose text-small text-cream-muted">{project.summary}</p>
        {project.tags && project.tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        ) : null}
        <span
          className="mt-5 block h-px w-8 bg-burgundy motion-safe:transition-all motion-safe:duration-base motion-safe:ease-out-soft motion-safe:group-hover:w-16"
          aria-hidden="true"
        />
      </div>
    </article>
  );

  if (!project.href) {
    return card;
  }

  return (
    <Link href={project.href} className="block h-full rounded-sm">
      {card}
    </Link>
  );
}
