cd web && docker build . -t tiby-web

docker run -it -p 3000:3000 -e CONSOLE_URL=https://app.tiby.ai/ -e APP_URL=http://127.0.0.1:5001 dify-web

docker compose build web
docker compose up -d web

CONSOLE_API_URL: ${CONSOLE_API_URL:-}
      APP_API_URL: ${APP_API_URL:-}
      SENTRY_DSN: ${WEB_SENTRY_DSN:-}
      NEXT_TELEMETRY_DISABLED: ${NEXT_TELEMETRY_DISABLED:-0}
      TEXT_GENERATION_TIMEOUT_MS: ${TEXT_GENERATION_TIMEOUT_MS:-60000}
      CSP_WHITELIST: ${CSP_WHITELIST:-}
      TOP_K_MAX_VALUE: ${TOP_K_MAX_VALUE:-}
      INDEXING_MAX_SEGMENTATION_TOKENS_LENGTH: ${INDEXING_MAX_SEGMENTATION_TOKENS_LENGTH:-}




sudo docker compose --profile certbot up -d --no-deps --force-recreate nginx

sudo docker compose exec -it certbot /bin/sh /update-cert.sh

sudo docker compose logs nginx
sudo docker compose exec nginx ls -la /etc/letsencrypt/live/app.tiby.ai/

cd /tiby.ai/docker/volumes/certbot/conf/live

cp * ~/tiby.ai/docker/nginx/ssl/

sudo docker compose run --rm certbot certonly --manual --email maninder.bawa@indiaaccelerator.co --agree-tos --expand -d sandbox.tiby.ai -d sandbox-console-api.tiby.ai -d sandbox-console.tiby.ai -d sandbox-api.tiby.ai -d sandbox-app-api.tiby.ai

sandbox.tiby.ai,sandbox-console-api.tiby.ai,sandbox-console.tiby.ai,sandbox-api.tiby.ai,sandbox-app-api.tiby.ai