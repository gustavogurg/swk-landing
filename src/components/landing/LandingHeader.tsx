"use client";

import { useState } from "react";
import { BASE_PATH, NAV_LINKS, PLATFORM_URL } from "./config";

export default function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          className="hidden items-center gap-5 xl:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="lk-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={PLATFORM_URL}
            className="lk-btn lk-btn-ghost !px-4 !py-2 !text-[13.5px]"
          >
            Acessar plataforma
          </a>
          <a href="#contato" className="lk-btn lk-btn-primary !px-4 !py-2 !text-[13.5px]">
            Entrar em contato
          </a>
        </div>

        <button
          type="button"
          className="lk-btn lk-btn-ghost !px-4 !py-2 xl:!hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="lk-mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          <span>Menu</span>
        </button>
      </div>
      {menuOpen && (
        <nav
          id="lk-mobile-nav"
          className="lk-mobile-nav xl:hidden"
          aria-label="Navegação principal"
        >
          <div className="lk-container grid gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="lk-mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-[var(--lk-line)] pt-4 sm:grid-cols-2">
              <a href={PLATFORM_URL} className="lk-btn lk-btn-ghost">
                Acessar plataforma
              </a>
              <a href="#contato" className="lk-btn lk-btn-primary" onClick={() => setMenuOpen(false)}>
                Entrar em contato
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
