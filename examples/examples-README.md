# 🧪 OmniSocial ProtocolKit Examples

This directory contains working, minimal sample applications that demonstrate how to use OmniSocial ProtocolKit to build decentralized, federated social experiences.

---

## 📂 Contents

### `microblog/`
A minimal ActivityPub + Nostr powered blog engine:
- Federated status posts
- Public actor route and inbox
- JSON API using Express

### `dashboard/`
React-based admin dashboard:
- Displays real-time activity feed
- Fetches federated posts from OmniSocial API
- Lightweight, no backend logic

### `nostr-bot/`
Simple CLI Nostr bot:
- Connects to public relays
- Periodically sends test events
- Receives and logs mentions

---

## 🚀 How to Use

Each subdirectory contains:
- `README.md` – Instructions
- `package.json` – Install dependencies
- Optional: `Dockerfile`, `.env.example`

```bash
cd examples/microblog
npm install
npm run dev
```

---

## 🤝 Contributing Examples

Want to add your own?

1. Fork the repo
2. Copy `examples/template/`
3. Add your example app
4. Include README.md and testable routes
5. Open a pull request!

---

## 📚 Learn More

- [OmniSocial Protocols](../docs/protocols/)
- [API Gateway](../docs/api/api-gateway.md)
- [Getting Started](../docs/getting-started.md)
