import { defineConfig } from 'vitepress'

import { getNavigationItems } from './getNavigationItems.js'

const sidebar = getNavigationItems('sidebar');

const nav = getNavigationItems('nav');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UltraYield Documentation",
  description: "UltraYield Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
