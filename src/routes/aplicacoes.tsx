import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Layers, Car, Battery, Plane, Shirt, HeartPulse, FlaskConical } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import PageHeader from "@/components/PageHeader";
import CTABox from "@/components/CTABox";

export const Route = createFileRoute("/aplicacoes")({
  component: AplicacoesPage,
  head: () => ({
    meta: [
      { title: "Aplicações — Mercados do grafeno TexGenera" },
      {
        name: "description",
        content:
          "Aplicações dos carbonos precursores TexGenera: saneamento, compósitos, baterias EV/BESS, catalisadores, aeroespacial, têxtil técnico e saúde.",
      },
      { property: "og:title", content: "Aplicações TexGenera" },
      {
        property: "og:description",
        content: "Do filtro de água ao aeroespacial — onde o carbono TexGenera transforma indústrias.",
      },
    ],
  }),
});

const apps = [
  { icon: Droplets, title: "Saneamento & filtragem de água", desc: "Filtros de adsorção com carbono ativado e membranas funcionalizadas com grafeno para remoção de contaminantes emergentes, metais pesados e microplásticos." },
  { icon: Layers, title: "Compósitos avançados", desc: "Aditivo em masterbatch de polímeros e elastômeros para reforço mecânico, condutividade e dissipação térmica em peças técnicas." },
  { icon: Car, title: "Setor automotivo", desc: "Carbono técnico para borrachas, pneus e peças estruturais, com reforço mecânico, baixo peso e melhor performance térmica." },
  { icon: Battery, title: "Baterias EV & BESS", desc: "Aditivo condutivo em eletrodos de baterias automotivas e estacionárias (BESS), aumentando densidade energética e ciclo de vida." },
  { icon: FlaskConical, title: "Catalisadores automotivos", desc: "Suporte e ativo para catalisadores de tratamento de gases de escape, com nanomateriais de alta área superficial." },
  { icon: Plane, title: "Aeroespacial & defesa", desc: "Compósitos ultraleves e resistentes, blindagem EMI e materiais críticos para componentes estruturais de alto desempenho." },
  { icon: Shirt, title: "Setor têxtil técnico", desc: "Fibras mais resistentes, condutivas e maleáveis — viabilizando vestuário inteligente, EPIs avançados e geotêxteis estruturais." },
  { icon: HeartPulse, title: "Saúde — densitometria óssea", desc: "Aplicação como material de referência em equipamentos de imagem médica e desenvolvimento de biossensores baseados em grafeno." },
];

const marketsData = [
  { sector: "Compósitos", value: 3.5 },
  { sector: "Baterias / EV", value: 2.8 },
  { sector: "Filtragem & água", value: 1.2 },
  { sector: "Pneus & borrachas", value: 1.1 },
  { sector: "Tintas & revestim.", value: 0.9 },
  { sector: "Aeroespacial", value: 0.8 },
];

function AplicacoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aplicações & Mercados"
        title="Onde o carbono TexGenera"
        highlight="vira valor."
        description="Dos carbonos precursores derivam soluções para indústrias estratégicas — combinando performance técnica, sustentabilidade e ESG."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {apps.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="bg-card-gradient border border-border/60 rounded-2xl p-7 hover:border-primary/60 transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg mb-2 leading-tight">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 relative">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mb-10">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">Dados de mercado</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
              Mercado endereçável
              <span className="text-gradient-cyan italic"> em US$ bilhões.</span>
            </h2>
            <p className="text-muted-foreground mt-4">Mercado total potencial estimado entre <strong className="text-foreground">US$ 10–15 bilhões</strong> até 2030 para grafeno e carbonos grafíticos.</p>
          </div>
          <div className="bg-background/40 border border-border/60 rounded-2xl p-6 md:p-8">
            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketsData} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="sector" stroke="rgba(255,255,255,0.6)" fontSize={12} angle={-15} textAnchor="end" height={60} />
                  <YAxis stroke="rgba(255,255,255,0.6)" fontSize={12} tickFormatter={(v) => `US$ ${v} Bi`} />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                    contentStyle={{ background: "rgba(15,20,30,0.95)", border: "1px solid rgba(120,200,255,0.3)", borderRadius: 12, color: "#fff" }}
                    formatter={(v: number) => [`US$ ${v} Bi`, "Mercado global"]}
                  />
                  <Bar dataKey="value" fill="oklch(0.78 0.14 220)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Fonte: Visão Comercial TexGenera, com base em mercados globais de grafeno e carbono grafítico.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { k: "US$ 5–20/kg", v: "Carbono técnico" },
              { k: "US$ 30–80/kg", v: "Carbono condutivo" },
              { k: "US$ 80–400/kg", v: "Grafeno funcional" },
              { k: "US$ 4 Bi", v: "Mercado de aditivos químicos" },
            ].map((s) => (
              <div key={s.v} className="border border-border/50 bg-card-gradient rounded-xl p-5">
                <div className="font-display text-xl text-gold mb-1">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABox
        eyebrow="Para clientes em potencial"
        title="Sua aplicação está"
        highlight="entre as nossas?"
        description="Indústrias, integradores e desenvolvedores: vamos conversar sobre amostras técnicas, especificações e parcerias de fornecimento."
      />
    </>
  );
}
