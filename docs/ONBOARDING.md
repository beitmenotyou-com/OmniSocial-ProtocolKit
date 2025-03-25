# 👋 Welcome to Protocol Hub Contributor Onboarding

Thank you for your interest in contributing to **Protocol Hub** — an open-source gateway for federated social networking protocols like ActivityPub, AT Protocol, Nostr, Webfinger, IndieWeb, and DIDs.

This guide will help you get started in just a few minutes.

---

## 🔧 Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/omnisocial-hub.git
cd omnisocial-hub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

You’ll see the Protocol Hub API live at `http://localhost:4000`.

---

## 🚀 Things You Can Work On

- Add support for new federated protocols
- Improve existing routes (ActivityPub, ATProto, Nostr, etc.)
- Write documentation or tutorials
- Contribute proposals via `/proposals/`
- Join open [Discussions](https://github.com/YOUR_USERNAME/omnisocial-hub/discussions)

---

## 🧪 Before You Push

- Run type checks: `npx tsc --noEmit`
- Write clean commits and clear PR titles
- Follow our [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 🐳 Docker (Optional)

```bash
docker build -t omnisocial-hub .
docker run -p 4000:4000 omnisocial-hub
```

---

## 💬 Community

- Propose features in [Discussions](https://github.com/YOUR_USERNAME/omnisocial-hub/discussions)
- Log bugs or issues in [Issues](https://github.com/YOUR_USERNAME/omnisocial-hub/issues)

Welcome aboard!

— The Circuitry Hub Insights Collective
