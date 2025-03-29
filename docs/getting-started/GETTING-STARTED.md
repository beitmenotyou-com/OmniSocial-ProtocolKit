# 🚀 Getting Started with OmniSocial ProtocolKit

Welcome to **OmniSocial ProtocolKit** — an open-source, protocol-agnostic backend that integrates ActivityPub, AT Protocol, Nostr, and more into a single modular system for building federated social experiences.

---

## 🔧 Requirements

- Node.js (>= 18)
- npm or yarn
- Git
- Docker (optional)
- GitHub account (for forking/contributing)

---

## 📦 Install Locally

```bash
# Clone the repository
git clone https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit.git
cd omnisocial-hub

# Install dependencies
npm install

# Create a local .env config file
cp .env.example .env

# Start the dev server
npm run dev
```

Or, using Docker:

```bash
docker-compose up --build
```

---

## 🛠 Project Structure

```bash
docs/               # GitHub Pages documentation
wiki-content/       # GitHub Wiki content (mirrored)
.github/            # Actions, issue templates, CODEOWNERS
src/                # Application source (gateways, bridges)
tests/              # Jest/TypeScript test files
.vscode/            # Editor settings
```

---

## 🧪 Developer Tools

- **Auto-generated Weekly Digest**: `weekly-digest.py`
- **Post Digest to Discussions**: `post-weekly-discussion.py`
- **Push Wiki Mirror**: `push-wiki.sh`
- **Generate Contributor List**: `generate_contributors.py`

---

## ✅ First-Time Contributor?

1. Read [`DEVELOPER-ONBOARDING.md`](./DEVELOPER-ONBOARDING.md)
2. Submit your ideas using the [Proposal Template](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/issues/new?template=proposal.md)
3. Join the [Discussions Tab](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/discussions)
4. Add yourself to the [Hall of Builders](docs/hall-of-builders.md)

---

## 📚 Docs & Community

- [📘 Full Docs Site](https://beitmenotyou-com.github.io/OmniSocial-ProtocolKit)
- [📖 GitHub Wiki](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/wiki)
- [💬 Community Support](./SUPPORT.md)
- [🏁 Launch Blog Post](docs/announcement.md)

Let's build the federated future — together.
