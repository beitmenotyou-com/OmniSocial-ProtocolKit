# 🔁 CI/CD Pipelines & Docker Compose Setup

This document outlines the setup and configuration needed to enable automatic testing, building, and deployment of the OmniSocial Hub project using GitHub Actions and Docker Compose.

---

## ✅ CI/CD Pipelines with GitHub Actions

GitHub Actions automates the testing and deployment workflow.

### 🛠 Required Workflows

| Workflow             | File Path                                      | Purpose                                      |
|----------------------|------------------------------------------------|----------------------------------------------|
| `test.yml`           | `.github/workflows/test.yml`                  | Run Jest test suite on every push/PR         |
| `docker-build.yml`   | `.github/workflows/docker-build.yml`          | Build Docker images                          |
| `wiki-sync.yml`      | `.github/workflows/wiki-sync.yml`             | Sync Markdown files to GitHub Wiki           |
| `render-deploy.yml`  | `.github/workflows/render-deploy.yml`         | Deploy to Render via webhook (optional)      |

---

### 🧪 Sample Test Workflow (`test.yml`)

```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run test
```

---

## 🐳 Docker Compose for Multi-Container App

Define all app services (API, worker, db) in one place.

### 📄 `docker-compose.yml` Example

```yaml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development

  db:
    image: postgres:15
    restart: always
    environment:
      POSTGRES_USER=omni
      POSTGRES_PASSWORD=hub
      POSTGRES_DB=omnisocial
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### ▶️ Run Locally

```bash
docker-compose up --build
```

---

## 🔁 CI/CD Integration Tips

- Validate build using `docker-compose -f docker-compose.yml config`
- Use `docker-compose.yml` in GitHub Actions (self-hosted runners or CI)
- Add `.env.example` and `.dockerignore`

---

## 🔗 Related Files

- `.github/workflows/test.yml`
- `.github/workflows/wiki-sync.yml`
- `Dockerfile`
- `docker-compose.yml`

---

## 📦 Next Steps

- Enable required checks for `main` branch
- Auto-release Docker images to GHCR or Docker Hub
- Trigger deploy to Vercel, Render, or Railway

