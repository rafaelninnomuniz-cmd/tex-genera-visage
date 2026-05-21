import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Linkedin, Instagram, Mail, Send } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const WHATSAPP_URL = "https://wa.me/5544999087777";
const LINKEDIN_URL = "https://www.linkedin.com/company/texgenera/";
const INSTAGRAM_URL = "https://instagram.com/texgenera";
const CONTACT_EMAIL = "contato@texgenera.com";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato — TexGenera" },
      { name: "description", content: "Fale com a equipe TexGenera: parcerias industriais, investimento e desenvolvimento conjunto." },
      { property: "og:title", content: "Contato TexGenera" },
      { property: "og:description", content: "Não existe \"jogar fora\". O fim de um fio é o começo do futuro." },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Mensagem muito curta").max(2000),
});

function ContatoPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, company, message } = parsed.data;
    const subject = `Contato site — ${name}`;
    const body = `Nome: ${name}\nE-mail: ${email}\nEmpresa: ${company || "-"}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Vamos conversar"
        title="Não existe"
        highlight={`"jogar fora".`}
        description="O fim de um fio é o começo do futuro. Conecte-se com a equipe TexGenera para parcerias industriais, investimento ou desenvolvimento conjunto."
      />

      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <form onSubmit={onSubmit} className="bg-card-gradient border border-border/60 rounded-2xl p-8 md:p-10 space-y-5">
            <h2 className="font-display text-2xl md:text-3xl mb-4">Envie uma mensagem</h2>


            {(["name", "email", "company"] as const).map((f) => (
              <div key={f}>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {f === "name" ? "Nome" : f === "email" ? "E-mail" : "Empresa (opcional)"}
                </label>
                <input
                  name={f}
                  type={f === "email" ? "email" : "text"}
                  required={f !== "company"}
                  maxLength={f === "email" ? 255 : f === "name" ? 100 : 120}
                  className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
                {errors[f] && <p className="text-xs text-destructive mt-1">{errors[f]}</p>}
              </div>
            ))}

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Mensagem</label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary resize-y"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:shadow-glow transition-all"
            >
              <Send className="h-4 w-4" /> Enviar mensagem
            </button>
            {sent && (
              <p className="text-sm text-primary">Abrimos seu cliente de e-mail. Se nada acontecer, escreva direto para {CONTACT_EMAIL}.</p>
            )}
          </form>

          <div className="space-y-5">
            <div className="bg-card-gradient border border-border/60 rounded-2xl p-7">
              <h3 className="font-display text-xl mb-4">Canais diretos</h3>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" /> {CONTACT_EMAIL}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4 text-primary" /> /company/texgenera
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4 text-primary" /> @texgenera
                </a>
              </div>
            </div>

            <div className="bg-card-gradient border border-primary/30 rounded-2xl p-7">
              <h3 className="font-display text-xl mb-2">Onde estamos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Parceiro institucional <strong className="text-foreground">ISI Eletroquímica</strong> em Curitiba, Hub central em <strong className="text-foreground">Londrina — PR</strong>, e filiais regionais de captação nas regiões Sul, Sudeste e Nordeste do Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
