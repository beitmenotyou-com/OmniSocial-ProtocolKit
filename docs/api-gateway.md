# 🚪 Express API Gateway

The OmniSocial Hub uses **Express.js** as a modular, extensible API gateway for all supported federated protocols. This architecture allows us to manage cross-protocol routes, identity resolution, content federation, and service orchestration in one unified server.

---

## 🎯 Why Express?

| Feature            | Benefit                                                   |
|--------------------|-----------------------------------------------------------|
| Minimal + Fast      | Lightweight routing layer with zero bloat                |
| Middleware-friendly | Easily compose logic and auth handlers                   |
| Protocol-agnostic   | Custom endpoints for each federated protocol             |
| TypeScript Support  | Fully typed with IntelliSense and safety in dev tooling  |

---

## 🌐 Supported Routes

Each protocol gets its own route group and handler module:

| Route                          | Description                      |
|--------------------------------|----------------------------------|
| `/activitypub`                 | Fediverse interaction endpoint   |
| `/atproto`                     | Bluesky-style account + posts    |
| `/nostr`                       | Event publication + subscription |
| `/.well-known/webfinger`       | Identity lookup                  |
| `/did/:id`                     | DID Document resolution          |
| `/webmention` / `/micropub`    | IndieWeb integration             |

---

## 🧱 API Structure

```bash
src/
├── routes/
│   ├── activitypub.ts
│   ├── atproto.ts
│   ├── nostr.ts
│   ├── webfinger.ts
│   ├── did.ts
│   ├── micropub.ts
│   └── webmention.ts
├── services/
│   ├── activitypub.ts
│   ├── nostr.ts
│   └── ...
├── index.ts          # Express app + route registration
```

---

## 🛠️ Custom Gateway Features

- Request logging and rate-limiting middleware
- Identity resolution service for `acct:`, `did:`, or public keys
- Pluggable service layer for protocol logic (e.g. `nostr.ts`)
- API auto-docs available via OpenAPI YAML

---

## 💡 Extending the Gateway

You can add new protocols easily:

1. Create a new file under `routes/`
2. Define `router.get(...)`, `router.post(...)`, etc.
3. Register it in `src/index.ts`
4. Add any service logic to `services/`

Example:

```ts
// src/routes/example.ts
import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Example Protocol Ready")
})

export default router
```

---

## 🔒 Future Additions

- Protocol-specific auth tokens
- Federation-aware rate limiting
- Webhook relays and protocol bridges
- Message queue support (Redis/NATS)

---

## 📎 Related Docs

- [Tech Stack Overview](./tech-stack.html)
- [OpenAPI Spec](./api/openapi.yaml)
- [Getting Started](./getting-started.html)

---

Built with ❤️ using **Express.js** by the Circuitry Hub Insights Collective.
