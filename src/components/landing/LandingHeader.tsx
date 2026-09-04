import Image from "next/image";
import { NAV_LINKS, whatsappHref } from "./config";

export default function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--lk-line)] bg-[rgba(14,17,24,0.78)] backdrop-blur-md">
      <div className="lk-container flex h-16 items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="SWK Vision Solutions — início"
        >
          <span className="flex h-9 items-center rounded-md bg-[var(--lk-ice)] px-2.5">
            <Image
              src="/landing/logo.png"
              alt="Logo SWK"
              width={112}
              height={24}
              className="h-5 w-auto object-contain"
            />
          </span>
          <span className="lk-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--lk-slate)]">
            Vision Solutions
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="lk-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={whatsappHref} target="_blank" rel="noopener" className="lk-btn lk-btn-primary !px-4 !py-2 !text-[13.5px]">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
