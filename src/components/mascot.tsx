import Image from "next/image";
import { cn } from "@/lib/cn";

type MascotProps = {
  className?: string;
};

export function Mascot({ className }: MascotProps) {
  return (
    <Image
      src="/brand/mascot.png"
      alt=""
      width={682}
      height={490}
      className={cn("h-auto w-36", className)}
    />
  );
}
