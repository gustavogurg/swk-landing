import { BASE_PATH } from "./config";
import { Caption, Reveal, StatusTone } from "./hud";
import { cn } from "@/utils/helpers/cn";

type CaseItem = {
  cam: string;
  title: string;
  statusLabel: string;
  statusTone: StatusTone;
  sector: string;
  img: string;
  alt: string;
  desc: string;
};

type Pillar = {
  label: string;
  title: string;
  lead: string;
  cases: CaseItem[];
};

const PILLARS: Pillar[] = [
  {
    label: "Segurança",
    title: "Ver o risco antes do acidente",
    lead: "Proteger quem trabalha é a primeira leitura de qualquer câmera. A SWK acompanha o que a operação exige e avisa antes que o desvio vire ocorrência.",
    cases: [
      {
        cam: "CAM-01",
        title: "EPI no setor elétrico",
        statusLabel: "Desvio",
        statusTone: "warn",
        sector: "energia elétrica",
        img: "/landing/epi-eletrico.jpeg",
        alt: "Trabalhadores em subestação elétrica monitorados por câmera com detecção de EPI",
        desc: "Subestações e áreas energizadas têm regras que não podem falhar. A IA acompanha o uso de capacete, luvas isolantes e demais EPIs em tempo real — e avisa a equipe de segurança no primeiro desvio.",
      },
      {
        cam: "CAM-02",
        title: "Empilhadeira + zona vermelha",
        statusLabel: "Alerta",
        statusTone: "alert",
        sector: "galpão logístico",
        img: "/landing/empilhadeira.jpeg",
        alt: "Pessoa em zona de risco próxima à movimentação de empilhadeira em galpão",
        desc: "A zona vermelha é onde máquina e pessoa não podem se encontrar. A câmera acompanha a movimentação das empilhadeiras e a presença de pessoas na área restrita, e dispara o alerta quando a distância fica curta.",
      },
      {
        cam: "CAM-03",
        title: "Fogo e fumaça",
        statusLabel: "Alerta",
        statusTone: "alert",
        sector: "indoor & outdoor",
        img: "/landing/fogo-fumaca.jpeg",
        alt: "Princípio de incêndio em pátio externo detectado por câmera com IA",
        desc: "Princípio de incêndio reconhecido em segundos, dentro do galpão ou no pátio. A IA detecta fumaça e chama antes do calor disparar outros sensores — e o alerta chega com a imagem do ponto exato.",
      },
    ],
  },
  {
    label: "Produtividade",
    title: "Medir o que a operação rende",
    lead: "A câmera enxerga o ritmo real da operação: quem está onde, o que parou, o que rendeu. Sem apontamento manual, sem impressão.",
    cases: [
      {
        cam: "CAM-04",
        title: "Contagem e permanência",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "indústria de alimentos",
        img: "/landing/contagem-alimentos.jpeg",
        alt: "Colaboradores em linha de processamento de alimentos com contagem automática de pessoas",
        desc: "Quantas pessoas estão na área, quanto tempo permanecem em cada etapa e quando o fluxo foge do padrão. O gestor acompanha a ocupação real e ajusta a operação com dado, não com impressão.",
      },
      {
        cam: "CAM-05",
        title: "Linha de produção",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "manufatura",
        img: "/landing/tomadas.jpeg",
        alt: "Esteira de produção de tomadas elétricas com contagem automática de peças",
        desc: "Cada ciclo é contado automaticamente, sem apontamento manual. A IA mede o ritmo da linha, expõe paradas e gargalos e devolve a produtividade real do turno.",
      },
    ],
  },
  {
    label: "Qualidade",
    title: "Classificar sem cansar",
    lead: "Classificar é repetir a mesma decisão milhares de vezes por dia. A IA faz isso sem cansar — e o padrão não muda do primeiro lote ao último.",
    cases: [
      {
        cam: "CAM-06",
        title: "Seleção de castanhas",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "agroindústria",
        img: "/landing/castanhas.jpeg",
        alt: "Mãos selecionando castanhas em mesa de classificação com detecção de grau e defeito",
        desc: "A seleção de castanhas depende de olhos treinados — e cansados. A IA classifica por grau e defeito no ritmo da mesa, reduz o retrabalho e padroniza o que vai para cada lote.",
      },
      {
        cam: "CAM-07",
        title: "Seleção de morangos",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "agroindústria",
        img: "/landing/morangos.jpeg",
        alt: "Morangos passando em esteira de seleção com classificação por maturação e defeito",
        desc: "Morangos têm janela curta e padrão exigente. A câmera classifica por maturação e defeito na passagem da esteira — o que segue para o cliente e o que vai para o refugo deixam de depender do julgamento do momento.",
      },
    ],
  },
];

function CaseRow({ item, index }: { item: CaseItem; index: number }) {
  const imageRight = index % 2 === 1;

  return (
    <div className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
      <figure className={cn(imageRight && "md:order-2")}>
        <div className="relative aspect-video overflow-hidden rounded-[10px] border border-[var(--lk-line)]">
          <img
            src={`${BASE_PATH}${item.img}`}
            alt={item.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-2.5">
          <Caption tone={item.statusTone}>
            {item.statusLabel} · {item.cam} · {item.sector}
          </Caption>
        </figcaption>
      </figure>

      <div className={cn(imageRight && "md:order-1")}>
        <h3 className="lk-display text-xl font-medium md:text-[1.35rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--lk-slate)]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section id="aplicacoes" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 01 · Aplicações</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              Três frentes. Um mesmo olhar.
            </h2>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="max-w-md text-[15.5px] leading-relaxed text-[var(--lk-slate)] md:text-right">
                Cada câmera da SWK responde a uma pergunta da sua operação.
                Veja o que já monitoramos.
              </p>
              <Caption>07 canais · 03 frentes</Caption>
            </div>
          </div>
        </Reveal>

        {PILLARS.map((pillar) => (
          <div key={pillar.label} className="lk-hairline mt-16 pt-14">
            <Reveal>
              <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-end">
                <div>
                  <p className="lk-mono mb-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--lk-mint)]">
                    {pillar.label} ·{" "}
                    {String(pillar.cases.length).padStart(2, "0")} casos
                  </p>
                  <h3 className="lk-display text-2xl font-medium md:text-[1.7rem]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-[15.5px] leading-relaxed text-[var(--lk-slate)]">
                  {pillar.lead}
                </p>
              </div>
            </Reveal>

            <div className="space-y-14">
              {pillar.cases.map((item, i) => (
                <Reveal key={item.cam}>
                  <CaseRow item={item} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
