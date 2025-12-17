import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { setSEO, injectStructuredData } from '@/utils/seo';
import { resumeData } from '@/constants/resume-data';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 路由守卫 - 设置页面标题和SEO，追踪页面访问
router.beforeEach((to, _from, next) => {
  // 追踪页面访问（异步执行，不阻塞路由）
  if (typeof window !== 'undefined') {
    // 使用 setTimeout 确保不阻塞路由导航
    setTimeout(() => {
      import('@/store/modules/analytics').then(({ useAnalyticsStore }) => {
        const analyticsStore = useAnalyticsStore();
        analyticsStore.initVisitorId();
        analyticsStore.trackPageView(to.name as string || to.path);
      }).catch((error) => {
        // 静默处理错误，不影响路由导航
        console.warn('Analytics tracking failed:', error);
      });
    }, 0);
  }
  const title = to.meta.title as string;
  const description = (to.meta.description as string) || 'ZaoSpace 个人简历网站 - 大数据开发工程师';
  const keywords = (to.meta.keywords as string) || '简历,个人网站,大数据开发,Python,Hadoop,Spark,数据挖掘,机器学习';
  
  // 根据路由设置不同的关键词
  let routeKeywords = keywords;
  if (to.name === 'Home') {
    routeKeywords = '简历,个人网站,大数据开发工程师,Python,Hadoop,Spark';
  } else if (to.name === 'About') {
    routeKeywords = '关于我,教育背景,工作经历,大数据开发';
  } else if (to.name === 'Projects') {
    routeKeywords = '项目经验,大数据平台,推荐系统,数据可视化';
  } else if (to.name === 'Contact') {
    routeKeywords = '联系我,联系方式,邮件,社交媒体';
  }

  if (title) {
    setSEO({
      title,
      description,
      keywords: routeKeywords,
      url: window.location.href,
      type: 'website',
      image: resumeData.personalInfo.avatar,
    });

    // 注入结构化数据
    injectStructuredData({
      name: resumeData.personalInfo.name,
      title: resumeData.personalInfo.title,
      description: resumeData.personalInfo.bio,
      email: resumeData.personalInfo.email,
      url: window.location.href,
      image: resumeData.personalInfo.avatar,
      location: resumeData.personalInfo.location,
      github: resumeData.personalInfo.github,
      linkedin: resumeData.personalInfo.linkedin,
      education: resumeData.education.map((edu) => ({
        school: edu.school,
        degree: edu.degree,
        major: edu.major,
        startDate: edu.startDate,
        endDate: edu.endDate,
      })),
      workExperience: resumeData.workExperience.map((work) => ({
        company: work.company,
        position: work.position,
        startDate: work.startDate,
        endDate: work.endDate,
        location: work.location,
      })),
    });
  }
  next();
});

export default router;

