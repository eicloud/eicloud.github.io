<template>
    <!-- ==================== 页脚 ==================== -->
    <footer class="footer-jzrc">
        <div class="footer-inner">
            <div class="footer-brand">
                <!-- <span class="logo-icon">G</span> -->
                <img class="logo-image" src="/logo-gz-blackbg-48.jpg" alt="logo" loading="lazy" />
                <h4>成都极智软创科技</h4>
                <p style="font-size:0.84rem;">专业软件企业服务商，助力企业数字化升级。</p>
            </div>
            <div class="footer-links">
                <div class="footer-col">
                    <h5>服务项目</h5>
                    <a href="/#soft-develop">软件开发</a>
                    <a href="/#services">IT咨询</a>
                    <a href="/corp-website/">网站建设</a>
                    <a href="/#services">企业组网</a>
                </div>
                <div class="footer-col">
                    <h5>关于我们</h5>
                    <a href="/">公司介绍</a>
                    <a href="/">客户案例</a>
                    <a href="/job/">加入我们</a>
                    <a href="/contact/">联系方式</a>
                </div>
                <div class="footer-col">
                    <h5>联系方式</h5>
                    <a href="mailto:juncke@163.com">juncke@163.com</a>
                    <a href="/contact/">15928679486（祝先生）</a>
                    <a>成都市锦江区中港广场</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            Copyright © 2009-{{new Date().getFullYear()}} 成都极智软创科技 为客户创造价值
        </div>
    </footer>
</template>

<style scoped>
  /* ============ 页脚 ============ */
  .footer-jzrc {
    --primary: #1a6ff5;
    --primary-dark: #0d4eb3;
    --primary-light: #e8f1fe;
    --accent: #00c9a7;
    --dark: #1a1d28;
    --gray-900: #1e2233;
    --gray-800: #2a2f3f;
    --gray-700: #3d4458;
    --gray-600: #5a6275;
    --gray-500: #7b8496;
    --gray-400: #9ca3b3;
    --gray-300: #c5cad5;
    --gray-200: #e2e6ee;
    --gray-100: #f2f5f9;
    --gray-50: #f8fafc;
    --white: #ffffff;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.06);
    --shadow-xl: 0 32px 64px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08);
    --radius-sm: 8px;
    --radius: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --transition: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    --font-sans: 'Inter', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', sans-serif;

    background: var(--gray-900);
    color: var(--gray-400);
    padding: 50px 2rem 30px;
  }
  .footer-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      justify-content: space-between;
  }
  .footer-brand {
      flex: 1 1 240px;
  }
  .footer-brand .logo-icon {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--primary), #3b8bff);
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 800;
      font-size: 1rem;
      margin-bottom: 1rem;
  }
  .footer-brand .logo-image {
      height: 36px;
      border-radius: 8px;
      margin-bottom: 1rem;
  }
  .footer-brand h4 {
      color: #fff;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.01em;
  }
  .footer-links {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
  }
  .footer-col h5 {
      color: #fff;
      font-weight: 600;
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      letter-spacing: -0.01em;
  }
  .footer-col a {
      display: block;
      color: var(--gray-400);
      text-decoration: none;
      font-size: 0.84rem;
      padding: 0.25rem 0;
      transition: color var(--transition-fast);
  }
  .footer-col a:hover {
      color: #fff;
  }
  .footer-bottom {
      max-width: 1280px;
      margin: 2rem auto 0;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      text-align: center;
      font-size: 0.8rem;
      color: var(--gray-500);
  }
</style>