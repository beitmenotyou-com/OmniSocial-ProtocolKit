# 🌐 OmniSocial ProtocolKit – Unified Edition

**OmniSocial ProtocolKit** is a self-hostable, modular, multi-protocol social backend for the next generation of decentralized communication.

It bridges ActivityPub, Nostr, AT Protocol, Matrix, IndieWeb, RSS, and more — wrapped in a unified identity and publishing layer that puts **freedom**, **sovereignty**, and **interoperability** at the core.

---

## 🚀 Core Features

- ✅ **Cross-protocol publishing** (AP, AT, Nostr, Matrix, IndieWeb, RSS)
- 🧠 **BridgeID**: unified identity with DID/Webfinger/Nostr/Matrix linking
- 🧩 **Plugin-based architecture** for every protocol + feature
- 🔐 **Verifiable Credentials (VCs)** support for trust and gating
- 📦 **Decentralized storage** via IPFS, Arweave, and Solid Pods
- ⚡ **Lightning Network microtransactions** (pay-to-post/comment/DM/view)
- 🔁 **Unified timeline** across all networks
- 🛡️ **Spam protection + encrypted messaging** (via Matrix + BridgeID)
- 📤 **Webmention + RSS bridge** for IndieWeb publishing
- 🧱 Fully modular, extensible, and API-driven

---

## 🧠 Philosophy

OmniSocial ProtocolKit is infrastructure for **sovereign social networks** — where users own their identity, data, and social connections.

No walled gardens. No centralized gatekeepers. Just protocols, people, and freedom.

---

## 🗂️ Project Structure

```
/bridgeid              # Unified identity + credential system (DID, VC, keys)
/protocols             # Plugin-based federation modules (AP, AT, Nostr, Matrix...)
/storage               # IPFS, Solid Pod, Arweave, and local storage logic
/server                # Express API gateway and middleware
/client                # React components and frontend tools (optional)
/cli                   # Command-line tools for identity, publishing, federation
/docs                  # Markdown docs + OpenAPI schemas
Dockerfile             # Containerized deployment
.env.example           # Sample environment variables
```

---

## 🔌 Protocol Support

| Protocol        | Status | Module Path             |
|-----------------|--------|--------------------------|
| ActivityPub     | ✅     | `/protocols/activitypub` |
| AT Protocol      | ✅     | `/protocols/atproto`     |
| Nostr            | ✅     | `/protocols/nostr`       |
| Matrix           | ✅     | `/protocols/matrix`      |
| IndieWeb         | ✅     | `/protocols/indieweb`    |
| RSS              | ✅     | `/protocols/rss`         |
| Solid (Storage)  | ✅     | `/protocols/solid`       |
| IPFS/Arweave     | ✅     | `/protocols/ipfs`, `/arweave` |
| Webfinger + DID  | ✅     | `/bridgeid/`             |
| Lightning        | ✅     | `/server/lightning/`     |

---

## 🔐 Identity: BridgeID

- Self-owned identity (DID + domain + Nostr key + Matrix ID)
- DID formats: `did:web`, `did:key`, `did:plc`
- Cross-platform discovery via Webfinger
- Credential storage and verification (W3C VC spec)
- Unified login and account linking

---

## 🧩 Modular Plugin System

Every protocol integration is a plugin with the same interface:
- `send.ts` → outbound federation
- `receive.ts` → inbound content normalization
- `normalize.ts` → map to internal types
- Plug into federation bus with zero coupling

You can add support for:
- New decentralized protocols
- Alternative storage layers
- Identity verifiers or credential issuers
- UI/UX extensions in the React client

---

## ⚡ Monetization + Anti-Spam

- Lightning-powered content control:
  - ✅ Pay-to-Comment
  - ✅ Pay-to-DM
  - ✅ Pay-to-View
- Nostr zaps (NIP-57) supported via LNURL
- Configurable free post thresholds + token gating
- Wallet address stored in BridgeID

---

## 🛠️ Setup

### 1. Install

```bash
pnpm install
pnpm dev
```

Or use Docker:

```bash
docker-compose up --build -d
```

### 2. Configure `.env`

```dotenv
LN_API_BASE=https://your.lnbits.instance
LN_API_KEY=your_invoice_key
POD_BASE=https://solid.yourdomain/pod/
IPFS_NODE=http://localhost:5001
```

---

## 🔧 CLI Usage

```bash
# Create and link identity
pnpm cli:bridgeid create --username alice --domain alice.me
pnpm cli:bridgeid link --nostr npub... --did did:web:alice.me

# Publish a post across all protocols
pnpm cli:post new --content "Hello world" --to ap nostr atproto rss

# Follow someone on any network
pnpm cli:follow add @bob@mastodon.social
pnpm cli:follow add npub1abc...
pnpm cli:follow add https://bob.blog/feed.xml
```

---

## 🧪 Use Cases

- Build your own sovereign federated social network
- Run a cross-protocol bridge for your community
- Let creators publish + earn directly via Lightning
- Use Solid Pods or IPFS to truly own your content
- Verify contributors using DIDs and credentials

---

## 📖 Documentation

📚 [View the full GitHub Wiki →](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki)

Or check out:
- `GETTING-STARTED.md`
- `CHANGELOG.md`
- `WIKI-REFERENCE.md` (offline bundle)

---

## 🙌 Contributing

- Fork the repo
- Create a new branch (`feature/my-plugin`)
- Add a protocol or plugin under `/protocols/`
- Submit a pull request!

Join us on Matrix or via the Circuitry Hub Insights Collective.

---

## 🛡️ License

MIT License

---

## ✊ Protocols over Platforms.

Own your voice. Federate your ideas. Build the web you want to live in.
