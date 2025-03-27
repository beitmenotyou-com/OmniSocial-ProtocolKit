# 🔍 Webfinger Support

OmniSocial Hub includes Webfinger support for user discovery via identifiers like `@user@domain`.

## 📌 Purpose

Resolve federated user handles into profile metadata.

## 🛠 Usage

**Endpoints:**
- `GET /.well-known/webfinger?resource=acct:user@domain.com`

## 🔄 Integration Notes

- Required for ActivityPub federation
- Parses resource to find actor or DID
