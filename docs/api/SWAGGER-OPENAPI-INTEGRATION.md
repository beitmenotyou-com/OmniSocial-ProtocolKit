# 📘 OpenAPI + Swagger UI Integration Guide

This guide explains how to document the OmniSocial ProtocolKit API using OpenAPI and how to serve it with Swagger UI for interactive exploration.

---

## 📌 Goals

- Generate OpenAPI 3.0 specification for all API endpoints
- Provide interactive Swagger UI at `/api-docs`
- Support Protocol bridge modularity (ActivityPub, AT, Nostr)

---

## 🔧 Step 1: Install Dependencies

In your project root:

```bash
npm install swagger-jsdoc swagger-ui-express --save
```

---

## 📝 Step 2: Add Swagger Configuration

Create `src/swagger/swaggerConfig.ts`:

```ts
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'OmniSocial ProtocolKit API',
    version: '0.1.0',
    description: 'Federated protocol API for ActivityPub, AT Protocol, Nostr and more.'
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Development server' }
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/bridges/**/*.ts', './src/api-gateway/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
```

---

## 🌐 Step 3: Mount Swagger UI in Express

In `src/api-gateway/index.ts` or your main server file:

```ts
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../swagger/swaggerConfig';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

---

## ✍️ Step 4: Add JSDoc to Your Routes

Example (in `/bridges/activitypub.ts`):

```ts
/**
 * @openapi
 * /ap/actor/{id}:
 *   get:
 *     summary: Get actor profile
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID (e.g., alice@hub.com)
 *     responses:
 *       200:
 *         description: Returns ActivityPub Actor
 */
app.get('/actor/:id', handlerFn);
```

---

## 🚀 Result

- ✅ Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to test and explore API
- 🔁 Automatically syncs to endpoint changes
- 📥 Future: auto-generate client SDKs using tools like Swagger Codegen

---

## 📚 References

- [swagger-jsdoc GitHub](https://github.com/Surnet/swagger-jsdoc)
- [OpenAPI 3.0 Spec](https://swagger.io/specification/)
- [Example bridge docs](../docs/protocols/)

