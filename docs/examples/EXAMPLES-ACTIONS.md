# 🧪 OmniSocial Hub Examples Directory

This document outlines the plan to add an `examples/` directory containing sample apps and minimal implementations to demonstrate OmniSocial Hub’s protocol bridging capabilities.

---

## 📁 Directory Structure

The `examples/` folder will include independent, runnable apps that demonstrate:

- Federation across protocols
- Client API usage
- Custom deployment scenarios

### Example Layout

```
examples/
├── README.md
├── microblog/
│   ├── README.md
│   ├── app.ts
│   ├── routes/
│   └── package.json
├── dashboard/
│   ├── README.md
│   ├── ui/
│   └── server.js
└── nostr-bot/
    ├── README.md
    ├── bot.ts
    └── config.json
```

---

## 🔍 Example Descriptions

### 1. 📝 Microblog

A minimal federated blogging engine using ActivityPub & Nostr.

- Publish posts with mentions
- Serve `/actor` and `/inbox` routes
- Display posts in a local timeline

### 2. 📊 Dashboard

React dashboard using OmniSocial API to visualize:

- Cross-protocol posts
- Live federation status
- Basic post explorer/search

### 3. 🤖 Nostr Bot

Command-line bot that:

- Connects to Nostr relays
- Posts messages on interval
- Listens for DMs with `/commands`

---

## 🛠 Setup Instructions

Each subdirectory has its own:

- `README.md` – Setup & usage instructions
- `package.json` – For npm/yarn installs
- Optional Dockerfiles or `.env.example`

---

## 📚 How to Use in Docs

- Link from `docs/examples/README.md`
- Add “Live Examples” section to homepage
- Provide contributors with templates to add more

---

## 🚧 Contribution Guidelines

To add an example:

1. Fork the repo
2. Copy `examples/template/`
3. Follow format, include clear `README.md`
4. Submit PR to `examples/` folder

---

## 🧩 Related Files

- `API-GATEWAY.md`
- `GETTING-STARTED.md`
- `PROTOCOLS/` documentation

