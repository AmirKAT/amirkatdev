import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteLink } from "@/components/site-link";
import { navigation, pricingLink, profiles, site, startProject } from "@/lib/site";

const footerLinks = [...navigation, pricingLink, startProject, profiles.email];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line" style={{ viewTransitionName: "site-footer" }}>
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-20">
          <div className="max-w-md">
            <Link href="/" aria-label="AmirKAT home" className="inline-flex">
              <Image
                src="/brand/logo.png"
                alt=""
                width={1295}
                height={1295}
                sizes="(min-width: 64rem) 216px, (min-width: 40rem) 192px, 168px"
                className="h-[10.5rem] w-auto sm:h-48 lg:h-[13.5rem]"
              />
            </Link>
            <p className="mt-6 text-eyebrow text-stone uppercase">{site.tagline}</p>
            <p className="mt-4 text-body text-cream-muted">
              Custom websites and digital products, without the agency overhead.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start">
            {footerLinks.map((item) => (
              <SiteLink
                key={item.label}
                href={item.href}
                className="quiet-link flex min-h-11 items-center text-sm text-stone"
              >
                {item.label}
              </SiteLink>
            ))}
          </nav>
        </div>

        <p className="mt-14 text-small text-stone">
          © {site.name} {year}
        </p>
      </Container>
    </footer>
  );
}
