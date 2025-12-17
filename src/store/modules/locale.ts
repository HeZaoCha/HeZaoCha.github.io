import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Locale } from '@/locales';
import { setLocale as setI18nLocale } from '@/locales';
import { getStorage, setStorage } from '@/utils/storage';

const LOCALE_KEY = 'locale';

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<Locale>((getStorage(LOCALE_KEY) as Locale) || 'zh-CN');

  const initLocale = () => {
    const saved = getStorage(LOCALE_KEY) as Locale | null;
    if (saved) {
      locale.value = saved;
      setI18nLocale(saved);
    }
  };

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale;
    setI18nLocale(newLocale);
    setStorage(LOCALE_KEY, newLocale);
  };

  const toggleLocale = () => {
    const newLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
    setLocale(newLocale);
  };

  return {
    locale,
    initLocale,
    setLocale,
    toggleLocale,
  };
});

