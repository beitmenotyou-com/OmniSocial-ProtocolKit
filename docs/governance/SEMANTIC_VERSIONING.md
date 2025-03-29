# 📦 Semantic Versioning & Releases

OmniSocial ProtocolKit follows [Semantic Versioning 2.0.0](https://semver.org/) to provide clarity and consistency across versions.

---

## 🔢 Semantic Version Format

```
MAJOR.MINOR.PATCH
```

| Type   | Meaning                                | Example     |
|--------|----------------------------------------|-------------|
| MAJOR  | Breaking changes                       | `1.0.0`     |
| MINOR  | Backward-compatible feature additions  | `1.1.0`     |
| PATCH  | Backward-compatible bug fixes          | `1.1.1`     |

---

## 🏷️ Creating a Release

To publish a new version:

1. Push code changes to `main`
2. Go to GitHub > **Releases**
3. Click **Draft a new release**
4. Enter tag (e.g. `v1.0.0`)
5. Add release notes (changelog or highlights)
6. Publish the release

---

## 🧪 Example Workflow

```bash
# Merge release branch
git checkout main
git merge release/v1.2.0

# Tag and push
git tag -a v1.2.0 -m "Release v1.2.0: Adds Nostr relay sync"
git push origin v1.2.0
```

---

## ✅ GitHub Actions (Optional)

CI/CD can publish release builds or changelogs when a tag is pushed:

```yaml
on:
  push:
    tags:
      - 'v*.*.*'
```

---

## 📁 Where to Track Releases

- View all official versions: https://github.com/beitmenotyou-com/OmniSocial-ProtocolKit/releases
- Add changelogs to: `/docs/releases/CHANGELOG.md`

---

## 🧩 Related Docs

- [GitFlow Branching](./GITFLOW_STRATEGY.md)
- [CI/CD Automation](../devops/CI-CD-DOCKER-ACTIONS.md)

