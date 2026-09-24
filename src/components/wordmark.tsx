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
      width={1478}
      height={1064}
      sizes="112px"
      priority={priority}
      className={cn("h-16 w-auto sm:h-20", className)}
    />
  );
}
