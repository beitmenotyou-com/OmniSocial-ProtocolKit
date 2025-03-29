# 🌐 OmniSocial ProtocolKit

**OmniSocial ProtocolKit** is a self-hostable, modular starter kit for building **federated**, **multi-protocol** social media backends that prioritize **freedom**, **sovereignty**, and **Interoperability**. It integrates key decentralized protocols such as:

- ActivityPub (used by Mastodon, PeerTube, etc.)
- Nostr (event-based Protocol for censorship resistance)
- AT Protocol (used by Bluesky)
- WebFinger and DID (for decentralized identity resolution)
- Lightning Network (for censorship-resistant micropayments)

Built for developers, activists, and communities that believe in free expression and decentralized infrastructure.

## 🚀 Features

- ✅ Federated backend supporting multiple social protocols
- ⚡ Pay-to-post, pay-to-comment, pay-to-DM with Lightning Network
- 🧩 Modular architecture with plug-and-play Protocol plugins
- 🆔 DID, WebFinger, and Nostr key identity linking
- 🌍 ActivityPub, AT Protocol, and Nostr cross-posting bridge
- 🛡️ Spam protection and moderation tools
- 📊 Analytics, logging, and webhook support
- 🧱 Self-custodial + extensible by design

## 🧠 Philosophy

OmniSocial ProtocolKit empowers people to **build sovereign social networks** that can interoperate across decentralized protocols — while remaining free from platform lock-in, surveillance, and censorship.

We're building the **infrastructure for freedom tech** and protocol-first communication — not another walled garden.

## 📦 Project Structure

/server                  # Core backend (API routes, Protocol adapters, LN logic)
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

Each Protocol and system feature (identity, logging, moderation, payments, etc.) is modular via the /protocolKit system. You can build your own plugins or extend existing ones.

## 🛠️ Setup

### 1. Install locally

chmod +x install.sh
./install.sh

Then configure your .env:

LN_API_BASE=https://your.lnbits.instance
LN_API_KEY=your_invoice_key

### 2. Docker (optional)

Docker-compose up-- build -d

## 🧪 Usage Examples

- React <CommentPaywall />, <UnlockContent />, <DMPaywall /> components
- Cross-post from ActivityPub to Nostr in 1 function
- Moderate spam using the built-in ModerationPlugin
- Use LNURL or WebLN to collect tips and protect from bots

## 🙌 Contributing

Want to help expand Protocol support, build plugins, or improve the Lightning UX?

- Fork the repo
- Create a branch
- Submit a pull request!

You can join our community (Revolt) via our main [Circuitry Hub Insights Collective](https://rvlt.gg/5DnMjCx8)

## 🛡️ License

MIT License

## ✊ Stay Sovereign. Stay Connected.

OmniSocial ProtocolKit is built for the freedom tech generation.
Run your server, integrate your desired protocols, and own your digital voice.
