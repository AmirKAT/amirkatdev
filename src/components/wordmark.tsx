import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-sans text-xl font-medium tracking-tight text-cream",
        className,
      )}
    >
      Amir<span className="text-burgundy">KAT</span>
    </span>
  );
}
