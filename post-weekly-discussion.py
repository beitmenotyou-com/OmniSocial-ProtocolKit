#!/usr/bin/env python3
# Post weekly-digest.md to GitHub Discussions via GitHub GraphQL API

import os
import requests

GITHUB_TOKEN = os.getenv("GH_TOKEN")  # GitHub PAT with 'repo' + 'discussions' scope
REPO_OWNER = "beitmenotyou-com"
REPO_NAME = "omnisocial-hub"
REPO_ID = "REPLACE_WITH_YOUR_REPO_ID"
CATEGORY_ID = "REPLACE_WITH_DISCUSSION_CATEGORY_ID"  # Retrieved via GitHub GraphQL API

def post_to_discussion():
    with open("weekly-digest.md", "r") as f:
        body = f.read()

    url = "https://api.github.com/graphql"
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Content-Type": "application/json"
    }

    query = '''
    mutation CreateDiscussion($title: String!, $body: String!, $categoryId: ID!) {
      createDiscussion(input: {
        repositoryId: "%s",
        categoryId: $categoryId,
        title: $title,
        body: $body
      }) {
        discussion {
          url
        }
      }
    }
    ''' % REPO_ID

    data = {
        "query": query,
        "variables": {
            "title": "📬 Weekly Digest – Auto Post",
            "body": body,
            "categoryId": CATEGORY_ID
        }
    }

    response = requests.post(url, json=data, headers=headers)
    print("Status:", response.status_code)
    print("Response:", response.text)

if __name__ == "__main__":
    post_to_discussion()
