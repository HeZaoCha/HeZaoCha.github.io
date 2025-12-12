<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// 初始化滚动动画
onMounted(() => {
  // 延迟执行，确保 DOM 已渲染
  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    elements.forEach((el) => {
      observer.observe(el);
    });
  }, 100);
});
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>

