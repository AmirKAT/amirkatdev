import Image from "next/image";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function Wordmark({ className, priority = false }: WordmarkProps) {
  return (
    <Image
      src="/brand/lockup.png"
      alt=""
      width={891}
      height={818}
      sizes="80px"
      priority={priority}
      className={cn("h-14 w-auto sm:h-16 lg:h-20", className)}
    />
  );
}
