import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "极智云",
  description: "简单、智能、高效，为企业增效降本。图册 项目管理 智能报价 客诉 服务 工单 电商",
  lang: 'zh-CN',

  head: [
    // 百度统计
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?974601e067e0479b8dde80d6b37254a7";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '超级图册', link: '/album-plus' },
      { text: '超级图册-移动端', link: '/album-plus/mobile' },
      { text: 'CRM', link: '/crm' },
      { text: '表单引擎', link: '/form-engine' },
      { text: '仪表盘引擎', link: '/dash-engine' },
      { text: '零代码平台', link: '/zerocode' },
      { text: '项目管理', link: '/pm' },
      { text: '联系我们', link: '/contact' },
      { text: '加入我们', link: '/job' },
    ],

    sidebar: [
      { text: '超级图册', link: '/album-plus' },
      { text: '超级图册-移动端', link: '/album-plus/mobile' },
      { text: 'CRM', link: '/crm' },
      { text: '表单引擎', link: '/form-engine' },
      { text: '仪表盘引擎', link: '/dash-engine' },
      { text: '零代码平台', link: '/zerocode' },
      { text: '项目管理', link: '/pm' },
      // { text: '工单管理', link: '/work-order' },
      { text: '联系我们', link: '/contact' },
      { text: '加入我们', link: '/job' },
    ],

    externalLinkIcon: true,

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: {
      label: '页面导航'
    },
    returnToTopLabel: '回到顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // lastUpdated: {
    //   text: '最后更新于'
    // },

    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    footer: {
      message: '简单 智能 高效 降本',
      copyright: 'Copyright © 2009-2025 极智云'
    }
  }
})
