
# OmniSocial ProtocolKit - Deployment & Integration Plan

## ⚡ Lightning Integration

### Alby
- [x] OAuth2 login flow (authorize via Alby)
- [x] Token storage in memory (expandable to DB)
- [x] Invoice generation (mock, real integration pending)

### LNbits
- [x] Invoice generation via LNbits API
- [x] Invoice payment checking (paid/unpaid)
- [x] Middleware for paywall: post, comment, DM, view
- [x] .env configuration for LNbits credentials

---

## 🌐 Federation Integration

### Nostr
- [x] Connect to real relays (e.g. wss://relay.damus.io)
- [x] Publish/subscribe support
- [x] Event parsing (basic relay client)

### ActivityPub
- [x] Webfinger-based user discovery
- [x] Remote actor support (e.g. @user@mastodon.social)
- [x] Inbox/outbox handling
- [x] Follow and like support (simplified)

### AT Protocol
- [x] Firehose feed subscription
- [x] Event parsing for posts, likes, follows
- [x] Optional merge into federated feed

---

## 🧪 Live Demo Deployment

### Backend
- [x] Render deployment setup
- [x] API endpoints exposed
- [x] Environment secrets configured

### Frontend
- [x] Vercel or Netlify deployment
- [x] React UI setup
- [x] Pages: Feed, Profile, PostForm, DM, Settings

---

## 🔐 Final Integration

- [ ] End-to-end Lightning microtransactions tested
- [ ] Federated feed populated from real networks
- [ ] Demo URLs delivered
