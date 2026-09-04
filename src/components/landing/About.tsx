import { Reveal } from "./hud";

const TEAM = [
  {
    initials: "RC",
    name: "Ricardo Colares",
    role: "CEO · SWK Vision Solutions",
    company: null as { name: string; url: string } | null,
    bio: "Doutor em Eletrônica e Comunicações pela UNICAMP e mais de 20 anos em pesquisa e desenvolvimento de tecnologias digitais. Atuou em projetos com Siemens, Furukawa, Ericsson, WEG, Huawei e Enel.",
  },
  {
    initials: "EF",
    name: "Eduardo Freire",
    role: "Fundador · FWK Inovação Design",
    company: { name: "FWK", url: "https://fwk.global/" },
    bio: "Mestre em Ciência da Computação pela UFPE e professor de pós-graduação na Poli/UFRJ, UFRN e USP/ESALQ. Resultados reconhecidos por BMW, Microsoft, Natura e Porto Seguro.",
  },
  {
    initials: "FB",
    name: "Facundo Barbosa",
    role: "Fundador · SP5 Office",
    company: { name: "SP5 Office", url: "https://sp5office.com/" },
    bio: "Mestre em Administração com certificações PMP, CSM e ITIL. Passagem executiva por energia, alimentos e bebidas, saúde, agricultura e mineração.",
  },
];

const APPROACH = [
  {
    tag: "PROCESSO PRIMEIRO",
    body: "a solução nasce do seu fluxo, não de um catálogo",
  },
  {
    tag: "ENTREGA EM PRODUÇÃO",
    body: "medimos sucesso pelo alerta que chega, não pelo protótipo",
  },
  {
    tag: "PARCEIRO CONTÍNUO",
    body: "acompanhamos a operação depois do go-live",
  },
];

export default function About() {
  return (
    <section id="sobre" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 04 · Sobre a SWK</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              Feita para enxergar o chão de fábrica.
            </h2>
            <p className="max-w-md text-[15.5px] leading-relaxed text-[var(--lk-slate)]">
              A SWK Vision Solutions nasceu em outubro de 2023 como spin-off da
              FWK e da SP5 Office — décadas de gestão de projetos e
              transformação de processos — para unir pesquisa em IA e visão
              computacional à operação real.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <article className="lk-card flex h-full flex-col p-7">
                <div className="flex items-center gap-4">
                  <span className="lk-display flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[var(--lk-line-strong)] text-sm font-medium text-[var(--lk-mint)]">
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="lk-display text-base font-medium">
                      {member.name}
                    </h3>
                    <p className="lk-mono mt-1 text-[9.5px] uppercase tracking-[0.14em] text-[var(--lk-dim)]">
                      {member.role}
                      {member.company ? (
                        <>
                          {" · "}
                          <a
                            href={member.company.url}
                            target="_blank"
                            rel="noopener"
                            className="text-[var(--lk-mint)] transition-colors hover:text-[var(--lk-ice)]"
                          >
                            {member.company.name} ↗
                          </a>
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-[var(--lk-slate)]">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ul className="lk-hairline mt-14 grid gap-8 pt-10 md:grid-cols-3">
            {APPROACH.map((item) => (
              <li key={item.tag}>
                <p className="lk-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--lk-ice)]">
                  {item.tag}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--lk-dim)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
