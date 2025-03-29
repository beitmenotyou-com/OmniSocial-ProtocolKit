# 🔍 Webfinger Support

OmniSocial ProtocolKit includes Webfinger support for user discovery via identifiers like `@user@domain`.

## 📌 Purpose

Resolve federated user handles into profile metadata.

## 🛠 Usage

**Endpoints:**
- `GET /.well-known/webfinger?resource=acct:user@domain.com`

## 🔄 Integration Notes

- Required for ActivityPub federation
- Parses the resource to find the actor or DID
