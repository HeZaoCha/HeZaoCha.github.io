import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      description: 'ZaoSpace 个人简历网站首页 - 展示个人信息、技能和项目经验。大数据开发工程师，专注于大数据技术、数据分析和数据挖掘。',
      keywords: '简历,个人网站,大数据开发工程师,Python,Hadoop,Spark,数据挖掘,机器学习',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我',
      description: '了解我的教育背景、工作经历和专业技能。毕业于岭南师范学院数据科学与大数据技术专业，现任广东东莞数谷智能科技有限公司大数据开发工程师。',
      keywords: '关于我,教育背景,工作经历,大数据开发,岭南师范学院,数据科学',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue'),
    meta: {
      title: '项目',
      description: '查看我参与的项目，包括大数据平台、推荐系统、数据可视化等。涵盖 Hadoop、Spark、Python、Vue 3 等技术栈。',
      keywords: '项目经验,大数据平台,推荐系统,数据可视化,Hadoop,Spark,Python,Vue',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '联系我',
      description: '通过邮件或社交媒体联系我。欢迎与我交流大数据开发、数据分析和机器学习相关话题。',
      keywords: '联系我,联系方式,邮件,社交媒体,GitHub,LinkedIn',
    },
  },
  {
    path: '/editor',
    name: 'ResumeEditor',
    component: () => import('@/views/ResumeEditor.vue'),
    meta: {
      title: '简历编辑器',
      description: '在线编辑简历信息',
    },
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('@/views/Analytics.vue'),
    meta: {
      title: '访问统计',
      description: '查看网站访问统计数据',
    },
  },
  {
    path: '/customization',
    name: 'Customization',
    component: () => import('@/views/Customization.vue'),
    meta: {
      title: '自定义设置',
      description: '自定义网站外观和样式',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404',
      description: '页面未找到',
    },
  },
];

