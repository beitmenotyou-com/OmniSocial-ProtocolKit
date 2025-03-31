---
theme: jekyll-theme-slate
title: FAQ
permalink: /faq/
---

# ❓ Frequently Asked Questions

Got questions about OmniSocial ProtocolKit? Here are some of the most common ones we hear from developers, activists, creators, and community builders.

---

### 🟢 Is OmniSocial a new social network?

**Nope!** OmniSocial is a **protocol-agnostic toolkit** that lets you build your own decentralized social platform. It connects to existing networks like Mastodon, Nostr, and Bluesky — you host your own community, with full control.

---

### 🛠️ Do I need to know how to code?

**Not necessarily.** You can:
- Use the Docker setup to self-host easily
- Customize settings with `.env` files
- Use community-made plugins and templates

If you're not a developer, we recommend partnering with someone who can help run the backend.

---

### ⚡ Does it support Lightning payments?

**Yes!** You can:
- Enable pay-to-comment, pay-to-DM, tipping (Zaps), and paywalls
- Use Alby, BTCPay, or LNbits
- Add Lightning login with LNURL-auth

Check out the [Monetization with Lightning](./monetization-with-lightning/) guide for details.

---

### 🧩 What protocols does it support?

OmniSocial supports:
- ActivityPub (Mastodon, PeerTube)
- AT Protocol (Bluesky)
- Nostr
- Matrix (E2EE messaging)
- RSS (read-only)
- IndieWeb (Micropub, Webmention)
- Webfinger + DIDs (identity)

More details in the [Supported Protocols](./supported-protocols/) section.

---

### 🪪 Can I bring my own identity?

Yes. OmniSocial supports self-sovereign identity via:
- DIDs
- Nostr keypairs
- Matrix usernames
- Lightning address handles

All identities are unified with **BridgeID**, which maps them to `@user@yourdomain` format.

---

### 💬 Can I message people on other platforms?

Yes — via **Matrix**. OmniSocial uses Matrix for federated messaging:
- Encrypted by default
- Self-hosted homeserver included
- Interoperable with other Matrix clients (Element, FluffyChat, etc.)

Learn more in [Federated Messaging](./federated-messaging/).

---

### 🌐 Can I connect my blog or website?

Absolutely. With **IndieWeb** and **RSS** support:
- Feed your blog posts into the unified timeline
- Accept Webmentions and Micropub interactions
- More IndieWeb integration coming soon

---

### 🗳 How is the project governed?

OmniSocial is community-governed:
- Public proposals on GitHub
- Discussion in our [Revolt server](https://rvlt.gg/xFyQycWs)
- Voting on features and roadmap direction

You can fork it and use your own governance model too.

See [Governance Model](./governance-model/).

---

### 🚀 Can I contribute?

Yes, please! We welcome all contributions:
- Devs, testers, documenters, designers
- Start here: [Contribute](./contribute/)

---

### 🔐 Is OmniSocial privacy-respecting?

100%.
- No ads, tracking, or surveillance
- All data is local or decentralized
- You decide what’s public, encrypted, or private

---

### 🖥️ Can I run this on my own server?

Yes — that’s the goal! OmniSocial is fully self-hostable via Docker or manual deployment.

---

Still have questions?
- Ask in our [Revolt Server](https://rvlt.gg/xFyQycWs)
- Open a [GitHub Discussion](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/discussions)

---

Built with freedom, for freedom. ✊
