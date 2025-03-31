---
theme: jekyll-theme-slate
title: Monetization with Lightning
permalink: /monetization-with-lightning/
---

# ⚡ Monetization with Lightning

OmniSocial ProtocolKit integrates the Bitcoin Lightning Network to enable native, censorship-resistant monetization, spam prevention, and user-to-user value exchange — without ads, intermediaries, or centralized payment processors.

Built-in Lightning support gives creators, moderators, and communities powerful tools to financially empower themselves on their own terms.

---

## 💸 Why Lightning?

Lightning is ideal for:
- Microtransactions (sats-based payments)
- Real-time tipping and pay-to-unlock features
- Frictionless spam resistance via cost-per-action
- Global, permissionless payments

By using Lightning, OmniSocial enables sustainable community-driven economics.

---

## 🔧 Core Lightning Features

### ✅ Pay-to-Comment
Require small payments (e.g., 10 sats) to post or comment. Prevents spam and incentivizes thoughtful engagement.

### ✅ Pay-to-DM
Block unsolicited messages by requiring a Lightning payment to start a direct message.

### ✅ Zaps / Tipping
Let users directly reward posts, comments, or creators with instant Lightning tips.

### ✅ Paywalls
Lock specific content behind a Lightning invoice — only revealed after payment.

### ✅ Lightning Login (Optional)
Use LNURL-auth to log in with your Lightning wallet (e.g., Alby).

---

## 🔌 Supported Providers

OmniSocial supports multiple Lightning backends:

### 🟡 Alby
- Easy browser extension wallet
- LNURL-auth login
- Perfect for individual creators and casual users

### 🟢 BTCPay Server
- Fully self-hosted merchant-grade setup
- Ideal for communities and organizations
- Non-custodial, privacy-respecting

### 🔵 LNbits
- Lightweight Lightning backend
- Multiple wallets per user, plugin system
- Great for prototyping or experimentation

Choose your provider by setting the `.env`:
```dotenv
LIGHTNING_PROVIDER=alby   # or btcpay, lnbits
```

---

## 💱 Payment Flow

1. User clicks “Tip” or “Unlock” on a post
2. OmniSocial generates a Lightning invoice
3. QR/invoice displayed (or Alby auto-pay)
4. Upon payment confirmation, action completes:
   - Comment posts
   - Message unlocked
   - Content revealed

All transactions are peer-to-peer and recorded locally.

---

## 🛠 Developer Integration

- Each post object can contain `paywall` metadata
- Lightning invoices are generated via plugin adapters
- Custom monetization flows can be added per route/module

Hooks:
- `onPaymentSuccess()`
- `onInvoiceExpired()`

View examples in `/plugins/lightning/`.

---

## 🛡️ Security & Privacy

- Non-custodial by default
- Lightning invoices are ephemeral
- Payments are processed directly on your backend or provider
- No central authority or third-party processing

---

## 🌍 Use Case Example

> A crypto-focused blog collective uses OmniSocial to publish long-form posts and federated content. Premium articles are paywalled using Lightning. Users can tip the authors or pay-to-unlock deep dives — all directly from their Lightning wallets.

---

## 🔗 Related Pages
- [Identity Layer](./identity-layer/)
- [Governance Model](./governance-model/)
- [Plugin System](./plugins--extensibility/)

---

Empower your community with decentralized payments — one sat at a time ⚡
