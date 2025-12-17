<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <a
          href="https://github.com/HeZaoCha"
          target="_blank"
          rel="noopener noreferrer"
          class="logo"
        >
          <span class="logo-text">ZaoSpace</span>
        </a>
        <nav class="nav">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            active-class="active"
          >
            {{ item.name }}
          </router-link>
        </nav>
        <div class="header-actions">
          <LocaleToggle />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeToggle from './ThemeToggle.vue';
import MobileMenu from './MobileMenu.vue';
import LocaleToggle from './LocaleToggle.vue';

const { t } = useI18n();

const navItems = computed(() => [
  { name: t('common.home'), path: '/' },
  { name: t('common.about'), path: '/about' },
  { name: t('common.projects'), path: '/projects' },
  { name: t('common.contact'), path: '/contact' },
]);
</script>

<style scoped>
.header {
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
}

.dark .header {
  background-color: rgba(31, 41, 55, 0.8);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  isolation: isolate; /* 创建新的层叠上下文 */
}

.logo-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  z-index: 10; /* 确保文字在最上层 */
  animation: gradient-shift 4s ease infinite;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(102, 126, 234, 0.2));
  pointer-events: none; /* 确保不影响点击 */
}

/* 背景色块效果 - 绝对在文字下方 */
.logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  border-radius: 0.375rem;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: -1; /* 确保在文字下方 */
  transform: scale(0.95);
  pointer-events: none;
}

/* 下划线效果 - 在文字下方 */
.logo::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0; /* 在文字下方 */
  border-radius: 2px;
  pointer-events: none;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo:hover::before {
  opacity: 1;
  transform: scale(1);
}

.logo:hover::after {
  width: 100%;
}

.logo:hover .logo-text {
  background: linear-gradient(135deg, #53d6ff 0%, #666be1 50%, #e45372 75%, #f07c63 100%);
  background-size: 400% 400%;
  animation: gradient-shift-fast 2s ease infinite;
  filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.4));
}

/* 移除光泽扫过效果，避免任何遮挡问题 */

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradient-shift-fast {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem 0;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: translateX(-50%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: var(--link-color);
    transform: translateY(-2px);
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: var(--link-color);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
      box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
    }
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>

