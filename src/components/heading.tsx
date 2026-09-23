import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize = "display" | "headline" | "title" | "subtitle";

type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  id?: string;
};

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

const defaultSize: Record<HeadingLevel, HeadingSize> = {
  1: "headline",
  2: "title",
  3: "subtitle",
  4: "subtitle",
};

const sizeClass: Record<HeadingSize, string> = {
  display: "font-display text-display",
  headline: "font-display text-headline",
  title: "font-display text-title",
  subtitle: "font-sans text-subtitle",
};

export function Heading({
  children,
  level = 1,
  size,
  className,
  id,
}: HeadingProps) {
  const Tag = tags[level];
  const resolvedSize = size ?? defaultSize[level];

  return (
    <Tag
      id={id}
      className={cn("text-balance text-cream", sizeClass[resolvedSize], className)}
    >
      {children}
    </Tag>
  );
}
