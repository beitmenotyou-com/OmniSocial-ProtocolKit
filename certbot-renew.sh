#!/bin/bash

echo "🔄 Running Certbot renewal..."
docker-compose run --rm certbot renew --webroot --webroot-path=/var/www/certbot

echo "🔁 Reloading Nginx..."
docker-compose exec nginx nginx -s reload

echo "✅ Renewal complete."
