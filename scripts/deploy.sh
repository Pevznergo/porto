#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -d node_modules ]; then
  npm install
fi

npm run build

if [ -n "${VERCEL_TOKEN:-}" ]; then
  npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
  exit 0
fi

if [ -n "${NETLIFY_AUTH_TOKEN:-}" ] && [ -n "${NETLIFY_SITE_ID:-}" ]; then
  npx netlify deploy --prod --dir=out --site "$NETLIFY_SITE_ID" --auth "$NETLIFY_AUTH_TOKEN"
  exit 0
fi

cat <<'MSG'
Build complete. Static export is in ./out.

To deploy automatically, set one of:
  VERCEL_TOKEN=... npm run deploy
  NETLIFY_AUTH_TOKEN=... NETLIFY_SITE_ID=... npm run deploy
MSG
