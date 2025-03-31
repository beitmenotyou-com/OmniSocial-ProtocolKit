---
theme: jekyll-theme-slate
title: Installation Guide
permalink: /installation-guide/
---

# 🛠️ Installation Guide for OmniSocial ProtocolKit

This guide walks you through installing and deploying OmniSocial ProtocolKit — whether you’re running it locally for development or deploying a full production instance.

---

## 🧩 Prerequisites

Before you begin, make sure you have:

- [Docker](https://www.docker.com/) (v20+ recommended)
- [Git](https://git-scm.com/)
- A Linux/macOS/WSL environment
- (Optional) A registered domain name for self-hosted deployment

---

## 🚀 Quick Local Setup

Clone the repository and start the stack using Docker Compose:

```bash
git clone https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit.git
cd OmniSocial-ProtocolKit
docker-compose up
```

By default, this will:
- Start the protocol core
- Launch the feed aggregator
- Spin up Matrix homeserver (for messaging)
- Enable Nostr and ActivityPub modules
- Run the Lightning integration

Visit `http://localhost:3000` to view the app.

---

## 🔧 Configuration (.env File)

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

Edit `.env` and set:
- `DOMAIN=yourdomain.com`
- `ENABLED_PROTOCOLS=activitypub,nostr,matrix`
- `LIGHTNING_PROVIDER=btcpay` (or `alby`, `lnbits`)
- Database connection info if needed

Refer to the [Environment Variable Reference](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/.env-Reference).

---

## 🧪 Development Tips

- Use `docker-compose logs -f` to debug services
- Code changes are hot-reloaded for frontend and API
- Test each protocol module individually with mock clients

---

## 🚀 Production Deployment

You can deploy OmniSocial on your VPS or cloud provider.

### Recommended Stack:
- Docker + Docker Compose
- NGINX (as a reverse proxy)
- Certbot (for HTTPS)
- PostgreSQL (for persistent data)
- BTCPay Server or Alby (for Lightning)

### Sample NGINX Reverse Proxy
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

Then run Certbot:
```bash
sudo certbot --nginx -d yourdomain.com
```

---

## 📡 Enabling Protocols

In `.env`:
```dotenv
ENABLED_PROTOCOLS=activitypub,nostr,atproto,matrix
```

- `activitypub` → Federation with Mastodon, PeerTube
- `nostr` → Real-time event propagation
- `atproto` → Connect to Bluesky
- `matrix` → Encrypted messaging

Each module can be toggled independently.

---

## 🧱 Storage Options

OmniSocial supports multiple storage backends:
- `STORAGE=ipfs` → Store content on IPFS
- `STORAGE=arweave` → Permanent archiving
- `STORAGE=solid` → User-controlled Solid pods
- `STORAGE=local` → Default SQLite/PostgreSQL

More info in the [Storage Docs](/decentralized-storage/).

---

## 🔐 Authentication & Identity

OmniSocial generates:
- A DID (Decentralized Identifier)
- A Webfinger-compatible `@user@domain` identity
- Nostr public/private keypair
- Matrix username and access token

You can customize identity logic via the `identity/` plugin folder.

---

## 🧠 Next Steps

- [Getting Started](/getting-started/)
- [Core Concepts](/core-concepts/)
- [Governance Model](/governance-model/)
- [Plugin System](/plugins--extensibility/)

---

Happy hosting. Stay sovereign. ✊
