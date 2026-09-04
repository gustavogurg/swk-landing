import { whatsappHref } from "./config";
import { Reveal } from "./hud";

export default function FinalCta() {
  return (
    <section className="lk-hairline py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="lk-eyebrow mb-5 !justify-center">Próximo passo</p>
            <h2 className="lk-display text-3xl font-medium leading-tight md:text-[2.7rem]">
              Traga a sua operação para a tela.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--lk-slate)]">
              Conte para a gente o que a sua câmera precisa enxergar.
              Respondemos com um plano — e, se fizer sentido, com uma prova de
              conceito na sua planta.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener"
                className="lk-btn lk-btn-primary"
              >
                Falar no WhatsApp
              </a>
            </div>
            <p className="lk-mono mt-9 text-[10px] uppercase tracking-[0.18em] text-[var(--lk-dim)]">
              Resposta no mesmo dia · Sem compromisso
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
