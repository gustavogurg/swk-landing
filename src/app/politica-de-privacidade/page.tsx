import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/landing/LegalContent";

export const metadata: Metadata = {
  title: "Política de Privacidade — SWK Vision Solutions",
  description:
    "Como a SWK Vision Solutions coleta, usa e protege dados pessoais na plataforma de monitoramento por visão computacional.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
