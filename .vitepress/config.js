import { defineConfig, loadEnv } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

const {
  VITE_APP_BASE_URL = '/',
  VITE_API_BASE_URL = '/api',
  VITE_DOCS_BASE_URL = '/docs'
} = loadEnv('', process.cwd());

const NAVBAR = [
  { text: 'Документація', link: '/docs/' },
  {
    text: 'Додатки',
    items: [
      { text: 'Helpdesk', link: VITE_APP_BASE_URL, target: '_blank', rel: 'noopener noreferrer' },
      {
        text: 'API Helpdesk',
        link: VITE_API_BASE_URL,
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      {
        text: 'HD Довідник',
        link: VITE_DOCS_BASE_URL,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ]
  }
];

const SIDEBAR = [
  {
    items: [{ text: 'Вступ', link: '/docs/index' }]
  },
  {
    items: [{ text: 'Календар подій', link: '/docs/events-calendar' }]
  },
  {
    items: [
      {
        text: 'Мережева інформація',
        collapsed: false,
        items: [{ text: 'Мережева інформація', link: '/docs/network-info' }]
      }
    ]
  },
  {
    items: [
      {
        text: 'Технічна підтримка',
        collapsed: false,
        items: [{ text: 'Технічна підтримка', link: '/docs/technical-support' }]
      }
    ]
  },
  {
    items: [
      {
        text: 'ПК SysInspector',
        collapsed: false,
        items: [{ text: 'ПК SysInspector', link: '/docs/pc-sys-inspector' }]
      }
    ]
  }
];

export default withPwa(
  defineConfig({
    base: '/docs',

    appearance: true,
    cleanUrls: true,
    lastUpdated: false,

    lang: 'uk-UA',
    title: 'Довідник',
    titleTemplate: 'HD Довідник • :title',
    description: 'Керівництво з використання сервісу сервісної підтримки користувачів',

    head: [
      ['meta', { property: 'name', content: 'Dmitrii Baklai' }],
      ['meta', { property: 'keywords', content: 'helpdesk, documentation' }],
      ['meta', { property: 'language', content: 'uk-UA' }],
      [
        'meta',
        {
          property: 'og:title',
          content:
            'HD Довідник • Керівництво з використання сервісу сервісної підтримки користувачів'
        }
      ],
      [
        'meta',
        {
          property: 'og:description',
          content: 'Керівництво з використання сервісу сервісної підтримки користувачів'
        }
      ],
      ['meta', { property: 'og:url', content: `${VITE_DOCS_BASE_URL ? VITE_DOCS_BASE_URL : '/'}` }],
      ['meta', { property: 'og:type', content: 'article' }],
      [
        'meta',
        {
          property: 'og:site_name',
          content:
            'HD Довідник • Керівництво з використання сервісу сервісної підтримки користувачів'
        }
      ],
      ['meta', { property: 'og:image', content: `${VITE_DOCS_BASE_URL || ''}/img/logo.svg` }],
      ['meta', { property: 'og:image:width', content: '512' }],
      ['meta', { property: 'og:image:height', content: '512' }],
      ['meta', { property: 'og:keywords', content: 'helpdesk, documentation' }],
      ['meta', { property: 'og:locale', content: 'uk-UA' }],

      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    markdown: {
      theme: 'vitesse-dark',
      languages: ['cmd', 'bat', 'vb', 'powershell', 'ps', 'ps1'],
      lineNumbers: false
    },

    themeConfig: {
      logo: { src: '/img/logo.svg', alt: 'HD' },

      siteTitle: 'HD Довідник',

      outline: [2, 3],

      outlineTitle: 'На цій сторінці',

      nav: NAVBAR,

      sidebar: {
        '/docs/': SIDEBAR || []
      },

      aside: true,

      editLink: {
        pattern: 'https://github.com/baklai/helpdesk-docs/edit/main/src/:path',
        text: 'Редагувати цю сторінку на GitHub'
      },

      lastUpdatedText: 'Останнє оновлення',

      lastUpdated: {
        text: 'Останнє оновлення',
        formatOptions: { dateStyle: 'short' }
      },

      docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка'
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/baklai/helpdesk-docs' }],

      footer: {
        message:
          'Випущено за ліцензією <a href="https://github.com/baklai/helpdesk-docs/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a>.',
        copyright: `Всі права збережено © 2022-${new Date().getFullYear()} <a href="https://github.com/baklai" target="_blank" rel="noopener noreferrer">Dmitrii Baklai</a>`
      },

      darkModeSwitchLabel: 'Зовнішній вигляд',

      sidebarMenuLabel: 'Меню',

      returnToTopLabel: 'Повернутися до початку',

      langMenuLabel: 'Змінити мову',

      search: {
        provider: 'local',
        options: {
          disableDetailedView: false,
          disableQueryPersistence: false,
          translations: {
            button: {
              buttonText: 'Пошук',
              buttonAriaLabel: 'Показати детальний список'
            },
            modal: {
              displayDetails: 'Показати детальний список',
              resetButtonTitle: 'Скинути пошук',
              backButtonTitle: 'Закрити пошук',
              noResultsText: 'Немає результатів для',
              footer: {
                selectText: 'вибрати',
                navigateText: 'для навігації',
                closeText: 'закрити'
              }
            }
          }
        }
      },

      externalLinkIcon: false,

      notFound: {
        title: 'СТОРІНКУ НЕ ЗНАЙДЕНО',
        quote:
          'Якщо ви не зміните свій напрямок і продовжите шукати, ви можете опинитися там, куди прямуєте.',
        linkLabel: 'йти додому',
        linkText: 'На головну сторінку',
        code: '404'
      }
    },

    srcExclude: ['**/README.md'],

    pwa: {
      outDir: '.vitepress/dist',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'HD Довідник • Керівництво з використання сервісу сервісної підтримки користувачів',
        short_name: 'HD Довідник',
        description: 'Керівництво з використання сервісу сервісної підтримки користувачів',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/img/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  })
);
