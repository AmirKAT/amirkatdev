import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { startProject } from "@/lib/site";

export function About({
  titleLevel = 2,
  showCta = true,
  index,
}: {
  titleLevel?: 1 | 2;
  showCta?: boolean;
  index?: string;
}) {
  return (
    <Section id="about" labelledBy="about-heading" className="border-t border-line">
      <p className="mb-5 flex items-center gap-3 text-stone">
        {index ? (
          <span className="font-mono text-[0.6875rem] tracking-[0.08em] text-cream-muted">
            {index}
          </span>
        ) : null}
        <span className="h-px w-8 bg-burgundy" aria-hidden="true" />
        <span className="text-eyebrow uppercase">About</span>
      </p>

      <Heading id="about-heading" level={titleLevel} size="headline" className="rise max-w-4xl">
        Built by an engineer.
        <br />
        Designed for everyone.
      </Heading>
      <p className="mt-6 max-w-xl text-body text-cream">
        I&apos;m a software engineer and independent developer.
      </p>

      <div className="mt-8 max-w-2xl lg:mt-10">
        <div className="space-y-5 text-body text-cream-muted">
          <p>
            I design and build websites, web applications and digital products directly for
            businesses, founders and individuals.
          </p>
          <p>
            You work with me. There is no account team between the first conversation and the
            finished product.
          </p>
          <p>
            I have a professional software engineering background, so the work is built to stay
            fast, reliable and straightforward to maintain.
          </p>
        </div>
      </div>

      {showCta ? (
        <div className="mt-14 max-w-xl border-t border-line pt-10 md:mt-16">
          <p className="font-display text-title text-cream">Have an idea?</p>
          <div className="mt-6">
            <Button href={startProject.href} size="lg" className="w-full sm:w-auto">
              Start a project
            </Button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
