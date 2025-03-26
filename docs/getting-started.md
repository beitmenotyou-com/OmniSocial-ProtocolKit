# 🚀 Getting Started with OmniSocial Hub

Welcome! This guide will walk you through setting up and running the OmniSocial Hub — a cross-protocol social platform gateway built by the **Circuitry Hub Insights Collective**.

---

## 🔧 Requirements

- Node.js v18+
- npm (Node package manager)
- Git
- (Optional) Docker

---

## 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/beitmenotyou-com/omnisocial-hub.git
cd omnisocial-hub
```

---

## 📦 Step 2: Install Dependencies

```bash
npm install
```

---

## 🛠 Step 3: Start the Dev Server

```bash
npm run dev
```

Visit the local API at:  
[http://localhost:4000](http://localhost:4000)

---

## 🧪 Test the Endpoints

Try these in your browser or Postman:

- `/activitypub`
- `/atproto`
- `/nostr`
- `/.well-known/webfinger?resource=acct:username@yourdomain.com`
- `/did/username`
- `/webmention`
- `/micropub`

---

## 🐳 Docker Setup (Optional)

```bash
docker build -t omnisocial-hub .
docker run -p 4000:4000 omnisocial-hub
```

---

## ☁️ Deploy in One Click

- [Gitpod Dev Environment](https://gitpod.io/#https://github.com/beitmenotyou-com/omnisocial-hub)
- [Vercel](https://vercel.com/new/import?s=https://github.com/beitmenotyou-com/omnisocial-hub)
- [Render](https://render.com/deploy?repo=https://github.com/beitmenotyou-com/omnisocial-hub)
- [Netlify (Docs Only)](https://app.netlify.com/start/deploy?repository=https://github.com/beitmenotyou-com/omnisocial-hub)

---

## ✅ Next Steps

- [Read the Use Cases](./use-cases.md)
- [Review API Reference](./api/openapi.yaml)
- [View the Video Walkthrough](./video.md)
- [Join the Community](./community.md)

Welcome to the federated future 👁️‍🗨️
