import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="py-12 sm:py-16 md:py-24 lg:py-28">
        <p className="flex items-center gap-3 text-stone motion-safe:animate-step">
          <span className="draw-rule h-px w-8 bg-burgundy" aria-hidden="true" />
          <span className="text-eyebrow uppercase">{site.tagline}</span>
        </p>
        <Heading
          id="hero-heading"
          level={1}
          size="display"
          className="mt-6 max-w-4xl motion-safe:animate-step [animation-delay:90ms]"
        >
          Custom websites and digital products,{" "}
          <span className="italic text-cream-muted">without the agency overhead.</span>
        </Heading>
        <p className="mt-6 max-w-xl text-body text-cream-muted motion-safe:animate-step [animation-delay:180ms]">
          I personally design and build websites, web applications and digital products for
          businesses and founders.
        </p>
        <div className="mt-10 flex flex-col gap-3 motion-safe:animate-step min-[400px]:flex-row min-[400px]:flex-wrap [animation-delay:260ms]">
          <Button href="/#start" size="lg" className="w-full min-[400px]:w-auto">
            Start a project
          </Button>
          <Button href="/#work" variant="secondary" size="lg" className="w-full min-[400px]:w-auto">
            View my work
          </Button>
        </div>
      </Container>
    </section>
  );
}
