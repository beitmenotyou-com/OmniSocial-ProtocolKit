# 🌐 ActivityPub Plugin

The ActivityPub plugin allows OmniSocial Hub to federate with platforms like Mastodon, PeerTube, and Lemmy using the W3C-standardized ActivityPub protocol.

## 📌 Purpose

Enable federation of posts, profiles, and interactions across the Fediverse.

## 📦 Features

- Fetch and serve actor objects
- Handle inbox and outbox messages
- Sign HTTP requests with HTTP Signatures
- Deliver federated activities (Create, Follow, Like, etc.)

## 🛠 Usage

**Endpoints:**
- `GET /ap/actor/:username@domain` – Fetch actor profile
- `POST /ap/inbox` – Handle inbound activities
- `POST /ap/outbox` – Broadcast outbound activities

## 🔄 Integration Notes

- Uses `webfinger` for identity discovery
- HTTP signatures are required for most delivery
- Objects should conform to `@context: https://www.w3.org/ns/activitystreams`
