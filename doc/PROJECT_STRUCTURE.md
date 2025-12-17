# 项目结构说明

## 目录结构

```
ZaoSpace/
├── .github/                  # GitHub 配置
│   └── workflows/            # GitHub Actions 工作流
│       ├── ci.yml           # CI 工作流
│       └── deploy.yml        # 部署工作流
├── doc/                      # 文档目录
│   └── REQUIREMENT.md        # 需求文档
├── public/                   # 静态资源
│   ├── favicon.svg          # 网站图标
│   ├── images/              # 图片资源
│   ├── robots.txt           # 搜索引擎爬虫配置
│   └── sitemap.xml          # 网站地图
├── server/                   # 后端服务（可选）
│   ├── index.js             # 服务器入口
│   └── package.json         # 后端依赖
├── src/                      # 源代码目录
│   ├── components/          # 组件
│   │   ├── common/          # 公共组件
│   │   │   ├── ErrorBoundary.vue    # 错误边界
│   │   │   ├── Footer.vue           # 页脚
│   │   │   ├── Header.vue            # 头部
│   │   │   ├── LazyImage.vue         # 懒加载图片
│   │   │   ├── LocaleToggle.vue      # 语言切换
│   │   │   ├── MobileMenu.vue        # 移动端菜单
│   │   │   ├── Tab.vue               # 标签页
│   │   │   ├── Tabs.vue               # 标签页容器
│   │   │   └── ThemeToggle.vue       # 主题切换
│   │   ├── editor/          # 编辑器组件
│   │   │   ├── EducationEditor.vue       # 教育背景编辑器
│   │   │   ├── PersonalInfoEditor.vue   # 个人信息编辑器
│   │   │   ├── ProjectsEditor.vue        # 项目编辑器
│   │   │   ├── SkillsEditor.vue         # 技能编辑器
│   │   │   └── WorkExperienceEditor.vue  # 工作经历编辑器
│   │   └── sections/        # 页面区块组件
│   │       ├── AboutSection.vue         # 关于我区块
│   │       ├── ContactSection.vue       # 联系我区块
│   │       ├── ExperienceSection.vue    # 经历区块
│   │       ├── HeroSection.vue           # 英雄区块
│   │       ├── ProjectsSection.vue       # 项目区块
│   │       └── SkillsSection.vue        # 技能区块
│   ├── constants/           # 常量
│   │   ├── app.ts          # 应用常量
│   │   └── resume-data.ts  # 简历数据
│   ├── hooks/              # 组合式函数
│   │   ├── useScrollAnimation.ts  # 滚动动画
│   │   └── useTheme.ts            # 主题 Hook
│   ├── layouts/             # 布局组件
│   │   └── DefaultLayout.vue      # 默认布局
│   ├── locales/             # 国际化
│   │   ├── en-US.ts        # 英文语言包
│   │   ├── index.ts        # i18n 配置
│   │   └── zh-CN.ts        # 中文语言包
│   ├── router/              # 路由配置
│   │   ├── index.ts        # 路由实例
│   │   └── routes.ts       # 路由定义
│   ├── store/               # 状态管理
│   │   ├── index.ts        # Pinia 实例
│   │   └── modules/        # Store 模块
│   │       ├── analytics.ts      # 统计分析
│   │       ├── app.ts            # 应用状态
│   │       ├── customization.ts  # 自定义设置
│   │       ├── locale.ts         # 语言设置
│   │       ├── resume.ts         # 简历数据
│   │       └── theme.ts          # 主题设置
│   ├── styles/              # 样式文件
│   │   ├── main.scss       # 主样式
│   │   ├── themes.scss     # 主题样式
│   │   └── variables.scss   # 变量定义
│   ├── types/               # 类型定义
│   │   ├── html2pdf.d.ts   # html2pdf 类型
│   │   ├── resume.ts       # 简历类型
│   │   └── theme.ts         # 主题类型
│   ├── utils/               # 工具函数
│   │   ├── api.ts          # API 请求工具
│   │   ├── common.ts       # 通用工具
│   │   ├── format.ts       # 格式化工具
│   │   ├── pdf.ts          # PDF 生成工具
│   │   ├── seo.ts          # SEO 工具
│   │   └── storage.ts      # 存储工具
│   ├── views/               # 页面组件
│   │   ├── About.vue       # 关于我页面
│   │   ├── Analytics.vue   # 统计分析页面
│   │   ├── Contact.vue     # 联系我页面
│   │   ├── Customization.vue  # 自定义设置页面
│   │   ├── Home.vue        # 首页
│   │   ├── NotFound.vue    # 404 页面
│   │   ├── Projects.vue    # 项目页面
│   │   └── ResumeEditor.vue  # 简历编辑器页面
│   ├── App.vue              # 根组件
│   ├── main.ts              # 应用入口
│   └── vite-env.d.ts        # Vite 环境类型
├── .gitignore               # Git 忽略文件
├── CHANGELOG.md             # 更新日志
├── index.html                # HTML 入口
├── package.json             # 项目配置
├── pnpm-lock.yaml           # 依赖锁定文件
├── README.md                # 项目说明
├── TODO_LIST.md             # 任务清单
├── tsconfig.json            # TypeScript 配置
├── uno.config.ts            # UnoCSS 配置
└── vite.config.ts           # Vite 配置
```

## 模块说明

### 组件 (components)

- **common/**: 可复用的公共组件
- **editor/**: 简历编辑器相关组件
- **sections/**: 页面区块组件，用于组合成完整页面

### 状态管理 (store)

使用 Pinia 进行状态管理，按功能模块划分：

- **analytics**: 访问统计分析
- **app**: 应用全局状态
- **customization**: 自定义设置（主题、字体、颜色等）
- **locale**: 语言设置
- **resume**: 简历数据管理
- **theme**: 主题切换

### 工具函数 (utils)

- **api.ts**: 统一的 API 请求封装
- **common.ts**: 通用工具函数
- **format.ts**: 日期、文本格式化
- **pdf.ts**: PDF 生成功能
- **seo.ts**: SEO 相关工具（meta 标签、结构化数据）
- **storage.ts**: 本地存储封装

### 类型定义 (types)

- **html2pdf.d.ts**: html2pdf.js 库的类型定义
- **resume.ts**: 简历数据结构类型
- **theme.ts**: 主题相关类型

## 依赖说明

### 生产依赖

- **vue**: Vue 3 框架
- **vue-router**: 路由管理
- **pinia**: 状态管理
- **vue-i18n**: 国际化
- **dayjs**: 日期处理
- **html2pdf.js**: PDF 生成

### 开发依赖

- **vite**: 构建工具
- **typescript**: TypeScript 支持
- **unocss**: 原子化 CSS
- **eslint**: 代码检查
- **prettier**: 代码格式化
- **vitest**: 单元测试

## 最佳实践

1. **组件命名**: 使用 PascalCase，文件名与组件名一致
2. **路径别名**: 使用 `@/` 作为 `src/` 的别名
3. **类型安全**: 所有 TypeScript 文件使用严格模式
4. **代码规范**: 使用 ESLint 和 Prettier 保持代码一致性
5. **状态管理**: 使用 Pinia Store 管理共享状态
6. **国际化**: 所有文本使用 i18n，避免硬编码

