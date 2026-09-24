import { About } from "@/components/about";
import { PageTransition } from "@/components/page-transition";
import { JsonLd } from "@/components/json-ld";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.about);

export default function AboutPage() {
  return (
    <PageTransition>
      <JsonLd data={pageJsonLd(pages.about)} />
      <About titleLevel={1} />
    </PageTransition>
  );
}
