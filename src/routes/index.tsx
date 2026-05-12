import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Atom,
  FlaskConical,
  Recycle,
  Cpu,
  Droplets,
  Car,
  Plane,
  Layers,
  ArrowRight,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  ChevronDown,
} from "lucide-react";
import logo from "@/assets/texgenera-logo.jpg";
import heroImg from "@/assets/hero-carbon.jpg";
import textileWaste from "@/assets/textile-waste.jpg";
import carbonPowder from "@/assets/carbon-powder.jpg";
import processDiagram from "@/assets/process-diagram.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TexGenera — A Alquimia do Carbono" },
      {
        name: "description",
        content:
          "TexGenera converte resíduos têxteis em nanomateriais de alto valor agregado: grafeno, biochar e carbono técnico através de pirólise avançada proprietária.",
      },
      { property: "og:title", content: "TexGenera — Do Fio ao Fim" },
      {
        property: "og:description",
        content:
          "Convertendo o maior passivo da indústria têxtil em ativos de nanotecnologia.",
      },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5544999087777?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20TexGenera";
const LINKEDIN_URL = "https://www.linkedin.com/company/texgenera/";
const INSTAGRAM_URL = "https://www.instagram.com/texgenera?igsh=MW1tc3E0YTZ2OWF1MA==";

const services = [
  {
    icon: Recycle,
    title: "Conversão de Resíduos",
    text: "Tratamento de fibras têxteis multicomponentes sem a necessidade de segregação prévia.",
  },
  {
    icon: FlaskConical,
    title: "Pirólise Avançada",
    text: "Tecnologia proprietária de tratamento térmico de alta precisão em tambor rotativo.",
  },
  {
    icon: Atom,
    title: "Nanomateriais",
    text: "Produção de grafeno em pó, carbono condutivo e derivados de altíssimo valor agregado.",
  },
  {
    icon: Cpu,
    title: "Carbono Técnico",
    text: "Aditivos condutivos para aplicações em baterias, eletrônicos e veículos elétricos.",
  },
  {
    icon: Layers,
    title: "Biochar Estrutural",
    text: "Produto sustentável para reforço de compósitos, agricultura regenerativa e ESG.",
  },
  {
    icon: Droplets,
    title: "Soluções Industriais",
    text: "Desenvolvimento sob medida para filtragem, borrachas, pneus e indústria aeroespacial.",
  },
];

const markets = [
  { icon: Car, name: "Automotivo & Baterias", value: "US$ 2,8 Bi", desc: "Aditivos condutivos para EVs." },
  { icon: Plane, name: "Aeroespacial & Compósitos", value: "US$ 3,5 Bi", desc: "Resiliência e leveza estrutural." },
  { icon: Layers, name: "Borrachas & Pneus", value: "US$ 1,1 Bi", desc: "Reforço estrutural e dissipação térmica." },
  { icon: Droplets, name: "Filtragem & Água", value: "US$ 1,2 Bi", desc: "Soluções avançadas de adsorção." },
];

