import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getStorage, setStorage } from '@/utils/storage';

const ANALYTICS_KEY = 'analytics_data';

interface AnalyticsData {
  totalViews: number;
  todayViews: number;
  uniqueVisitors: number;
  pageViews: Record<string, number>;
  lastVisitDate: string;
  visitorId: string;
}

const defaultData: AnalyticsData = {
  totalViews: 0,
  todayViews: 0,
  uniqueVisitors: 0,
  pageViews: {},
  lastVisitDate: '',
  visitorId: '',
};

export const useAnalyticsStore = defineStore('analytics', () => {
  const analytics = ref<AnalyticsData>(
    (getStorage(ANALYTICS_KEY) as AnalyticsData) || defaultData
  );

  // 生成访客ID
  const generateVisitorId = (): string => {
    return `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  // 初始化访客ID
  const initVisitorId = () => {
    if (!analytics.value.visitorId) {
      analytics.value.visitorId = generateVisitorId();
      setStorage(ANALYTICS_KEY, analytics.value);
    }
  };

  // 记录页面访问
  const trackPageView = (page: string) => {
    const today = new Date().toDateString();
    const isNewDay = analytics.value.lastVisitDate !== today;

    if (isNewDay) {
      analytics.value.todayViews = 0;
      analytics.value.lastVisitDate = today;
    }

    analytics.value.totalViews++;
    analytics.value.todayViews++;

    if (!analytics.value.pageViews[page]) {
      analytics.value.pageViews[page] = 0;
      analytics.value.uniqueVisitors++;
    }
    analytics.value.pageViews[page]++;

    setStorage(ANALYTICS_KEY, analytics.value);
  };

  // 获取统计数据
  const getStats = computed(() => ({
    totalViews: analytics.value.totalViews,
    todayViews: analytics.value.todayViews,
    uniqueVisitors: analytics.value.uniqueVisitors,
    pageViews: analytics.value.pageViews,
  }));

  // 重置统计数据
  const resetStats = () => {
    analytics.value = { ...defaultData, visitorId: analytics.value.visitorId };
    setStorage(ANALYTICS_KEY, analytics.value);
  };

  return {
    analytics,
    initVisitorId,
    trackPageView,
    getStats,
    resetStats,
  };
});

