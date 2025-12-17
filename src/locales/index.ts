import { createI18n } from 'vue-i18n';
import zhCN from './zh-CN';
import enUS from './en-US';
import { getStorage, setStorage } from '@/utils/storage';

export type Locale = 'zh-CN' | 'en-US';

const LOCALE_KEY = 'locale';
const defaultLocale = (getStorage(LOCALE_KEY) as Locale) || 'zh-CN';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});

// 切换语言
export const setLocale = (locale: Locale) => {
  i18n.global.locale.value = locale;
  setStorage(LOCALE_KEY, locale);
};

// 获取当前语言
export const getLocale = (): Locale => {
  return i18n.global.locale.value as Locale;
};

export default i18n;

