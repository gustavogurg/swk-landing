import { BASE_PATH } from "./config";

export default function AlertMock() {
  return (
    <div className="lk-mock">
      <div className="lk-mock-head">
        <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-dim)]">
          Alerta · via WhatsApp
        </p>
        <p className="lk-mono text-[10px] uppercase tracking-[0.16em] text-[var(--lk-mint)]">
          14:32:08
        </p>
      </div>
      <div className="p-5">
        <p className="lk-display flex items-center gap-2.5 text-lg font-medium">
          <span
            className="flex h-5 w-5 flex-none items-center justify-center rounded-[3px] bg-[var(--lk-alert)] text-[12px] font-bold text-white"
            aria-hidden
          >
            !
          </span>
          Pessoa em zona de risco
        </p>
        <p className="lk-mono mt-2.5 text-[10px] uppercase tracking-[0.14em] text-[var(--lk-dim)]">
          CAM-02 · Galpão logístico
        </p>
        <p className="mt-4 text-[14px] leading-relaxed text-[var(--lk-slate)]">
          Operador sem colete a 1,2 m da empilhadeira em movimento. Confira a
          imagem e confirme a ocorrência.
        </p>
        <div className="lk-mock-thumb mt-5">
          <img
            src={`${BASE_PATH}/landing/empilhadeira.jpeg`}
            alt="Frame da câmera CAM-02 com pessoa próxima à empilhadeira em zona de risco"
            className="h-full w-full object-cover"
          />
          <span className="lk-mono absolute bottom-2 left-2 rounded-[4px] bg-[rgba(14,17,24,0.75)] px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-[var(--lk-ice)]">
            CAM-02 · 14:32:08
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <span className="lk-mock-btn lk-mock-btn--primary">
            Ver ocorrência
          </span>
          <span className="lk-mock-btn">Confirmar</span>
        </div>
      </div>
    </div>
  );
}
