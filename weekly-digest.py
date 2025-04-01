#!/usr/bin/env python3
# Generates a weekly changelog digest from GitHub issues and PRs

import requests
from datetime import datetime, timedelta

REPO = "beitmenotyou-com/omnisocial-hub"
GITHUB_API = f"https://api.github.com/repos/{REPO}/issues"
ONE_WEEK_AGO = (datetime.utcnow() - timedelta(days=7)).isoformat() + "Z"

headers = {"Accept": "application/vnd.github+json"}

def fetch_recent_activity():
    params = {
        "since": ONE_WEEK_AGO,
        "state": "all",
        "sort": "created",
        "direction": "desc"
    }
    response = requests.get(GITHUB_API, headers=headers, params=params)
    if response.status_code != 200:
        raise Exception("GitHub API Error:", response.status_code)
    return response.json()

def generate_digest(items):
    digest = "## Weekly Digest – " + datetime.utcnow().strftime("%Y-%m-%d") + "\n\n"
    for item in items:
        label_str = ", ".join([label['name'] for label in item.get("labels", [])])
        digest += f"- [{item['title']}]({item['html_url']}) ({label_str})\n"
    return digest

if __name__ == "__main__":
    items = fetch_recent_activity()
    digest_md = generate_digest(items)
    with open("weekly-digest.md", "w") as f:
        f.write(digest_md)
    print("✅ weekly-digest.md created.")
