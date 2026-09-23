import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { cn } from "@/lib/cn";

type SectionProps = {
  children?: React.ReactNode;
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  containerClassName?: string;
  padding?: "default" | "none";
  labelledBy?: string;
};

const paddingClass = {
  default: "py-section-sm md:py-section",
  none: "",
} as const;

export function Section({
  children,
  id,
  eyebrow,
  title,
  intro,
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
          <header className="mb-12 max-w-3xl md:mb-16">
            {eyebrow ? (
              <p className="mb-5 flex items-center gap-3 text-eyebrow text-stone uppercase">
                <span className="h-px w-10 bg-burgundy" aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <Heading level={2} size="headline">
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
