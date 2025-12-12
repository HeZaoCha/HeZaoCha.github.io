import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

export const formatDate = (date: string): string => {
  return dayjs(date).format('YYYY年MM月');
};

export const formatDateRange = (start: string, end: string | 'present'): string => {
  const startDate = formatDate(start);
  const endDate = end === 'present' ? '至今' : formatDate(end);
  return `${startDate} - ${endDate}`;
};

