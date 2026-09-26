import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { PageTransition } from "@/components/page-transition";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { LocalPricing } from "@/components/local-pricing";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { StartSection } from "@/components/start-section";
import { Technology } from "@/components/technology";
import { pageMetadata, pages, studioJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.home);

export default function Home() {
  return (
    <PageTransition>
      <JsonLd data={studioJsonLd()} />
      <Hero />

      <SelectedWork />

      <Services index="02" discussHref="/#start" />

      <Capabilities />

      <HowItWorks />

      <LocalPricing index="05" estimateHref="/#start" />

      <About index="06" showCta={false} />

      <Technology />

      <StartSection />
    </PageTransition>
  );
}
