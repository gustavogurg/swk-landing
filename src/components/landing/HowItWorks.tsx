import { BASE_PATH } from "./config";
import { Reveal } from "./hud";

const STEPS = [
  {
    tag: "01 · CONECTAR",
    title: "A câmera que você já tem",
    body: "Lemos câmeras IP e RTSP já instaladas. Nada de trocar infraestrutura.",
  },
  {
    tag: "02 · ENTENDER",
    title: "IA rodando na borda",
    body: "A análise acontece junto da câmera, em milissegundos.",
  },
  {
    tag: "03 · AGIR",
    title: "Alerta com contexto",
    body: "Desvio vira alerta no WhatsApp com imagem e porquê. Dashboard ao vivo, relatórios para a gestão.",
  },
];

const EDGE_POINTS = [
  {
    tag: "RESPOSTA IMEDIATA",
    body: "a detecção acontece em milissegundos, sem depender de link",
  },
  {
    tag: "PRIVACIDADE",
    body: "só o evento relevante é enviado",
  },
  {
    tag: "ROBUSTEZ",
    body: "a análise continua mesmo com internet instável ou limitada",
  },
];

export default function HowItWorks() {
  return (
    <section id="tecnologia" className="scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 02 · Nossa tecnologia</p>
          <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
            Da câmera ao alerta.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="lk-hairline mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.tag}
                className={
                  i === 0
                    ? "md:pr-10"
                    : i === STEPS.length - 1
                      ? "md:border-l md:border-[var(--lk-line)] md:pl-10"
                      : "md:border-l md:border-[var(--lk-line)] md:px-10"
                }
              >
                <p className="lk-mono text-[11px] uppercase tracking-[0.18em] text-[var(--lk-mint)]">
                  {step.tag}
                </p>
                <h3 className="lk-display mt-3 text-xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--lk-slate)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="lk-hairline mt-14">
            <div className="grid items-center gap-8 pt-12 lg:grid-cols-[1.4fr_auto_1fr_auto_1fr] lg:gap-6">
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
                    preload="auto"
                  />
                </div>
                <figcaption className="lk-mono mt-2.5 text-[10px] uppercase tracking-[0.16em] text-[var(--lk-dim)]">
                  Captura · câmera existente
                </figcaption>
              </figure>

              <span
                className="lk-mono hidden text-lg text-[var(--lk-mint)] lg:block"
                aria-hidden
              >
                →
              </span>

              <div className="lk-panel">
                <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-mint)]">
                  Análise · IA na borda
                </p>
                <ul className="mt-4 space-y-2.5">
                  <li className="lk-mono text-[11px] uppercase tracking-[0.12em] text-[var(--lk-dim)]">
                    resposta em milissegundos
                  </li>
                  <li className="lk-mono text-[11px] uppercase tracking-[0.12em] text-[var(--lk-dim)]">
                    modelos treinados para o seu processo
                  </li>
                  <li className="lk-mono text-[11px] uppercase tracking-[0.12em] text-[var(--lk-dim)]">
                    não depende de banda
                  </li>
                </ul>
              </div>

              <span
                className="lk-mono hidden text-lg text-[var(--lk-mint)] lg:block"
                aria-hidden
              >
                →
              </span>

              <div className="lk-panel">
                <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-mint)]">
                  Entrega · Alerta no WhatsApp
                </p>
                <ul className="mt-4 space-y-2.5">
                  <li className="lk-mono text-[11px] uppercase tracking-[0.12em] text-[var(--lk-dim)]">
                    imagem + contexto do desvio
                  </li>
                  <li className="lk-mono text-[11px] uppercase tracking-[0.12em] text-[var(--lk-dim)]">
                    dashboard ao vivo
                  </li>
                  <li className="lk-mono text-[11px] uppercase tracking-[0.12em] text-[var(--lk-dim)]">
                    relatórios analíticos e gerenciais
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 border border-[var(--lk-line)] p-8 md:p-10">
            <p className="lk-eyebrow mb-6">Por que na borda?</p>
            <ul className="grid gap-5 sm:grid-cols-3">
              {EDGE_POINTS.map((point) => (
                <li key={point.tag}>
                  <p className="lk-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--lk-ice)]">
                    {point.tag}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--lk-dim)]">
                    {point.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="lk-caption mt-12 flex-wrap justify-center leading-relaxed">
            Plataforma SWK · Detecção de não conformidades · Critérios
            customizáveis · Perfis de monitoramento · Avaliação de ocorrências ·
            Relatórios automáticos
          </p>
        </Reveal>
      </div>
    </section>
  );
}
