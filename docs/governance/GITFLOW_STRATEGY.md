# 🌿 GitFlow Branching Strategy

OmniSocial ProtocolKit follows the **GitFlow** branching strategy to ensure consistent, scalable, and collaborative development practices.

---

## 📌 Branch Types

| Branch      | Purpose                                      | Naming Convention |
|-------------|----------------------------------------------|--------------------|
| `main`      | Stable production-ready releases             | `main`             |
| `develop`   | Integration branch for completed features    | `develop`          |
| `feature/*` | Individual feature branches                  | `feature/xyz`      |
| `hotfix/*`  | Urgent fixes to production                   | `hotfix/login-bug` |
| `release/*` | Prep branches for deployment and tagging     | `release/v1.2.0`   |

---

## 🔀 Workflow Diagram

```
main ← hotfix/*
  ↑
release/* ← develop ← feature/*
```

---

## 🧠 Branching Workflow

1. **Start a Feature**
```bash
git checkout develop
git checkout -b feature/my-new-feature
```

2. **Finish Feature**
```bash
git checkout develop
git merge feature/my-new-feature
git branch -d feature/my-new-feature
```

3. **Start a Release**
```bash
git checkout develop
git checkout -b release/v1.0.0
```

4. **Finish a Release**
```bash
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0"
git checkout develop
git merge release/v1.0.0
git branch -d release/v1.0.0
```

5. **Hotfix**
```bash
git checkout main
git checkout -b hotfix/fix-crash
# fix code
git commit -am "fix: patch crash"
git checkout main
git merge hotfix/fix-crash
git checkout develop
git merge hotfix/fix-crash
git branch -d hotfix/fix-crash
```

---

## 🏷 Tagging Releases

Use semver:
```bash
git tag -a v1.2.0 -m "Release 1.2.0"
git push origin --tags
```

---

## 📚 Related

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [RELEASE_NOTES.md](./RELEASE_NOTES.md)

---

For automated releases and changelogs, see our CI/CD workflows in `.github/workflows/`.

