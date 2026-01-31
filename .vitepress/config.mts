import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "极智云",
  description: "极智云是企业数智化转型的敏捷引擎。超级图册。零代码应用搭建平台，帮助各行业人员在不使用代码的情况下快速搭建个性化的CRM、ERP、OA、项目管理、CMS内容管理、进销存等系统，产品包含自定义表单、自定义报表、自定义流程、工作台、组织架构、团队协作等功能，适用于各种业务场景，大幅降低开发与运维成本。让创新更快落地，让数据驱动决策——极智云，您身边的数字化转型伙伴。",
  lang: 'zh-CN',

  head: [
    ['link', {rel:'icon', href:'/favicon.ico'}],
    ['meta', {name: 'keywords', content: '超级图册，零代码，低代码，apaas，在线表单，表单引擎，流程引擎，仪表盘，在线报表，报表引擎，数据管理，工作台，应用搭建，组织架构，可视化设计器，自定义公式，CRM，ERP，CMS，OA'}],
    
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

  transformPageData(pageData, ctx) {
    const { frontmatter } = pageData;
    let head: HeadConfig[] = frontmatter.head;
    if (!head) {
      head = [];
      frontmatter.head = head;
    }

    
    // og
    head.push([
      'meta',
      {
        property: 'og:title',
        content: pageData.title ? `${pageData.title} | ${ctx.siteConfig.site.title}` : ctx.siteConfig.site.title,
      }
    ]);
    if (pageData.description) {
      head.push([
        'meta',
        {
          property: 'og:description',
          content: pageData.description,
        }
      ]);
    }
    head.push([
      'meta',
      {
        property: 'og:image',
        content: frontmatter.image ?? 'https://www.eintelli.cn/platform-logo.webp',
      }
    ]);
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '超级图册', link: '/album-plus' },
      { text: '超级图册-移动端', link: '/album-plus/mobile' },
      { text: '表单引擎', link: '/form-engine' },
      { text: '仪表盘引擎', link: '/dash-engine' },
      { text: '零代码平台', link: '/zerocode' },
      { text: 'CRM', link: '/crm' },
      { text: '项目管理', link: '/pm' },
      { text: '联系我们', link: '/contact' },
      { text: '加入我们', link: '/job' },
    ],

    sidebar: [
      { text: '首页', link: '/' },
      { text: '超级图册', link: '/album-plus' },
      { text: '超级图册-移动端', link: '/album-plus/mobile' },
      { text: '表单引擎', link: '/form-engine' },
      { text: '仪表盘引擎', link: '/dash-engine' },
      { text: '零代码平台', link: '/zerocode' },
      { text: 'CRM', link: '/crm' },
      { text: '项目管理', link: '/pm' },
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
