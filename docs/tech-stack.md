# 🛠️ OmniSocial ProtocolKit Tech Stack

OmniSocial ProtocolKit combines modern backend tooling, decentralized identity standards, and federated protocols to deliver a scalable, flexible, and developer-friendly framework.

---

## ⚙️ Core Stack

| Layer                 | Technology       | Purpose |
|----------------------|------------------|---------|
| Language             | **TypeScript**   | Safe, typed JS development |
| Runtime              | **Node.js 20+**  | Backend execution environment |
| Package Manager      | **pnpm**         | Faster and more efficient dependency handling |
| Web Server/API       | **Express.js**   | REST API gateway |
| Containerization     | **Docker**       | Deployment portability |
| CI/CD                | **GitHub Actions** | Automated tests, deployment, versioning |
| Documentation        | **Swagger UI**   | Interactive API exploration with OpenAPI spec |

---

## 🌐 Protocol Support

OmniSocial ProtocolKit provides protocol modules to federate content across multiple decentralized social protocols:

| Protocol      | Module              | Description |
|---------------|---------------------|-------------|
| ActivityPub   | `/protocols/activitypub/` | Federates with Mastodon, PeerTube, etc. |
| AT Protocol   | `/protocols/atproto/`     | Supports Bluesky’s identity and repo graph |
| Nostr         | `/protocols/nostr/`       | Relays, NIP support, pubkey-authenticated feeds |
| Webfinger     | `/protocols/webfinger/`   | Identity discovery and resolution |
| DIDs          | `/protocols/did/`         | Self-sovereign identity using W3C standards |

---

## 🧱 Database & Infra

| Tool         | Use |
|--------------|-----|
| PostgreSQL   | Primary relational database |
| pgvector     | Semantic search and embedding support |
| Redis        | Caching, queuing, and event propagation |
| IPFS (Planned) | Decentralized content storage |

---

## 🧪 Testing & Dev Utilities

| Tool               | Use |
|--------------------|-----|
| Jest (Planned)     | Unit/integration tests |
| Bun                | Ultra-fast dev tooling (optional) |
| `generate_contributors.py` | Auto-sync contributor stats from GitHub API |

---

## 🌐 Dev Experience

- **Swagger UI**: Visit `/api-docs` to explore routes
- **Live reload**: `pnpm dev` watches for code changes
- **Modular design**: Easily add your own protocol plugin

---

> This stack is community-driven and evolves based on developer needs and ecosystem trends.

