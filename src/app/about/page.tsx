import { About } from "@/components/about";
import { JsonLd } from "@/components/json-ld";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageJsonLd(pages.about)} />
      <About titleLevel={1} />
    </>
  );
}
