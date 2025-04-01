# 🔐 GitHub Wiki Auto-Sync Setup

This guide helps you enable automatic syncing of `/wiki-content/` to your GitHub Wiki using GitHub Actions.

---

## 🛠️ 1. Generate SSH Key (if not done yet)

On your local machine or secure server:

```bash
ssh-keygen -t ed25519 -C "omni-bot@yourdomain.com"
```

- Save it as: `~/.ssh/omni_wiki_key`
- You’ll get two files:
  - `omni_wiki_key` (private)
  - `omni_wiki_key.pub` (public)

---

## 🔐 2. Add Your Public Key to GitHub

Go to: [GitHub SSH Settings](https://github.com/settings/keys)

- Click "New SSH Key"
- Title: `OmniSocial Wiki Bot`
- Paste contents of `omni_wiki_key.pub`

---

## 🔒 3. Add Private Key as GitHub Secret

In your OmniSocial ProtocolKit GitHub repo:

- Go to: Settings > Secrets > Actions
- Click: `New Repository Secret`
  - Name: `WIKI_PUSH_KEY`
  - Value: Paste contents of `omni_wiki_key`

---

## ✅ Done!

The `wiki-sync.yml` workflow will now push to your Wiki repo on changes to `/wiki-content/`.

To run it manually:  
Go to **Actions tab** > **Sync Wiki from wiki-content** > **Run workflow**

