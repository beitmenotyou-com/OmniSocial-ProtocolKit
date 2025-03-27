#!/bin/bash
# Uploads key folders to GitHub and commits them
git init
git remote add origin https://github.com/YOUR_USERNAME/omnisocial-hub.git
git checkout -b main
git add .
git commit -m "Initial OmniSocial Hub upload"
git push -u origin main
