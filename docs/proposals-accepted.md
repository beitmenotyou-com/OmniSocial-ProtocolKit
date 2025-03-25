# ✅ Accepted Proposals

This document tracks proposals that have been **formally accepted** by the OmniSocial Hub community or maintainers as candidates for implementation or future standards.

These proposals help shape the evolving federated architecture of OmniSocial Hub.

---

## 📦 Protocol Integrations

- **Matrix Support Stub**
  - Add `src/routes/matrix.ts`
  - Accept Matrix Federation and Room metadata
  - [Proposal #12](https://github.com/beitmenotyou-com/omnisocial-hub/issues/12)

- **RSS-to-ActivityPub Bridge**
  - Convert external RSS feeds into ActivityPub updates
  - Extend `services/activitypub.ts`

---

## 🧠 Identity Models

- **DID-based Universal Profile**
  - Merge Webfinger, domain-based, and Nostr identities
  - Canonical identity backed by DID Document

---

## 🌐 Frontend / UX

- **Basic Federated Feed UI**
  - Introduce sample web client to render JSON feed
  - Possible SvelteKit/Next.js + backend adapter

---

## ⚙️ Community Tools

- **Onboarding Wizard via WebUI**
  - Guide users in generating `.env` and identity seed

---

To suggest your own proposal, visit the [Proposals Template](https://github.com/beitmenotyou-com/omnisocial-hub/issues/new?template=proposal.md)

For discussion, join us on [Revolt](https://revolt.chat/invite/YOUR-SERVER-ID)

---
## 🏷️ Proposal Status Badges

Use these in proposals to show their status:

- ![Status: Proposed](https://img.shields.io/badge/Status-Proposed-lightgray)
- ![Status: Under Discussion](https://img.shields.io/badge/Status-Under%20Discussion-yellow)
- ![Status: Accepted](https://img.shields.io/badge/Status-Accepted-brightgreen)
- ![Status: Rejected](https://img.shields.io/badge/Status-Rejected-red)
- ![Status: In Progress](https://img.shields.io/badge/Status-In%20Progress-blue)
