import { whatsappHref } from "./config";
import { Reveal } from "./hud";

const FAQS = [
  {
    q: "Preciso trocar minhas câmeras?",
    a: "Não. Trabalhamos com as câmeras IP e RTSP que você já tem.",
  },
  {
    q: "Onde a IA processa as imagens?",
    a: "Na borda, junto da câmera. Só o evento relevante é enviado.",
  },
  {
    q: "Funciona sem internet?",
    a: "A detecção sim, ela roda local. Alertas e dashboard usam conectividade — dimensionamos para o seu cenário.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "Começamos com uma prova de conceito de poucas semanas, na sua operação.",
  },
  {
    q: "Como funciona a prova de conceito?",
    a: "Conectamos a IA nas suas câmeras em um ponto crítico. Você decide com valor medido.",
  },
  {
    q: "Como recebo os alertas?",
    a: "Por WhatsApp, com imagem e contexto — além do dashboard ao vivo e dos relatórios.",
  },
  {
    q: "Quanto custa?",
    a: "Varia com pontos monitorados e complexidade. A POC dimensiona o projeto com número fechado.",
  },
  {
    q: "Meu processo não está nos cases?",
    a: "É assim que a maioria começa. Chama no WhatsApp que a gente desenha sob medida.",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="lk-eyebrow mb-5 !justify-center">Seção 04 · Contato</p>
            <h2 className="lk-display text-3xl font-medium leading-tight md:text-[2.7rem]">
              Vamos colocar a sua operação na tela.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--lk-slate)]">
              Fale com a gente pelo WhatsApp — respondemos no mesmo dia, sem
              compromisso.
            </p>
            <div className="mt-9">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener"
                className="lk-btn lk-btn-primary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <div className="lk-hairline mt-20 pt-14">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <p className="lk-eyebrow">FAQ</p>
              <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-dim)]">
                Dúvidas de quem opera
              </p>
            </div>
          </Reveal>
          <div className="grid items-start gap-3 lg:grid-cols-2 lg:gap-x-6">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.03}>
                <details className="lk-faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <span className="lk-faq-icon" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
