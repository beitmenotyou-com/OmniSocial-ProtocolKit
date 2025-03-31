---
theme: jekyll-theme-slate
title: Decentralized Storage
permalink: /decentralized-storage/
---

# 🗂️ Decentralized Storage

OmniSocial ProtocolKit gives communities and users full control over where and how their content is stored. You’re not locked into a single backend or cloud provider — instead, you can choose between several decentralized and self-hosted options.

This ensures censorship resistance, long-term preservation, and data sovereignty.

---

## 🔌 Supported Storage Backends

You can configure OmniSocial to use one or more of the following storage options:

### 🟣 IPFS (InterPlanetary File System)
- **Type:** Distributed, content-addressable
- **Best for:** Media, posts, attachments
- **Censorship-resistant** and fast file distribution
- Easily integrates with services like Pinata or local IPFS nodes

### 🔴 Arweave
- **Type:** Permanent, blockchain-based storage
- **Best for:** Long-term archiving and immutability
- One-time payment model for indefinite storage
- Public access to permanent data

### 🟢 Solid (Self-Owned Pods)
- **Type:** Personal, user-controlled storage pods
- **Best for:** Projects focused on data ownership and privacy
- Integrates with the Solid protocol and Inrupt pods
- Enables fine-grained data sharing permissions

### ⚫ Local / Traditional DB
- **Type:** Centralized (SQLite, PostgreSQL)
- **Best for:** Simpler setups, testing, metadata storage
- Ideal for hybrid deployments with file pointers to decentralized storage

---

## ⚙️ Configuration

Edit your `.env` to select a storage backend:
```dotenv
STORAGE_BACKEND=ipfs   # or arweave, solid, local
```

Or use a hybrid setup by enabling multiple drivers in `config/storage.json`:
```json
{
  "primary": "ipfs",
  "fallback": ["local", "arweave"]
}
```

---

## 📁 What Gets Stored?

Depending on your setup, OmniSocial can store:
- Posts (JSON)
- Media uploads (images, videos, attachments)
- Profiles and metadata (bio, avatar)
- Encrypted chat archives (Matrix-compatible)

---

## 🔐 Privacy & Encryption

- All user data is stored based on your instance’s privacy rules
- Content can be encrypted client-side before upload (optional)
- Storage keys, URLs, and hashes are tracked in the local DB

---

## 🔁 Storage + Federation

Federated protocols reference decentralized storage as needed:
- ActivityPub links to IPFS or Arweave URLs
- Nostr events can include content-addressed hashes
- Matrix media is optionally stored off-server via IPFS bridge

---

## 🧠 Use Case Example

> A collective of digital archivists uses OmniSocial with Arweave for posts and IPFS for media. This ensures posts are stored permanently while keeping file access fast and redundant — no centralized host required.

---

## 🔗 Related Docs
- [Installation Guide](./installation-guide/)
- [Plugins & Extensibility](./plugins--extensibility/)
- [Architecture Overview](./architecture-overview/)

---

Choose where your content lives — forever, privately, or both. 🛡️
