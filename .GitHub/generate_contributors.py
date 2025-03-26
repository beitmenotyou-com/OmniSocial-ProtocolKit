#!/usr/bin/env python3

import requests
import os

REPO = "beitmenotyou-com/omnisocial-hub"
GITHUB_API = f"https://api.github.com/repos/{REPO}/contributors"
OUTPUT_FILE = "CONTRIBUTORS.md"

def fetch_contributors():
    headers = {}
    token = os.getenv("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"token {token}"

    response = requests.get(GITHUB_API, headers=headers)
    if response.status_code != 200:
        raise Exception(f"GitHub API error: {response.status_code}")
    return response.json()

def write_contributors(contributors):
    with open(OUTPUT_FILE, "w") as f:
        f.write("# 🏗 Hall of Builders

")
        f.write("Thanks to all the amazing contributors of OmniSocial Hub:

")
        for user in contributors:
            login = user["login"]
            url = user["html_url"]
            f.write(f"- [@{login}]({url})
")

if __name__ == "__main__":
    try:
        contributors = fetch_contributors()
        write_contributors(contributors)
        print(f"✅ {OUTPUT_FILE} updated with {len(contributors)} contributors.")
    except Exception as e:
        print(f"❌ Error: {e}")
