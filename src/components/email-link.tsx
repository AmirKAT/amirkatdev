import { profiles } from "@/lib/site";

type EmailLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function EmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="2 4 20 16" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

export function EmailLink({ className, children }: EmailLinkProps) {
  return (
    <a href={profiles.email.href} aria-label="Email" className={className}>
      <EmailIcon className="h-4 w-auto shrink-0" />
      {children}
    </a>
  );
}
