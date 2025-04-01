# 📡 AT Protocol Plugin

This plugin provides support for the AT Protocol, developed by Bluesky, enabling identity portability and lexicon-based social data interaction.

## 📌 Purpose

Integrate with Bluesky and other AT-based apps using repo-based portable identities.

## 📦 Features

- Resolve DID-based identities
- Create and retrieve posts
- Translate lexicons to internal formats

## 🛠 Usage

**Endpoints:**
- `GET /at/profile/:did` – Fetch AT Profile
- `POST /at/post` – Create a new AT Protocol post

## 🔄 Integration Notes

- Utilizes DID resolution
- Encodes content with CAR/CBOR objects
- Posts are stored as append-only data in PDS
