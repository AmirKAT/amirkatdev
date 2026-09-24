import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { navigation, profiles, site, startProject } from "@/lib/site";

const pageLinks = [...navigation, startProject];
const externalLinks = [profiles.email];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-20">
          <div className="max-w-md">
            <Link href="/" aria-label="AmirKAT home" className="inline-flex">
              <Image
                src="/brand/logo.png"
                alt=""
                width={1295}
                height={1214}
                sizes="120px"
                className="h-24 w-auto sm:h-28"
              />
            </Link>
            <p className="mt-6 text-eyebrow text-stone uppercase">{site.tagline}</p>
            <p className="mt-4 text-body text-cream-muted">
              Websites and digital products, built properly.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-20">
            <nav aria-label="Footer" className="flex flex-col">
              {pageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="quiet-link flex min-h-11 items-center text-sm text-stone"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Contact" className="flex flex-col">
              {externalLinks.map((item) => {
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="quiet-link flex min-h-11 items-center text-sm text-stone"
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {item.label}
                    {external ? <span className="sr-only">, opens in a new tab</span> : null}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <p className="mt-14 text-small text-stone">
          © {site.name} {year}
        </p>
      </Container>
    </footer>
  );
}
