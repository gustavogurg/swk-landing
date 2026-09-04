import Image from "next/image";
import { NAV_LINKS, whatsappHref } from "./config";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--lk-line)]">
      <div className="lk-container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="inline-flex h-10 items-center rounded-md bg-[var(--lk-ice)] px-3">
              <Image
                src="/landing/logo.png"
                alt="Logo SWK"
                width={112}
                height={24}
                className="h-5 w-auto object-contain"
              />
            </span>
            <p className="lk-mono mt-4 text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[var(--lk-dim)]">
              Visão computacional para segurança, produtividade e qualidade.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="lk-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="lk-nav-link !text-[var(--lk-mint)]"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="lk-mono mt-12 flex flex-col gap-3 border-t border-[var(--lk-line)] pt-6 text-[10px] uppercase tracking-[0.18em] text-[var(--lk-dim)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 SWK Vision Solutions</p>
          <p>
            Câmeras existentes · IA na borda · Soluções sob medida
          </p>
        </div>
      </div>
    </footer>
  );
}
