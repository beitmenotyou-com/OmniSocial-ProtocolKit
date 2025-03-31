---
theme: jekyll-theme-slate
title: Plugins & Extensibility
permalink: /plugins--extensibility/
---

# 🔌 Plugins & Extensibility

OmniSocial ProtocolKit is designed as a fully modular, extensible system. You can customize, fork, and enhance almost every part of the platform — from protocols to storage to moderation logic.

Whether you're a solo dev, collective, or organization, the plugin architecture makes it easy to tailor OmniSocial to your needs.

---

## 🧩 Plugin System Overview

Each feature or protocol in OmniSocial is implemented as a **plugin module**.

### Plugin Types
- **Protocol Plugins** – ActivityPub, ATProto, Nostr, Matrix
- **Storage Plugins** – IPFS, Arweave, Solid, Local DBs
- **Monetization Plugins** – Lightning adapters (Alby, BTCPay, LNbits)
- **Moderation Plugins** – Slur filters, anti-spam, ban logic
- **Custom Hooks** – Event listeners, federation bridges, bot logic

All plugins follow a consistent format with lifecycle hooks:
```ts
export function setup(config) { /* initialize plugin */ }
export function post(data) { /* handle outgoing posts */ }
export function fetch(query) { /* fetch external content */ }
```

---

## 🛠 Plugin Directory Structure

Plugins live inside the `/plugins/` directory:
```
/plugins
  ├─ activitypub/
  ├─ nostr/
  ├─ matrix/
  ├─ lightning/
  ├─ ipfs/
  ├─ moderation/
```
Each folder is self-contained, and can be enabled/disabled via `.env` and `config/plugins.json`.

---

## 🔧 Enabling/Disabling Plugins

To enable or disable a plugin, edit the environment file:
```dotenv
ENABLED_PROTOCOLS=activitypub,nostr,atproto
STORAGE_BACKEND=ipfs
LIGHTNING_PROVIDER=btcpay
```

Or modify `config/plugins.json`:
```json
{
  "activitypub": true,
  "nostr": true,
  "matrix": false,
  "lightning": "btcpay"
}
```

---

## 🧪 Create Your Own Plugin

To build a new plugin:
1. Create a folder under `/plugins/your-plugin-name`
2. Add a `plugin.ts` (or `.js`) file with standard methods:
```ts
export function setup() {}
export function post() {}
export function fetch() {}
```
3. Register it in `config/plugins.json`
4. Use `console.log` or hooks for debugging

Check out existing plugins as templates.

---

## 🧠 Plugin Use Cases

Some things you can build:
- Bridge to Secure Scuttlebutt or Farcaster
- New monetization models (e.g. fiat-to-Lightning converter)
- NLP-based moderation or reputation scoring
- Custom webhooks for notifications
- Custom GraphQL data sources

---

## 🧰 Developer Resources

- [Plugin API Reference (WIP)](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Plugin-API)
- [Architecture Overview](./architecture-overview/)
- [Monetization with Lightning](./monetization-with-lightning/)

---

## 🤝 Community Extensions

Soon, we'll launch a **Plugin Marketplace** where developers can:
- Publish their own plugins
- Browse community-built tools
- Vote on official integrations

Want to contribute? Start with the [Contribute Guide](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki/Contribute)

---

OmniSocial is built for builders — fork it, mod it, remix it. 🧬
