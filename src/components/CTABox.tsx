import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function CTABox({
  eyebrow = "Vamos Conversar",
  title,
  highlight,
  description,
  to = "/contato",
  cta = "Fale com a equipe",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  to?: string;
  cta?: string;
}) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative bg-card-gradient border border-primary/30 rounded-3xl overflow-hidden p-10 md:p-14 text-center shadow-glow">
          <div className="absolute inset-0 hex-pattern opacity-30" />
          <div className="relative">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 mb-4 leading-tight">
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="text-gradient-cyan italic">{highlight}</span>
                </>
              )}
            </h2>
            {description && (
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
                {description}
              </p>
            )}
            <Link
              to={to}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:shadow-glow transition-all"
            >
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
