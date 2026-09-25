import Image from "next/image";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function Wordmark({ className, priority = false }: WordmarkProps) {
  return (
    <Image
      src="/brand/logo.png"
      alt=""
      width={1295}
      height={1295}
      sizes="(min-width: 64rem) 64px, (min-width: 40rem) 56px, 48px"
      priority={priority}
      className={cn("h-12 w-auto sm:h-14 lg:h-16", className)}
    />
  );
}
