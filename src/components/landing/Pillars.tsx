import { BASE_PATH } from "./config";
import { Caption, Reveal, StatusTone } from "./hud";
import { cn } from "@/utils/helpers/cn";

type CaseImage = {
  src: string;
  alt: string;
  label: string;
};

type CaseItem = {
  cam: string;
  title: string;
  statusLabel: string;
  statusTone: StatusTone;
  sector: string;
  img?: string;
  alt?: string;
  imgs?: CaseImage[];
  desc: string;
};

type Pillar = {
  label: string;
  title: string;
  cases: CaseItem[];
};

const PILLARS: Pillar[] = [
  {
    label: "Segurança",
    title: "A câmera avisa antes do desvio virar acidente.",
    cases: [
      {
        cam: "CAM-01",
        title: "EPI no setor elétrico",
        statusLabel: "Desvio",
        statusTone: "warn",
        sector: "energia elétrica",
        img: "/landing/epi-eletrico.jpeg",
        alt: "Trabalhadores em subestação elétrica monitorados por câmera com detecção de EPI",
        desc: "Monitora o uso de EPIs em áreas energizadas e alerta a equipe no primeiro desvio — cada ocorrência sai com imagem, câmera e horário.",
      },
      {
        cam: "CAM-02",
        title: "Empilhadeira + zona vermelha",
        statusLabel: "Alerta",
        statusTone: "alert",
        sector: "galpão logístico",
        img: "/landing/empilhadeira.jpeg",
        alt: "Pessoa em zona de risco próxima à movimentação de empilhadeira em galpão",
        desc: "Acompanha máquinas e pessoas na zona de risco. Quando a distância fica curta, o alerta dispara.",
      },
      {
        cam: "CAM-03",
        title: "Fogo e fumaça",
        statusLabel: "Alerta",
        statusTone: "alert",
        sector: "indoor & outdoor",
        imgs: [
          {
            src: "/landing/fogo-outdoor.jpeg",
            alt: "Princípio de incêndio em área urbana aberta detectado por câmera com IA",
            label: "Outdoor",
          },
          {
            src: "/landing/fogo-indoor.jpeg",
            alt: "Princípio de incêndio em ambiente interno detectado por câmera com IA",
            label: "Indoor",
          },
        ],
        desc: "Reconhece fumaça e chama em segundos — em áreas internas ou externas — e manda o alerta com o ponto exato.",
      },
    ],
  },
  {
    label: "Produtividade",
    title: "O ritmo real da operação, sem apontamento manual.",
    cases: [
      {
        cam: "CAM-04",
        title: "Contagem e permanência",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "indústria de alimentos",
        img: "/landing/contagem-alimentos.jpeg",
        alt: "Colaboradores em linha de processamento de alimentos com contagem automática de pessoas",
        desc: "Conta pessoas, mede permanência em cada etapa e aponta quando o fluxo foge do padrão.",
      },
      {
        cam: "CAM-05",
        title: "Linha de produção",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "manufatura",
        img: "/landing/tomadas.jpeg",
        alt: "Esteira de produção de tomadas elétricas com contagem automática de peças",
        desc: "Conta cada ciclo sem apontamento manual e expõe paradas e gargalos do turno.",
      },
    ],
  },
  {
    label: "Qualidade",
    title: "O padrão não muda do primeiro lote ao último.",
    cases: [
      {
        cam: "CAM-06",
        title: "Seleção de castanhas",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "agroindústria",
        img: "/landing/castanhas.jpeg",
        alt: "Mãos selecionando castanhas em mesa de classificação com detecção de grau e defeito",
        desc: "Classifica por grau e defeito no ritmo da mesa, sem cansar.",
      },
      {
        cam: "CAM-07",
        title: "Seleção de morangos",
        statusLabel: "Ao vivo",
        statusTone: "ok",
        sector: "agroindústria",
        img: "/landing/morangos.jpeg",
        alt: "Morangos passando em esteira de seleção com classificação por maturação e defeito",
        desc: "Separa por maturação e defeito na esteira: o que segue para o cliente e o que vai para o refugo.",
      },
    ],
  },
];

function CaseRow({ item, index }: { item: CaseItem; index: number }) {
  const imageRight = index % 2 === 1;

  return (
    <div className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
      <figure className={cn(imageRight && "md:order-2")}>
        {item.imgs && item.imgs.length > 0 ? (
          <div className="space-y-4">
            {item.imgs.map((image) => (
              <div key={image.src}>
                <div className="relative aspect-video overflow-hidden rounded-[10px] border border-[var(--lk-line)]">
                  <img
                    src={`${BASE_PATH}${image.src}`}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2.5">
                  <Caption tone={item.statusTone}>
                    {item.statusLabel} · {item.cam} · {image.label}
                  </Caption>
                </div>
              </div>
            ))}
          </div>
        ) : item.img ? (
          <>
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
          </>
        ) : null}
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
    <section id="cases" className="lk-hairline scroll-mt-24 py-24 md:py-32">
      <div className="lk-container">
        <Reveal>
          <p className="lk-eyebrow mb-4">Seção 01 · Cases</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="lk-display max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              Cases validados
            </h2>
            <Caption>07 canais · 03 frentes</Caption>
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
