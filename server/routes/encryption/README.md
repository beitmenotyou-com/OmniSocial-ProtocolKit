# Encryption API

This folder includes two routes for OpenPGP-based encryption and decryption.

## Endpoints

### POST /api/encryption/encrypt
- Body: `{ "message": "text", "publicKey": "armored PGP key" }`
- Returns: `{ "encrypted": "..." }`

### POST /api/encryption/decrypt
- Body: `{ "encrypted": "text", "privateKey": "armored key", "passphrase": "..." }`
- Returns: `{ "decrypted": "..." }`
