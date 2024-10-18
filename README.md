# Helpdesk DOCS V1 («Heldesk Service»)

Helpdesk Docs of technical support

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://docs.docker.com/engine/install/).

## Downloading

```bash
git clone
```

## Installing NPM modules

```bash
# install dependencies
$ npm install
```

## Project env variables

| Key    | Comment             |
| ------ | ------------------- |
| `PORT` | API port (optional) |
| `HOST` | API host (optional) |

## Running the app

```bash
# production mode
$ npm run start

# development watch mode
$ npm run start:dev

# debug mode
$ npm run start:prod
```

### Compile and Minify for Production

```bash
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```bash
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```bash
npm run format
```

### Quick Start

```bash
npm run start
```

After starting the app on port (5173 as default) you can open
in your browser helpdesk docs by typing http://localhost:5173/.

## Docker Quick Start

```bash
# Create custom docker compose file compose.yaml
services:
  docs:
    image: baklai/helpdesk-docs:latest
    volumes:
      - ${STORAGE_PATH}:${STORAGE_PATH}
    env_file: .env
    environment:
      - NODE_ENV=production
    ports:
      - 8080:8080
    restart: unless-stopped
    container_name: helpdesk-docs
```

```bash
# Start application
docker compose up -d
```

```bash
# Logs application
docker logs --tail 30 -f helpdesk-docs
```

```bash
# Restart application
docker compose down && docker rmi baklai/helpdesk-docs && docker compose up -d && docker logs -f helpdesk-docs
```

In the terminal, run the following command to stop the application.

```bash
# Delete application
docker compose down
```

After starting the app on port (5173 as default) you can open
in your browser helpdesk by typing http://localhost:5173/.

## Build Docker images

```bash
# Build docker image
docker compose build

# Build docker multiplatform images and Pushes images to the repository
docker compose build --builder multibuilder --no-cache --push
```

If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:

```bash
# Make sure you have buildx installed. If it is not installed, install it as follows
docker buildx install

# Build and switch to buildx builder
docker buildx create --platform linux/amd64,linux/i386,linux/arm/v5,linux/arm/v6,linux/arm/v7,linux/arm64,linux/ppc64le,linux/s390x --name multibuilder --use

# Start the builder instance
docker buildx inspect --bootstrap
```

```bash
# Use Docker registry
docker login
```
