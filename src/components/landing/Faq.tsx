import { Reveal } from "./hud";

const FAQS = [
  {
    q: "Preciso trocar minhas câmeras?",
    a: "Não. A SWK trabalha com as câmeras IP e RTSP que você já tem instaladas. Se houver ponto cego na operação, ajudamos a especificar a câmera certa para o lugar certo.",
  },
  {
    q: "Onde a IA processa as imagens?",
    a: "Na borda, junto da câmera. O vídeo não precisa ir para a nuvem: a análise acontece localmente e só os eventos relevantes — a imagem do desvio e o contexto — são enviados para o alerta.",
  },
  {
    q: "Funciona sem internet?",
    a: "A detecção sim: ela roda localmente e não depende de link. A entrega dos alertas por WhatsApp e a atualização do dashboard usam conectividade; quando a internet é limitada, a solução é dimensionada para esse cenário.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "Depende do processo e da qualidade das câmeras. Em geral, começamos com uma prova de conceito de poucas semanas: conectamos, calibramos e você vê o resultado na sua própria operação.",
  },
  {
    q: "Como funciona a prova de conceito?",
    a: "Escolhemos juntos um ponto crítico da operação, conectamos a IA nas câmeras existentes e acompanhamos as detecções em tempo real. Ao final, você decide com o valor medido — não com promessa.",
  },
  {
    q: "Como recebo os alertas?",
    a: "Por WhatsApp, com a imagem do evento e o contexto do que aconteceu. Além disso, o dashboard mostra a operação ao vivo e os relatórios organizam o histórico para a gestão.",
  },
  {
    q: "Quanto custa?",
    a: "O investimento varia com o número de pontos monitorados e a complexidade do processo. A prova de conceito é o caminho para dimensionar o projeto com número fechado.",
  },
  {
    q: "Meu processo não está nos casos da página. E agora?",
    a: "A maior parte do que fazemos começa exatamente assim. Fale com a gente pelo WhatsApp: a SWK desenha soluções sob medida para o seu processo.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="lk-eyebrow mb-4">Seção 05 · FAQ</p>
            <h2 className="lk-display text-3xl font-medium leading-tight md:text-4xl">
              Dúvidas de quem opera.
            </h2>
            <p className="mt-6 max-w-sm text-[15.5px] leading-relaxed text-[var(--lk-slate)]">
              O que os gestores costumam perguntar antes de trazer a operação
              para a tela. Não achou a sua dúvida? Pergunte direto no WhatsApp.
            </p>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
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
