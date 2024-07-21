import { defineConfig } from 'vitepress';
import decap, { createFolderCollection, createField } from 'vite-plugin-decap-cms';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '冬鹿苑',
  description: '冬鹿苑',
  cleanUrls: true,
  srcDir: 'src',
  base: '/', // 根據 repo 名稱設定
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'y7bqaZ8UTBYw5TCM0lFKndxqqdc56EtbvDIA4P1kSKM',
      },
    ],

    ['meta', { property: 'og:locale', content: 'zh_TW' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '冬鹿苑' }],
    [
      'meta',
      { property: 'og:description', content: 'Legislature for deermocracy' },
    ],
    ['meta', { property: 'og:image', content: '/og-image-rec.png' }],
    ['meta', { property: 'og:image:alt', content: '冬鹿苑' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1920' }],
    ['meta', { property: 'og:image:height', content: '1080' }],

    ['meta', { property: 'og:image', content: '/og-image-squ.png' }],
    ['meta', { property: 'og:image:alt', content: '冬鹿苑' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1080' }],

    ['meta', { property: 'og:image:height', content: '1080' }],
    ['meta', { property: 'og:image:height', content: '1080' }],
    ['meta', { property: 'og:image:height', content: '1080' }],
    ['meta', { property: 'og:image:height', content: '1080' }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: 'summary' }],
    ['meta', { property: 'twitter:title', content: '冬鹿苑' }],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'Legislature for deermocracy.',
      },
    ],
    ['meta', { property: 'twitter:image', content: '/og-image-squ.png' }],

    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    // - Google Analytics
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-RGQ2LY7FEL',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XXXXXXXXXX');",
    ],
    // - Google Tag Manager
    [
      'script',
      {},
      "(function(w,d,s,l,i){w[l]=w[l]||[];\nw[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\nvar f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\nj.async=true;\nj.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-55NGJN7L');",
    ],
  ],
  appearance: 'force-dark',
  themeConfig: {
    siteTitle: '冬鹿苑',
    nav: [
      { text: '行前準備', link: '/preparation' },
      { text: '現場行動指南', link: '/guide' },
      { text: '時程表', link: '/guide/#時程表' },
      { text: '集會地圖', link: '/guide/#集會地圖' },
      { text: '物資庫存', link: '/supplies' },
      { text: '關於青鳥行動', link: '/action' },
      { text: '關於我們', link: '/about' },
    ],
    // sidebar: [
    //   {
    //     text: '目錄',
    //     items: [
    //       {
    //         text: '行前準備',
    //         link: '/preparation',
    //       },
    //       { text: '現場行動指南', link: '/guide' },
    //       { text: '關於青鳥行動', link: '/action' },
    //       { text: '關於我們', link: '/about' },
    //     ],
    //   },
    // ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs><style>.cls-1{fill:#06c755;}.cls-2{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="LINE_LOGO" data-name="LINE LOGO"><rect class="cls-1" width="320" height="320" rx="72.14"/><path class="cls-2" d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z"/><path class="cls-1" d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z"/><path class="cls-1" d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z"/><rect class="cls-1" x="128.73" y="121.85" width="11.64" height="50.64" rx="2.04"/><path class="cls-1" d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z"/></g></g></svg>',
        },
        link: 'https://line.me/ti/g2/ghX7pY3Y-3Pmtoj9tFcnaLdXy2uc2WWagbpAeg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/VVhYNxfCf2',
      },
    ],
    footer: {
      message:
        '• 2024 立院漫步 • 2024 521捍衛民主陣線 •<br>本網站由 立院漫步網站組 營運更新',
      copyright:
        'Released under the MIT License. Copyright © 2024-present Deermocracy',
    },
  },
  markdown: {
    container: {
      infoLabel: ' ',
      tipLabel: ' ',
      warningLabel: ' ',
      dangerLabel: ' ',
      detailsLabel: '目錄',
    },
  },
  vite: {
    plugins: [
      decap({
        config: {
          backend: {
            name: 'git-gateway',
          },
          collections: [
            createFolderCollection({
              name: 'blog',
              label: 'Blog',
              fields: [
                createField('markdown', { name: 'body'})
              ]
            })
          ]
        }
      })
    ]
  }
});
