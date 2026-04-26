import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image 
        src="/logo.png" 
        alt="ASAR GLOBAL Logo" 
        width={140} 
        height={40} 
        priority
        className="object-contain w-auto h-full"
      />
    </div>
  );
}
