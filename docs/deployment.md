# 🚀 Deployment Options

OmniSocial ProtocolKit is designed to support flexible deployment across development, production, and cloud environments.

You can deploy OmniSocial ProtocolKit via:
- 🐳 Docker (for containers)
- ⚡ Node.js (for local dev or traditional servers)
- ☁️ Render or Vercel (for managed deployments)
- 📝 GitHub Pages (for the documentation website)

---

## 🧪 Local Development

### Requirements
- Node.js 20+
- PostgreSQL 14+
- Redis 7+

```bash
git clone https://github.com/beitmenotyou-com/omnisocial-hub.git
cd omnisocial-hub
pnpm install
cp .env.example .env
# Edit .env with DB credentials
pnpm migrate:up
pnpm dev
```

Access API docs at: `http://localhost:3000/api-docs`

---

## 🐳 Docker Compose (Dev + Prod)

Spin up API + DB + Redis:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

Or production:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## ☁️ Render Deployment (CI/CD)

Render uses a `render.yaml` or CI script to deploy container-based apps.
- `render-deploy.sh` automates this.
- GitHub Actions workflow: `.github/workflows/render-deploy.yml`

Configure:
- `POSTGRES_URL` / `REDIS_URL` secrets in Render Dashboard
- Add service under Docker tab with GitHub link

---

## ⚙️ Manual VPS (Node.js)

For traditional servers:
```bash
pnpm install
pnpm build
pm2 start dist/server.js
```
Use nginx or Caddy as a reverse proxy for HTTPS.

---

## 📝 GitHub Pages (Docs Only)

GitHub Pages builds the site from `index.md` using Jekyll Hacker theme:
```yml
# .github/workflows/gh-pages.yml
- uses: actions/jekyll-build-pages@v1
```
Make sure to enable Pages in Settings!

---

> Choose the strategy that fits your use case — from hacking locally to scaling in production.
