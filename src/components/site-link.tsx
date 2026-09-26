import Link from "next/link";

type SiteLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function isNativeHref(href: string) {
  return (
    href.startsWith("#") ||
    href.startsWith("/#") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  );
}

export function SiteLink({ href, className, children, onClick }: SiteLinkProps) {
  const external = href.startsWith("http");

  if (isNativeHref(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
        {external ? <span className="sr-only">, opens in a new tab</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
