export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const WHATSAPP_URL = "https://wa.me/5500000000000";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da SWK e quero entender como aplicar visão computacional na minha operação."
);

export const whatsappHref = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Cases", href: "#cases" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Contato", href: "#contato" },
  { label: "Quem faz", href: "#quem-faz" },
];
