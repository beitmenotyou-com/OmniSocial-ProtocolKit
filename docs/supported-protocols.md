---
theme: jekyll-theme-slate
title: Supported Protocols
permalink: /supported-protocols/
---

# 🌐 Supported Protocols

OmniSocial ProtocolKit bridges multiple decentralized and federated protocols to allow seamless interoperability between networks. Here’s an overview of what’s supported and how each protocol integrates with the system.

---

## 🐘 ActivityPub

**Status:** ✅ Supported  
**Uses:** Mastodon, PeerTube, Lemmy, Pixelfed

- Enables federation with the Fediverse
- Posts appear in Mastodon timelines and vice versa
- Webfinger-based identity resolution (`@user@domain`)
- Supports status updates, replies, and follows

🔗 Learn more: [ActivityPub Spec](https://www.w3.org/TR/activitypub/)

---

## 📡 AT Protocol (Bluesky)

**Status:** ✅ Supported (via Firehose + Relay bridge)  
**Uses:** Bluesky / bsky.social

- Uses Lexicon schemas and DID-based identity
- Federates posts and profiles from Bluesky
- Integration via ATProto relay/feed listeners
- Normalized into OmniSocial’s unified feed

🔗 Learn more: [AT Protocol](https://atproto.com/)

---

## 🔩 Nostr

**Status:** ✅ Supported  
**Uses:** Damus, Amethyst, Iris, Snort, etc.

- Real-time relay-based event propagation
- Uses public/private keypairs for identity
- Posts, replies, reactions, zaps, DMs
- OmniSocial signs and sends Nostr events automatically

🔗 Learn more: [Nostr Protocol](https://github.com/nostr-protocol/)

---

## 💬 Matrix

**Status:** ✅ Supported  
**Uses:** Encrypted group/DM chat

- Used as the messaging layer
- Supports E2EE, federated rooms, bots
- Users receive Matrix IDs via BridgeID
- Optional embedded Element Web client

🔗 Learn more: [Matrix.org](https://matrix.org/)

---

## 🔁 IndieWeb

**Status:** 🧪 Experimental  
**Uses:** Personal websites, blogs, webmentions

- Includes Micropub and Webmention support
- Posts from personal websites can federate into OmniSocial
- Enables likes, reposts, and web interactions

🔗 Learn more: [IndieWeb.org](https://indieweb.org/)

---

## 📰 RSS

**Status:** ✅ Read-only  
**Uses:** Syndicated blogs, podcasts, news feeds

- Allows RSS feeds to appear in unified timeline
- Can follow and preview external blog posts
- Future write-back support planned (Micropub bridge)

---

## 🌐 Webfinger + DIDs

**Status:** ✅ Core Identity Layer  

- Enables `@username@domain` lookup via Webfinger
- DID Documents resolve identity across all supported protocols
- Used for discovery, federation, and BridgeID abstraction

🔗 Learn more: [Webfinger](https://datatracker.ietf.org/doc/html/rfc7033), [Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-core/)

---

## 🧪 Coming Soon

We’re planning future integration with:
- **Secure Scuttlebutt (SSB)**
- **Zot / Nomad (Hubzilla, Zap)**
- **Farcaster**
- **Keet/Hypercore**
- **P2P bridges using libp2p**

---

## 🧠 Developer Notes

- Each protocol is implemented as a plugin under `/plugins/`
- All modules conform to a shared `post()` + `fetch()` interface
- Federation events pass through a normalization layer

📦 Want to build your own? Check out the [Plugin System](./plugins--extensibility/)

---

✅ OmniSocial makes your platform multi-protocol by default — giving your users access to the entire decentralized web.