const processSteps = [
  { n: "01", title: "Preparação Mecânica", desc: 'Entrada do resíduo "mil cores" bruto, sem separação rigorosa de fibras.' },
  { n: "02", title: "Densificação", desc: "Peletização para uniformização da alimentação do reator." },
  { n: "03", title: "Pirólise Controlada", desc: "Tratamento térmico de alta precisão em tambor rotativo." },
  { n: "04", title: "Refino & Esfoliação", desc: "O salto nanotecnológico via processos físicos e químicos." },
  { n: "05", title: "Nanomateriais", desc: "Grafeno em pó, carbono condutivo e derivados de alto valor." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="TexGenera" className="h-10 w-auto rounded" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#tecnologia" className="hover:text-primary transition-colors">Tecnologia</a>
            <a href="#solucoes" className="hover:text-primary transition-colors">Soluções</a>
            <a href="#mercados" className="hover:text-primary transition-colors">Mercados</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-glow transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Fale Conosco
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 bg-hero-gradient overflow-hidden">
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
              Nanotecnologia · Pirólise Avançada · ESG
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Do Fio ao Fim:
              <br />
              <span className="text-gradient-cyan italic">A Alquimia do Carbono.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Convertendo o maior passivo da indústria têxtil em ativos de
              nanotecnologia e alto valor agregado.
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
              <a
                href="#tecnologia"
                className="inline-flex items-center gap-3 border border-border bg-card/40 backdrop-blur px-7 py-4 rounded-full font-medium hover:bg-card transition-all"
              >
                Conhecer a Tecnologia
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                Sobre a TexGenera
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-8 leading-tight">
                O Mito do Resíduo Têxtil:
                <span className="text-gradient-cyan italic"> de passivo a ativo.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A TexGenera é uma empresa de deeptech brasileira dedicada à conversão
                de resíduos têxteis complexos em nanomateriais de alto valor
                agregado. Atuamos no encontro entre química avançada,
                sustentabilidade e indústria 4.0.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Nossa missão é transformar fibras multicomponentes — antes
                consideradas inviáveis para reciclagem — em grafeno, biochar e
                carbono técnico, atendendo às mais exigentes demandas das cadeias
                ESG globais.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "100%", v: "Resíduos convertidos" },
                  { k: "5 etapas", v: "Pirólise proprietária" },
                  { k: "+US$ 8 Bi", v: "Mercados endereçáveis" },
                  { k: "0", v: "Segregação prévia" },
                ].map((s) => (
                  <div key={s.v} className="border border-border/50 bg-card-gradient rounded-xl p-5">
                    <div className="font-display text-3xl text-gold mb-1">{s.k}</div>
                    <div className="text-sm text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden border border-border/60 shadow-card-elev">
                  <img src={textileWaste} alt="Resíduo têxtil multicolor" className="w-full h-72 object-cover" />
                </div>
                <div className="border border-primary/30 bg-primary/5 rounded-2xl p-5">
                  <div className="text-primary text-xs uppercase tracking-widest mb-2">O Caos</div>
                  <div className="font-display text-xl mb-1">Resíduo "Mil Cores"</div>
                  <p className="text-sm text-muted-foreground">
                    Fibras de altíssima heterogeneidade. Uma dor logística e
                    financeira para a indústria.
                  </p>
                </div>
              </div>
              <div className="space-y-5 mt-12">
                <div className="border border-primary/30 bg-primary/5 rounded-2xl p-5">
                  <div className="text-primary text-xs uppercase tracking-widest mb-2">A Ordem</div>
                  <div className="font-display text-xl mb-1">Carbono Estrutural</div>
                  <p className="text-sm text-muted-foreground">
                    Ativos energéticos e tecnológicos de altíssimo valor de
                    mercado.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border/60 shadow-card-elev">
                  <img src={carbonPowder} alt="Carbono estrutural em pó" className="w-full h-72 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIA / PROCESSO */}
      <section id="tecnologia" className="py-28 relative bg-card/30">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              Tecnologia Proprietária
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              A Arquitetura da
              <span className="text-gradient-cyan italic"> Transformação.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6">
              Pirólise avançada que converte resíduos complexos sem necessidade
              de segregação prévia — em cinco etapas precisas.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/60 mb-16 shadow-card-elev">
            <img src={processDiagram} alt="Diagrama do processo de pirólise" className="w-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((step, i) => (
              <div
                key={step.n}
                className="group relative bg-card-gradient border border-border/60 rounded-2xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 80}ms` }}
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

      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              Soluções
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              Nanomateriais com
              <span className="text-gradient-cyan italic"> propósito.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative bg-card-gradient border border-border/60 rounded-2xl p-8 hover:border-primary/60 transition-all duration-500 hover:shadow-glow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                  <div className="absolute top-6 right-6 text-gold/40 group-hover:text-gold transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MERCADOS */}
      <section id="mercados" className="py-28 relative bg-card/30">
        <div className="absolute inset-0 hex-pattern opacity-40" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mb-16">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              Escalabilidade
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              Mercados de
              <span className="text-gradient-cyan italic"> alto impacto.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {markets.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.name}
                  className="bg-card-gradient border border-border/60 rounded-2xl p-7 hover:border-primary/60 transition-all duration-500"
                >
                  <Icon className="h-7 w-7 text-primary mb-5" />
                  <div className="font-display text-2xl text-gold mb-1">{m.value}</div>
                  <div className="font-medium mb-2">{m.name}</div>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="relative bg-card-gradient border border-primary/30 rounded-3xl overflow-hidden p-10 md:p-16 text-center shadow-glow">
            <div className="absolute inset-0 hex-pattern opacity-30" />
            <div className="relative">
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                Vamos Conversar
              </span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 leading-tight">
                Não existe
                <span className="text-gradient-cyan italic"> "jogar fora".</span>
                <br />
                O fim de um fio é o começo do futuro.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Conecte-se com a equipe TexGenera para parcerias industriais,
                investimento ou desenvolvimento conjunto.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:shadow-glow transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-border bg-background/40 backdrop-blur px-7 py-4 rounded-full font-medium hover:border-primary/60 transition-all"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  LinkedIn
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-border bg-background/40 backdrop-blur px-7 py-4 rounded-full font-medium hover:border-primary/60 transition-all"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                  Instagram
                </a>
              </div>
              <a
                href="mailto:contato@texgenera.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@texgenera.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="TexGenera" className="h-9 w-auto rounded" />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} TexGenera. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
