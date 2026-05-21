import { createFileRoute } from "@tanstack/react-router";
import { Atom, FlaskConical, Cpu, Factory, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABox from "@/components/CTABox";

export const Route = createFileRoute("/tecnologia")({
  component: TecnologiaPage,
  head: () => ({
    meta: [
      { title: "Tecnologia — Pirólise Avançada TexGenera" },
      {
        name: "description",
        content:
          "Pirólise controlada proprietária e processos físico-químicos para produzir grafeno e carbonos precursores a partir de resíduos têxteis. Parceria com a Insight Energy para escala industrial.",
      },
      { property: "og:title", content: "Tecnologia proprietária TexGenera" },
      {
        property: "og:description",
        content: "Pirólise avançada + processos físico-químicos = grafeno e carbonos técnicos de alta qualidade.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: FlaskConical,
    title: "Pirólise controlada",
    desc: "Tratamento térmico de alta precisão em tambor rotativo, operando em ambiente controlado para extrair carbono estrutural sem combustão.",
  },
  {
    icon: Atom,
    title: "Processos físico-químicos",
    desc: "Etapas laboratoriais proprietárias de refino, ativação e esfoliação que promovem o salto nanotecnológico até o grafeno em pó.",
  },
  {
    icon: Cpu,
    title: "Sem segregação prévia",
    desc: "A planta opera com o resíduo mil cores bruto — fibras multicomponentes que outras rotas de reciclagem não conseguem processar.",
  },
  {
    icon: Factory,
    title: "Arquitetura Hub & Spoke",
    desc: "Filiais regionais (Sul, Sudeste, Nordeste) preparam e densificam o resíduo. A planta central em Londrina executa o processo termoquímico e a produção dos carbonos precursores.",
  },
];

function TecnologiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tecnologia Proprietária"
        title="Pirólise avançada,"
        highlight="química de fronteira."
        description="A TexGenera combina uma rota tecnológica inovadora de pirólise controlada com processos físico-químicos laboratoriais para converter resíduos têxteis complexos em carbonos precursores — entre eles, o grafeno, nosso principal produto."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-card-gradient border border-border/60 rounded-2xl p-8 hover:border-primary/60 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-primary/30 bg-card-gradient p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 hex-pattern opacity-30" />
            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
                  Parceiro estratégico
                </span>
                <h2 className="font-display text-3xl md:text-5xl mt-3 mb-5 leading-tight">
                  Insight Energy:
                  <span className="text-gradient-cyan italic"> engenharia para escalar.</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Para a transição do laboratório à escala piloto e industrial (TRL 6 a 8), a
                  TexGenera firmou parceria com a{" "}
                  <strong className="text-foreground">Insight Energy</strong>, referência em
                  engenharia, geração renovável e infraestrutura industrial. A parceria garante
                  capacidade técnica para projetar, dimensionar e construir as plantas piloto, o
                  laboratório e a planta industrial da TexGenera.
                </p>
                <a
                  href="https://insightenergy.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  insightenergy.com.br
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "TRL 6", v: "Pré-piloto" },
                  { k: "TRL 7", v: "Piloto" },
                  { k: "TRL 8", v: "Industrial" },
                  { k: "~600t/mês", v: "Reserva de suprimento" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="border border-border/50 bg-background/40 rounded-xl p-5"
                  >
                    <div className="font-display text-2xl text-gold mb-1">{s.k}</div>
                    <div className="text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABox
        eyebrow="Engenharia conjunta"
        title="Investidor, integrador ou planta industrial?"
        description="Conheça em detalhe a roadmap tecnológica TexGenera e oportunidades de co-investimento."
      />
    </>
  );
}
