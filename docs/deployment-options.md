# ☁️ Deployment Options: Docker, Vercel & Render

OmniSocial Hub supports multiple flexible deployment options, whether you're running locally, in the cloud, or containerized.

---

## 🐳 Option 1: Docker (Local or Cloud)

### Build and Run Locally

```bash
docker build -t omnisocial-hub .
docker run -p 4000:4000 omnisocial-hub
```

> Visit the app at: [http://localhost:4000](http://localhost:4000)

### Use in CI/CD

Include the Dockerfile in any CI pipeline (GitHub Actions included) for reproducible builds.

---

## ▲ Option 2: Vercel (Serverless)

Deploy the documentation or stubbed API routes (with edge functions).

### One-Click Deploy

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/beitmenotyou-com/omnisocial-hub)

### How It Works

- Deploys static `/docs` content
- Can run lightweight Express functions via Vercel serverless config
- Great for the GitHub Pages alternative

---

## ☁️ Option 3: Render (Full Backend + Static)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/beitmenotyou-com/omnisocial-hub)

### Features

- Auto-detects Express project
- Installs, builds, and runs server on port `4000`
- Can connect to PostgreSQL, Redis, custom domains

---

## 📝 Recommended Use Cases

| Platform | Use If You Need…                             |
|----------|----------------------------------------------|
| **Docker** | Full control, local dev, VPS deployment     |
| **Vercel** | Fast docs hosting, edge functions, preview  |
| **Render** | Long-running API, staging, demo hosting     |

---

## 💡 Bonus

- Include `.env.example` for easy environment setup
- Use GitHub Actions to build Docker or trigger Render/Vercel deploys

---

## 📎 Related Docs

- [CI/CD Pipeline](./github-actions-ci-cd.html)
- [Tech Stack](./tech-stack.html)
- [Getting Started](./getting-started.html)

---

Choose the freedom stack that works for you.
