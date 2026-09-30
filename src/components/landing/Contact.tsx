import { FORMSPREE_ENDPOINT } from "./config";
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
    a: "É assim que a maioria começa. Manda uma mensagem que a gente desenha sob medida.",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="lk-section-label mb-5 !justify-center">Contato</p>
            <h2 className="lk-display text-3xl font-medium leading-tight md:text-[2.7rem]">
              Seu processo não está aqui?{" "}
              <span className="text-[var(--lk-mint)]">
                Converse com a gente.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--lk-slate)]">
              Implantamos soluções já validadas e criamos soluções sob demanda
              para o seu negócio.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Contato via site SWK"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="lk-field">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    className="lk-input"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="lk-field">
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    className="lk-input"
                    placeholder="Opcional"
                  />
                </div>
              </div>
              <div className="lk-field">
                <label htmlFor="telefone">Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  className="lk-input"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="lk-field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  className="lk-input"
                  placeholder="O que a sua operação precisa monitorar?"
                  required
                />
              </div>
              <div>
                <button type="submit" className="lk-btn lk-btn-primary">
                  Enviar mensagem
                </button>
              </div>
              <p className="lk-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--lk-dim)]">
                Resposta no mesmo dia · sem compromisso
              </p>
            </form>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <p className="lk-eyebrow">FAQ</p>
                <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-dim)]">
                  Dúvidas de quem opera
                </p>
              </div>
            </Reveal>
            <div className="space-y-3">
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
      </div>
    </section>
  );
}
