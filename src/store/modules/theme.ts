import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { ThemeMode } from '@/types/theme';

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>('auto');

  // 从 localStorage 读取主题设置
  const initTheme = () => {
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    if (saved) {
      mode.value = saved;
    } else {
      // 检测系统主题
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      mode.value = prefersDark ? 'dark' : 'light';
    }
    applyTheme();
  };

  // 应用主题
  const applyTheme = () => {
    const root = document.documentElement;
    if (mode.value === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', mode.value === 'dark');
    }
  };

  // 切换主题
  const toggleTheme = () => {
    if (mode.value === 'light') {
      mode.value = 'dark';
    } else if (mode.value === 'dark') {
      mode.value = 'light';
    } else {
      // auto 模式切换到 light
      mode.value = 'light';
    }
    localStorage.setItem('theme', mode.value);
    applyTheme();
  };

  // 设置主题
  const setTheme = (newMode: ThemeMode) => {
    mode.value = newMode;
    localStorage.setItem('theme', newMode);
    applyTheme();
  };

  // 监听系统主题变化
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (mode.value === 'auto') {
        applyTheme();
      }
    });
  }

  // 监听主题变化，保存到 localStorage
  watch(mode, (newMode) => {
    localStorage.setItem('theme', newMode);
    applyTheme();
  });

  return {
    mode,
    initTheme,
    toggleTheme,
    setTheme,
  };
});

