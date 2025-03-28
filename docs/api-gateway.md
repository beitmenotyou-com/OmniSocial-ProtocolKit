# 🌐 OmniSocial Hub API Gateway

The **API Gateway** in OmniSocial Hub is the heart of the platform — a unified entry point that allows clients to interact with federated social protocols (like ActivityPub, AT Protocol, Nostr) using consistent RESTful APIs.

---

## 🧩 Purpose
- **Unify disparate protocols** under a shared API surface
- **Standardize endpoints** for identity, posts, social graphs, inboxes, and feeds
- **Route requests** to the appropriate protocol modules

---

## 🏗️ Architecture Overview

```
Client Apps ─┬─> /v1/identity ─┬─> Webfinger ↔ DIDs
             ├─> /v1/inbox   ─┬─> ActivityPub ↔ Nostr
             ├─> /v1/graph   ─┬─> AT Protocol ↔ ActivityPub
             └─> /v1/feed    ─┬─> Aggregated Protocol Feeds
```

Each endpoint exposes a clear contract using OpenAPI and routes internally to the correct plugin module under `/protocols`.

---

## 📚 Key Endpoints

| Route             | Description                                     | Protocols         |
|------------------|-------------------------------------------------|-------------------|
| `GET /v1/identity/:id` | Resolve identity via DID/Webfinger               | DID, Webfinger     |
| `POST /v1/inbox`       | Accepts and forwards federated activities       | ActivityPub, Nostr |
| `GET /v1/graph/:id`    | Traverse a user's social graph                  | AP, AT Protocol    |
| `POST /v1/post`        | Unified post creation across protocols          | AP, AT, Nostr      |
| `GET /v1/feed`         | Aggregated timeline from federated protocols    | All                |

---

## 🧠 Internal Flow

Each API route calls an internal handler function that:
1. Validates input via schemas
2. Resolves appropriate protocol module (based on user identity or endpoint logic)
3. Executes the federated action
4. Returns a normalized result to the client

---

## 🔐 Authentication
- Based on public key / signature headers (Nostr)
- DID-based auth (ATProto / DID:Web)
- Session tokens planned for client convenience

---

## 📖 OpenAPI Docs
Visit `http://localhost:3000/api-docs` while running the dev server to explore all endpoints interactively using Swagger UI.

---

## 🧪 Dev Tips
- All gateway routes live in `/src/gateway/routes/`
- Shared request logic: `/src/gateway/handlers/`
- Each protocol handles its own translation logic internally

---

> The gateway abstracts complexity so developers can build apps without protocol-specific code.

