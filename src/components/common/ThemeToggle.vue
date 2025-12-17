<template>
  <button
    class="theme-toggle"
    :aria-label="`切换到${isDark ? '浅色' : '深色'}模式`"
    @click="toggleTheme"
  >
    <i
      v-if="isDark"
      class="i-mdi-weather-sunny text-xl"
    />
    <i
      v-else
      class="i-mdi-weather-night text-xl"
    />
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle {
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
    transform: scale(1.1);
  }
}
</style>

