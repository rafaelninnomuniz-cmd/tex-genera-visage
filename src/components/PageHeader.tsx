import { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
}) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 hex-pattern opacity-50" />
      <div className="container mx-auto px-6 relative">
        <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.3em] font-medium">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 leading-[1.05] max-w-4xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-cyan italic">{highlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
