# 🚦 API Gateway: Implementation & Testing Plan

This document outlines the current implementation requirements and testing roadmap for the OmniSocial Hub's modular API Gateway.

---

## 🧠 Purpose

The API Gateway acts as the unified entry point for handling all inbound and outbound protocol traffic.

- Routes protocol-specific requests to plugins (ActivityPub, AT, Nostr)
- Normalizes input and output formats
- Applies authentication, logging, and middleware
- Provides a unified OpenAPI surface for clients

---

## 🔧 Implementation Requirements

### ✅ Modular Design

- Each protocol must register routes independently
- Routes should mount under:
  - `/ap/` for ActivityPub
  - `/at/` for AT Protocol
  - `/nostr/` for Nostr

Example:
```ts
import express from 'express';
import { registerActivityPubRoutes } from '../bridges/activitypub';
const router = express.Router();

registerActivityPubRoutes(router);
app.use('/ap', router);
```

### 🔁 Middleware Layers

- `requestLogger` – logs incoming requests
- `authMiddleware` – validates API tokens or signatures
- `normalizeMiddleware` – formats requests into common format for bridge handling
- `errorHandler` – global try/catch logger

---

## 🧪 Testing Strategy

### 🧬 Unit Tests (with Jest)

Target each bridge's route file:

- `src/bridges/activitypub.test.ts`
- `src/bridges/atproto.test.ts`
- `src/bridges/nostr.test.ts`

Example:
```ts
describe('GET /ap/actor/:username', () => {
  it('should return a valid ActivityStreams actor', async () => {
    const res = await request(app).get('/ap/actor/alice@hub.com');
    expect(res.status).toBe(200);
    expect(res.body.type).toBe('Person');
  });
});
```

### 🔗 Integration Tests

Ensure routes work as expected when connected:

- Publish an ActivityPub post and validate delivery
- Create a Nostr event and verify relay push
- Read from AT repo and check normalization

### 📊 Coverage Goals

- 100% of gateway middleware tested
- At least 80% of bridge endpoints validated
- Add coverage badge to README using `jest --coverage`

---

## 🧱 Directory Structure

```
src/
├── api-gateway/
│   ├── index.ts
│   ├── middleware/
│   └── routes/
├── bridges/
├── utils/
tests/
├── api-gateway/
└── bridges/
```

---

## 🛠 Dev Tips

- Use Postman or Swagger UI to mock API flows
- Test against public Nostr relays and PDS endpoints
- Log request and response headers for debugging

---

## 📚 References

- [OpenAPI Spec](../docs/openapi.json)
- [Testing Strategy](../docs/enhanced-testing-suite.md)
- [Protocol Plugin Docs](../docs/protocols/)

