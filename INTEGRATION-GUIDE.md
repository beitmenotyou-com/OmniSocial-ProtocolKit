# 🧭 OmniSocial ProtocolKit – Complete File Integration Guide

Welcome to the all-in-one reference for setting up, deploying, and navigating the **OmniSocial ProtocolKit** project across GitHub, Pages, Wiki, and CI/CD.

---

## 📦 ZIP OVERVIEW

| File                                             | Purpose                                                       |
|--------------------------------------------------|----------------------------------------------------------------|
| `omnisocial-hub-core-files.zip`                 | Full repo: source code, scripts, configs, wiki, onboarding     |
| `omnisocial-hub-docs-site.zip`                  | GitHub Pages static docs in `/docs/`                           |
| `omnisocial-hub-tools-community.zip`            | Community tools, GitHub Actions, templates, test starter       |
| `omnisocial-hub-ultimate-complete.zip`          | Everything combined in one ZIP (code + docs + tools + outreach) |
| `omnisocial-hub-final-outreach-complete.zip`    | Launch-ready outreach assets + announcement templates          |

---

## 📁 FILE STRUCTURE

### 🗂 Root of Repo

```
README.md
LICENSE.md
VISION.md
ROADMAP.md
SUPPORT.md
CONTRIBUTORS.md
CITATION.cff
THANKS.md
CHANGELOG.md
DEVELOPER-ONBOARDING.md
.env.example
package.json / tsconfig.json
Dockerfile / docker-compose.yml
generate_contributors.py
weekly-digest.py
post-weekly-discussion.py
render-deploy.sh
push-wiki.sh
```

### 📁 /docs (GitHub Pages Site)

All Markdown files here are auto-rendered via GitHub Pages.

- `index.md` → homepage
- `getting-started.md`, `tech-stack.md`, `api-gateway.md`
- `openapi.html` → Swagger UI
- `_data/navigation.yml` → sidebar for docs site

### 📁 /wiki-content (GitHub Wiki Mirror)

- Mirrors core guides and proposal info from `/docs`
- Pushed to `https://github.com/your-repo/wiki` via `push-wiki.sh` or GitHub Action

### 📁 .github/

- `ISSUE_TEMPLATE/` → templates for proposals, bugs, first contributions
- `workflows/` → GitHub Actions CI/CD, Wiki Sync, Weekly Digest
- `FUNDING.yml`, `CODEOWNERS`

### 📁 /tests

Starter files for TypeScript testing (Jest)

### 📁 /.vscode

Project-wide VSCode config (formatting, terminal, lint)

---

## 🔄 AUTOMATION HIGHLIGHTS

| Task                         | Tool                                      |
|------------------------------|-------------------------------------------|
| CI build + test              | `.github/workflows/ci.yml`                |
| Weekly contributor digest    | `weekly-digest.py` + `ci.yml`             |
| Post digest to Discussions   | `post-weekly-discussion.py`               |
| Auto-sync GitHub Wiki        | `push-wiki.sh` + `wiki-sync.yml`          |
| Generate contributor stats   | `generate_contributors.py`                |

---

## 🧱 CONTRIBUTOR EXPERIENCE

- Run `npm install`, `npm run dev`, or `docker-compose up`
- Edit or add files in `docs/` for GitHub Pages site
- Edit or add files in `wiki-content/` to sync the GitHub Wiki
- Use `first_contribution.md` to onboard new devs
- PR templates and Discussion posts streamline collaboration

---

## 🛡 Badges to Add to README

```md
![Wiki Sync Ready](https://img.shields.io/badge/Wiki%20Auto--Sync-Enabled-brightgreen?logo=githubactions&style=flat-square)
![Weekly Digest](https://img.shields.io/badge/Weekly%20Digest-Auto--Generated-blueviolet?style=flat-square)
```

---

You're now ready to run, contribute to, and expand OmniSocial ProtocolKit with clarity and power.  
For questions, check `SUPPORT.md` or start a Discussion thread.

