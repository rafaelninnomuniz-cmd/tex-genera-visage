import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "@/components/PageHeader";
import CTABox from "@/components/CTABox";
import processDiagram from "@/assets/process-diagram.jpg";
import carbonPowder from "@/assets/carbon-powder.jpg";

export const Route = createFileRoute("/processo")({
  component: ProcessoPage,
  head: () => ({
    meta: [
      { title: "Processo — Do resíduo ao grafeno" },
      {
        name: "description",
        content:
          "Cinco etapas que transformam resíduo têxtil multicor em carbono técnico, nanomateriais e grafeno TexGenera.",
      },
      { property: "og:title", content: "Processo TexGenera — Arquitetura em 5 etapas" },
      {
        property: "og:description",
        content: "Preparação, densificação, pirólise, refino e nanomateriais — a arquitetura avançada da TexGenera.",
      },
    ],
  }),
});

const steps = [
  {
    n: "01",
    title: "Preparação Mecânica",
    desc: "Entrada do resíduo mil cores bruto vindo das filiais regionais — sem necessidade de separação rigorosa de fibras.",
  },
  {
    n: "02",
    title: "Densificação",
    desc: "Trituração, secagem e peletização nas filiais regionais. Padroniza a alimentação e reduz drasticamente o custo logístico.",
  },
  {
    n: "03",
    title: "Pirólise Controlada",
    desc: "Tratamento térmico de alta precisão em tambor rotativo. Promove a decomposição molecular e extrai o carbono estrutural.",
  },
  {
    n: "04",
    title: "Refino & Esfoliação",
    desc: "Processos físico-químicos proprietários no Hub Londrina realizam o salto nanotecnológico até a estrutura grafítica.",
  },
  {
    n: "05",
    title: "Nanomateriais",
    desc: "Saída final: carbono técnico, carbono condutivo, biochar estrutural e grafeno em pó de alta qualidade.",
  },
];

const outputs = [
  {
    name: "Carbono Técnico TexGenera",
    use: "Substituto ESG do carbon black para borrachas, plásticos e pneus.",
    price: "US$ 5 – 20 / kg",
  },
  {
    name: "Carbono Condutivo",
    use: "Aditivo condutivo para baterias, supercapacitores e eletrônica.",
    price: "US$ 30 – 80 / kg",
  },
  {
    name: "Biochar Estrutural",
    use: "Reforço de compósitos, agricultura regenerativa e crédito de carbono.",
    price: "Mercado ESG em expansão",
  },
  {
    name: "Grafeno em pó",
    use: "Nanomaterial crítico para baterias, EMI shielding, aeroespacial e tintas funcionais.",
    price: "US$ 80 – 400+ / kg",
  },
];

function ProcessoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Processo Industrial"
        title="A arquitetura avançada"
        highlight="da TexGenera."
        description="Cinco etapas precisas convertem o resíduo têxtil mais complexo do planeta em grafeno e carbonos precursores de altíssimo valor de mercado."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-border/60 mb-16 shadow-card-elev">
            <img
              src={processDiagram}
              alt="Diagrama do processo de pirólise TexGenera"
              className="w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step) => (
              <div
                key={step.n}
                className="group relative bg-card-gradient border border-border/60 rounded-2xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="font-display text-5xl text-gold/70 mb-4 group-hover:text-primary transition-colors">
                  {step.n}
                </div>
                <div className="font-display text-lg mb-2">{step.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 relative">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="container mx-auto px-6 relative grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-card-elev">
            <img src={carbonPowder} alt="Carbono estrutural TexGenera" className="w-full" />
          </div>
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
              Materiais obtidos
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 mb-8 leading-tight">
              Do carbono técnico ao
              <span className="text-gradient-cyan italic"> grafeno de alta qualidade.</span>
            </h2>
            <div className="space-y-3">
              {outputs.map((o) => (
                <div
                  key={o.name}
                  className="border border-border/60 bg-background/40 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div>
                    <div className="font-display text-lg">{o.name}</div>
                    <p className="text-sm text-muted-foreground">{o.use}</p>
                  </div>
                  <div className="text-gold font-display text-sm md:text-base whitespace-nowrap">
                    {o.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABox
        eyebrow="Próximo passo"
        title="Pronto para uma"
        highlight="amostra técnica?"
        description="Solicite especificações, dossiês de caracterização e amostras dos carbonos TexGenera."
      />
    </>
  );
}
