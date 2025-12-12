import { computed } from 'vue';
import { useThemeStore } from '@/store/modules/theme';

export const useTheme = () => {
  const themeStore = useThemeStore();

  const theme = computed(() => themeStore.mode);
  const isDark = computed(() => {
    if (theme.value === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme.value === 'dark';
  });

  const toggleTheme = () => {
    themeStore.toggleTheme();
  };

  const setTheme = (mode: typeof themeStore.mode) => {
    themeStore.setTheme(mode);
  };

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
  };
};

