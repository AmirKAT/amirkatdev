import Link from "next/link";
import { Container } from "@/components/container";
import { Mascot } from "@/components/mascot";
import { Wordmark } from "@/components/wordmark";
import { navigation, site, startProject } from "@/lib/site";

const footerLinks = [...navigation, startProject];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-section-sm">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_auto] md:items-start md:gap-20">
          <div className="max-w-md">
            <Link href="/" aria-label="AmirKAT home">
              <Wordmark />
            </Link>
            <p className="mt-5 text-body text-cream-muted">{site.description}</p>
            <Mascot className="mt-8" />
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone transition-colors duration-fast ease-out-soft hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-eyebrow text-stone uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>{site.tagline}</p>
          <p>
            © {year} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
