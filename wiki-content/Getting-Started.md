# 🚀 Getting Started with OmniSocial Hub

Welcome to the **OmniSocial Hub** — a modular, protocol-agnostic framework for building decentralized social media platforms.

This guide walks you through the basic setup and how to run OmniSocial Hub locally using Node.js or Docker.

---

## 🧱 Requirements

### Option 1: Node.js
- [Node.js](https://nodejs.org/) v18 or later
- npm or yarn

### Option 2: Docker
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

## 📦 Installation (Node.js)

```bash
git clone https://github.com/beitmenotyou-com/omnisocial-hub.git
cd omnisocial-hub
npm install
```

---

## ▶️ Run in Dev Mode

```bash
npm run dev
```

Visit:

- Swagger UI: http://localhost:3000/api-docs
- API Gateway: http://localhost:3000

---

## 🐳 Run with Docker

```bash
docker-compose up --build
```

---

## 🧪 Test API Locally

Open your browser:

```
http://localhost:3000/api-docs
```

You can interact with all available endpoints from Swagger UI.

---

## 🛠 Developer Notes

- Main source code lives in `/src`
- Each protocol plugin is inside `/plugins`
- Configuration uses `.env` files (see `.env.example`)

---

## 🤝 Need Help?

- [Support Info](https://github.com/beitmenotyou-com/omnisocial-hub/blob/main/SUPPORT.md)
- [GitHub Discussions](https://github.com/beitmenotyou-com/omnisocial-hub/discussions)
- [Revolt Chat](https://rvlt.gg/vxTxbvth)
