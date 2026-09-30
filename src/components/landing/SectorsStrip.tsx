const SECTORS = [
  {
    name: "Agroindústria",
    application: "Seleção de castanhas e morangos por características de qualidade.",
  },
  {
    name: "Alimentos & bebidas",
    application: "Contagem de pessoas e tempo de permanência na produção.",
  },
  {
    name: "Energia elétrica",
    application: "Verificação do uso de EPI em áreas energizadas.",
  },
  {
    name: "Manufatura",
    application: "Contagem de peças e identificação de paradas na linha.",
  },
  {
    name: "Logística & armazenagem",
    application: "Monitoramento de pessoas e empilhadeiras em zonas de risco.",
  },
];

export default function SectorsStrip() {
  return (
    <section className="border-y border-[var(--lk-line-strong)] bg-[var(--lk-bg2)] py-20 md:py-24">
      <div className="lk-container">
        <h2 className="lk-display max-w-2xl text-3xl font-medium leading-tight text-[var(--lk-ice)] md:text-4xl">
          Onde já estamos atuando
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SECTORS.map((sector) => (
            <li key={sector.name} className="lk-sector-card sm:last:col-span-2 lg:last:col-span-1">
              <div>
                <h3 className="lk-display text-[19px] font-medium leading-snug text-[var(--lk-ice)]">
                  {sector.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--lk-slate)]">
                  {sector.application}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
