import { JsonLd } from "@/components/json-ld";
import { Pricing } from "@/components/pricing";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pageJsonLd(pages.pricing)} />
      <Pricing titleLevel={1} />
    </>
  );
}
