# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine AS build-docs

ARG USERNAME=baklai
ARG REPOSITORY=helpdesk-docs

RUN apk update && apk add git

WORKDIR /app

RUN git clone https://github.com/${USERNAME}/${REPOSITORY}.git .
RUN npm install

RUN rm -rf /app/.vitepress/.temp /app/.vitepress/cache

RUN npm run build

FROM node:${NODE_VERSION}-alpine AS production

ARG PORT
ARG HOST

WORKDIR /app

COPY --from=build-docs /app/.vitepress/dist/ ./docs/
