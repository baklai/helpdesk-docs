# Helpdesk DOCS («Heldesk Service»)

Веб-додаток документації технічної підтримки

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

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

| Key                      | Comment           |
| ------------------------ | ----------------- |
| `VITE_URL_HELPDESK`      | HELPDESK URL      |
| `VITE_URL_HELPDESK_API`  | API HELPDESK URL  |
| `VITE_URL_HELPDESK_DOCS` | DOCS HELPDESK URL |

## Running the app

```bash
$ npm run dev
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
in your browser helpdesk docs by typing http://localhost:5173/
