---
theme: jekyll-theme-slate
title: Identity Layer
permalink: /identity-layer/
---

# 🪪 Identity Layer

OmniSocial ProtocolKit uses a unified identity system that allows users to authenticate, interact, and federate across multiple decentralized protocols — without relying on centralized logins or OAuth.

At the heart of this system is **BridgeID**, a unifying abstraction layer that links identities from different protocols into one sovereign handle.

---

## 🔑 Core Identity Components

### 🧩 BridgeID

BridgeID is the internal system that maps multiple identities to a single user profile.

Each OmniSocial user is assigned:
- A Webfinger-compatible handle: `@username@domain`
- A DID (Decentralized Identifier)
- A Nostr keypair (public/private key)
- A Matrix ID (`@user:yourdomain`)
- Optional Lightning address (`user@domain`) for tipping

These are stored, managed, and exposed securely within the platform and linked via BridgeID.

---

## 🌐 Webfinger

Webfinger enables federated discovery of a user's identity using:
```
GET /.well-known/webfinger?resource=acct:username@domain
```
It allows ActivityPub, IndieWeb, and other protocols to locate and validate user handles across instances.

OmniSocial includes a built-in Webfinger resolver and also publishes public keys for cryptographic identity validation.

---

## 🧬 Decentralized Identifiers (DIDs)

Each user is assigned a DID (e.g., `did:key:z6Mk...`) that acts as their portable, self-owned identifier.

DIDs enable:
- Cross-platform identity persistence
- Key rotation and recovery
- Integration with DIDComm, Verifiable Credentials (future support planned)

🔗 Learn more: [W3C DID Spec](https://www.w3.org/TR/did-core/)

---

## 🔐 Nostr Keys

Nostr uses a simple but powerful key-based system:
- Private key = login + signing authority
- Public key = identity handle (hex)

OmniSocial automatically generates and stores these keys securely during profile creation, unless imported manually.

---

## 💬 Matrix IDs

Each user receives a Matrix-compatible ID to enable federated messaging:
- Format: `@username:yourdomain`
- Synced with BridgeID so users can DM using a single handle across protocols
- Supports encrypted chats, bridges, bots, and rooms

---

## ⚡ Lightning Identity (Optional)

If enabled, users also receive a Lightning-compatible handle:
- Format: `username@yourdomain.com`
- Supports tipping, pay-to-DM, paywalls
- Works with Alby, Strike, Phoenix, etc.

---

## 🛡️ Privacy & Sovereignty

- No identity data is sent to third parties
- All identifiers are generated and stored locally unless federated
- You control your keys, login methods, and federation rules
- Admins can enforce verification, reputation, or anonymous modes

---

## 🔧 Identity Customization

Developers can override identity generation and mapping via:
- `identity/bridge.ts` – BridgeID core logic
- `identity/generators/` – DID, Matrix, Nostr key handlers
- `auth/` – login and access token flows

---

## 📚 Next Steps
- [Installation Guide](./installation-guide/)
- [Supported Protocols](./supported-protocols/)
- [Monetization with Lightning](./monetization-with-lightning/)

---

OmniSocial gives every user a passport to the decentralized web — portable, private, and protocol-native.
