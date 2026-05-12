import type { ReactNode } from "react";

export function Hexagon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <polygon
          points="25,5 75,5 97,50 75,95 25,95 3,50"
          fill="none"
          stroke="var(--cyan-glow)"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
