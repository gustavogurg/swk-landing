import { Reveal } from "./hud";

const OFFER = [
  {
    number: "01",
    title: "Monitoramento inteligente",
    body: "Aproveitamos as câmeras da sua operação para identificar situações relevantes e levar informação clara à equipe responsável.",
  },
  {
    number: "02",
    title: "Aplicações validadas",
    body: "Partimos de aplicações já desenvolvidas para segurança, qualidade e produtividade, adaptadas ao ambiente em que serão usadas.",
  },
  {
    number: "03",
    title: "Projetos sob medida",
    body: "Quando o desafio é específico, desenhamos e validamos a solução junto com a sua equipe, a partir do processo real.",
  },
];

export default function Solution() {
  return (
    <section id="solucao" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-section-label mb-4">Nossa solução</p>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              Inteligência para enxergar o que importa na sua operação.
            </h2>
            <p className="max-w-xl text-[16px] leading-relaxed text-[var(--lk-slate)]">
              Da aplicação pronta ao desafio inédito, conectamos visão
              computacional ao contexto do seu negócio para transformar imagens
              em decisões úteis.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {OFFER.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="lk-card h-full p-7 md:p-8">
                <span className="lk-display text-2xl font-medium text-[var(--lk-mint)]">
                  {item.number}
                </span>
                <h3 className="lk-display mt-7 text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--lk-slate)]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a href="#cases" className="lk-nav-link mt-8 inline-flex items-center gap-2 !text-[var(--lk-mint)]">
            Ver aplicações validadas <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
