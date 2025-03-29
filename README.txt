# 🌐 OmniSocial Hub

**OmniSocial Hub** is a self-hostable, modular starter kit for building **federated**, **multi-protocol** social media backends that prioritize **freedom**, **sovereignty**, and **interoperability**. It integrates key decentralized protocols such as:

- ActivityPub (used by Mastodon, PeerTube, etc.)
- Nostr (event-based protocol for censorship resistance)
- AT Protocol (used by Bluesky)
- WebFinger and DID (for decentralized identity resolution)
- Lightning Network (for censorship-resistant micropayments)

Built for developers, activists, and communities that believe in free expression and decentralized infrastructure.

## 🚀 Features

- ✅ Federated backend supporting multiple social protocols
- ⚡ Pay-to-post, pay-to-comment, pay-to-DM with Lightning Network
- 🧩 Modular architecture with plug-and-play protocol plugins
- 🆔 DID, WebFinger, and Nostr key identity linking
- 🌍 ActivityPub, AT Protocol, and Nostr cross-posting bridge
- 🛡️ Spam protection and moderation tools
- 📊 Analytics, logging, and webhook support
- 🧱 Self-custodial + extensible by design

## 🧠 Philosophy

OmniSocial Hub empowers people to **build sovereign social networks** that can interoperate across decentralized protocols — while remaining free from platform lock-in, surveillance, and censorship.

We’re building the **infrastructure for freedom tech** and protocol-first communication — not another walled garden.

## 📦 Project Structure

/server                  # Core backend (API routes, protocol adapters, LN logic)
/client                  # React components for payments, identity, etc.
/protocolKit             # Plugin-based multi-protocol starter system
.github/workflows        # CI for invoice monitoring
install.sh               # One-command local install script
Dockerfile               # Docker container for the backend
docker-compose.yml       # Local orchestration

## 🔌 Protocol Support

| Protocol       | Status       | Module / Plugin       |
|----------------|--------------|------------------------|
| ActivityPub    | ✅ Integrated | BridgingPlugin.js      |
| Nostr          | ✅ Integrated | BridgingPlugin.js      |
| AT Protocol    | ✅ Integrated | BridgingPlugin.js      |
| WebFinger/DID  | ✅ Integrated | IdentityPlugin.js      |
| Lightning      | ✅ Integrated | lightning.js           |

## 🧩 Modular Plugins

Each protocol and system feature (identity, logging, moderation, payments, etc.) is modular via the /protocolKit system. Build your own plugin or extend existing ones.

## 🛠️ Setup

### 1. Install locally

chmod +x install.sh
./install.sh

Then configure your .env:

LN_API_BASE=https://your.lnbits.instance
LN_API_KEY=your_invoice_key

### 2. Docker (optional)

docker-compose up --build -d

## 🧪 Usage Examples

- React <CommentPaywall />, <UnlockContent />, <DMPaywall /> components
- Cross-post from ActivityPub to Nostr in 1 function
- Moderate spam using the built-in ModerationPlugin
- Use LNURL or WebLN to collect tips and protect from bots

## 📖 Documentation

All modules and integrations are fully documented in the /WIKI_*.md files.
We recommend reading:
- WIKI_Lightning_Integration.md
- WIKI_MultiProtocol_Plugins.md

Or view the wiki on GitHub → https://github.com/beitmenotyou-com/omnisocial-hub/wiki

## 🙌 Contributing

Want to help expand protocol support, build plugins, or improve the Lightning UX?

- Fork the repo
- Create a branch
- Submit a pull request!

You can also join our community (Discord/Matrix) via our main Circuitry Hub Insights Collective.

## 🛡️ License

MIT License

## ✊ Stay Sovereign. Stay Connected.

OmniSocial Hub is built for the freedom tech generation.
Run your own server, integrate the protocols you want, and own your digital voice.
