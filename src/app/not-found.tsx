import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Page not available",
  description: "This page is not available. It may have moved, or it has not been published yet.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section labelledBy="missing-heading">
      <Heading id="missing-heading" level={1} size="headline">
        This page is not available.
      </Heading>
      <p className="mt-6 max-w-xl text-body text-cream-muted">
        It may have moved, or it has not been published yet.
      </p>
      <div className="mt-10">
        <Button href="/">Back to the studio</Button>
      </div>
    </Section>
  );
}
