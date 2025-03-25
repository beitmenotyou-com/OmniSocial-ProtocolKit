#!/bin/bash
# Deploy OmniSocial Hub backend to Render
curl -X POST https://api.render.com/deploy/srv-xxxxxxxxxxxxx?key=YOUR_DEPLOY_KEY
echo "✅ Render deployment triggered"
