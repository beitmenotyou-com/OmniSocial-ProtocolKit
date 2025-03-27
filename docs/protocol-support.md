# 🧩 Modular Protocol Support

OmniSocial Hub is designed around the concept of **pluggable protocol modules**. Each federated protocol is isolated into its own route, logic, and service layer — making it easy to extend, maintain, and scale.

---

## 💡 Why Modular Design?

- **Separation of Concerns:** Each protocol (e.g. ActivityPub, Nostr, AT Protocol) handles its own inputs and outputs.
- **Extendability:** Easily add new protocols or bridges by creating a new module.
- **Reusability:** Common logic (like identity resolution or storage) is shared across protocols.
- **Developer Friendly:** Focus on the protocol you care about without breaking others.

---

## 📦 Current Protocols Supported

| Protocol      | Description                                     | Status     |
|---------------|-------------------------------------------------|------------|
| **ActivityPub** | Posts, followers, inbox/outbox interactions   | ✅ Stubbed |
| **AT Protocol** | Bluesky-style repo sync, identity portability | ✅ Stubbed |
| **Nostr**       | Event publishing & relay communication        | ✅ Stubbed |
| **Webfinger**   | Domain-based user identity lookup             | ✅ Working |
| **DIDs**        | Decentralized identity document resolver      | ✅ Working |
| **Micropub/Webmention** | IndieWeb publishing + response tracking | ✅ Stubbed |

---

## 🗂 Folder Structure

```
src/
├── routes/
│   ├── activitypub.ts
│   ├── atproto.ts
│   ├── nostr.ts
│   ├── webfinger.ts
│   └── did.ts
├── services/
│   ├── activitypub.ts
│   ├── atproto.ts
│   ├── nostr.ts
│   └── ...
```

Each file in `routes/` maps to a protocol-specific API handler. Each file in `services/` contains the logic and structure behind the interaction.

---

## ⚙️ How to Add a Protocol

1. Create a new route file in `src/routes/`
2. Define the router with `.get()` or `.post()` handlers
3. Add business logic to a matching file in `src/services/`
4. Register the new router in `src/index.ts`

Example:

```ts
// routes/myprotocol.ts
import express from "express"
const router = express.Router()

router.get("/", (_, res) => {
  res.send("My Protocol Active")
})

export default router
```

---

## 🔌 Coming Soon

- `matrix.ts` for federated messaging
- `rss.ts` for syndication feeds
- Protocol bridges: e.g., ActivityPub ↔ Nostr

---

## 📎 Related Docs

- [Tech Stack Overview](./tech-stack.html)
- [API Gateway](./api-gateway.html)
- [Getting Started](./getting-started.html)

---

_Modular, extensible, and future-facing — just like the federated web should be._
