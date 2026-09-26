import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { cn } from "@/lib/cn";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "GitHub",
  "Resend",
  "Stripe",
] as const;

const testing = ["Jest", "React Testing Library", "Playwright", "Cypress"] as const;

function Names({ items, muted = false }: { items: readonly string[]; muted?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((name) => (
        <li
          key={name}
          className={cn(
            "rounded-md border border-line bg-ink-raised px-3 py-1.5 text-small motion-safe:transition-colors motion-safe:duration-base hover:border-cream/25",
            muted ? "text-cream-muted" : "text-cream",
          )}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export function Technology() {
  return (
    <Section
      id="technology"
      labelledBy="technology-heading"
      padding="none"
      className="border-t border-line py-14 md:py-20"
    >
      <p className="mb-5 flex items-center gap-3 text-eyebrow text-stone uppercase">
        <span className="h-px w-10 bg-burgundy" aria-hidden="true" />
        Technology
      </p>
      <Heading id="technology-heading" level={2} size="title" className="max-w-2xl">
        Production software, not a template.
      </Heading>
      <p className="mt-4 max-w-xl text-body text-cream-muted">
        The tools I use to design, build and keep a product running after launch.
      </p>
      <div className="mt-8">
        <Names items={stack} />
      </div>
      <p className="mt-8 text-small text-stone">Also tested with</p>
      <div className="mt-3">
        <Names items={testing} muted />
      </div>
    </Section>
  );
}
