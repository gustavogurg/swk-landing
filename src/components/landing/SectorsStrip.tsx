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
      <div className="lk-container flex flex-col items-center gap-4 py-7 md:flex-row md:justify-between">
        <p className="lk-mono shrink-0 text-[10.5px] uppercase tracking-[0.2em] text-[var(--lk-dim)]">
          Para operações de
        </p>
        <ul className="lk-mono flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-[var(--lk-slate)]">
          {SECTORS.map((sector, i) => (
            <li key={sector} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-[var(--lk-mint)]" aria-hidden>
                  ·
                </span>
              )}
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
