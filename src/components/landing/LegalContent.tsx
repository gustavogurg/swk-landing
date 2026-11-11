import type { ReactNode } from "react";
import { BASE_PATH } from "./config";
import LandingHeader from "./LandingHeader";
import Footer from "./Footer";

const COMPANY_LEGAL_NAME = "SWK SOLUÇÕES LTDA - EPP";
const COMPANY_CNPJ = "52.552.020/0001-79";
const LAST_UPDATE = "11 de novembro de 2026";

function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <LandingHeader />
      <main className="pt-28 pb-20">
        <div className="lk-container max-w-3xl">
          <a
            href={`${BASE_PATH}/`}
            className="lk-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lk-mint)] hover:underline"
          >
            ← Voltar para o site
          </a>

          <h1 className="lk-display mt-6 text-3xl font-semibold text-[var(--lk-ice)] md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--lk-slate)]">{subtitle}</p>
          <p className="lk-mono mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--lk-dim)]">
            Última atualização: {LAST_UPDATE}
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--lk-slate)]">
            {children}
          </div>

          <div className="mt-12 border-t border-[var(--lk-line)] pt-6 text-xs text-[var(--lk-dim)]">
            <p>
              {COMPANY_LEGAL_NAME} · CNPJ {COMPANY_CNPJ}
            </p>
            <p className="mt-1">
              Contato: formulário em{" "}
              <a href={`${BASE_PATH}/#contato`} className="text-[var(--lk-mint)] hover:underline">
                swkvisionsolutions.com/#contato
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="lk-display text-lg font-semibold text-[var(--lk-ice)]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function PrivacyPolicyContent() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Como a SWK Vision Solutions coleta, usa e protege dados pessoais na plataforma de monitoramento por visão computacional."
    >
      <Section title="1. Quem é o controlador">
        <p>
          A plataforma SWK Vision Solutions é operada por {COMPANY_LEGAL_NAME}, inscrita no
          CNPJ {COMPANY_CNPJ}. Para fins da Lei Geral de Proteção de Dados (Lei nº
          13.709/2018 — LGPD), a empresa é a controladora dos dados pessoais tratados neste
          site e na plataforma.
        </p>
      </Section>

      <Section title="2. Dados que coletamos">
        <p>
          Dados de cadastro e conta: nome, e-mail, CPF, telefone/WhatsApp, perfil de acesso e
          registros de autenticação.
        </p>
        <p>
          Dados de uso: páginas acessadas, registros de ocorrências, avaliações, relatórios e
          logs técnicos de segurança.
        </p>
        <p>
          Conteúdo operacional: imagens, vídeos e quadros enviados à plataforma para detecção
          de ocorrências, incluindo os metadados necessários ao processamento.
        </p>
      </Section>

      <Section title="3. Finalidades do tratamento">
        <p>
          Operar a plataforma e executar os serviços contratados; processar vídeos e imagens
          para identificar ocorrências; gerar relatórios; enviar notificações operacionais;
          prestar suporte; manter a segurança e prevenir fraudes; cumprir obrigações legais.
        </p>
      </Section>

      <Section title="4. Bases legais">
        <p>
          Execução de contrato e procedimentos preliminares; cumprimento de obrigação legal ou
          regulatória; legítimo interesse para segurança e melhoria do serviço; e
          consentimento, quando exigido — em especial para notificações por WhatsApp.
        </p>
      </Section>

      <Section title="5. Notificações por WhatsApp">
        <p>
          O envio de notificações por WhatsApp é opcional e depende de consentimento. O
          usuário cadastra o número na área &quot;Gerenciar sua conta&quot; e confirma a
          titularidade por um código enviado por SMS (via Twilio). A verificação e o envio de
          mensagens usam provedores especializados, incluindo Twilio e a plataforma WhatsApp
          Business (Meta).
        </p>
        <p>
          As mensagens são operacionais (alertas de ocorrências) e não incluem publicidade. O
          usuário pode desativar o recebimento a qualquer momento na própria conta ou
          respondendo &quot;STOP&quot; à mensagem recebida. Registramos data e hora do
          consentimento (opt-in) e da revogação (opt-out).
        </p>
      </Section>

      <Section title="6. Compartilhamento e transferência internacional">
        <p>
          Podemos compartilhar dados com provedores de infraestrutura e comunicação
          estritamente para operar o serviço, como serviços de nuvem (Amazon Web Services),
          envio de SMS (Twilio) e envio de mensagens (Meta/WhatsApp). Não vendemos dados
          pessoais.
        </p>
        <p>
          Alguns provedores podem tratar dados fora do Brasil. Nesses casos, adotamos
          salvaguardas contratuais e medidas compatíveis com a LGPD.
        </p>
      </Section>

      <Section title="7. Retenção">
        <p>
          Mantemos os dados pelo período necessário à prestação do serviço, ao cumprimento de
          obrigações legais e ao exercício regular de direitos. Depois disso, os dados são
          eliminados ou anonimizados, salvo quando a lei exigir retenção.
        </p>
      </Section>

      <Section title="8. Direitos do titular">
        <p>
          Nos termos da LGPD, o titular pode solicitar confirmação de tratamento, acesso,
          correção, anonimização, bloqueio ou eliminação de dados desnecessários,
          portabilidade, informação sobre compartilhamentos e revogação do consentimento.
        </p>
        <p>
          Para exercer esses direitos, entre em contato pelo formulário do site em{" "}
          <a href={`${BASE_PATH}/#contato`} className="text-[var(--lk-mint)] hover:underline">
            swkvisionsolutions.com/#contato
          </a>
          .
        </p>
      </Section>

      <Section title="9. Segurança">
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados, incluindo
          transmissão criptografada (HTTPS), controle de acesso, credenciais restritas e
          registros de auditoria. Nenhum sistema é completamente imune a incidentes; caso
          ocorram, seguiremos os procedimentos legais de comunicação.
        </p>
      </Section>

      <Section title="10. Cookies e sessão">
        <p>
          Utilizamos cookies essenciais para autenticação e funcionamento da plataforma. Não
          utilizamos cookies de publicidade neste site.
        </p>
      </Section>

      <Section title="11. Atualizações">
        <p>
          Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A
          data da última atualização é indicada no topo desta página.
        </p>
      </Section>
    </LegalLayout>
  );
}

