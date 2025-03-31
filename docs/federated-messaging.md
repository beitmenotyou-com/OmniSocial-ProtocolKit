---
theme: jekyll-theme-slate
title: Federated Messaging
permalink: /federated-messaging/
---

# 💬 Federated Messaging

OmniSocial ProtocolKit includes secure, decentralized messaging powered by [Matrix](https://matrix.org), giving your community encrypted 1:1 and group chat without relying on centralized platforms.

Every instance includes its own messaging layer that federates with other Matrix servers, while tightly integrating with the identity system via BridgeID.

---

## 🧩 Why Matrix?

Matrix is a mature, federated messaging protocol with:
- End-to-end encryption (E2EE)
- Bridging to Discord, Slack, Telegram, etc.
- Group chats, DMs, file sharing, voice/video
- Active ecosystem (Element, Cinny, FluffyChat)

By using Matrix, OmniSocial enables real-time, private, federated conversations between users — with no lock-in.

---

## 🧪 Features

- **E2EE Messaging** – Fully encrypted by default using Matrix’s Olm/Megolm libraries
- **Group & Public Rooms** – Communities can create topic-based rooms
- **Self-Hosted** – Run your own Matrix homeserver for sovereignty
- **Unified Handle** – Matrix ID is linked to your `@username@domain` identity
- **Embedded Client** – Use Element Web or other clients directly in your instance
- **Bot Support** – Automate moderation, welcome messages, or cross-posting

---

## 🛠️ Matrix Setup

OmniSocial installs a Matrix homeserver as part of the Docker stack (default: Synapse). It automatically:
- Registers a local `@user:yourdomain` for each new profile
- Sets up E2EE for all DMs
- Enables federation with other Matrix instances

You can also connect your instance to an existing homeserver if preferred.

---

## 📱 Clients

OmniSocial supports any Matrix-compatible client:

- **Web**: [Element Web](https://app.element.io)
- **Mobile**: Element (iOS/Android), FluffyChat, SchildiChat
- **Lightweight**: Cinny, Hydrogen

Optionally embed Element Web within OmniSocial to give users built-in access to chat.

---

## 📦 Messaging + Protocols

Federated chat can complement your social features:

- Link discussions to specific posts or topics
- Enable community moderation through chat channels
- Bridge Matrix channels to Nostr or ATProto using bots or relays (optional)

---

## 🔐 Security & Moderation

- OmniSocial instances can configure room policies and access controls
- Admins can ban, mute, or restrict users from rooms
- All messages are encrypted client-side and not accessible to the server admin

---

## ⚙️ Configuration

Key environment variables:
```dotenv
MATRIX_DOMAIN=yourdomain.com
MATRIX_ENABLE_EMBED=true
MATRIX_EXTERNAL_SERVER_URL=https://matrix.yourdomain.com
```

See [Install Guide](./installation-guide/) and `.env` reference for full setup.

---

## 🤝 Real-World Use Case

> A freedom tech collective uses OmniSocial to run a federated discussion platform. Each topic has a dedicated Matrix room. Their devs use Element for encrypted collaboration, while members access chat through the website without installing anything.

---

## 🔗 Related Docs
- [Identity Layer](./identity-layer/)
- [Supported Protocols](./supported-protocols/)
- [Governance Model](./governance-model/)

---

Secure chat for a federated future — powered by Matrix. 🛡️
