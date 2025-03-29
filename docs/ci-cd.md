# ⚙️ CI/CD Pipeline

OmniSocial ProtocolKit uses **GitHub Actions** for Continuous Integration and Deployment (CI/CD) to streamline code testing, packaging, and deployment workflows.

---

## 🔁 Pipeline Overview

| Stage        | Tool            | Description |
|--------------|-----------------|-------------|
| Build/Test   | GitHub Actions  | Run tests and check code formatting (TS + ESLint) |
| Deploy Docs | GitHub Pages    | Auto-deploy Jekyll-based docs from `main` or `gh-pages` branch |
| Container    | Docker          | Create container images for the API gateway and services |
| Hosting      | Render.com      | Deploy live backend from container image and scripts |

---

## 🚀 GitHub Actions

Stored in `.github/workflows/`, actions include:

### 🧪 `ci.yml`
```yaml
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm run lint && pnpm test
```

### 🌐 `gh-pages.yml`
Publishes the `index.md` site and docs to GitHub Pages using Jekyll.

### 📦 `render-deploy.yml`
Trigger deployment to Render:
```yaml
on:
  workflow_dispatch:
  push:
    tags:
      - 'v*'
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./render-deploy.sh
```

---

## 🐳 Docker Deploy (Optional)

Create container images from Dockerfiles using:
```bash
docker build -t omnisocial-hub .
docker push ghcr.io/your-org/omnisocial-hub
```

These are automatically triggered via GitHub Actions.

---

## 🔍 Versioning & Releases
- Tags (`v1.0.0`, etc.) trigger deployments
- You can manage semver releases using `pnpm version` or `npm version`

---

> All workflows live in `.github/workflows/` — feel free to add your own!