export function TermsContent() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Condições para uso do site e da plataforma SWK Vision Solutions."
    >
      <Section title="1. Serviço">
        <p>
          A SWK Vision Solutions oferece soluções de visão computacional para monitoramento de
          segurança, produtividade e qualidade, incluindo site institucional, plataforma web,
          ferramentas de cadastro e envio de ocorrências e relatórios.
        </p>
      </Section>

      <Section title="2. Conta e acesso">
        <p>
          O usuário é responsável pela veracidade das informações cadastrais e pela
          confidencialidade de suas credenciais. O acesso é pessoal e não deve ser
          compartilhado. Comunique imediatamente qualquer uso não autorizado.
        </p>
      </Section>

      <Section title="3. Uso aceitável">
        <p>
          O usuário compromete-se a utilizar a plataforma em conformidade com a lei e com
          direitos de terceiros. É responsabilidade do cliente garantir base legal e avisos
          necessários para a captação e o envio de imagens e vídeos de suas câmeras.
        </p>
        <p>
          É vedado utilizar o serviço para fins ilícitos, para violar privacidade de terceiros
          ou para tentar acessar áreas e dados não autorizados.
        </p>
      </Section>

      <Section title="4. Notificações por WhatsApp">
        <p>
          As notificações por WhatsApp são opcionais e dependem de número verificado e
          consentimento do usuário. A entrega pode variar conforme operadora, dispositivo e
          políticas do provedor. O usuário pode desativar o recebimento a qualquer momento na
          conta ou respondendo &quot;STOP&quot;.
        </p>
      </Section>

      <Section title="5. Propriedade intelectual">
        <p>
          O software, a marca, os textos e os elementos visuais da SWK Vision Solutions são
          protegidos por direitos de propriedade intelectual. Os dados e conteúdos enviados
          pelo cliente permanecem de titularidade do cliente, autorizado o tratamento para a
          prestação do serviço.
        </p>
      </Section>

      <Section title="6. Disponibilidade e limitações">
        <p>
          Empregamos esforços comerciais razoáveis para manter o serviço disponível, mas não
          garantimos operação ininterrupta ou livre de erros. Manutenções, falhas de terceiros
          e eventos fora do nosso controle podem afetar a disponibilidade.
        </p>
        <p>
          As detecções automatizadas são ferramentas de apoio e não substituem a avaliação
          humana nem decisões de segurança.
        </p>
      </Section>

      <Section title="7. Limitação de responsabilidade">
        <p>
          Na máxima extensão permitida pela lei, a SWK não responde por danos indiretos,
          lucros cessantes ou perdas decorrentes de uso indevido da plataforma ou de conteúdo
          enviado por usuários.
        </p>
      </Section>

      <Section title="8. Encerramento">
        <p>
          Podemos suspender ou encerrar o acesso em caso de violação destes termos ou de uso
          que comprometa a segurança do serviço, sem prejuízo das medidas legais cabíveis.
        </p>
      </Section>

      <Section title="9. Legislação e foro">
        <p>
          Estes termos são regidos pelas leis brasileiras. Eventuais controvérsias serão
          submetidas ao foro competente da comarca da sede da empresa, salvo disposição legal
          em contrário.
        </p>
      </Section>

      <Section title="10. Contato">
        <p>
          Dúvidas sobre estes termos podem ser enviadas pelo formulário em{" "}
          <a href={`${BASE_PATH}/#contato`} className="text-[var(--lk-mint)] hover:underline">
            swkvisionsolutions.com/#contato
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
