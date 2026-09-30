import { BASE_PATH, NAV_LINKS } from "./config";

export default function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--lk-line)] bg-[rgba(14,17,24,0.78)] backdrop-blur-md">
      <div className="lk-container flex h-16 items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="SWK Vision Solutions — início"
        >
          <img
            src={`${BASE_PATH}/landing/logo-horizontal.png`}
            alt="SWK Vision Solutions"
            className="h-8 w-auto object-contain"
          />
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

        <a href="#contato" className="lk-btn lk-btn-primary !px-4 !py-2 !text-[13.5px]">
          Entrar em contato
        </a>
      </div>
    </header>
  );
}
