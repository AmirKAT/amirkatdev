import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { navigation, profiles, site, startProject } from "@/lib/site";

const footerLinks = [...navigation, startProject, profiles.email];

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
                width={1478}
                height={1064}
                sizes="240px"
                className="h-36 w-auto sm:h-[10.5rem]"
              />
            </Link>
            <p className="mt-6 text-eyebrow text-stone uppercase">{site.tagline}</p>
            <p className="mt-4 text-body text-cream-muted">
              Websites and digital products, built properly.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start">
            {footerLinks.map((item) => {
              const className = "quiet-link flex min-h-11 items-center text-sm text-stone";

              if (item.href.startsWith("http") || item.href.startsWith("mailto:")) {
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={className}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {item.label}
                    {external ? <span className="sr-only">, opens in a new tab</span> : null}
                  </a>
                );
              }

              return (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <p className="mt-14 text-small text-stone">
          © {site.name} {year}
        </p>
      </Container>
    </footer>
  );
}
