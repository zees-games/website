# syntax=docker/dockerfile:1

# The port nginx listens on inside the container. Declared here only so EXPOSE
# can document it; the running container reads the same value from the
# environment (see the template note in the runtime stage).
ARG INTERNAL_PORT=8010

FROM node:lts AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# `astro build` inlines every PUBLIC_* value into the static output; nothing is
# left at runtime to read them. So .env belongs to THIS step, mounted as a
# BuildKit secret rather than copied, so it never lands in a layer.
# required=false: every value has a production default, so a build with no
# .env is the production build.
RUN --mount=type=secret,id=env,target=/app/.env,required=false npm run build

FROM nginx:alpine AS runtime
ARG INTERNAL_PORT=8010
ENV INTERNAL_PORT=${INTERNAL_PORT}

# nginx's entrypoint envsubsts templates/ into conf.d/ at startup, so the
# listen port has one source of truth (.env).
COPY docker/nginx.conf.template /etc/nginx/templates/default.conf.template

# COPY merges into a directory: clear the stock welcome page first.
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE ${INTERNAL_PORT}
