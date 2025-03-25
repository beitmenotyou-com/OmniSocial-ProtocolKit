# 🚀 Protocol Hub

A modular, multi-protocol gateway for federated social media, combining:

- **ActivityPub** (Fediverse: Mastodon, PeerTube, etc.)
- **AT Protocol** (Bluesky)
- **Nostr** (Relay-powered, censorship-resistant)
- **Webfinger** (Identity discovery)
- **Micropub + Webmention** (IndieWeb)
- **DIDs** (Self-sovereign identity)

## 🧱 Architecture Overview

![Protocol Architecture](./omnisocial-hub-architecture.png)

## 🛠 How to Get Started

```bash
git clone https://github.com/YOUR_USERNAME/omnisocial-hub.git
cd omnisocial-hub
npm install
npm run dev
```

## 📁 Directory Overview

```
src/
├── routes/         # Individual protocol endpoints
├── services/       # Identity, content, and federation helpers
├── utils/          # Logger, error handlers, shared logic
index.ts            # API entrypoint (Express)
```

## 🌐 API Endpoints

- `GET /.well-known/webfinger` — Webfinger resolver
- `GET /activitypub` — ActivityPub test
- `GET /atproto` — ATProto test
- `GET /nostr` — Nostr stub
- `GET /micropub` — Micropub placeholder
- `GET /webmention` — Webmention placeholder
- `GET /did/:id` — DID Document resolver

## 📌 Status

This is a **starter framework**. Contributions welcome!

## 🚀 Deploy This Project

You can deploy Protocol Hub on your preferred platform with one click:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/beitmenotyou-com/omnisocial-hub)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/beitmenotyou-com/omnisocial-hub)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/beitmenotyou-com/omnisocial-hub)


## 🧪 One-Click Dev Environment
> This project automatically starts in Gitpod with dev server on port 4000.


[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/beitmenotyou-com/omnisocial-hub)

## 🚀 Use This as a Template

Start your own federated project using this starter framework.

[Create a repo from this template](https://github.com/beitmenotyou-com/omnisocial-hub/generate)

## 🌐 Live Demo (Coming Soon)

We plan to host a public demo instance that showcases:
- ActivityPub federation
- Nostr relay connections
- DID resolution
- Webfinger lookup

Want to deploy your own? Use the Dockerfile or connect your repo to [Render](https://render.com/).
