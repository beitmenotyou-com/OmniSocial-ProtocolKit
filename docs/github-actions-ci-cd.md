# ⚙️ GitHub Actions: CI/CD Pipeline

OmniSocial Hub includes a lightweight but powerful **CI/CD pipeline** powered by **GitHub Actions**. It helps ensure quality, consistency, and reliability across every contribution and deployment.

---

## 🚀 Why GitHub Actions?

- Built-in automation without third-party services
- Instant feedback for every commit and pull request
- Auto-build, test, and deploy capabilities
- Integrates easily with Docker, Vercel, Render, and more

---

## 🧪 Current Workflows

Located in `.github/workflows/`

### ✅ `ci.yml` – Type Check & Linting

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx tsc --noEmit
```

Purpose:
- Ensures TypeScript is valid
- Prevents broken builds from merging

---

### 🐳 `docker.yml` – Docker Build Check

```yaml
name: Docker Build

on: [push]

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: docker build -t omnisocial-hub .
```

Purpose:
- Validates your Dockerfile on every push
- Ensures the app is container-ready

---

## 🧑‍💻 Future Additions

- Deploy to Vercel or Render from `main` branch
- Auto-preview docs on PRs (Netlify-style)
- Run integration tests against the API

---

## 📦 Where It Lives

```
omnisocial-hub/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── docker.yml
```

---

## 🧵 Related Topics

- [Docker Setup](../Dockerfile)
- [Getting Started](./getting-started.html)
- [Tech Stack](./tech-stack.html)

---

> Every push is a step closer to a safer, more decentralized world 🌍
