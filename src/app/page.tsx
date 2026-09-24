import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { LocalPricing, LocalStartProject } from "@/components/local-pricing";
import { Section } from "@/components/section";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { Technology } from "@/components/technology";
import { pageMetadata, pages, studioJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.home);

export default function Home() {
  return (
    <>
      <JsonLd data={studioJsonLd()} />
      <Hero />

      <SelectedWork />

      <Services />

      <HowItWorks />

      <LocalPricing estimateHref="/#start" />

      <About showCta={false} />

      <Technology />

      <Section
        id="start"
        eyebrow="Start a project"
        title="Have something in mind?"
        intro="Tell me what you're trying to build. Even if it's just an idea, that's enough to start."
        className="border-t border-line"
      >
        <LocalStartProject />
      </Section>
    </>
  );
}
