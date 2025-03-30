# End-to-End Encryption in OmniSocial ProtocolKit

## Overview
This module adds support for OpenPGP-based encryption and decryption using public/private key pairs.

## API Usage

### POST /api/encryption/encrypt
Encrypts a plain text message with a PGP public key.

### POST /api/encryption/decrypt
Decrypts a message with a private key and optional passphrase.

## How to Use
1. Generate a PGP key pair (use GPG CLI or web tools).
2. Store your keys securely.
3. Use these APIs to encrypt before sending and decrypt after receiving.

> Works great with messaging, chat, or DM systems.
