<template>
  <button
    class="locale-toggle"
    :aria-label="currentLocaleLabel"
    @click="toggleLocale"
  >
    <i :class="`i-mdi-translate text-xl`" />
    <span class="locale-text">{{ currentLocaleLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLocaleStore } from '@/store/modules/locale';

const localeStore = useLocaleStore();

const currentLocaleLabel = computed(() => {
  return localeStore.locale === 'zh-CN' ? '中文' : 'English';
});

const toggleLocale = () => {
  localeStore.toggleLocale();
};
</script>

<style scoped>
.locale-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-family: inherit;

  &:hover {
    background-color: var(--link-color);
    color: white;
    border-color: var(--link-color);
  }
}

.locale-text {
  font-weight: 500;
}

@media (max-width: 768px) {
  .locale-text {
    display: none;
  }
}
</style>

