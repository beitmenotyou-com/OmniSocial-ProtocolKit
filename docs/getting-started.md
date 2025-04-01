---
theme: jekyll-theme-slate
title: Getting Started
permalink: /getting-started/
---

# 🚀 Getting Started with OmniSocial ProtocolKit

Welcome to the OmniSocial ProtocolKit — your launchpad into building sovereign, federated, censorship-resistant social platforms. This guide walks you through everything you need to get up and running.

---

## 🧩 What You’ll Need

- **Docker** (v20+ recommended)
- **Git**
- **Linux/macOS/WSL** (or a compatible server/VM)
- Optional: **Domain Name** for self-hosting

---

## ⚙️ Quickstart Installation

Clone the repository and spin it up locally using Docker Compose:

```bash
git clone https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit.git
cd OmniSocial-ProtocolKit
docker-compose up
```

This will:
- Pull required containers
- Set up protocol modules (ActivityPub, Nostr, etc.)
- Start the Matrix messaging layer
- Launch the Lightning Gateway

Visit `http://localhost:3000` to view the running instance.

---

## 🛠 Configuration

Edit the `.env` file to configure:
- Your domain name
- Enabled protocols (ActivityPub, ATProto, Nostr...)
- Matrix server options
- Lightning settings (BTCPay or LNbits)
- Storage method (IPFS, Arweave, local DB)

See the [`.env Reference Guide`](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/.env-Reference).

---

## 🌐 Custom Domains & HTTPS

To use your own domain:
1. Point your domain’s A/CNAME records to your server IP.
2. Update the `DOMAIN=` variable in `.env`
3. Use a reverse proxy (e.g., NGINX with Let's Encrypt) for HTTPS

---

## 🧪 Test Protocol Federation

Once installed:
- Try posting and viewing from Nostr or Mastodon
- DM users via Matrix
- Use your `@username@domain` identity to test Webfinger + DIDs
- Tip a post via Lightning

---

## 🧱 Extend with Plugins

You can enable or build plugins for:
- Secure Scuttlebutt
- RSS syndication
- Moderation tools
- Custom protocol bridges

More on [Plugins & Extensibility](../#plugins--extensibility)

---

## 🤝 Need Help?
- Join our [Revolt Server](https://rvlt.gg/xFyQycWs)
- Open an [issue on GitHub](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/issues)

---

Built for freedom. Forked for sovereignty. 🌱
