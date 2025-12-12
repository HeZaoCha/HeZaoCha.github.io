<template>
  <div class="mobile-menu">
    <button class="menu-toggle" @click="toggleMenu" :aria-label="isOpen ? '关闭菜单' : '打开菜单'">
      <i v-if="!isOpen" class="i-mdi-menu text-2xl" />
      <i v-else class="i-mdi-close text-2xl" />
    </button>
    <transition name="slide">
      <nav v-if="isOpen" class="mobile-nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-link"
          @click="closeMenu"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于', path: '/about' },
  { name: '项目', path: '/projects' },
  { name: '联系', path: '/contact' },
];

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.mobile-menu {
  display: none;
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--link-color);
    color: white;
  }
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  padding: 0.75rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover,
  &.router-link-active {
    background-color: var(--link-color);
    color: white;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .mobile-menu {
    display: block;
    position: relative;
  }
}
</style>

