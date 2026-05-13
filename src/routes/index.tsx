import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  component: LandingPage,
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
