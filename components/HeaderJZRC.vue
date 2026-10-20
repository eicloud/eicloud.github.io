<template>
  <!-- ==================== 导航栏 ==================== -->
  <nav class="navbar header-jzrc" ref="navbarRef">
    <div class="navbar-inner">
        <a href="/" class="nav-logo">
            <img class="logo-image" src="/logo-gz-blackbg-48.jpg" alt="logo" />
            成都极智软创科技
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="菜单" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
        </button>
        <ul class="nav-links" ref="navLinksRef" :class="{open: mobileMenuOpen}">
            <li><a href="/#services">服务项目</a></li>
            <li><a href="/#soft-develop">软件开发</a></li>
            <li><a href="/corp-website/">官网建设</a></li>
            <li><a href="/#features">核心优势</a></li>
            <li><a href="/#process">合作流程</a></li>
            <li><a href="/contact/">联系方式</a></li>
            <li><a href="/cloud.html">极智云</a></li>
            <li><a href="/#cta" class="nav-cta-btn">免费咨询</a></li>
        </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { onMounted, ref, useTemplateRef } from 'vue';

  const navbar = useTemplateRef('navbarRef');
  const navLinks = useTemplateRef('navLinksRef');
  const mobileMenuOpen = ref(false);

  onMounted(() => {
    // 导航栏滚动阴影
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.value?.classList.add('scrolled');
        } else {
            navbar.value?.classList.remove('scrolled');
        }
    });
  
    // 点击导航链接后关闭移动菜单
    navLinks.value?.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenuOpen.value = false;
        });
    });
  
    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!navbar.value?.contains(e.target as Node)) {
            mobileMenuOpen.value = false;
        }
    });
  });
</script>

<style scoped>
.header-jzrc {
  --primary: #1a6ff5;
  --primary-dark: #0d4eb3;
  --primary-light: #e8f1fe;
  --dark: #1a1d28;
  --gray-700: #3d4458;
  --gray-200: #e2e6ee;
  --gray-100: #f2f5f9;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.06);
  --radius-sm: 8px;
  --transition: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============ 导航栏 ============ */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid transparent;
    transition: all var(--transition);
    padding: 0 2rem;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    border-bottom-color: var(--gray-200);
    box-shadow: var(--shadow-sm);
}

.navbar-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    transition: height var(--transition);
}

.navbar.scrolled .navbar-inner {
    height: 56px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.35rem;
    color: var(--dark);
    letter-spacing: -0.02em;
}
.nav-logo .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary), #3b8bff);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 800;
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(26, 111, 245, 0.35);
}
.nav-logo .logo-image {
    height: 40px;
    border-radius: var(--radius-sm);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 0.25rem;
    align-items: center;
}
.nav-links a {
    text-decoration: none;
    color: var(--gray-700);
    font-weight: 500;
    font-size: 0.925rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all var(--transition-fast);
    white-space: nowrap;
    letter-spacing: -0.01em;
}
.nav-links a:hover {
    color: var(--primary);
    background: var(--primary-light);
}
.nav-cta-btn {
    display: inline-block;
    background: var(--primary);
    color: #fff !important;
    font-weight: 600 !important;
    padding: 0.55rem 1.4rem !important;
    border-radius: 10px !important;
    margin-left: 0.5rem;
    transition: all var(--transition-fast) !important;
    box-shadow: 0 4px 14px rgba(26, 111, 245, 0.3);
    letter-spacing: -0.01em;
}
.nav-cta-btn:hover {
    background: var(--primary-dark) !important;
    box-shadow: 0 6px 20px rgba(26, 111, 245, 0.4) !important;
    transform: translateY(-1px);
    color: #fff !important;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    color: var(--dark);
    border-radius: 8px;
    transition: background var(--transition-fast);
}
.mobile-menu-btn:hover {
    background: var(--gray-100);
}
.mobile-menu-btn svg {
    width: 24px;
    height: 24px;
}

/* ============ 响应式 ============ */
@media (max-width: 900px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #fff;
        border-bottom: 1px solid var(--gray-200);
        padding: 1rem 2rem;
        box-shadow: var(--shadow-lg);
        gap: 1rem;
    }
    .nav-links.open {
        display: flex;
    }
    .mobile-menu-btn {
        display: block;
    }
}
@media (max-width: 480px) {
    .navbar {
        padding: 0 1rem;
    }
}
</style>