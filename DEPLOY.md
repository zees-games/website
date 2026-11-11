# Deploying zeesgames.com

The site is one Docker image (`Dockerfile`): Astro builds `dist/` and `dist-nginx/moved.map`, and nginx serves them on `127.0.0.1:${BIND_PORT}` (default 8010). The host's nginx terminates TLS for `zeesgames.com` in front of it, behind Cloudflare. Everything the container needs is in the image and `.env` (the README's Deploy section lists what `.env` holds).

Run these on the web host, in the site's checkout, as the user that owns it.

## Release: the moved game and maps pages (2026-11)

This release sends the game pages and maps pages of the four games with their own site (Fatal Contact, Airdrift, Playlot, Prop Hunt) to that site with a 301, in every locale and under every former slug: `/<lang>/<slug>` to `<site>/`, `/<lang>/<slug>/maps` to `<site>/maps`. Every link on this site to those games now goes straight to their site. Their server pages (`/<app>/s/<id>`, e.g. `/prop-hunt/s/ph01`) stay here. The maps redirects came with `a771abd`, the game pages with the commit after `f8d485b`; the release also fixes the 404 page's language menu. Both live in the image (the container's nginx config and the generated `moved.map`), so rebuilding the image is the whole deploy; the host's nginx config does not change.

### 1. Update and build

```sh
git fetch origin
git status --short          # must print nothing
git merge --ff-only origin/main
git log --oneline -1        # note the commit you deploy, and the one before it for a rollback
docker compose build        # runs astro check and the static build inside the image
```

A type error or a missing translation fails the build; nothing live changes before step 2.

### 2. Swap the container

```sh
docker compose up -d                  # recreates the app container from the new image
docker compose ps                     # app: running
docker compose logs --tail=20 app     # nginx started, no [emerg]
docker compose exec app nginx -t      # the rendered config and moved.map parse
```

### 3. Reload the host's nginx

This release does not change the host's config, so this only confirms it still parses:

```sh
sudo nginx -t && sudo systemctl reload nginx
```

### 4. Check the live site

The test reads the moved paths from a local build of the same commit, then asks the live host for each one:

```sh
npm ci
npm run build
npm run test:redirects -- https://zeesgames.com
```

It must end with `nginx: N of N answers right` and `ok`. For every moved path (each locale, current and former slugs, with and without the trailing slash and `index.html`) it wants exactly one 301 whose `Location` is the game site's home page (for a game page) or its `/maps` (for a maps page), with the query string kept and no fragment of its own. Because the `Location` carries no fragment, the browser keeps the visitor's `#<map id>` across the redirect, and the game site turns `/maps#<id>` into `/maps/<id>`. The test also wants a 200 from a game page and a maps page that did not move and from a server page of a moved game, and a 404 from a missing page whose language menu links to no `/<lang>/404`.

Spot checks by hand:

```sh
# one hop to the game's site, query kept
curl -sI 'https://zeesgames.com/de/fatal-contact/maps?ref=x' | grep -iE '^(HTTP|location)'
#   HTTP/2 301   location: https://fatalcontact.net/maps?ref=x
# a former slug goes straight there too (no hop through /fatal-contact)
curl -sI https://zeesgames.com/arena/maps/ | grep -iE '^(HTTP|location)'
#   HTTP/2 301   location: https://fatalcontact.net/maps
curl -sI https://zeesgames.com/ja/playground/maps | grep -iE '^(HTTP|location)'
#   HTTP/2 301   location: https://playlot.app/maps
# a game page goes to the site's home page, in every locale and under former slugs
curl -sI 'https://zeesgames.com/de/prop-hunt/?ref=x' | grep -iE '^(HTTP|location)'
#   HTTP/2 301   location: https://prophunt.net/?ref=x
curl -sI https://zeesgames.com/arena | grep -iE '^(HTTP|location)'
#   HTTP/2 301   location: https://fatalcontact.net/
curl -sI https://zeesgames.com/es/g2gfast/index.html | grep -iE '^(HTTP|location)'
#   HTTP/2 301   location: https://airdrift.net/
# the server pages stay here
curl -s -o /dev/null -w '%{http_code}\n' https://zeesgames.com/prop-hunt/s/ph01/   # 200
# a game without a site keeps its page
curl -s -o /dev/null -w '%{http_code}\n' https://zeesgames.com/zombie-zone/       # 200
# the 404 page: status 404, and its language menu goes to the home pages
curl -s -o /dev/null -w '%{http_code}\n' https://zeesgames.com/es/nope   # 404
curl -s https://zeesgames.com/es/nope | grep -c '/404"'                  # 0
```

In a browser, open `https://zeesgames.com/fatal-contact/maps#<a map id>`. The address bar should end on `https://fatalcontact.net/maps/<that id>`.

If Cloudflare still serves an old answer for one of these paths, purge those URLs (Caching, Custom Purge) and run the test again.

### Rolling back

```sh
git checkout <the commit noted in step 1>
docker compose build && docker compose up -d
```
