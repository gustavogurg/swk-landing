import { whatsappHref } from "./config";
import { Caption, Reveal } from "./hud";
import ProfileMock from "./ProfileMock";

const DIFFERENTIALS = [
  {
    title: "Alerta que explica",
    body: "Cada evento chega no WhatsApp com a imagem e o porquê. Não é um relatório para ler depois — é um aviso para agir agora.",
  },
  {
    title: "Prova na sua planta",
    body: "Começamos com uma prova de conceito no seu processo real. Você decide com valor medido, não com promessa.",
  },
  {
    title: "Cientistas e engenheiros juntos",
    body: "Pesquisadores trabalham lado a lado com os desenvolvedores. O seu processo é enfrentado por quem faz pesquisa e por quem coloca em produção.",
  },
  {
    title: "Tecnologia proprietária",
    body: "Os desafios técnicos de cada operação são resolvidos com técnicas desenvolvidas pela própria SWK — não com caixas prontas adaptadas.",
  },
  {
    title: "Custo operacional acessível",
    body: "Soluções customizadas não precisam custar caro. Trabalhamos para manter o custo operacional baixo, mesmo em projetos sob medida.",
  },
  {
    title: "Plataforma em evolução",
    body: "A plataforma está em constante atualização: critérios de não conformidade customizáveis, avaliação de ocorrências e relatórios analíticos e gerenciais.",
  },
];

const FLOW = [
  "Entender o processo",
  "Treinar o modelo",
  "Provar na planta",
  "Colocar para operar",
];

export default function Differentiators() {
  return (
    <section id="diferencial" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 03 · Nosso diferencial</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              O que muda quando a SWK entra.
            </h2>
            <p className="max-w-md text-[15.5px] leading-relaxed text-[var(--lk-slate)]">
              Tecnologia é o meio. O diferencial está em como ela chega até a
              sua operação.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <ul className="border-t border-[var(--lk-line)]">
              {DIFFERENTIALS.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-[var(--lk-line)] py-6"
                >
                  <h3 className="lk-display text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-[var(--lk-slate)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24">
              <ProfileMock />
              <p className="lk-caption mt-3">
                Exemplo · Perfil de segurança de operação
              </p>
            </div>
          </Reveal>
        </div>

        <div id="sob-demanda" className="lk-hairline mt-20 pt-16">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="lk-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--lk-mint)]">
                Sob medida
              </p>
              <h3 className="lk-display mt-5 text-3xl font-medium leading-tight md:text-[2.6rem]">
                Seu processo não está aqui.{" "}
                <span className="text-[var(--lk-mint)]">
                  A gente enxerga ele.
                </span>
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--lk-slate)]">
                Cada operação tem um processo que só ela conhece. A SWK desenha
                soluções sob medida: entendemos o seu fluxo, treinamos o modelo
                com as suas cenas e provamos o valor dentro da sua planta —
                antes de você decidir.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex justify-center">
              <Caption>Aguardando o seu briefing</Caption>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="lk-mono mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-[var(--lk-dim)]">
              {FLOW.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  {i > 0 && (
                    <span className="text-[var(--lk-mint)]" aria-hidden>
                      →
                    </span>
                  )}
                  <span className="text-[var(--lk-slate)]">{step}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-12 text-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener"
                className="lk-btn lk-btn-primary"
              >
                Conversar sobre o meu processo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
