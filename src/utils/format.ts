import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import { getLocale } from '@/locales';

// 根据当前语言设置 dayjs locale
const updateDayjsLocale = () => {
  const locale = getLocale();
  dayjs.locale(locale === 'zh-CN' ? 'zh-cn' : 'en');
};

updateDayjsLocale();

export const formatDate = (date: string): string => {
  updateDayjsLocale();
  const locale = getLocale();
  if (locale === 'zh-CN') {
    return dayjs(date).format('YYYY年MM月');
  }
  return dayjs(date).format('MMM YYYY');
};

export const formatDateRange = (start: string, end: string | 'present'): string => {
  updateDayjsLocale();
  const locale = getLocale();
  const startDate = formatDate(start);
  const endDate = end === 'present' ? (locale === 'zh-CN' ? '至今' : 'Present') : formatDate(end);
  return `${startDate} - ${endDate}`;
};

