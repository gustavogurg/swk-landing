import { Reveal } from "./hud";

export default function Differentiators() {
  return (
    <section id="diferencial" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 03 · Nosso diferencial</p>
          <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
            O que muda quando a SWK entra.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-10 max-w-2xl text-[16.5px] leading-relaxed text-[var(--lk-slate)]">
            Alertas que chegam no WhatsApp com a imagem e o porquê — um aviso
            para agir, não um relatório para ler. Todo projeto começa com uma
            prova de conceito na sua planta, para você decidir com valor
            medido, não com promessa. E por trás: cientistas e engenheiros no
            mesmo time, tecnologia proprietária e custo operacional acessível,
            mesmo em soluções sob medida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
