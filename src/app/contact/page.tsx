import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { StartProjectForm } from "@/components/start-project";
import { pageJsonLd, pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageJsonLd(pages.contact)} />
      <Section
        id="start"
        eyebrow="Start a project"
        title="Have something in mind?"
        intro="Tell me what you're trying to build. Even if it's just an idea, that's enough to start."
        titleLevel={1}
        className="border-t border-line"
      >
        <StartProjectForm questionLevel={2} />
      </Section>
    </>
  );
}
