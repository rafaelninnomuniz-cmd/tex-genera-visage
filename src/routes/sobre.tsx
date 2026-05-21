import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABox from "@/components/CTABox";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre — Equipe TexGenera" },
      {
        name: "description",
        content:
          "Conheça a equipe TexGenera: Dyana Sanches Brianese (CEO), Rafael Ninno Muniz (CTO) e Mauricio Vicentini (CCO).",
      },
      { property: "og:title", content: "Equipe TexGenera" },
      {
        property: "og:description",
        content: "Liderança em deeptech, pesquisa e operações industriais sustentáveis.",
      },
    ],
  }),
});

const team = [
  {
    name: "Dyana Sanches Brianese",
    role: "Founder & Diretora Executiva (CEO)",
    bio: "Fundadora da TexGenera, lidera a visão estratégica da companhia, articulação institucional e a tese de transformar o passivo têxtil em ativo tecnológico. Conduz a operação corporativa, governança e relacionamento com investidores e parceiros estratégicos.",
    initials: "DB",
    linkedin: "https://www.linkedin.com/in/dyana-sanches-208ba0169/",
  },
  {
    name: "Rafael Ninno Muniz",
    role: "Diretor Técnico (CTO) & de Pesquisa",
    bio: "Responsável pelo desenvolvimento científico da rota proprietária de pirólise, pelas frentes de P&D em parceria com o ISI Eletroquímica e pela evolução tecnológica entre TRL 5 e TRL 8. Lidera a engenharia do processo de produção dos carbonos precursores e do grafeno TexGenera.",
    initials: "RM",
    linkedin: "https://www.linkedin.com/in/rafaelmuniz/",
  },
  {
    name: "Mauricio Vicentini",
    role: "Diretor Comercial (CCO) & de Operações",
    bio: "Conduz a estratégia comercial, mapeamento de mercados globais consumidores de grafeno e carbonos avançados, além da arquitetura operacional Hub & Spoke da TexGenera — incluindo captação de resíduos, logística regional e expansão industrial.",
    initials: "MV",
    linkedin: "https://www.linkedin.com/in/maur%C3%ADcio-vicentini-ba90a734/",
  },
];

function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a TexGenera"
        title="Uma equipe construída para"
        highlight="redefinir o carbono."
        description="A TexGenera é uma deeptech brasileira na fronteira entre química avançada, sustentabilidade e indústria 4.0. Nossa liderança combina ciência, engenharia e visão de mercado para transformar o resíduo têxtil mais complexo do mundo em nanomateriais críticos."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <article
                key={m.name}
                className="group bg-card-gradient border border-border/60 rounded-2xl p-8 hover:border-primary/60 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center font-display text-2xl text-primary">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl leading-tight">{m.name}</h3>
                    <p className="text-primary text-sm mt-1">{m.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{m.bio}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABox
        eyebrow="Parcerias"
        title="Quer conversar com a"
        highlight="liderança TexGenera?"
        description="Atendemos pesquisadores, indústrias, fundos de investimento e poder público."
      />
    </>
  );
}
