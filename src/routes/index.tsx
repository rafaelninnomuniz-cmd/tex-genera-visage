import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Recycle, FlaskConical, Atom, Cpu, Layers, Droplets } from "lucide-react";
import heroImg from "@/assets/hero-carbon.jpg";

const WHATSAPP_URL = "https://wa.me/5544999087777";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TexGenera — A Alquimia do Carbono" },
      {
        name: "description",
        content:
          "TexGenera converte resíduos têxteis em grafeno e nanomateriais de carbono. Pirólise avançada, sustentabilidade e tecnologia proprietária.",
      },
      { property: "og:title", content: "TexGenera — Do Fio ao Fim" },
      {
        property: "og:description",
        content: "Convertendo o maior passivo da indústria têxtil em ativos de nanotecnologia.",
      },
    ],
  }),
});

const highlights = [
  {
    to: "/sobre",
    icon: Recycle,
    title: "Quem somos",
    text: "Uma deeptech brasileira liderada por especialistas em química, engenharia e operações.",
  },
  {
    to: "/pesquisa",
    icon: FlaskConical,
    title: "Pesquisa validada",
    text: "Parceria com o ISI Eletroquímica (SENAI) levou a tecnologia ao TRL 5 — risco científico zero.",
  },
  {
    to: "/tecnologia",
    icon: Atom,
    title: "Pirólise proprietária",
    text: "Tratamento térmico de alta precisão que dispensa segregação prévia de fibras.",
  },
  {
    to: "/processo",
    icon: Cpu,
    title: "Arquitetura em 5 etapas",
    text: "Do resíduo bruto multicor ao grafeno em pó e carbono técnico de alta qualidade.",
  },
  {
    to: "/aplicacoes",
    icon: Layers,
    title: "Aplicações de alto valor",
    text: "Baterias, BESS, compósitos, pneus, aeroespacial, saneamento, saúde e setor têxtil.",
  },
  {
    to: "/contato",
    icon: Droplets,
    title: "Parcerias industriais",
    text: "Conversamos com indústrias, investidores e centros de P&D em todo o mundo.",
  },
];

function HomePage() {
  return (
    <>
      <section
        id="top"
        className="relative min-h-screen flex items-center pt-28 pb-20 bg-hero-gradient overflow-hidden"
      >
        <div className="absolute inset-0 hex-pattern opacity-60" />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] opacity-40 pointer-events-none hidden md:block"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Sustentabilidade · Pirólise · Grafeno
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Do Fio ao Fim:
              <br />
              <span className="text-gradient-cyan italic">A Alquimia do Carbono.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Convertendo o maior passivo da indústria têxtil em ativos de nanotecnologia e alto
              valor agregado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:shadow-glow transition-all animate-glow"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/tecnologia"
                className="inline-flex items-center gap-3 border border-border bg-card/40 backdrop-blur px-7 py-4 rounded-full font-medium hover:bg-card transition-all"
              >
                Conhecer a Tecnologia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              A problemática
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
              O resíduo têxtil é o
              <span className="text-gradient-cyan italic"> passivo invisível</span> da moda global.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              A cada ano, milhões de toneladas de fibras multicomponentes — o chamado{" "}
              <em>resíduo mil cores</em> — são descartadas porque a reciclagem convencional exige
              segregação rigorosa, o que é técnica e economicamente inviável.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A TexGenera desenvolveu a melhor rota tecnológica para resolver isso: uma{" "}
              <strong className="text-foreground">pirólise avançada proprietária</strong> que
              transforma esses resíduos diretamente em carbonos precursores de altíssimo valor —
              sem a necessidade de separação prévia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "100%", v: "Resíduos convertidos sem segregação" },
              { k: "TRL 5", v: "Validado pelo ISI Eletroquímica" },
              { k: "+US$ 10 Bi", v: "Mercado global endereçável" },
              { k: "5 etapas", v: "Pirólise proprietária patenteada" },
            ].map((s) => (
              <div
                key={s.v}
                className="border border-border/50 bg-card-gradient rounded-xl p-5"
              >
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
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              Resumo executivo
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Uma plataforma única para o
              <span className="text-gradient-cyan italic"> carbono do futuro.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-5">
              Dos carbonos precursores produzidos derivam grafeno, carbono técnico, carbono
              condutivo, biochar e nanomateriais aplicáveis em baterias, BESS, compósitos,
              aeroespacial, saneamento, setor automotivo e até saúde.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <Link
                  key={h.to}
                  to={h.to}
                  className="group bg-card-gradient border border-border/60 rounded-2xl p-7 hover:border-primary/60 transition-all duration-500"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{h.text}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative bg-card-gradient border border-primary/30 rounded-3xl overflow-hidden p-10 md:p-16 text-center shadow-glow">
            <div className="absolute inset-0 hex-pattern opacity-30" />
            <div className="relative">
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
                Vamos conversar
              </span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 leading-tight">
                Não existe<span className="text-gradient-cyan italic"> "jogar fora".</span>
                <br />O fim de um fio é o começo do futuro.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Conecte-se com a TexGenera para parcerias industriais, investimento ou
                desenvolvimento conjunto de aplicações.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:shadow-glow transition-all"
              >
                Entrar em contato
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
