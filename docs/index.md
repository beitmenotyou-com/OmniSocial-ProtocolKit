---
theme: jekyll-theme-slate
title: OmniSocial ProtocolKit Docs
description: The open-source modular starter kit for federated social platforms powered by freedom tech, cross-protocol interoperability, and Lightning monetization.
permalink: /
---

## Welcome to OmniSocial ProtocolKit

OmniSocial ProtocolKit is a modular, self-hostable toolkit for building decentralized, censorship-resistant, and federated social media platforms. It integrates cross-protocol publishing, self-sovereign identity, Lightning monetization, federated messaging, and more.

---

## 📖 Table of Contents

- [Getting Started](./getting-started)
- [Core Concepts](./core-concepts)
- [Installation Guide](./installation-guide)
- [Architecture Overview](./architecture-overview)
- [Supported Protocols](./supported-protocols)
- [Identity Layer](./identity-layer)
- [Federated Messaging](./federated-messaging)
- [Monetization with Lightning](./monetization-with-lightning)
- [Plugins & Extensibility](./plugins-extensibility)
- [Decentralized Storage](./decentralized-storage)
- [Unified Feed Engine](./unified-feed-engine)
- [Governance Model](./governance-model)
- [Contribute](./contribute)
- [FAQ](./faq)

---

## 🚀 Getting Started

Start your OmniSocial journey here.

```bash
git clone https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit.git
cd OmniSocial-ProtocolKit
docker-compose up
```

- See the [Quickstart Guide](#installation-guide)
- Explore [use cases](#core-concepts)

---

## 🧠 Core Concepts

OmniSocial is built on:

- **Cross-Protocol Publishing** – Post once, publish to ActivityPub, ATProto, Nostr, RSS, and more.
- **Self-Sovereign Identity** – Unified identity using DIDs, Webfinger, Matrix, Lightning, and Nostr.
- **Federated Messaging** – Encrypted Matrix-based DMs and group chat.
- **Lightning Monetization** – Anti-spam, tipping, paywalls — all with Lightning Network.
- **Modular Plugins** – Extend with protocol modules, storage backends, moderation tools.
- **Decentralized Storage** – IPFS, Arweave, Solid support.
- **Unified Feed Engine** – Aggregates posts from all federated protocols.

---

## 🛠 Installation Guide

Deploy OmniSocial locally or to production:

### Requirements
- Docker
- Git

### Local Setup
```bash
git clone https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit.git
cd OmniSocial-ProtocolKit
docker-compose up
```

### Production
- [Docker-based Deployment Guide](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Install-Guide)
- [Environment Variables](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/.env-Reference)

---

## 🏗 Architecture Overview

OmniSocial is built on modular, interoperable components:

- **Core Engine** – Handles routing, identity, plugin management.
- **Protocol Modules** – Connect to ActivityPub, ATProto, Nostr, etc.
- **Feed Aggregator** – Normalizes posts from all connected networks.
- **Messaging Layer** – Matrix integration for E2EE chat.
- **Lightning Layer** – Lightning authentication and payments.
- **Storage Drivers** – IPFS, Arweave, or local DBs.

See the [System Diagram](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Architecture).

---

## 🌐 Supported Protocols

OmniSocial supports:
- ActivityPub (Mastodon, PeerTube)
- AT Protocol (Bluesky)
- Nostr
- Matrix (for messaging)
- RSS (read-only)
- IndieWeb (Micropub, Webmention)
- Webfinger, DIDs

---

## 🪪 Identity Layer

We unify identity across networks with:

- **DIDs** (Decentralized Identifiers)
- **Webfinger** (for federated discovery)
- **Nostr Keys** (automatic generation)
- **Matrix IDs**
- **BridgeID** abstraction layer

User handles follow `@username@domain` format.

---

## 💬 Federated Messaging

OmniSocial uses Matrix for encrypted direct messages and group chat.

- Self-host your own homeserver
- Embedded Element Web UI (optional)
- `@user:yourdomain` handle compatibility

---

## ⚡ Monetization with Lightning

Integrate Lightning for:

- Pay-to-comment / Pay-to-DM
- Paywalls for premium content
- Zaps / Tipping for creators
- Lightning Auth and LNURL-pay

Uses Alby or BTCPay + LND. Learn more in [Lightning Docs](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Lightning).

---

## 🔌 Plugins & Extensibility

OmniSocial is fully modular:

- Add protocol adapters (e.g. Secure Scuttlebutt)
- Extend moderation tools
- Add new storage backends
- Build custom UI components

Plugin registry coming soon.

---

## 🗂 Decentralized Storage

Users and communities choose where to store content:

- **IPFS** – Content-addressable media
- **Arweave** – Permanent archiving
- **Solid Pods** – For user-controlled data
- **Custom DBs** – SQLite/PostgreSQL supported

---

## 🧵 Unified Feed Engine

OmniSocial unifies posts across:

- Mastodon
- Bluesky
- Nostr
- RSS
- Custom protocols

See and interact with all content in one normalized timeline.

---

## 🗳 Governance Model

Community-driven governance through:

- Transparent decision-making
- Open proposal process
- Revolt server discussions
- Voting on new features/modules

[Join the community](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Governance).

---

## 🛣 Roadmap

Upcoming features:

- Plugin Marketplace
- Secure Scuttlebutt Integration
- Mobile SDKs
- GraphQL API Gateway
- Matrix Voice/Video Chat

Track milestones on the [GitHub Roadmap](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Roadmap).

---

## 🤝 Contribute

We welcome all contributors!

- [Contribution Guide](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Contribute)
- Report bugs or suggest features in [Issues](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/issues)
- Join our [Revolt Server](https://revolt.chat/invite/yourlink)

---

## ❓ FAQ

**Q: Is this a new social network?**  
A: No, it’s a protocol-agnostic toolkit to build decentralized networks.

**Q: Do I need to know how to code?**  
A: Not necessarily – we offer no-code and low-code options for creators and communities.

**Q: Can I self-host it?**  
A: Yes – it’s fully self-hostable via Docker.

**Q: Does it support Lightning payments?**  
A: Yes – with pay-to-comment, tipping, and paywalls via Lightning Network.

More in our [Full FAQ](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/FAQ).

---

© 2025 Circuitry Hub Insights. Built with ❤️ and freedom tech.

---

## 🔧 GitHub Pages Setup Instructions

To publish this site:

1. Create a new GitHub repository (or use existing).
2. Add the following files:

```bash
index.md       # This documentation file
_config.yml    # Jekyll config (below)
README.md      # Optional repo readme
```

3. `_config.yml` contents:

```yaml
theme: jekyll-theme-slate
title: OmniSocial ProtocolKit Docs
description: Docs for OmniSocial ProtocolKit
```

4. Push to your repo and enable GitHub Pages in the repo settings:
   - Source: `Deploy from a branch`
   - Branch: `main` or `docs`
   - Folder: `/ (root)`

5. Visit your site at `https://yourusername.github.io/repo-name`
