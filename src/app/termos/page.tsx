import type { Metadata } from "next";
import { TermsContent } from "@/components/landing/LegalContent";

export const metadata: Metadata = {
  title: "Termos de Uso — SWK Vision Solutions",
  description: "Condições para uso do site e da plataforma SWK Vision Solutions.",
};

export default function TermsPage() {
  return <TermsContent />;
}
