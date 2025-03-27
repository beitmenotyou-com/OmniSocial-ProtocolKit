# 🛠️ Troubleshooting

### Problem: Docker container won't start

Check that `.env` exists and required ports are free.

### Problem: API route returns 404

Ensure the correct protocol path prefix is used:
- `/ap/` for ActivityPub
- `/at/` for AT Protocol
- `/nostr/` for Nostr

### Still stuck?

Ask in [GitHub Discussions](https://github.com/beitmenotyou-com/omnisocial-hub/discussions) or open an issue.
