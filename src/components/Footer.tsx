import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/texgenera-logo.png";

const WHATSAPP_URL = "https://wa.me/5544999087777";
const LINKEDIN_URL = "https://www.linkedin.com/company/texgenera/";
const INSTAGRAM_URL = "https://instagram.com/texgenera";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/pesquisa", label: "Pesquisa" },
  { to: "/tecnologia", label: "Tecnologia" },
  { to: "/processo", label: "Processo" },
  { to: "/aplicacoes", label: "Aplicações" },
  { to: "/contato", label: "Contato" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur mt-20">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logo}
              alt="TexGenera"
              className="h-12 w-auto rounded-md bg-white/95 p-1 shadow-md"
            />
            <span className="font-display text-xl">TexGenera</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Deeptech brasileira convertendo resíduos têxteis complexos em grafeno e nanomateriais
            de carbono de alto valor agregado.
          </p>
          <a
            href="mailto:contato@texgenera.com"
            className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" /> contato@texgenera.com
          </a>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-foreground">Navegação</h4>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-foreground">Conecte-se</h4>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
            WhatsApp: +55 44 99908-7777
          </p>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container mx-auto px-6 py-5 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} TexGenera. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
