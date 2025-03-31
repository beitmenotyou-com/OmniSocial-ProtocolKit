# 🌐 Swagger UI Setup: API Explorer Implementation

This guide provides action items and implementation steps for adding Swagger UI to the OmniSocial ProtocolKit to create an interactive API explorer.

---

## 🧠 Purpose

Swagger UI serves as a developer portal for your API, allowing anyone to:

- Read and test API endpoints
- Understand parameters, responses, and error codes
- Visualize your OpenAPI documentation interactively

---

## 🔧 Implementation Steps

### ✅ Step 1: Install Required Packages

```bash
npm install swagger-jsdoc swagger-ui-express --save
```

---

### 📁 Step 2: Create Swagger Config

Create a config file at `src/swagger/swaggerConfig.ts`:

```ts
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'OmniSocial ProtocolKit API',
    version: '1.0.0',
    description: 'Unified API for ActivityPub, AT Protocol, and Nostr.'
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

### 🧩 Step 3: Serve Swagger UI in Express

In your `src/api-gateway/index.ts` or main entry point:

```ts
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../swagger/swaggerConfig';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

---

### 🧪 Step 4: Annotate Routes with OpenAPI JSDoc

Example:

```ts
/**
 * @openapi
 * /ap/actor/{id}:
 *   get:
 *     summary: Get ActivityPub Actor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User handle
 *     responses:
 *       200:
 *         description: Actor object
 */
```

---

## 🚀 Result

- ✅ Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in the browser
- 📘 API will auto-update based on route definitions
- ⚙️ Use in development, docs, or embed on GitHub Pages later

---

## 🧠 Tips

- Place this on staging/public test instance for contributors
- Add OpenAPI coverage badge later
- Consider exporting to GitHub Pages using `swagger-ui-dist` for a standalone viewer

---

## 📚 Related Docs

- [OpenAPI Integration](./SWAGGER-OPENAPI-INTEGRATION.md)
- [Enhanced Testing Guide](../enhanced-testing-suite.md)

