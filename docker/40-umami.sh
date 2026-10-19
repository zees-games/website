#!/bin/sh
# Run by the nginx image's entrypoint before nginx starts (docker-entrypoint.d).
# Writes the include that injects the Umami snippet into every page in place of
# the `<!--umami-->` marker, from UMAMI_SRC and UMAMI_WEBSITE_ID in .env; with
# either unset (or malformed) the include is empty and the pages carry no analytics.
set -eu

out=/etc/nginx/umami.conf
: > "$out"

src="${UMAMI_SRC:-}"
id="${UMAMI_WEBSITE_ID:-}"
if [ -z "$src" ] || [ -z "$id" ]; then
    echo "$0: UMAMI_SRC or UMAMI_WEBSITE_ID unset, analytics off"
    exit 0
fi

# Both end up inside an HTML attribute and an nginx string: accept only an
# https URL without quotes or spaces, and a UUID.
if ! printf '%s' "$src" | grep -Eq "^https://[^\"' ;<>\\\\]+$" \
    || ! printf '%s' "$id" | grep -Eqi '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'; then
    echo "$0: UMAMI_SRC must be an https URL and UMAMI_WEBSITE_ID a UUID, analytics off" >&2
    exit 0
fi

cat > "$out" <<CONF
sub_filter '<!--umami-->' '<script defer src="$src" data-website-id="$id"></script>';
sub_filter_once on;
CONF
echo "$0: Umami on ($src)"
