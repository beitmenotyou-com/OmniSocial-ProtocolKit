# ✅ Accepted Proposals

This page lists community-approved proposals that have been accepted for future implementation or have already been merged into OmniSocial ProtocolKit.

> Proposals reflect the collaborative direction of the project. All ideas listed here have passed community discussion and will shape the future of federated social architecture.

---

## 🧠 Protocol Integration

### ✔ ActivityPub Core
- Implemented full support for Inbox/Outbox + AS2
- Added message verification + delivery queue

### ✔ AT Protocol (Lexicon + DID:PLC)
- Integrated with `atproto.js`
- Supports decentralized handles + PDS discovery

### ✔ Nostr Relay Federation
- Added NIP-01 and NIP-05 support
- Relay filtering, key auth, signed events

---

## 🔌 Features

### ✔ Unified Post API
- Post once → Publish to Nostr + ActivityPub + AT Proto
- Endpoint: `POST /v1/post`

### ✔ Webfinger + DID Resolver
- Maps `@user@domain` → federated DID
- Powers identity sync and social graphs

### ✔ Modular Gateway Design
- Every protocol lives in `/protocols/<name>`
- Clean separation of concerns

---

## 🧱 Dev Experience

### ✔ Swagger UI
- API served at `/api-docs`
- Includes request/response schema validation

### ✔ GitHub Pages Docs
- Pages live in `index.md` + `docs/`
- Uses Jekyll Hacker theme

---

## 🗳 Governance Enhancements

### ✔ Proposal Lifecycle
- Draft → Discussion → Accepted → Roadmap
- Managed in `/proposals/`

### ✔ Roadmap JSON + Wiki
- Maintains community-voted priorities

---

To view pending or draft proposals, visit [/proposals/submit](submit.md)

> Want to contribute your idea? Submit it via GitHub pull request or Revolt!
