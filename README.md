# Helpdesk Docs («Heldesk Service»)

Веб-додаток документації технічної підтримки

## Передумови

- Git - [Завантажте та встановіть Git](https://git-scm.com/downloads).
- Node.js - [Завантажте та встановіть Node.js](https://nodejs.org/en/download/) і менеджер пакетів npm.

### Завантаження

```bash
git clone
```

### Встановлення модулів NPM

```bash
$ npm install
```

### Змінні проекту

| Ключ                 | Коментар          |
| -------------------- | ----------------- |
| `VITE_APP_BASE_URL`  | HELPDESK URL      |
| `VITE_API_BASE_URL`  | API HELPDESK URL  |
| `VITE_DOCS_BASE_URL` | DOCS HELPDESK URL |

### Компіляція та гаряче перезавантаження для розробки

```bash
$ npm run dev
```

### Компіляція та мінімізація для виробництва

```bash
npm run build
```

### Запустити додаток

```bash
npm run preview
```

### Перевікра з [ESLint](https://eslint.org/)

```bash
npm run lint
```

### Формат з [Prettier](https://prettier.io/)

```bash
npm run format
```

Після запуску програми на порту (5173 за замовчуванням) ви можете
відкрити у службу підтримки браузера, ввівши http://localhost:5173/.
