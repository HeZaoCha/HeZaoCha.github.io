import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { setSEO } from '@/utils/seo';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 路由守卫 - 设置页面标题和SEO
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string;
  const description = (to.meta.description as string) || 'ZaoSpace 个人简历网站 - 大数据开发工程师';
  
  if (title) {
    setSEO({
      title,
      description,
      url: window.location.href,
      type: 'website',
    });
  }
  next();
});

export default router;

