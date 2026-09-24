import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="grid items-end gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 lg:py-28">
        <div>
          <p className="flex items-center gap-3 text-stone">
            <span className="h-px w-8 bg-burgundy" aria-hidden="true" />
            <span className="text-eyebrow uppercase">{site.tagline}</span>
          </p>
          <Heading id="hero-heading" level={1} size="display" className="mt-6 max-w-4xl">
            Websites and digital products,{" "}
            <span className="italic text-cream-muted">built properly.</span>
          </Heading>
          <p className="mt-6 max-w-xl text-body text-cream-muted">{site.description}</p>
          <div className="mt-10 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
            <Button href="/#start" size="lg" className="w-full min-[400px]:w-auto">
              Start a project
            </Button>
            <Button href="/#work" variant="secondary" size="lg" className="w-full min-[400px]:w-auto">
              See my work
            </Button>
          </div>
        </div>
        <div className="relative hidden justify-self-end lg:block">
          <div
            aria-hidden="true"
            className="absolute -inset-6 bg-[radial-gradient(circle,rgb(163_37_44/0.28),transparent_68%)]"
          />
          <div className="relative border border-line bg-ink-raised px-6 py-8 shadow-lift">
            <Image
              src="/brand/mascot.png"
              alt=""
              width={830}
              height={660}
              priority
              sizes="16rem"
              className="h-auto w-52"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
