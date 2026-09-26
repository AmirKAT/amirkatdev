import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { StartSection } from "@/components/start-section";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.contact);

export default function ContactPage() {
  return (
    <PageTransition>
      <JsonLd data={pageJsonLd(pages.contact)} />
      <StartSection titleLevel={1} />
    </PageTransition>
  );
}
