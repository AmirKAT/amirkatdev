import { JsonLd } from "@/components/json-ld";
import { Services } from "@/components/services";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={pageJsonLd(pages.services)} />
      <Services titleLevel={1} />
    </>
  );
}
