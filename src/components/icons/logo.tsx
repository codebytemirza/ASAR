import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      className={cn("w-auto h-8", className)}
    >
      {/* 'Alif' represented as a strong vertical dataline */}
      <path d="M15 8V32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* 'Sine' flow combining 'Ain' 'Sad' 'Ray' concept */}
      <path d="M30 20C30 20 35 12 45 12C55 12 60 28 70 28C80 28 85 12 95 12C105 12 110 20 110 20L125 32" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Tech accent dots */}
      <circle cx="15" cy="8" r="3" fill="currentColor" />
      <circle cx="125" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}
