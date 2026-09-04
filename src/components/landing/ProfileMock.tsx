const CRITERIA = [
  "capacete ausente",
  "luva isolante ausente",
  "pessoa em zona de risco",
];

export default function ProfileMock() {
  return (
    <div className="lk-mock">
      <div className="lk-mock-head">
        <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-dim)]">
          Perfil de monitoramento
        </p>
        <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-mint)]">
          Segurança de operação
        </p>
      </div>
      <ul className="space-y-3 p-5">
        {CRITERIA.map((criterion) => (
          <li
            key={criterion}
            className="lk-mono flex items-center justify-between gap-3 text-[11.5px] uppercase tracking-[0.12em] text-[var(--lk-slate)]"
          >
            <span>critério: {criterion}</span>
            <span className="text-[var(--lk-ok)]">✓ ativo</span>
          </li>
        ))}
      </ul>
      <div className="lk-mono flex items-center justify-between gap-3 border-t border-[var(--lk-line)] px-5 py-3 text-[9.5px] uppercase tracking-[0.14em] text-[var(--lk-dim)]">
        <span>24/7 · 3 câmeras</span>
        <span>alertas: WhatsApp</span>
      </div>
    </div>
  );
}
