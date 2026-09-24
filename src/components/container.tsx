import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container mx-auto w-full max-w-[var(--page-width)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
