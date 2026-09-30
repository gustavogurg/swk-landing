const SECTORS = [
  "Agroindústria",
  "Alimentos & bebidas",
  "Energia elétrica",
  "Manufatura",
  "Logística & armazenagem",
];

export default function SectorsStrip() {
  return (
    <section className="border-y border-[var(--lk-line)]">
      <div className="lk-container flex flex-col gap-6 py-9 md:flex-row md:items-center md:justify-between md:gap-10">
        <h2 className="lk-display max-w-xs shrink-0 text-[1.4rem] font-medium leading-tight text-[var(--lk-ice)] md:text-[1.55rem]">
          Onde já estamos atuando
        </h2>
        <ul className="flex flex-wrap gap-2.5 md:justify-end">
          {SECTORS.map((sector) => (
            <li key={sector} className="rounded-full border border-[var(--lk-line-strong)] px-3 py-1.5 text-[13px] font-medium text-[var(--lk-slate)]">
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
