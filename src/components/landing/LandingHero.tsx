import { BASE_PATH, whatsappHref } from "./config";
import { Caption } from "./hud";
import AlertMock from "./AlertMock";

const TILES = [
  {
    img: "/landing/epi-eletrico.jpeg",
    alt: "Monitoramento de EPI em subestação elétrica",
    tone: "warn" as const,
    caption: "Desvio · CAM-01 · EPI elétrico",
  },
  {
    img: "/landing/empilhadeira.jpeg",
    alt: "Monitoramento de zona de risco com empilhadeira",
    tone: "alert" as const,
    caption: "Alerta · CAM-02 · Zona vermelha",
  },
  {
    img: "/landing/fogo-fumaca.jpeg",
    alt: "Detecção de fogo e fumaça em pátio",
    tone: "alert" as const,
    caption: "Alerta · CAM-03 · Fogo e fumaça",
  },
];

export default function LandingHero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="lk-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="lk-eyebrow">
              SWK Vision · Visão computacional e IA
            </p>
            <h1 className="lk-display mt-7 max-w-xl text-[2.35rem] font-medium leading-[1.08] md:text-[3.1rem]">
              Visão Computacional e IA aplicadas à{" "}
              <span className="text-[var(--lk-mint)]">
                segurança, produtividade e qualidade
              </span>{" "}
              da sua operação.
            </h1>
            <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-[var(--lk-slate)]">
              Usamos as câmeras que você já tem. A análise roda na borda — o
              vídeo não sai da planta — e o alerta chega no WhatsApp, com a
              imagem do que aconteceu.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener"
                className="lk-btn lk-btn-primary"
              >
                Falar no WhatsApp
              </a>
              <a href="#cases" className="lk-btn lk-btn-ghost">
                Ver cases
              </a>
            </div>
          </div>

          <AlertMock />
        </div>

        <div className="lk-hairline mt-16">
          <div className="grid gap-5 pt-10 sm:grid-cols-3">
            {TILES.map((tile) => (
              <a key={tile.caption} href="#cases" className="lk-tile">
                <div className="lk-tile-media">
                  <img
                    src={`${BASE_PATH}${tile.img}`}
                    alt={tile.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lk-tile-caption">
                  <Caption tone={tile.tone}>{tile.caption}</Caption>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
