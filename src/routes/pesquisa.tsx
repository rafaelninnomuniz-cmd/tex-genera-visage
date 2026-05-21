import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Atom, Beaker, Zap, Paintbrush, Car, CircuitBoard } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABox from "@/components/CTABox";

export const Route = createFileRoute("/pesquisa")({
  component: PesquisaPage,
  head: () => ({
    meta: [
      { title: "Pesquisa — Parceria ISI Eletroquímica (SENAI)" },
      {
        name: "description",
        content:
          "Parceria estratégica com o Instituto SENAI de Inovação Eletroquímica levou a tecnologia TexGenera ao TRL 5 e validou aplicações em grafeno, supercapacitores e mais.",
      },
      { property: "og:title", content: "Pesquisa TexGenera × ISI Eletroquímica" },
      {
        property: "og:description",
        content: "Validação científica TRL 5 e desdobramentos em supercapacitores, SEBS, tintas condutoras e grafeno.",
      },
    ],
  }),
});

const outcomes = [
  {
    icon: Atom,
    title: "Carbonos precursores",
    desc: "Carbono TG e Carbono TG D-50 com caracterização por MEV, Raman, TGA, granulometria e BET confirmando a estrutura grafítica.",
  },
  {
    icon: Zap,
    title: "Supercapacitor",
    desc: "Pastas de eletrodo produzidas com o carbono TexGenera mostraram performance funcional comparável a referências comerciais.",
  },
  {
    icon: Beaker,
    title: "Compósitos SEBS",
    desc: "Aplicações em elastômero (SEBS) demonstraram pigmentação e reforço, abrindo caminho para borrachas técnicas e pneus.",
  },
  {
    icon: Paintbrush,
    title: "Tinta condutora",
    desc: "Formulações usando os carbonos TG validaram condutividade elétrica para tintas e revestimentos funcionais.",
  },
  {
    icon: Car,
    title: "Carbono catalisador automotivo",
    desc: "Rota explorada para uso como catalisador em sistemas automotivos, com alto potencial em mercados de mobilidade.",
  },
  {
    icon: CircuitBoard,
    title: "Grafeno de alta qualidade",
    desc: "O ápice da pesquisa: grafeno em pó obtido a partir do resíduo têxtil — material crítico para baterias, eletrônica e aeroespacial.",
  },
];

function PesquisaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pesquisa & Validação"
        title="Risco científico zero."
        highlight="TRL 5 concluído."
        description={
          <>
            A parceria estratégica com o{" "}
            <strong className="text-foreground">
              Instituto SENAI de Inovação Eletroquímica (ISI Eletroquímica)
            </strong>{" "}
            consolidou o salto da TexGenera de pesquisa exploratória para tecnologia validada em
            ambiente laboratorial.
          </>
        }
      />

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
              A parceria
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6 leading-tight">
              Por que o ISI Eletroquímica?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              Conectado à EMBRAPII e ao Sistema SENAI, o ISI Eletroquímica é um dos principais
              centros nacionais de inovação em eletroquímica, materiais avançados e armazenamento
              de energia. Sua infraestrutura laboratorial e expertise científica foram decisivas
              para caracterizar, validar e escalar as rotas TexGenera.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Em 22 meses de Fase II, com investimento superior a R$ 1 milhão, o projeto alcançou
              três macroentregas: otimização da síntese, rotas pré-piloto e produção do carbono
              grafítico TexGenera — culminando no <strong className="text-foreground">TRL 5</strong>,
              com Propriedade Intelectual (PCT) em andamento.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "TRL 5", v: "Validado em laboratório" },
              { k: "22 meses", v: "Fase II concluída" },
              { k: "+R$ 1 Mi", v: "Investimento aplicado" },
              { k: "PCT", v: "Propriedade intelectual em curso" },
            ].map((s) => (
              <div key={s.v} className="border border-border/50 bg-card-gradient rounded-xl p-5">
                <div className="font-display text-3xl text-gold mb-1">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 relative">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mb-12">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
              Desdobramentos da pesquisa
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Do laboratório aos
              <span className="text-gradient-cyan italic"> materiais críticos.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="bg-card-gradient border border-border/60 rounded-2xl p-7 hover:border-primary/60 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{o.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-muted-foreground text-sm mt-10 max-w-3xl">
            Caracterizações executadas em parceria com o ISI Eletroquímica incluem Microscopia
            Eletrônica de Varredura (MEV), Espectroscopia Raman, Análise Termogravimétrica (TGA),
            Granulometria, BET (área superficial) e Análise de Ciclo de Vida (ACV).
          </p>
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/30 bg-primary/5">
            <FlaskConical className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Próximo marco: escalonamento pré-piloto rumo a TRL 6–7.
            </span>
          </div>
        </div>
      </section>

      <CTABox
        eyebrow="P&D conjunto"
        title="Quer desenvolver uma"
        highlight="aplicação com a TexGenera?"
        description="Recebemos demandas de indústrias e centros de pesquisa interessados em co-desenvolvimento."
      />
    </>
  );
}
