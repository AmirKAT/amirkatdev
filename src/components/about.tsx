import Image from "next/image";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { startProject } from "@/lib/site";

export function About({
  titleLevel = 2,
  showCta = true,
}: {
  titleLevel?: 1 | 2;
  showCta?: boolean;
}) {
  return (
    <Section id="about" labelledBy="about-heading" className="border-t border-line">
      <p className="mb-5 flex items-center gap-3 text-stone">
        <span className="font-mono text-[0.6875rem] tracking-[0.08em] text-cream-muted">05</span>
        <span className="h-px w-8 bg-burgundy" aria-hidden="true" />
        <span className="text-eyebrow uppercase">About</span>
      </p>

      <Heading id="about-heading" level={titleLevel} size="headline" className="max-w-4xl">
        Built by an engineer.
        <br />
        Designed for humans.
      </Heading>

      <div className="mt-10 grid items-end gap-12 lg:mt-14 lg:grid-cols-[minmax(0,42rem)_1fr] lg:gap-16">
        <div className="max-w-2xl space-y-5 text-body text-cream-muted">
          <p>
            I&apos;m Amir, a software engineer who enjoys turning ideas into things people can
            actually use.
          </p>
          <p>
            I build custom websites, web applications and digital products, working directly with
            customers from the initial idea through to launch.
          </p>
          <p>
            My engineering background means I care about what happens underneath the interface too
            — performance, reliability, maintainability and making sure the thing actually works.
          </p>
          <p className="flex items-center gap-3 pt-5 text-eyebrow text-stone uppercase">
            <span className="h-px w-8 shrink-0 bg-burgundy" aria-hidden="true" />
            Building professionally. Shipping independently.
          </p>
        </div>

        <div className="w-fit lg:justify-self-end">
          <Image
            src="/brand/mascot.png"
            alt=""
            width={830}
            height={660}
            sizes="12rem"
            className="h-36 w-auto sm:h-44"
          />
        </div>
      </div>

      {showCta ? (
        <div className="mt-14 max-w-xl border-t border-line pt-10 md:mt-16">
          <p className="font-display text-title text-cream">Have an idea?</p>
          <div className="mt-6">
            <Button href={startProject.href} size="lg" className="w-full sm:w-auto">
              Let&apos;s talk.
            </Button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
