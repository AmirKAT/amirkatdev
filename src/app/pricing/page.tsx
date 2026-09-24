import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { LocalPricing } from "@/components/local-pricing";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.pricing);

export default function PricingPage() {
  return (
    <PageTransition>
      <JsonLd data={pageJsonLd(pages.pricing)} />
      <LocalPricing titleLevel={1} />
    </PageTransition>
  );
}
