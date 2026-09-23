import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border border-line px-2.5 py-1 font-sans text-[0.6875rem] font-medium tracking-[0.14em] text-cream-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
