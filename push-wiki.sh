#!/bin/bash

# Set your GitHub repo name
REPO="omnisocial-hub"
USER="beitmenotyou-com"
WIKI_REPO="git@github.com:$USER/$REPO.wiki.git"

# Clone the wiki repo
rm -rf tmp-wiki-clone
git clone $WIKI_REPO tmp-wiki-clone

# Copy over content from wiki-content/
cp -r wiki-content/* tmp-wiki-clone/

# Commit and push
cd tmp-wiki-clone
git add .
git commit -m "📚 Sync Wiki from /wiki-content"
git push origin master

echo "✅ GitHub Wiki updated successfully."
