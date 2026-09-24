import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { cn } from "@/lib/cn";

type SectionProps = {
  children?: React.ReactNode;
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  titleLevel?: 1 | 2;
  className?: string;
  containerClassName?: string;
  padding?: "default" | "none";
  labelledBy?: string;
};

const paddingClass = {
  default: "py-14 md:py-section-sm lg:py-section",
  none: "",
} as const;

export function Section({
  children,
  id,
  index,
  eyebrow,
  title,
  intro,
  titleLevel = 2,
  className,
  containerClassName,
  padding = "default",
  labelledBy,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || intro);

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-[var(--header-height)]",
        paddingClass[padding],
        className,
      )}
    >
      <Container className={containerClassName}>
        {hasHeader ? (
          <header className="rise mb-10 max-w-3xl md:mb-16">
            {eyebrow ? (
              <p className="mb-5 flex items-center gap-3 text-stone">
                {index ? (
                  <span className="font-mono text-[0.6875rem] tracking-[0.08em] text-cream-muted">
                    {index}
                  </span>
                ) : null}
                <span className="h-px w-8 bg-burgundy" aria-hidden="true" />
                <span className="text-eyebrow uppercase">{eyebrow}</span>
              </p>
            ) : null}
            {title ? (
              <Heading level={titleLevel} size="headline">
                {title}
              </Heading>
            ) : null}
            {intro ? (
              <p className="mt-5 max-w-2xl text-body text-cream-muted">{intro}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
