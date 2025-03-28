# 📜 Supported Protocol Specifications

OmniSocial Hub integrates multiple decentralized protocols under a single framework. This page outlines each protocol’s status, implementation path, and references.

---

## ✅ Actively Supported

### 🌐 ActivityPub (W3C)
- **Spec**: [ActivityPub Spec](https://www.w3.org/TR/activitypub/)
- **Implementation**: Inbox, Outbox, AS2 types
- **Interoperability**: Mastodon, PeerTube, Pleroma
- **Directory**: `/protocols/activitypub/`

### 🌀 AT Protocol (Bluesky)
- **Spec**: [ATProto Docs](https://docs.bsky.app/)
- **Implementation**: DID:PLC resolution, Lexicons, PDS
- **Interop**: Works with `atproto.js`
- **Directory**: `/protocols/atproto/`

### 📡 Nostr
- **Spec**: [NIP Index](https://github.com/nostr-protocol/nips)
- **Implementation**: NIP-01, NIP-05, NIP-02 (keys/events)
- **Interop**: Multiple relays, WebSocket pub/sub
- **Directory**: `/protocols/nostr/`

### 🔍 Webfinger
- **Spec**: [RFC7033](https://tools.ietf.org/html/rfc7033)
- **Usage**: Identity discovery (username@domain)
- **Directory**: `/protocols/webfinger/`

### 🆔 Decentralized Identifiers (DIDs)
- **Spec**: [W3C DID Core](https://www.w3.org/TR/did-core/)
- **Types**: `did:web`, `did:key`, `did:plc`
- **Purpose**: Identity unification across protocols
- **Directory**: `/protocols/did/`

---

## 🧪 Planned/Experimental

### 🔗 Matrix
- **Goal**: Integrate federated messaging
- **Status**: Researching bridge design

### 📷 IndieWeb / Micropub
- **Goal**: Webmention/Micropub compatibility
- **Status**: Proposed — community contributors welcome!

### 🪙 Web3 Identity & Auth
- **Goal**: Optional wallet login & ENS/DID support
- **Status**: Under proposal

---

## 💡 Protocol Plugin Interface
Each plugin must:
- Accept protocol-specific input/output formats
- Normalize activity types to OmniSocial schema
- Handle authentication (key/DID/token)

---

> This list grows with community input. Want to implement a protocol? Submit a [proposal](submit.md)!

