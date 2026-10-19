# Copy to .env. Every PUBLIC_* value is inlined into the static pages at build
# time and ships to the browser, so none may ever be a secret. Rebuild the
# image after changing one.

# This site's own public origin (canonical URLs, Open Graph, sitemap).
PUBLIC_SITE_URL=https://zeesgames.com
# The Modding Community, which hosts and runs every game. Play buttons and game
# links point here.
PUBLIC_TMC_URL=https://moddingcommunity.com

# The container (docker-compose.yml). nginx listens on INTERNAL_PORT inside the
# container; the host publishes it on BIND_ADDR:BIND_PORT.
INTERNAL_PORT=8010
BIND_ADDR=127.0.0.1
BIND_PORT=8010
