# 📘 GitHub Pages + OpenAPI Documentation

OmniSocial ProtocolKit uses **GitHub Pages** for its user-friendly documentation site and **OpenAPI** for developer-focused API reference.

Together, they make this project approachable for contributors, users, and builders.

---

## 🌐 GitHub Pages Overview

GitHub Pages is used to host a static site from the `/docs` folder of the repository.

### Key Features

- Markdown-powered content
- Clean developer theme (`Slate`)
- Auto-publishes on every `main` branch commit
- No external hosting needed

### Setup

1. Ensure you have a `docs/index.md` file.
2. Include a `_config.yml` in the root with:

```yaml
remote_theme: pages-themes/slate@v0.2.0
plugins:
  - jekyll-remote-theme
```

3. Enable GitHub Pages:
   - Go to **Settings → Pages**
   - Set Source: `main` branch, `/docs` folder

### Your Site URL

```
https://<your-username>.github.io/<repo-name>/
```

For OmniSocial ProtocolKit:

```
https://beitmenotyou-com.github.io/omnisocial-hub/
```

---

## 🔍 OpenAPI Spec

OmniSocial ProtocolKit includes an API schema at:

```
docs/api/openapi.yaml
```

This file defines all your endpoints in [OpenAPI 3.0](https://swagger.io/specification/) format.

You can:
- Import it into [Swagger Editor](https://editor.swagger.io/)
- Auto-generate docs, SDKs, or tests
- Visualize endpoints for contributors

---

## 📎 Related Docs

- [Getting Started](./getting-started.html)
- [Deployment Options](./deployment-options.html)
- [CI/CD Pipeline](./github-actions-ci-cd.html)
- [Tech Stack](./tech-stack.html)

---

GitHub Pages + OpenAPI = beautiful docs + functional API views. All open. All yours.
