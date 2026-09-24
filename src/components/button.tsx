import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-burgundy text-cream hover:bg-burgundy-deep",
  secondary: "border border-line bg-transparent text-cream hover:border-cream/40",
  ghost: "bg-transparent text-cream-muted hover:text-cream",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-sm font-sans font-medium tracking-wide transition-[color,background-color,border-color,transform] duration-fast ease-out-soft motion-safe:hover:-translate-y-px disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = buttonClassName(variant, size, className);

  if (href) {
    const external = href.startsWith("http");

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          rel="noreferrer"
          target="_blank"
          onClick={onClick}
        >
          {children}
          <span className="sr-only">, opens in a new tab</span>
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
