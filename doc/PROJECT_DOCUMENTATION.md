# ZaoSpace 项目详细说明文档

## 目录

1. [项目概述](#项目概述)
2. [技术架构](#技术架构)
3. [项目结构详解](#项目结构详解)
4. [核心模块详解](#核心模块详解)
5. [功能特性详解](#功能特性详解)
6. [开发指南](#开发指南)
7. [部署说明](#部署说明)

---

## 项目概述

### 项目简介

ZaoSpace 是一个现代化的个人简历网站，采用 Vue 3 + TypeScript + Vite 技术栈构建。网站提供完整的个人信息展示、在线简历编辑、访问统计、主题自定义等功能，支持多语言（中文/英文）和响应式设计。

### 项目特点

- 🚀 **现代化技术栈**：Vue 3.5.25 + TypeScript 5.9.3 + Vite 7.2.7
- 🎨 **原子化 CSS**：UnoCSS 66.5.10 + SCSS
- 🌓 **主题系统**：支持浅色/深色/自动模式
- 📱 **响应式设计**：完美适配桌面、平板、移动设备
- 🌍 **国际化支持**：中文/英文双语切换
- 📊 **数据统计**：本地访问统计和分析
- ✏️ **在线编辑**：实时编辑简历信息
- 🎯 **SEO 优化**：完整的 SEO 配置和结构化数据
- 📦 **性能优化**：代码分割、懒加载、资源压缩

---

## 技术架构

### 技术栈

| 类别       | 技术        | 版本    | 说明            |
| ---------- | ----------- | ------- | --------------- |
| 前端框架   | Vue         | 3.5.25  | Composition API |
| 开发语言   | TypeScript  | 5.9.3   | 类型安全        |
| 构建工具   | Vite        | 7.2.7   | 快速构建        |
| 状态管理   | Pinia       | 3.0.4   | 状态管理        |
| 路由       | Vue Router  | 4.6.4   | 路由管理        |
| 国际化     | Vue I18n    | 11.2.2  | 多语言支持      |
| 样式方案   | UnoCSS      | 66.5.10 | 原子化 CSS      |
| 样式预处理 | SCSS        | 1.96.0  | CSS 预处理器    |
| 代码检查   | ESLint      | 9.39.1  | 代码质量        |
| 图标库     | Iconify     | -       | 图标系统        |
| PDF 生成   | html2pdf.js | 0.10.3  | PDF 导出        |
| 日期处理   | dayjs       | 1.11.19 | 日期格式化      |

### 架构设计

```
┌─────────────────────────────────────────┐
│          用户界面层 (Views)              │
│  Home | About | Projects | Contact     │
│  ResumeEditor | Analytics | Custom     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         组件层 (Components)              │
│  Sections | Common | Editor             │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         状态管理层 (Pinia Store)          │
│  Theme | Locale | Resume | Analytics    │
│  Customization | App                     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         工具函数层 (Utils)               │
│  API | SEO | PDF | Storage | Format     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         路由层 (Vue Router)              │
│  Routes | Guards | Meta                 │
└─────────────────────────────────────────┘
```

---

## 项目结构详解

### 目录结构

```
ZaoSpace/
├── .github/                    # GitHub 配置
│   └── workflows/              # GitHub Actions 工作流
│       ├── ci.yml              # CI 持续集成
│       └── deploy.yml          # 自动部署
├── doc/                        # 项目文档
│   ├── eslint/                 # ESLint 相关文档
│   ├── CHANGELOG.md            # 更新日志
│   ├── PROJECT_STRUCTURE.md    # 项目结构
│   ├── REQUIREMENT.md          # 需求文档
│   ├── TODO_LIST.md            # 任务清单
│   └── PROJECT_DOCUMENTATION.md # 本文档
├── public/                     # 静态资源
│   ├── favicon.svg            # 网站图标
│   ├── images/                # 图片资源
│   ├── robots.txt             # 搜索引擎配置
│   └── sitemap.xml            # 网站地图
├── server/                     # 后端服务（可选）
│   ├── index.js               # Express 服务器
│   └── package.json           # 后端依赖
├── src/                        # 源代码目录
│   ├── components/            # 组件目录
│   │   ├── common/            # 公共组件
│   │   ├── editor/            # 编辑器组件
│   │   └── sections/          # 页面区块组件
│   ├── constants/             # 常量定义
│   ├── hooks/                 # 组合式函数
│   ├── layouts/               # 布局组件
│   ├── locales/               # 国际化文件
│   ├── router/                # 路由配置
│   ├── store/                 # 状态管理
│   ├── styles/                # 样式文件
│   ├── types/                 # TypeScript 类型
│   ├── utils/                 # 工具函数
│   ├── views/                 # 页面组件
│   ├── App.vue                # 根组件
│   └── main.ts                # 应用入口
├── .eslintrc.cjs              # ESLint 配置（已废弃）
├── eslint.config.mjs          # ESLint 新配置
├── index.html                 # HTML 入口
├── package.json               # 项目配置
├── pnpm-lock.yaml             # 依赖锁定
├── tsconfig.json              # TypeScript 配置
├── uno.config.ts             # UnoCSS 配置
└── vite.config.ts            # Vite 配置
```

---

## 核心模块详解

### 1. 组件模块 (Components)

#### 1.1 公共组件 (components/common)

##### Header.vue - 头部导航组件
**功能**：
- 网站 Logo 和导航菜单
- 语言切换按钮
- 主题切换按钮
- 移动端菜单按钮

**特性**：
- 响应式设计，移动端自动折叠
- 路由高亮显示
- 国际化支持

##### Footer.vue - 页脚组件
**功能**：
- 版权信息
- 社交媒体链接（GitHub、LinkedIn、Email）
- 自动更新年份

##### ThemeToggle.vue - 主题切换组件
**功能**：
- 切换浅色/深色模式
- 显示当前主题图标
- 保存主题偏好到 localStorage

##### LocaleToggle.vue - 语言切换组件
**功能**：
- 切换中文/英文
- 显示当前语言
- 移动端隐藏文字，仅显示图标

##### MobileMenu.vue - 移动端菜单组件
**功能**：
- 移动端导航菜单
- 滑动动画效果
- 点击菜单项自动关闭

##### ErrorBoundary.vue - 错误边界组件
**功能**：
- 捕获子组件错误
- 显示友好的错误提示
- 提供重新加载和返回首页功能

##### LazyImage.vue - 懒加载图片组件
**功能**：
- 图片懒加载
- 占位符显示
- 错误处理
- IntersectionObserver API 实现

##### Loading.vue - 加载组件
**功能**：
- 全屏加载遮罩
- 旋转动画
- 加载文字提示

##### Tabs.vue / Tab.vue - 标签页组件
**功能**：
- 标签页切换
- 内容区域显示
- 使用 provide/inject 实现组件通信

#### 1.2 页面区块组件 (components/sections)

##### HeroSection.vue - 英雄区块组件
**功能**：
- 展示个人信息（头像、姓名、职位、简介）
- 联系按钮和下载简历按钮
- 社交媒体链接
- PDF 生成和下载

**特性**：
- 滚动动画效果
- 图片错误处理
- PDF 生成进度提示

##### AboutSection.vue - 关于我区块组件
**功能**：
- 个人简介展示
- 联系信息（位置、邮箱）
- 响应式布局

##### ExperienceSection.vue - 工作经历区块组件
**功能**：
- 时间线样式展示工作经历
- 展开/收起功能
- 技术标签展示
- 日期格式化

**特性**：
- 时间线动画
- 响应式设计
- 多语言日期格式

##### SkillsSection.vue - 技能展示区块组件
**功能**：
- 技能分类展示
- 技能等级进度条（1-5级）
- 技能图标支持
- 滚动动画

##### ProjectsSection.vue - 项目展示区块组件
**功能**：
- 项目卡片网格布局
- 搜索功能
- 分类筛选
- 项目详情展示（技术栈、亮点、链接）

**特性**：
- 实时搜索过滤
- 分类筛选
- 项目图片展示
- GitHub/Demo 链接

##### ContactSection.vue - 联系表单区块组件
**功能**：
- 联系表单（姓名、邮箱、主题、消息）
- 表单验证
- 提交到后端 API
- 提交状态反馈

**特性**：
- 表单验证（必填、邮箱格式）
- 提交加载状态
- 成功/失败提示
- 防重复提交

#### 1.3 编辑器组件 (components/editor)

##### PersonalInfoEditor.vue - 个人信息编辑器
**功能**：
- 编辑姓名、职位、邮箱、位置、简介
- 编辑 GitHub、LinkedIn 链接
- 实时保存到 Store

##### EducationEditor.vue - 教育背景编辑器
**功能**：
- 添加/编辑/删除教育经历
- 学校、学位、专业、日期编辑
- 表单验证

##### WorkExperienceEditor.vue - 工作经历编辑器
**功能**：
- 添加/编辑/删除工作经历
- 公司、职位、日期、地点编辑
- 工作描述编辑（多行）
- 技术栈标签编辑

##### ProjectsEditor.vue - 项目编辑器
**功能**：
- 添加/编辑/删除项目
- 项目名称、描述、技术栈编辑
- 项目亮点编辑
- GitHub/Demo 链接编辑

##### SkillsEditor.vue - 技能编辑器
**功能**：
- 按分类编辑技能
- 添加/删除技能
- 技能等级设置（1-5级）
- 技能图标设置

### 2. 页面模块 (Views)

#### Home.vue - 首页
**功能**：
- 组合 HeroSection、SkillsSection、ProjectsSection
- 展示完整的个人信息

#### About.vue - 关于我页面
**功能**：
- 组合 AboutSection、ExperienceSection
- 展示教育背景和工作经历

#### Projects.vue - 项目页面
**功能**：
- 独立展示 ProjectsSection
- 提供搜索和筛选功能

#### Contact.vue - 联系我页面
**功能**：
- 独立展示 ContactSection
- 联系表单提交

#### ResumeEditor.vue - 简历编辑器页面
**功能**：
- 在线编辑简历信息
- 标签页切换不同编辑区域
- 预览模式
- 导入/导出 JSON 数据
- 重置为默认数据

**特性**：
- 实时预览
- 数据持久化
- 导入/导出功能

#### Analytics.vue - 访问统计页面
**功能**：
- 显示总访问量
- 显示今日访问量
- 显示独立访客数
- 显示各页面访问统计

#### Customization.vue - 自定义设置页面
**功能**：
- 自定义主题颜色（主色、次色）
- 自定义字体
- 自定义背景颜色
- 上传自定义背景图片
- 重置为默认设置

#### NotFound.vue - 404 页面
**功能**：
- 友好的 404 错误页面
- 返回首页按钮
- 返回上一页按钮
- 动画效果

### 3. 状态管理模块 (Store)

#### theme.ts - 主题状态管理
**功能**：
- 管理主题模式（light/dark/auto）
- 应用主题到 DOM
- 监听系统主题变化
- 持久化主题设置

**API**：
- `mode`: 当前主题模式
- `initTheme()`: 初始化主题
- `toggleTheme()`: 切换主题
- `setTheme(mode)`: 设置主题

#### locale.ts - 语言状态管理
**功能**：
- 管理当前语言（zh-CN/en-US）
- 同步到 Vue I18n
- 持久化语言设置

**API**：
- `locale`: 当前语言
- `initLocale()`: 初始化语言
- `setLocale(locale)`: 设置语言
- `toggleLocale()`: 切换语言

#### resume.ts - 简历数据状态管理
**功能**：
- 管理简历数据（个人信息、教育、工作、项目、技能）
- 自动保存到 localStorage
- 提供增删改查方法

**API**：
- `resumeData`: 简历数据
- `updatePersonalInfo(info)`: 更新个人信息
- `addEducation(edu)`: 添加教育经历
- `updateEducation(index, edu)`: 更新教育经历
- `removeEducation(index)`: 删除教育经历
- `addWorkExperience(exp)`: 添加工作经历
- `updateWorkExperience(index, exp)`: 更新工作经历
- `removeWorkExperience(index)`: 删除工作经历
- `addProject(project)`: 添加项目
- `updateProject(index, project)`: 更新项目
- `removeProject(index)`: 删除项目
- `addSkill(category, skill)`: 添加技能
- `updateSkill(categoryIndex, skillIndex, skill)`: 更新技能
- `removeSkill(categoryIndex, skillIndex)`: 删除技能
- `exportData()`: 导出 JSON 数据
- `importData(data)`: 导入 JSON 数据
- `resetToDefault()`: 重置为默认数据

#### analytics.ts - 访问统计状态管理
**功能**：
- 记录页面访问
- 统计总访问量、今日访问量、独立访客
- 统计各页面访问量
- 持久化统计数据

**API**：
- `analytics`: 统计数据
- `initVisitorId()`: 初始化访客 ID
- `trackPageView(page)`: 记录页面访问
- `getStats`: 获取统计数据（计算属性）

#### customization.ts - 自定义设置状态管理
**功能**：
- 管理自定义设置（字体、颜色、背景）
- 应用自定义样式到 DOM
- 持久化自定义设置

**API**：
- `customization`: 自定义设置
- `initCustomization()`: 初始化自定义设置
- `setPrimaryColor(color)`: 设置主色
- `setSecondaryColor(color)`: 设置次色
- `setFontFamily(font)`: 设置字体
- `setBackgroundColor(color)`: 设置背景色
- `setBackgroundImage(image)`: 设置背景图片
- `resetToDefault()`: 重置为默认设置

#### app.ts - 应用状态管理
**功能**：
- 管理全局加载状态
- 管理全局错误信息

**API**：
- `loading`: 加载状态
- `error`: 错误信息
- `setLoading(value)`: 设置加载状态
- `setError(message)`: 设置错误信息

### 4. 工具函数模块 (Utils)

#### api.ts - API 请求工具
**功能**：
- 统一的 API 请求封装
- POST/GET 请求方法
- 错误处理
- 类型安全

**API**：
- `post<T>(endpoint, data, options?)`: POST 请求
- `get<T>(endpoint, options?)`: GET 请求

#### seo.ts - SEO 工具
**功能**：
- 动态设置页面标题
- 设置 Meta 标签（description、keywords）
- 设置 Open Graph 标签
- 设置 Twitter Card 标签
- 注入 JSON-LD 结构化数据

**API**：
- `setSEO(data)`: 设置 SEO 信息
- `injectStructuredData(data)`: 注入结构化数据

#### pdf.ts - PDF 生成工具
**功能**：
- 将 HTML 内容转换为 PDF
- 使用 html2pdf.js 库
- 进度回调支持
- 优化 PDF 样式

**API**：
- `downloadResumePDF(onProgress?)`: 下载简历 PDF

#### storage.ts - 存储工具
**功能**：
- localStorage 封装
- 类型安全的存储
- 错误处理

**API**：
- `storage.get<T>(key, defaultValue?)`: 获取存储值
- `storage.set<T>(key, value)`: 设置存储值
- `storage.remove(key)`: 删除存储值
- `storage.clear()`: 清空存储

#### format.ts - 格式化工具
**功能**：
- 日期格式化
- 日期范围格式化
- 多语言支持

**API**：
- `formatDate(date)`: 格式化日期
- `formatDateRange(start, end)`: 格式化日期范围

#### common.ts - 通用工具
**功能**：
- 滚动到顶部
- 文件下载
- 打开 URL

**API**：
- `scrollToTop()`: 滚动到顶部
- `downloadFile(url, filename)`: 下载文件
- `openUrl(url, target)`: 打开 URL

### 5. 路由模块 (Router)

#### routes.ts - 路由配置
**路由列表**：
- `/` - 首页 (Home)
- `/about` - 关于我 (About)
- `/projects` - 项目 (Projects)
- `/contact` - 联系我 (Contact)
- `/editor` - 简历编辑器 (ResumeEditor)
- `/analytics` - 访问统计 (Analytics)
- `/customization` - 自定义设置 (Customization)
- `/:pathMatch(.*)*` - 404 页面 (NotFound)

**路由元信息**：
- `title`: 页面标题
- `description`: 页面描述
- `keywords`: 页面关键词

#### index.ts - 路由实例
**功能**：
- 创建 Vue Router 实例
- 路由守卫（设置 SEO、追踪访问）
- 滚动行为配置

**路由守卫**：
- `beforeEach`: 设置页面 SEO、追踪页面访问

### 6. 样式模块 (Styles)

#### main.scss - 主样式文件
**功能**：
- 全局样式重置
- 滚动动画定义
- 页面加载动画
- 按钮样式
- 通用工具类

#### themes.scss - 主题样式
**功能**：
- CSS 变量定义（浅色/深色主题）
- 主题颜色变量
- 主题切换支持

**CSS 变量**：
- `--bg-color`: 背景色
- `--text-color`: 文字颜色
- `--text-secondary`: 次要文字颜色
- `--border-color`: 边框颜色
- `--link-color`: 链接颜色
- `--link-hover-color`: 链接悬停颜色
- `--card-bg`: 卡片背景色
- `--shadow`: 阴影
- `--error-color`: 错误颜色
- `--success-color`: 成功颜色

#### variables.scss - SCSS 变量
**功能**：
- SCSS 变量定义
- 颜色变量
- 间距变量
- 断点变量
- 圆角变量
- 阴影变量

### 7. 国际化模块 (Locales)

#### index.ts - 国际化配置
**功能**：
- 创建 Vue I18n 实例
- 语言切换函数
- 语言持久化

**支持语言**：
- `zh-CN`: 简体中文
- `en-US`: 英文

#### zh-CN.ts / en-US.ts - 语言文件
**功能**：
- 定义所有文本的翻译
- 按模块组织（common、home、about、projects 等）

### 8. 类型定义模块 (Types)

#### resume.ts - 简历类型定义
**类型**：
- `PersonalInfo`: 个人信息
- `Education`: 教育经历
- `WorkExperience`: 工作经历
- `Project`: 项目
- `Skill`: 技能
- `ResumeData`: 完整简历数据

#### theme.ts - 主题类型定义
**类型**：
- `ThemeMode`: 主题模式（'light' | 'dark' | 'auto'）
- `ThemeConfig`: 主题配置

#### html2pdf.d.ts - html2pdf 类型定义
**功能**：
- html2pdf.js 库的类型声明

### 9. 常量模块 (Constants)

#### resume-data.ts - 简历数据常量
**功能**：
- 默认简历数据
- 个人信息、教育、工作、项目、技能数据

#### app.ts - 应用常量
**功能**：
- 应用名称
- 应用描述
- 应用版本

### 10. Hooks 模块

#### useTheme.ts - 主题 Hook
**功能**：
- 封装主题相关逻辑
- 提供主题状态和方法

**API**：
- `theme`: 当前主题
- `isDark`: 是否为深色模式
- `toggleTheme()`: 切换主题
- `setTheme(mode)`: 设置主题

#### useScrollAnimation.ts - 滚动动画 Hook
**功能**：
- 实现滚动进入视口时的动画
- 使用 IntersectionObserver API

**API**：
- `useScrollAnimation(elementRef?)`: 初始化滚动动画

---

## 功能特性详解

### 1. 主题系统

#### 功能说明
支持三种主题模式：
- **浅色模式** (light)
- **深色模式** (dark)
- **自动模式** (auto) - 跟随系统设置

#### 实现方式
- 使用 CSS 变量定义主题颜色
- 通过 JavaScript 动态切换 `dark` class
- 监听系统主题变化（auto 模式）
- 持久化主题设置到 localStorage

### 2. 国际化系统

#### 功能说明
支持两种语言：
- 简体中文 (zh-CN)
- 英文 (en-US)

#### 实现方式
- 使用 Vue I18n 进行国际化
- 语言文件按模块组织
- 动态切换语言
- 持久化语言设置

### 3. 响应式设计

#### 断点设置
- 移动端：< 768px
- 平板端：768px - 1024px
- 桌面端：> 1024px

#### 实现方式
- CSS 媒体查询
- Flexbox/Grid 布局
- 移动端菜单折叠
- 图片自适应

### 4. SEO 优化

#### 实现内容
- Meta 标签（title、description、keywords）
- Open Graph 标签
- Twitter Card 标签
- JSON-LD 结构化数据
- sitemap.xml
- robots.txt

#### 动态 SEO
- 根据路由动态设置 SEO 信息
- 注入结构化数据
- 优化搜索引擎索引

### 5. 性能优化

#### 代码分割
- 路由懒加载
- 组件按需加载
- 手动代码分割（vue-vendor、utils）

#### 资源优化
- 图片懒加载
- 资源压缩（Terser）
- 移除 console 和 debugger
- 资源命名优化

#### 构建优化
- Vite 快速构建
- 生产环境优化
- 资源哈希命名

### 6. 数据持久化

#### 存储内容
- 主题设置
- 语言设置
- 简历数据
- 访问统计
- 自定义设置

#### 实现方式
- localStorage 存储
- 类型安全的存储工具
- 自动保存和恢复

### 7. 错误处理

#### 全局错误捕获
- ErrorBoundary 组件
- onErrorCaptured 钩子
- 全局错误监听
- 友好的错误提示

### 8. 动画效果

#### 滚动动画
- IntersectionObserver 实现
- 淡入和上移效果
- 性能优化

#### 页面过渡
- Vue Transition 组件
- 淡入淡出效果
- 路由切换动画

---

## 开发指南

### 环境要求

- Node.js 20.x 或更高版本
- pnpm 8.x 或更高版本

### 开发命令

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 代码检查
pnpm lint

# 类型检查
pnpm type-check

# 格式化代码
pnpm format

# 运行测试
pnpm test

# 测试覆盖率
pnpm test:coverage
```

### 代码规范

#### TypeScript
- 使用 TypeScript 严格模式
- 定义明确的类型
- 避免使用 `any`

#### Vue 组件
- 使用 Composition API
- 单文件组件 (SFC)
- Props 和 Emits 类型定义

#### 样式
- 使用 SCSS 变量
- 使用 CSS 变量支持主题
- 响应式设计优先

#### 命名规范
- 组件：PascalCase
- 文件/目录：kebab-case
- 变量/函数：camelCase
- 常量：UPPER_SNAKE_CASE

### 添加新功能

#### 添加新页面
1. 在 `src/views/` 创建页面组件
2. 在 `src/router/routes.ts` 添加路由
3. 在 `src/locales/` 添加翻译文本
4. 在导航菜单添加链接

#### 添加新组件
1. 在 `src/components/` 创建组件
2. 定义 Props 和 Emits 类型
3. 添加样式（scoped）
4. 导出组件

#### 添加新 Store
1. 在 `src/store/modules/` 创建 Store
2. 使用 `defineStore` 定义
3. 在需要的地方导入使用

---

## 部署说明

### GitHub Pages 部署

#### 自动部署
项目已配置 GitHub Actions，推送到 `main` 分支后自动部署。

#### 手动部署
```bash
# 构建
pnpm build

# 将 dist 目录内容部署到 GitHub Pages
```

### 后端服务部署

#### 环境变量配置
创建 `server/.env` 文件：
```env
EMAIL_USER=your-email@qq.com
EMAIL_PASS=your-authorization-code
PORT=3001
```

#### 部署平台
- Vercel（Serverless Functions）
- Railway
- Heroku
- 其他 Node.js 托管平台

### 构建配置

#### Vite 配置
- 生产环境 base 路径：`/ZaoSpace/`
- 代码分割配置
- 资源优化配置
- Terser 压缩配置

#### 环境变量
- `VITE_API_BASE_URL`: API 基础 URL
- `VITE_BASE_URL`: 网站基础 URL
- `NODE_ENV`: 环境模式

---

## 总结

ZaoSpace 是一个功能完整、技术先进的个人简历网站项目。项目采用现代化的技术栈，提供了丰富的功能和良好的用户体验。通过模块化的设计和清晰的代码结构，项目具有良好的可维护性和可扩展性。

### 项目亮点

1. **技术先进**：使用最新的 Vue 3、TypeScript、Vite 等技术
2. **功能完整**：涵盖展示、编辑、统计、自定义等完整功能
3. **用户体验**：响应式设计、主题切换、国际化支持
4. **性能优化**：代码分割、懒加载、资源优化
5. **SEO 友好**：完整的 SEO 配置和结构化数据
6. **易于维护**：清晰的代码结构、完善的类型定义、详细的文档

### 后续优化方向

1. 添加更多主题选项
2. 支持更多语言
3. 添加博客功能
4. 集成第三方服务（如 Google Analytics）
5. 添加 PWA 支持
6. 优化移动端体验
7. 添加单元测试和 E2E 测试

---

**文档版本**: 1.0.0  
**最后更新**: 2025-01-15  
**维护者**: ZaoSpace Team

