# Getting Started with OmniSocial Hub

Welcome to the **OmniSocial Hub**! This guide will help you set up the project, understand its structure, and start building or contributing.

> **Note:** OmniSocial Hub is a modular, protocol-agnostic framework designed to integrate multiple decentralized social media protocols (like ActivityPub, AT Protocol, Nostr) via a unified API Gateway. Built by the Circuitry Hub Insights Collective.

---

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `v20.x` or higher
- **pnpm** `v8.x` (preferred over npm)
- **PostgreSQL** `v14+` with `pgvector`
- **Redis** `v7+` with JSON support
- **Docker** & **Docker Compose** (for containerized development)

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/beitmenotyou-com/omnisocial-hub.git
cd omnisocial-hub
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Setup Environment
```bash
cp .env.example .env
nano .env  # Set your local DB/Redis credentials
```

### 4. Database Migrations
```bash
pnpm migrate:up
```

### 5. Start the Development Server
```bash
pnpm dev
```
Visit: `http://localhost:3000/api-docs` to view Swagger UI.

---

## 🐳 Docker Setup (Optional)

```bash
docker-compose -f docker-compose.dev.yml up --build
```

---

## 📘 Explore the API
Once the server is running, explore all available routes using Swagger UI:
```url
http://localhost:3000/api-docs
```

---

## 🧱 Project Structure
- `/src/gateway/` – Express API endpoints
- `/src/protocols/` – ActivityPub, Nostr, AT Protocol modules
- `/src/utils/` – Helper functions
- `/scripts/` – Dev tools and sync scripts
- `/docs/` – Developer documentation

---

## ✅ Next Steps
- Read the [Tech Stack](tech-stack.md)
- Understand the [API Gateway](api-gateway.md)
- Submit ideas via [Proposals](../proposals/submit.md)
- Join the community via [Revolt](https://rvlt.gg/vxTxbvth)

---

> Made with 💜 by the Circuitry Hub Insights Collective

