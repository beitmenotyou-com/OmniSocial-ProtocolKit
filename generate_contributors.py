#!/usr/bin/env python3
# Auto-generate Markdown contributor table using GitHub REST API

import requests

REPO = "beitmenotyou-com/omnisocial-hub"
API_URL = f"https://api.github.com/repos/{REPO}/contributors"

def fetch_contributors():
    headers = {"Accept": "application/vnd.github+json"}
    response = requests.get(API_URL, headers=headers)
    if response.status_code != 200:
        raise Exception(f"Failed to fetch contributors: {response.status_code}")
    return response.json()

def generate_markdown(contributors):
    table = "| Username | Contributions |
|----------|----------------|
"
    for user in contributors:
        login = user["login"]
        html_url = user["html_url"]
        commits = user["contributions"]
        table += f"| [@{login}]({html_url}) | {commits} commits |
"
    return "## 🔄 Auto-Generated Contributor List

" + table

if __name__ == "__main__":
    contributors = fetch_contributors()
    markdown = generate_markdown(contributors)
    with open("docs/auto-contributors.md", "w") as f:
        f.write(markdown)
    print("✅ Contributor list updated in docs/auto-contributors.md")
