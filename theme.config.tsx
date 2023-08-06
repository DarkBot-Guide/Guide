import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DarkBot Guide</span>,
  project: {
    link: 'https://github.com/darkbot-reloaded/Darkbot',
  },
  chat: {
    link: 'https://discord.gg/darkbot',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'pl', text: 'Polski' },
    { locale: 'es', text: 'Español' },
    { locale: 'ru', text: 'Русский' }
  ]
}

export default config