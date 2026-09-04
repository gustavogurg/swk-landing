#!/usr/bin/env bash
set -euo pipefail

# Copia a landing de volta para o projeto completo (swk-vercel).
SRC="$(cd "$(dirname "$0")" && pwd)"
DST="${SWK_FULL:-$SRC/../swk-vercel}"

if [ ! -d "$DST" ]; then
  echo "Erro: destino não encontrado em $DST" >&2
  echo "Defina SWK_FULL=/caminho/para/swk-vercel e tente de novo." >&2
  exit 1
fi

echo "Sincronizando landing para: $DST"

cp -r "$SRC/src/components/landing/." "$DST/src/components/landing/"
cp "$SRC/src/app/landing.css" "$DST/src/app/(landing)/landing.css"
cp "$SRC/src/app/page.tsx" "$DST/src/app/(landing)/page.tsx"
cp -r "$SRC/public/landing/." "$DST/public/landing/"

echo "Pronto. Revalide o projeto completo com: npm run lint && npm run build"
