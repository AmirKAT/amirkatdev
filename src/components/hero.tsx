import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <Container className="py-10 md:py-14">
        <p className="text-eyebrow text-stone uppercase">{site.tagline}</p>
        <Heading id="hero-heading" level={1} size="headline" className="mt-5 max-w-4xl">
          Websites and digital products,
          <br className="hidden md:block" /> built properly.
        </Heading>
        <p className="mt-5 max-w-xl text-body text-cream-muted">{site.description}</p>
        <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
          <Button href="/#start" size="lg" className="w-full min-[400px]:w-auto">
            Start a project
          </Button>
          <Button href="/#work" variant="secondary" size="lg" className="w-full min-[400px]:w-auto">
            See my work
          </Button>
        </div>
      </Container>
    </section>
  );
}
