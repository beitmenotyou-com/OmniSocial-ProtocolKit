# ⚡ Nostr Plugin

Nostr is a lightweight, relay-based protocol for censorship-resistant global messaging.

## 📌 Purpose

Enable OmniSocial to interact with Nostr clients and relay messages via public or private relays.

## 📦 Features

- Send events to relay
- Receive event stream from relays
- Normalize events into internal post format

## 🛠 Usage

**Endpoints:**
- `POST /nostr/publish` – Publish an event to relay
- `GET /nostr/events/:pubkey` – Fetch recent events

## 🔄 Integration Notes

- Authentication is based on pubkey/signature
- Events must follow NIP-01 structure
- Relays must be whitelisted or passed in request
