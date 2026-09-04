# SWK Vision Solutions — Landing Page

Landing page estática da SWK Vision Solutions. Next.js com export estático,
hospedada no GitHub Pages.

## Deploy

1. Crie o repositório `swk-landing` no GitHub (público) e aponte este repo
   local para ele:
   ```bash
   git remote add origin git@github.com:gustavogurg/swk-landing.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` faz o resto a cada push em `main`.
4. Site publicado em `https://gustavogurg.github.io/swk-landing`.

Para trocar o subcaminho (ex.: domínio próprio na raiz), ajuste
`NEXT_PUBLIC_BASE_PATH` no workflow e em `next.config.mjs`.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Sincronizar de volta para o projeto completo

Quando a landing estiver pronta, copie-a de volta para o `swk-vercel`
(projeto completo da plataforma) com:

```bash
./sync-back.sh
```

O script copia componentes, CSS e assets para os caminhos correspondentes do
repositório irmão `../swk-vercel`.

## Aviso

- O número do WhatsApp nos CTAs é um placeholder (`config.ts` → `WHATSAPP_URL`).
- A apresentação do fundador em `About.tsx` é um placeholder a substituir.
