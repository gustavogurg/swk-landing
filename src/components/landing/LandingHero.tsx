import InstitutionalVideo from "./InstitutionalVideo";

export default function LandingHero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="lk-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
          <div>
            <p className="lk-eyebrow">SWK Vision · Visão computacional e IA</p>
            <h1 className="lk-display mt-7 max-w-xl text-[2.35rem] font-medium leading-[1.08] md:text-[3.1rem]">
              Visão Computacional e IA aplicadas à{" "}
              <span className="text-[var(--lk-mint)]">
                segurança, produtividade e qualidade
              </span>{" "}
              da sua operação.
            </h1>
            <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-[var(--lk-slate)]">
              Transformamos imagens da operação em informação para agir no
              momento certo. Conheça a SWK e veja onde nossa tecnologia pode
              gerar valor para o seu negócio.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contato" className="lk-btn lk-btn-primary">
                Entrar em contato
              </a>
              <a href="#solucao" className="lk-btn lk-btn-ghost">
                Conhecer a solução
              </a>
            </div>
          </div>
          <InstitutionalVideo />
        </div>
      </div>
    </section>
  );
}
