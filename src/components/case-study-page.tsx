import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Tag } from "@/components/tag";
import type { CaseStudy } from "@/lib/case-studies";
import type { Project } from "@/lib/projects";

type CaseStudyPageProps = {
  project: Project;
  study: CaseStudy;
  next: Project;
};

export function CaseStudyPage({ project, study, next }: CaseStudyPageProps) {
  const host = new URL(project.url).host.replace(/^www\./, "");

  return (
    <article>
      <header className="pt-12 md:pt-16">
        <Container>
          <Link
            href="/work"
            className="quiet-link text-eyebrow text-stone uppercase"
          >
            Selected work
          </Link>
          <p className="mt-10 flex flex-wrap items-center gap-3 text-stone">
            <span className="h-px w-8 bg-burgundy" aria-hidden="true" />
            <span className="text-eyebrow uppercase">{project.category}</span>
            <span className="font-mono text-[0.6875rem] tracking-[0.04em]">{host}</span>
          </p>
          <Heading level={1} size="display" className="mt-5 max-w-5xl">
            {project.title}
          </Heading>
          <p className="mt-6 max-w-2xl text-body text-cream-muted">{project.summary}</p>
        </Container>

        <Container className="mt-10 md:mt-14">
          <figure className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              sizes="(min-width: 64rem) 72rem, 100vw"
              className="object-cover object-top"
            />
          </figure>
        </Container>
      </header>

      <Container className="grid gap-8 py-section-sm md:py-section lg:grid-cols-12 lg:gap-12">
        <h2 className="text-eyebrow text-stone uppercase lg:col-span-3">Overview</h2>
        <p className="max-w-4xl font-display text-headline text-cream lg:col-span-9">
          {study.overview}
        </p>
      </Container>

      <Container className="grid gap-14 border-t border-line py-section-sm md:grid-cols-2 md:gap-16 md:py-section">
        <section>
          <h2 className="text-eyebrow text-stone uppercase">Challenge</h2>
          <p className="mt-5 max-w-xl text-body text-cream-muted">{study.challenge}</p>
        </section>
        <section>
          <h2 className="text-eyebrow text-stone uppercase">What I built</h2>
          <p className="mt-5 max-w-xl text-body text-cream-muted">{study.built}</p>
        </section>
      </Container>

      <Container className="border-t border-line py-section-sm md:py-section">
        <h2 className="text-eyebrow text-stone uppercase">Key features</h2>
        <ol className="mt-10 border-t border-line">
          {study.features.map((feature, index) => (
            <li
              key={feature.title}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-stone md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-title text-cream md:col-span-4">{feature.title}</h3>
              <p className="max-w-xl text-body text-cream-muted md:col-span-6">{feature.body}</p>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="flex flex-col gap-12 border-t border-line py-section-sm md:gap-16 md:py-section">
        <h2 className="text-eyebrow text-stone uppercase">The product</h2>
        {study.gallery.map((image) => (
          <figure key={image.src}>
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 64rem) 72rem, 100vw"
                className={
                  image.layout === "portrait"
                    ? "object-cover object-center"
                    : "object-cover object-top"
                }
              />
            </div>
            <figcaption className="mt-4 text-eyebrow text-stone uppercase">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </Container>

      <Container className="grid gap-6 border-t border-line py-14 md:grid-cols-12 md:items-start md:py-16">
        <div className="md:col-span-3">
          <h2 className="text-eyebrow text-stone uppercase">Technology</h2>
          {study.technologyNote ? (
            <p className="mt-3 text-small text-stone">{study.technologyNote}</p>
          ) : null}
        </div>
        <ul className="flex flex-wrap gap-2 md:col-span-9">
          {study.technologies.map((technology) => (
            <li key={technology}>
              <Tag>{technology}</Tag>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="border-t border-line py-section-sm md:py-section">
        <h2 className="text-eyebrow text-stone uppercase">Live website</h2>
        <Heading level={2} size="headline" className="mt-5 max-w-3xl">
          See {project.title} as it is today.
        </Heading>
        <div className="mt-8">
          <Button href={project.url} size="lg">
            Visit the website
          </Button>
        </div>
      </Container>

      <Link
        href={next.caseStudyHref ?? `/work/${next.slug}`}
        className="group block border-t border-line motion-safe:transition-colors motion-safe:duration-base hover:bg-ink-raised"
      >
        <Container className="grid items-end gap-8 py-12 md:grid-cols-[minmax(0,1fr)_18rem] md:py-16">
          <div>
            <p className="text-eyebrow text-stone uppercase">Next project</p>
            <p className="mt-4 font-display text-headline text-cream">{next.title}</p>
            <p className="mt-3 text-eyebrow text-stone uppercase">{next.category}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
            <Image
              src={next.image.src}
              alt=""
              fill
              sizes="18rem"
              className="object-cover object-top motion-safe:transition-transform motion-safe:duration-slow motion-safe:ease-out-soft motion-safe:group-hover:scale-[1.03]"
            />
          </div>
        </Container>
      </Link>
    </article>
  );
}
