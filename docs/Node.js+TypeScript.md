# 🧰 OmniSocial ProtocolKit Tech Stack

This project uses a modern, extensible, and federated-ready stack. Below is a breakdown of the major components and technologies involved.

---

## 🧠 Core Languages

| Tech       | Purpose                   |
|------------|---------------------------|
| **Node.js**| Server runtime environment|
| **TypeScript** | Typed superset of JavaScript |

---

## ⚙️ Backend Framework

| Tech       | Purpose                                |
|------------|----------------------------------------|
| **Express.js** | HTTP server + API routing            |
| **ts-node-dev** | Hot-reloading during development   |

---

## 📦 Package Management

| Tool       | Role                    |
|------------|-------------------------|
| **npm**    | Dependency management   |
| **dotenv** | Environment config loader |

---

## 📡 Federation Protocol Support

| Protocol      | Role                                      |
|---------------|-------------------------------------------|
| **ActivityPub** | Fediverse protocol (Mastodon, PeerTube) |
| **AT Protocol** | Bluesky-style portable identity         |
| **Nostr**       | Censorship-resistant event relays       |
| **Webfinger**   | Identity discovery via domain            |
| **DIDs**        | Decentralized Identifiers for accounts   |
| **Micropub** / **Webmention** | IndieWeb publishing & feedback |

---

## 🔐 Identity & Modularity

- DID-based universal identity system
- Modular route handling per Protocol
- File-based service layers (e.g., nostr.ts, activitypub.ts)

---

## 🔧 Dev Tools

| Tool            | Role                          |
|-----------------|-------------------------------|
| **GitHub Actions** | CI for build + type check     |
| **Docker**         | Local container deployment   |
| **Vercel / Render**| Cloud deployment options     |
| **Swagger (OpenAPI)** | API documentation         |

---

## 🖥 GitHub Pages

| Tool             | Role                           |
|------------------|--------------------------------|
| `docs/` folder   | Markdown-powered documentation |
| `_config.yml`    | Jekyll theme configuration     |
| **Slate theme**  | Clean developer-focused layout |

---

## 🧪 Project Structure

```
omnisocial-hub/
├── src/           → Express + routes + services
├── docs/          → GitHub Pages docs & guides
├── .github/       → Actions, templates, discussions
├── Dockerfile     → Container setup
├── _config.yml    → Jekyll GitHub Pages theme
```

---

## 🧑‍💻 Maintained by:

**Circuitry Hub Insights Collective**

_Promoting federated, censorship-resistant, and self-sovereign digital infrastructure._

