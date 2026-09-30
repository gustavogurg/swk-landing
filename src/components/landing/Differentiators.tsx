import { Reveal } from "./hud";

const DIFFERENTIALS = [
  {
    number: "01",
    title: "Ciência e desenvolvimento no mesmo time",
    body: "Cientistas trabalham junto com os desenvolvedores para levar pesquisa aplicada às necessidades da operação.",
  },
  {
    number: "02",
    title: "Técnica proprietária para desafios reais",
    body: "Enfrentamos desafios tecnológicos com técnica própria, ajustada ao processo e ao ambiente de cada cliente.",
  },
  {
    number: "03",
    title: "Soluções customizadas, operação acessível",
    body: "Desenhamos a solução sob medida com foco em baixo custo operacional depois da implantação.",
  },
];

export default function Differentiators() {
  return (
    <section id="diferencial" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 04 · Nosso diferencial</p>
          <h2 className="lk-display max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
            Tecnologia desenvolvida junto de quem entende o desafio.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--lk-slate)]">
            Unimos pesquisa, desenvolvimento e conhecimento da sua operação para
            construir uma solução que faça sentido no dia a dia.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="lk-card h-full p-7 md:p-8">
                <span className="lk-display text-2xl font-medium text-[var(--lk-mint)]">
                  {item.number}
                </span>
                <h3 className="lk-display mt-7 text-xl font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--lk-slate)]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
