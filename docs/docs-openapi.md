# 📘 Documentation & OpenAPI Integration

OmniSocial Hub provides robust developer documentation using OpenAPI and Swagger UI, enabling developers to interact with and explore the platform’s RESTful API in real time.

---

## 📚 Live API Documentation

Once the project is running, Swagger UI is available at:
```
http://localhost:3000/api-docs
```
This provides an interactive browser to:
- Browse available endpoints
- Test requests/responses
- View expected request bodies
- Examine authorization headers and query params

---

## 🧬 OpenAPI Spec

OmniSocial Hub uses an auto-generated **OpenAPI 3.1 spec** file located at:
```
/src/gateway/openapi.yaml
```
This spec defines:
- Endpoint paths and operations
- Request/response schemas
- Descriptions and tags for each route
- Input validation examples

---

## 🛠️ How It Works

The API gateway is built with Express.js and integrates:
- `swagger-jsdoc`: generates spec from route comments
- `swagger-ui-express`: serves the spec at `/api-docs`

### Example (in route file):
```ts
/**
 * @openapi
 * /v1/post:
 *   post:
 *     tags:
 *       - Post
 *     summary: Create a new cross-protocol post
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PostRequest'
 *     responses:
 *       200:
 *         description: Success
 */
```

---

## 📄 Post Schema Example
```yaml
components:
  schemas:
    PostRequest:
      type: object
      properties:
        text:
          type: string
        protocols:
          type: array
          items:
            type: string
          example: ["nostr", "activitypub"]
```

---

## ✅ Best Practices
- Use Swagger UI for real-time dev testing
- Add OpenAPI annotations to all gateway routes
- Regenerate spec file on API changes

> OmniSocial Hub aims for fully documented, self-explaining APIs by default.
