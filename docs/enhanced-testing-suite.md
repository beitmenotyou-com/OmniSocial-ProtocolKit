# 🧪 Enhanced Testing Suite

A robust testing suite ensures that OmniSocial Hub is stable, reliable, and safe for federation.

---

## ✅ Goals

- Unit tests for each protocol module (ActivityPub, AT Protocol, Nostr)
- Integration tests for API Gateway endpoints
- Test coverage reporting integrated with GitHub Actions
- Continuous feedback on code quality and test coverage

---

## 📁 Test Structure

Organize your tests like this:

```
tests/
├── unit/
│   ├── activitypub.test.ts
│   ├── atprotocol.test.ts
│   └── nostr.test.ts
├── integration/
│   ├── gateway.test.ts
│   └── api-routes.test.ts
├── helpers/
│   └── test-utils.ts
└── jest.config.ts
```

---

## 🛠️ Install Dependencies

Use Jest with TypeScript support:

```bash
npm install --save-dev jest ts-jest @types/jest supertest
```

---

## 🚦 Writing Your First Unit Test

Example (`activitypub.test.ts`):

```typescript
import { normalizeActivityPubActor } from '../../src/bridges/activitypub';

describe('ActivityPub Module', () => {
  it('should normalize ActivityPub actor data', () => {
    const actorData = { id: 'https://example.com/users/test', type: 'Person', name: 'Test User' };
    const normalized = normalizeActivityPubActor(actorData);

    expect(normalized).toHaveProperty('id', actorData.id);
    expect(normalized).toHaveProperty('type', 'user');
    expect(normalized).toHaveProperty('username', 'Test User');
  });
});
```

---

## 🌐 Writing an Integration Test

Example (`gateway.test.ts`):

```typescript
import request from 'supertest';
import app from '../../src/app';

describe('Gateway API', () => {
  it('should respond to ActivityPub actor requests', async () => {
    const response = await request(app).get('/ap/actor/test@domain.com');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});
```

---

## ✅ Jest Config (`jest.config.ts`):

```typescript
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts']
};
```

---

## 📊 Test Coverage Reports via GitHub Actions

Update your `.github/workflows/ci.yml`:

```yaml
name: CI + Test Coverage

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm install

      - run: npm test -- --coverage

      - uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          files: coverage/clover.xml
```

---

## 🚀 Integrating with Codecov

- Sign up at [Codecov](https://about.codecov.io/sign-up/)
- Add your repo to Codecov and get your `CODECOV_TOKEN`
- Add this token to GitHub Secrets as `CODECOV_TOKEN`

Coverage reports will appear automatically on pull requests and commits.

---

## 📍 Next Steps:

- Implement additional unit/integration tests
- Monitor coverage on PRs
- Aim for >80% test coverage across all core modules

