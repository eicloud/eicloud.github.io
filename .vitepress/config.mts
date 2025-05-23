import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "极智云",
  description: "简单、智能、高效。为企业增效降本。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '销售报价', link: '/sales-quotation' },
      { text: '项目管理', link: '/pm' },
      { text: '工单管理', link: '/work-order' },
      { text: '联系我们', link: '/contact' }
    ],

    sidebar: [
      { text: '销售报价', link: '/sales-quotation' },
      { text: '项目管理', link: '/pm' },
      { text: '工单管理', link: '/work-order' },
      { text: '联系我们', link: '/contact' }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '简单 智能 高效 降本',
      copyright: 'Copyright © 2019-2025 极智云'
    }
  }
})
