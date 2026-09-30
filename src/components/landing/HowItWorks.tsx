import { BASE_PATH } from "./config";
import { Reveal } from "./hud";

const STEPS = [
  {
    number: "01",
    title: "Conectar",
    summary: "À câmera que você já tem",
    body: "Integramos as câmeras IP e RTSP já instaladas na operação.",
  },
  {
    number: "02",
    title: "Entender",
    summary: "O que acontece na imagem",
    body: "Modelos de IA analisam o vídeo junto da câmera, conforme os critérios do seu processo.",
  },
  {
    number: "03",
    title: "Agir",
    summary: "Com informação no momento certo",
    body: "A equipe recebe a ocorrência com imagem e contexto; a gestão acompanha indicadores e relatórios.",
  },
];

const EDGE_POINTS = [
  {
    title: "Resposta imediata",
    body: "A detecção acontece localmente, sem esperar que o vídeo seja enviado para análise.",
  },
  {
    title: "Privacidade",
    body: "Só o evento relevante precisa sair da operação.",
  },
  {
    title: "Robustez",
    body: "A análise continua mesmo com conexão instável ou limitada.",
  },
];

export default function HowItWorks() {
  return (
    <section id="tecnologia" className="scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-section-label mb-4">Nossa tecnologia</p>
          <h2 className="lk-display max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
            Da câmera ao alerta, em três passos.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <article className="lk-step h-full">
                <div className="flex items-baseline gap-4">
                  <span className="lk-display text-3xl font-medium text-[var(--lk-mint)] md:text-4xl">
                    {step.number}
                  </span>
                  <h3 className="lk-display text-2xl font-medium md:text-[1.7rem]">
                    {step.title}
                  </h3>
                </div>
                <p className="lk-display mt-6 text-[17px] font-medium text-[var(--lk-ice)]">
                  {step.summary}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--lk-slate)]">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 max-w-2xl">
            <p className="lk-eyebrow mb-4">O fluxo na prática</p>
            <h3 className="lk-display text-2xl font-medium md:text-3xl">
              Da imagem à decisão.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--lk-slate)]">
              O vídeo mostra a captura na operação. A IA interpreta o que vê e
              entrega uma ocorrência para a equipe avaliar e agir.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid items-center gap-5 lg:grid-cols-[1.4fr_1fr_1fr]">
            <figure>
              <div className="lk-frame">
                <video
                  className="block aspect-video w-full object-cover"
                  src={`${BASE_PATH}/landing/hero.mp4`}
                  poster={`${BASE_PATH}/landing/empilhadeira.jpeg`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Exemplo de captura de câmera em uma operação industrial"
                />
              </div>
              <figcaption className="mt-3 text-[13px] text-[var(--lk-slate)]">
                01 · Captura com a câmera existente
              </figcaption>
            </figure>
            <div className="lk-flow-panel">
              <p className="lk-display text-lg font-medium text-[var(--lk-mint)]">
                02 · Análise na borda
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--lk-slate)]">
                A IA reconhece eventos conforme os critérios definidos para
                aquele ponto da operação.
              </p>
            </div>
            <div className="lk-flow-panel">
              <p className="lk-display text-lg font-medium text-[var(--lk-mint)]">
                03 · Entrega com contexto
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--lk-slate)]">
                Imagem e ocorrência chegam à equipe; o acompanhamento fica
                disponível no painel e nos relatórios.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 max-w-2xl">
            <p className="lk-eyebrow mb-4">Por que na borda?</p>
            <h3 className="lk-display text-2xl font-medium md:text-3xl">
              A análise acontece perto de onde a imagem é capturada.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--lk-slate)]">
              Esse desenho reduz a dependência da conexão e permite tratar cada
              ocorrência com rapidez e critério.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {EDGE_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <div className="lk-edge-card h-full">
                <h4 className="lk-display text-lg font-medium text-[var(--lk-ice)]">
                  {point.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--lk-slate)]">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
