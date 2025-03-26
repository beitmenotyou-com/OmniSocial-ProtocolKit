# 🌐 OmniSocial Hub

![Build](https://img.shields.io/github/actions/workflow/status/beitmenotyou-com/omnisocial-hub/ci.yml?label=CI)
![License](https://img.shields.io/github/license/beitmenotyou-com/omnisocial-hub)
![GitHub issues](https://img.shields.io/github/issues/beitmenotyou-com/omnisocial-hub)
![GitHub stars](https://img.shields.io/github/stars/beitmenotyou-com/omnisocial-hub)
![Last Commit](https://img.shields.io/github/last-commit/beitmenotyou-com/omnisocial-hub)

**OmniSocial Hub** is a modular, protocol-agnostic framework for building federated social media apps — combining the power of **ActivityPub**, **AT Protocol**, **Nostr**, **Webfinger**, **DIDs**, and **IndieWeb** standards into one unified project.

> Think of it as a cross-protocol backend + proposal playground — like a decentralized Facebook starter kit.

---

## ✨ Features

- Protocol plugins (ActivityPub, AT Protocol, Nostr, Webfinger, DIDs)
- Modular Express API Gateway
- TypeScript-based with full OpenAPI + Swagger UI
- GitHub Actions CI/CD + Docker Compose deployment
- Auto-updating GitHub Wiki + Docs
- Community-driven proposals & contributor incentives

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js v18+
- npm or yarn
- Git
- Docker & Docker Compose (optional)

### 🧪 Setup Locally

Clone the repo:

```bash
git clone https://github.com/beitmenotyou-com/omnisocial-hub.git
cd omnisocial-hub
npm install
npm run dev
```

Or launch with Docker:

```bash
docker-compose up --build
```

### 🌐 Explore the API

Access Swagger UI at:

```
http://localhost:3000/api-docs
```

---

## 📚 Documentation

- [Getting Started](https://beitmenotyou-com.github.io/omnisocial-hub/getting-started.html)
- [API Gateway](https://beitmenotyou-com.github.io/omnisocial-hub/api-gateway.html)
- [Modular Protocol Support](https://beitmenotyou-com.github.io/omnisocial-hub/protocol-support.html)
- [Swagger UI Viewer](https://beitmenotyou-com.github.io/omnisocial-hub/openapi.html)
- [CI/CD & Docker](https://beitmenotyou-com.github.io/omnisocial-hub/ci-cd-docker.html)
- [Examples Directory](https://beitmenotyou-com.github.io/omnisocial-hub/examples.html)

Full Docs: https://beitmenotyou-com.github.io/omnisocial-hub/

---

## 💡 Troubleshooting

- `EADDRINUSE`? Another app is using port 3000
- Swagger not loading? Ensure `swagger-jsdoc` and `swagger-ui-express` are installed
- Docker build fails? Run `docker-compose down -v && docker-compose up --build`

---

## 🤝 Community

- [Submit a Proposal](https://github.com/beitmenotyou-com/omnisocial-hub/issues/new?template=proposal.md)
- [Accepted Proposals](https://beitmenotyou-com.github.io/omnisocial-hub/proposals-accepted.html)
- [Hall of Builders](https://beitmenotyou-com.github.io/omnisocial-hub/hall-of-builders.html)
- [Contributor Incentives](https://beitmenotyou-com.github.io/omnisocial-hub/contributor-incentives.html)
- [GitHub Discussions](https://github.com/beitmenotyou-com/omnisocial-hub/discussions)
- [Join on Revolt](#)

---

## 🛠 Utility Scripts

- `generate_contributors.py` – Auto-updates contributor list
- `render-deploy.sh` – Deploy to Render
- `github-upload.sh` – Pushes new repo
- `digest-builder.ts` – Generates weekly activity digest

---

## 📦 License

MIT © Circuitry Hub Insights Collective  
See [`LICENSE`](./LICENSE.md)
