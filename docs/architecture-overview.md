---
theme: jekyll-theme-slate
title: Architecture Overview
permalink: /architecture-overview/
---

# 🏗️ Architecture Overview

OmniSocial ProtocolKit is designed with modularity, federation, and extensibility at its core. Here's a high-level overview of how the system is structured.

---

## 🔧 Core Components

### 1. **Protocol Engine**
The brain of OmniSocial. It manages:
- Plugin lifecycle (install/enable/disable)
- Message routing between modules
- Identity abstraction via BridgeID

### 2. **Protocol Modules**
Adapters that handle federation with specific protocols:
- `activitypub/` – for Mastodon, PeerTube
- `nostr/` – for Nostr relays
- `atproto/` – for Bluesky
- `matrix/` – for encrypted messaging
- `indieweb/` – Webmention + Micropub

Each module conforms to a shared interface and can be swapped in/out.

### 3. **Feed Aggregator**
Pulls, normalizes, and merges content from all federated networks into a unified timeline. Provides filters, pagination, and post translation between protocols.

### 4. **Lightning Gateway**
Integrates Bitcoin Lightning payments:
- LNURL-pay for pay-to-comment
- Zaps/tips with Alby or BTCPay
- Paywalls for premium content

Uses the `lightning/` plugin.

### 5. **Matrix Layer**
Federated messaging layer powered by Matrix:
- Includes a homeserver (e.g. Synapse or Dendrite)
- User handles linked via BridgeID
- Optional Element Web embedded client

### 6. **Storage Layer**
Pluggable backend for media, metadata, and logs:
- `ipfs/` – Decentralized, content-addressable
- `arweave/` – Permanent, censorship-resistant
- `solid/` – User-controlled data pods
- `local/` – Traditional RDBMS (SQLite/PostgreSQL)

### 7. **Admin & API Gateway**
Exposes:
- REST + GraphQL APIs
- Admin dashboard (WIP)
- Webhooks for federation events

---

## 🧱 Layered Architecture

```
┌──────────────────────────────────────────────────┐
│                  Web UI / CLI                    │
├──────────────────────────────────────────────────┤
│           REST / GraphQL API Gateway            │
├──────────────────────────────────────────────────┤
│             Core Protocol Engine                │
├──────────────────────────────────────────────────┤
│    Plugins: ActivityPub, Nostr, Matrix, etc.     │
├──────────────────────────────────────────────────┤
│          Feed Aggregator + BridgeID             │
├──────────────────────────────────────────────────┤
│        Lightning Gateway + Messaging Layer       │
├──────────────────────────────────────────────────┤
│            Storage: IPFS / DB / Arweave          │
└──────────────────────────────────────────────────┘
```

---

## 🔁 Event Lifecycle (Post Example)

1. **User creates post**
2. **Post normalized** into canonical format
3. **Distributed** to all enabled protocol modules
4. **Stored** in preferred backend (e.g. IPFS + local DB)
5. **Visible** on unified feed + protocol-specific views

---

## 🔐 Identity Lifecycle

1. New user signs up
2. OmniSocial creates:
   - DID
   - Nostr keypair
   - Matrix ID
   - `@user@domain` (Webfinger-compatible)
3. All identities are unified via BridgeID

---

## ⚡ Extending the Architecture

Developers can:
- Add new protocol modules (e.g. Secure Scuttlebutt)
- Create new storage drivers
- Write moderation plugins
- Extend the web UI

See the [Plugin System](./plugins--extensibility/) for details.

---

## 📖 Next Steps
- [Installation Guide](./installation-guide/)
- [Core Concepts](./core-concepts/)
- [Governance Model](./governance-model/)

For deeper dives, check the [GitHub Wiki »](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Architecture)

---

Built for builders. Modular by design. 🧩
