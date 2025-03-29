---
title: Add Relay-based Nostr Mentions
status: in-review
authors:
  - github: federated-builder
created: 2025-03-26
updated: 2025-03-26
---

# 📄 Proposal: Add Nostr Mentions

## 🔍 Overview

Add support for detecting `@npub...` mentions and linking them to appropriate Nostr users across OmniSocial federated posts.

## 💡 Motivation

Mentions are a key part of social interaction. Right now, Nostr mentions are not parsed or linked in the UI.

## 🔧 Technical Details

- Detect `@npub1...` strings using regex
- Use NIP-05 metadata or relays to resolve display names
- Normalize mentions into OmniSocial post model

## 🔄 Federation Compatibility

| Protocol     | Notes |
|--------------|-------|
| ActivityPub  | Existing mentions already normalized |
| AT Protocol  | Partially compatible with `facet` model |
| Nostr        | Direct support needed via event parsing |

## 🌐 Impact

Improves user tagging, engagement, and UX for Nostr-connected apps.

## 📈 Future Potential

Could lead to support for emoji reactions, reposts, and quotes across protocols.

## 🔗 Related

- [NIP-01](https://github.com/nostr-protocol/nips/blob/master/01.md)
- [GitHub Issue #42](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/issues/42)

## ✅ Checklist

- [x] Reviewed existing proposals
- [x] Discussed in community chat
- [ ] Willing to help implement
