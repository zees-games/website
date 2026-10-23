# Copy to .env. Every PUBLIC_* value is inlined into the static pages at build
# time and ships to the browser, so none may ever be a secret. Rebuild the
# image after changing one.

# This site's own public origin (canonical URLs, Open Graph, sitemap).
PUBLIC_SITE_URL=https://zeesgames.com
# The Modding Community, which hosts and runs every game. Play buttons and game
# links point here.
PUBLIC_TMC_URL=https://moddingcommunity.com
# The Discord invite every Discord link points at.
PUBLIC_DISCORD_URL=https://dis.zeesgames.com
# The social accounts in the footer and the home page's Discord section.
PUBLIC_YOUTUBE_URL=https://www.youtube.com/@zees_games
PUBLIC_X_URL=https://x.com/zee_games
PUBLIC_FACEBOOK_URL=https://www.facebook.com/zeesgames

# Umami analytics, read when the container starts (a restart applies a change,
# no rebuild needed). Both must be set, or the pages carry no analytics at all.
# The website id is the UUID Umami shows after adding zeesgames.com as a website.
UMAMI_SRC=https://visitor.modcommunity.net/script.js
UMAMI_WEBSITE_ID=

# The container (docker-compose.yml). nginx listens on INTERNAL_PORT inside the
# container; the host publishes it on BIND_ADDR:BIND_PORT.
INTERNAL_PORT=8010
BIND_ADDR=127.0.0.1
BIND_PORT=8010
