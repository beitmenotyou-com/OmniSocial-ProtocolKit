---
theme: jekyll-theme-slate
title: Unified Feed Engine
permalink: /unified-feed-engine/
---

# 🧵 Unified Feed Engine

OmniSocial ProtocolKit features a powerful **Unified Feed Engine** that aggregates posts, replies, media, and reactions across multiple decentralized protocols — presenting them in a clean, normalized timeline.

This eliminates the need for users to hop between apps or networks, making it seamless to follow conversations and content across the fediverse, Nostr, Bluesky, RSS, and more.

---

## 🔁 What It Does

- **Ingests** posts and content from all enabled protocol modules
- **Normalizes** metadata, post formats, timestamps, author info
- **Filters** content by type, protocol, user, or tags
- **Renders** a unified timeline with full interaction support (like, comment, tip)

---

## 🌐 Supported Sources

The feed engine currently supports:

| Protocol     | Content Types                 | Interaction Support |
|--------------|-------------------------------|---------------------|
| ActivityPub  | Posts, replies, boosts        | ✅ Like/Reply        |
| AT Protocol  | Posts, threads, likes         | ✅ Like/Reply        |
| Nostr        | Notes, zaps, reactions        | ✅ Like/Tip          |
| Matrix       | Room messages (optional)      | 🟡 Read-only         |
| RSS          | Blog/podcast posts            | 🟡 Read-only         |
| IndieWeb     | Webmentions (experimental)    | 🟡 Reply-only        |

---

## 🛠 Feed Normalization

Incoming posts from different protocols are transformed into a shared format:
```json
{
  "id": "abc123",
  "author": {
    "handle": "@user@domain",
    "avatar": "..."
  },
  "content": "Hello world",
  "protocol": "activitypub",
  "timestamp": 1711839938,
  "replies": [...],
  "likes": 42,
  "tip_enabled": true
}
```

This allows OmniSocial to:
- Sort and display content from mixed sources
- Allow filtering/sorting by protocol or popularity
- Enable interaction across protocols with shared logic

---

## 🧭 Feed Modes

OmniSocial supports multiple feed views:
- **Unified Timeline** – Default, merged view from all protocols
- **Protocol View** – Filtered by Nostr, Mastodon, Bluesky, etc.
- **User Feed** – Posts by a specific user
- **Tag Feed** – Posts matching a hashtag/topic
- **Thread View** – Full conversation tree across protocols

---

## ⚡ Interactive Elements

Posts in the feed can include:
- 🖤 Likes / Reactions (mapped to each protocol)
- 💬 Comments / Replies
- ⚡ Zaps / Tips (via Lightning)
- 🔓 Paywalls (if content is locked)
- 🌐 View Original (link to protocol-native view)

---

## 📦 Developer Notes

- Feed engine logic lives in `/core/feed/`
- Post normalization is handled in `normalize.ts`
- Posts are cached in the local DB and indexed by protocol/user/tag
- Real-time updates can be streamed from Nostr relays and ATProto firehose

Hooks available:
- `onPostReceived()`
- `onFeedRefresh()`
- `onFilterChange()`

---

## 🧠 Use Case Example

> A privacy collective runs OmniSocial with ActivityPub, Nostr, and RSS enabled. Their users see all relevant news, updates, and discussions from Mastodon, Nostr clients, and blogs — in a single, filterable feed. Lightning tipping and replies are available inline.

---

## 🔗 Related Docs
- [Supported Protocols](./supported-protocols/)
- [Plugins & Extensibility](./plugins--extensibility/)
- [Monetization with Lightning](./monetization-with-lightning/)

---

Your decentralized feed. Unified, interactive, and protocol-native. ✨
