import { Reveal } from "./hud";
import ProfileMock from "./ProfileMock";

const DIFFERENTIALS = [
  {
    title: "Alerta que explica",
    body: "WhatsApp com a imagem e o porquê — um aviso para agir, não um relatório para ler.",
  },
  {
    title: "Prova na sua planta",
    body: "POC no seu processo real; você decide com valor medido.",
  },
  {
    title: "Cientistas e engenheiros juntos",
    body: "Pesquisa e desenvolvimento no mesmo time.",
  },
  {
    title: "Tecnologia proprietária",
    body: "Técnicas próprias, não caixas prontas adaptadas.",
  },
  {
    title: "Custo operacional acessível",
    body: "Sob medida não precisa custar caro.",
  },
  {
    title: "Plataforma em evolução",
    body: "Critérios customizáveis, avaliação de ocorrências e relatórios automáticos.",
  },
];

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
      </div>
    </section>
  );
}
