import type { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    name: '喝早茶',
    title: '大数据开发工程师',
    avatar: '/images/流云.png',
    bio: '热爱大数据开发，专注于大数据技术，致力于构建优秀的数据分析和数据挖掘。',
    location: '中国广东',
    email: 'zaochahe@qq.com',
    github: 'https://github.com/hezaocha',
  },
  education: [
    {
      school: '岭南师范学院',
      degree: '学士',
      major: '数据科学与大数据技术',
      startDate: '2021-09',
      endDate: '2025-07',
      description:
        '主修课程：数据结构、算法、Web 开发、大数据技术、数据分析、数据挖掘、机器学习、深度学习等',
    },
  ],
  workExperience: [
    {
      company: '广东东莞数谷智能科技有限公司',
      position: '大数据开发工程师',
      startDate: '2022-07',
      endDate: 'present',
      location: '广东东莞',
      description: [
        '负责公司大数据平台的开发和维护',
        '使用 Python 构建高性能大数据平台',
        '优化大数据平台性能，提升数据分析和数据挖掘效率',
      ],
      technologies: ['Python', '大数据', '数据分析', '数据挖掘'],
    },
  ],
  projects: [
    {
      name: 'ZaoSpace 个人简历网站',
      description: '使用 Vue 3 + TypeScript + Vite 构建的现代化个人简历网站',
      technologies: ['Vue 3', 'TypeScript', 'Vite', 'UnoCSS'],
      githubUrl: 'https://github.com/HeZaoCha/HeZaoCha.github.io',
      highlights: [
        '响应式设计，支持多设备访问',
        '主题切换功能',
        'SEO 优化',
        '自动化部署到 GitHub Pages',
      ],
    },
    {
      name: '大数据分析平台',
      description: '基于 Hadoop 和 Spark 构建的企业级大数据分析平台，支持实时数据处理和离线分析',
      technologies: ['Hadoop', 'Spark', 'Python', 'Hive', 'Kafka'],
      githubUrl: 'https://github.com/hezaocha/bigdata-platform',
      highlights: ['支持 PB 级数据处理', '实时数据流处理', '可视化数据分析', '高性能计算优化'],
    },
    {
      name: '智能推荐系统',
      description: '基于机器学习的个性化推荐系统，使用协同过滤和深度学习算法',
      technologies: ['Python', 'TensorFlow', 'Redis', 'MySQL', 'Flask'],
      highlights: ['实时推荐算法', '用户行为分析', 'A/B 测试支持', '推荐准确率提升 30%'],
    },
    {
      name: '数据可视化 Dashboard',
      description: '企业级数据可视化平台，支持多种图表类型和实时数据更新',
      technologies: ['Vue 3', 'ECharts', 'WebSocket', 'Node.js'],
      demoUrl: 'https://dashboard.example.com',
      highlights: ['实时数据监控', '自定义图表配置', '多数据源支持', '响应式设计'],
    },
    {
      name: '分布式日志收集系统',
      description: '基于 Flume 和 Kafka 的分布式日志收集与分析系统',
      technologies: ['Flume', 'Kafka', 'Elasticsearch', 'Logstash', 'Kibana'],
      highlights: ['高并发日志处理', '实时日志分析', '可视化日志查询', '支持多种日志格式'],
    },
  ],
  skills: [
    {
      category: '编程语言',
      items: [
        { name: 'Python', level: 5, icon: 'mdi:language-python' },
        { name: 'Java', level: 4, icon: 'mdi:language-java' },
        { name: 'JavaScript', level: 5, icon: 'mdi:language-javascript' },
      ],
    },
    {
      category: '大数据技术',
      items: [
        { name: 'Hadoop', level: 5, icon: 'mdi:hadoop' },
        { name: 'Spark', level: 4, icon: 'mdi:spark' },
        { name: 'Flink', level: 3, icon: 'mdi:flink' },
        { name: 'Hive', level: 3, icon: 'mdi:hive' },
        { name: 'HBase', level: 3, icon: 'mdi:hbase' },
        { name: 'Kafka', level: 3, icon: 'mdi:kafka' },
        { name: 'Elasticsearch', level: 3, icon: 'mdi:elasticsearch' },
        { name: 'Redis', level: 3, icon: 'mdi:redis' },
        { name: 'MySQL', level: 3, icon: 'mdi:mysql' },
        { name: 'PostgreSQL', level: 3, icon: 'mdi:postgresql' },
      ],
    },
  ],
};
