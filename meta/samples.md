# 💡 Sample Contributions

Not sure how to get started contributing to OmniSocial Hub? Here's a list of example contributions you can make — both technical and non-technical.

> All contributions are welcome. You don’t need to be an expert in decentralized protocols — just passionate about open collaboration!

---

## 🧱 Code Examples

### 🔌 Add a Protocol Plugin
- Create a new directory under `/src/protocols/`
- Implement `send`, `receive`, and `verify` handlers
- Register your plugin in the gateway bootstrap file

### 🧪 Write a Unit Test
- Add tests under `/tests/`
- Example:
```ts
import { sendActivity } from "../src/protocols/activitypub"
describe("ActivityPub Plugin", () => {
  it("sends a Create activity", async () => {
    const result = await sendActivity(...)
    expect(result.status).toBe(200)
  })
})
```

### 📘 Add OpenAPI Docs
- Annotate endpoints in `/src/gateway/routes/*.ts`
- Format: `@openapi` style comments → auto-sync to `/api-docs`

### 🔗 Improve the Gateway
- Add a new endpoint (e.g., `/v1/graph`)
- Wrap protocol handlers with schema validation

---

## ✍️ Documentation

### 📄 Add to the Wiki
- Topics: Setup guides, architecture overviews, protocol comparisons
- Submit changes to `/docs/` or directly in the GitHub Wiki

### 💬 Explain a Concept
- Add Markdown to `docs/concepts/`
- Good topics: "What is a DID?", "How ActivityPub Federation Works"

---

## 🎨 Design & Media

### 🖼️ Contribute a Banner
- Format: 1500x500 (Mastodon), 1024x512 (Bluesky)
- Themes: Cypherpunk, decentralized networks, tech freedom

### 🎨 Submit a Logo or Icon Variant
- Format: Transparent PNG or SVG
- Use brand colors: Purple `#6C5CE7`, Cyber Blue `#00B5E2`, etc.

---

## 📢 Community

### 🧵 Start a GitHub Discussion
- Share an idea or ask a question

### 📣 Signal Boost
- Mention OmniSocial on Mastodon, Bluesky, or Nostr
- Share a screenshot, banner, or your favorite feature!

### 📜 Write a Blog Post
- Topic ideas:
  - "Why I Joined the OmniSocial Project"
  - "Using OmniSocial to Bridge Mastodon and Bluesky"

---

> Contributions of all kinds matter. Start where you're comfortable — and grow from there!
