# 🛠 Build & Usage Guide

This guide helps you set up and run the Protocol Hub project locally or deploy it using Docker or CI/CD services.

---

## 📦 Prerequisites

- Node.js v18+
- npm
- Git
- (Optional) Docker
- (Optional) ts-node-dev for local development

---

## 🔧 Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/omnisocial-hub.git
cd omnisocial-hub
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the dev server**
```bash
npm run dev
```

Your API will run at: `http://localhost:4000`

---

## 🧪 Type Checking

Run TypeScript type checks without compiling:

```bash
npx tsc --noEmit
```

---

## 🐳 Docker Deployment

1. **Build the image**
```bash
docker build -t omnisocial-hub .
```

2. **Run the container**
```bash
docker run -p 4000:4000 omnisocial-hub
```

---

## 🚀 GitHub Pages

This project includes a `/docs` directory for GitHub Pages.

### Enable GitHub Pages:

1. Go to your repo **Settings → Pages**
2. Source: `main`, folder: `/docs`
3. Save

Visit: `https://your-username.github.io/omnisocial-hub/`

---

## ☁️ One-Click Deployment

You can deploy to Vercel, Render, or Netlify using the deploy buttons in the README.

- **Netlify** is for static documentation (`/docs`)
- **Render / Vercel** can deploy the full backend API

---

## 🧩 Available Endpoints

| Route             | Description                       |
|------------------|-----------------------------------|
| `/activitypub`    | ActivityPub stub endpoint         |
| `/atproto`        | AT Protocol stub endpoint         |
| `/nostr`          | Nostr stub endpoint               |
| `/did/:id`        | DID Document resolver             |
| `/.well-known/webfinger` | Webfinger identity lookup    |
| `/micropub`       | Micropub endpoint (IndieWeb)      |
| `/webmention`     | Webmention endpoint (IndieWeb)    |

---

## 🙌 Need Help?

Open a [Discussion](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/discussions)  
Submit [Issues](https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/issues)  
Or check out [CONTRIBUTING.md](./CONTRIBUTING.md)

—
Built with freedom and federation in mind.
