# 🔌 Modular Protocol Support

OmniSocial Hub is designed as a **pluggable protocol-agnostic system**. Each protocol is isolated as its own module under `/src/protocols/`, following a shared interface, enabling seamless interoperability and expansion.

---

## 🧱 Architecture

```
/src/protocols/
├── activitypub/   # W3C AP & AS2 support
├── atproto/       # Bluesky’s AT Protocol
├── nostr/         # Event relay pub/sub system
├── webfinger/     # Identifier resolution
├── did/           # DID resolution (did:web, did:key)
└── common/        # Shared logic/utilities
```

Each module handles:
- Request parsing and validation
- Identity verification
- Message formatting and signing
- Federation relay or inbox delivery

---

## 🌐 Supported Protocols

### 1. **ActivityPub**
- Format: ActivityStreams 2.0
- Inbox/Outbox model
- JSON-LD signed messages
- Compatible with Mastodon, PeerTube, Pleroma

### 2. **AT Protocol**
- Self-describing schemas via Lexicons
- Portable Personal Data Servers (PDS)
- DID:PLC identity support
- Fully integrated via `atproto.js`

### 3. **Nostr**
- NIP-01 event model
- NIP-05 identifier discovery
- Pubkey + signature for auth
- Supports relays for message propagation

### 4. **Webfinger + DIDs**
- Supports `@username@domain.tld`
- Maps to `.well-known/webfinger`
- DID support: `did:web`, `did:key`, `did:plc`
- Used across all identity mapping functions

---

## 🔧 Adding a New Protocol

Create a folder under `src/protocols/myprotocol/`:
1. Define adapters (send/receive, translate)
2. Create handler functions
3. Register in the gateway plugin loader

Shared interfaces in `/protocols/common/` ensure all modules remain pluggable.

---

## 📢 Real-World Examples
- Create a post: routed to Nostr, ATProto & ActivityPub simultaneously
- Fetch a social graph: merged across AT and AP instances
- Follow user: generates correct activity or relay for that protocol

---

> Protocols are designed to work independently or together — you choose the stack.
