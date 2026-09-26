import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { SelectedWork } from "@/components/selected-work";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.work);

export default function WorkPage() {
  return (
    <PageTransition>
      <JsonLd data={pageJsonLd(pages.work)} />
      <SelectedWork titleLevel={1} index="01" />
    </PageTransition>
  );
}
