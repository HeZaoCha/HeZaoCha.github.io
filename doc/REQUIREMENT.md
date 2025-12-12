# HeZaoCha 简历网站项目方案

## 1. 项目概述

### 1.1. 项目简介

该项目是一个现代化的个人简历网站，旨在展示用户的个人信息、教育背景、工作经历、技能、项目经验、联系方式等内容。网站采用 Vue 3 + Vite + TypeScript 技术栈构建，提供响应式设计，支持在不同设备上良好展示，同时注重用户体验，具有简洁、现代的界面。

### 1.2. 项目目标

* 构建一个高性能、现代化的个人简历展示网站
* 提供良好的用户体验和视觉效果
* 支持主题切换、响应式设计等现代化功能
* 实现自动化部署到 GitHub Pages
* 遵循最佳实践和编码规范，确保代码质量和可维护性

### 1.3. 项目特点

* **现代化技术栈**：Vue 3 Composition API + TypeScript + Vite
* **响应式设计**：完美适配桌面端、平板端和移动端
* **主题切换**：支持浅色/深色模式切换
* **性能优化**：代码分割、懒加载、资源优化
* **SEO 友好**：支持搜索引擎优化
* **易于部署**：自动化部署到 GitHub Pages

## 2. 功能需求

### 2.1. 个人信息展示

* **基本信息**：展示用户的姓名、头像、个人简介、联系方式。
* **教育背景**：展示用户的学历信息，包括学校名称、专业、入学年份、毕业年份等。
* **工作经历**：展示用户的工作经历，包括公司名称、职位、工作时间、主要职责等。
* **项目经验**：展示用户参与过的项目，项目名称、描述、技术栈、贡献等。
* **技能展示**：展示用户的技能，包括编程语言、工具、框架等，以图标或条形图形式呈现。

### 2.2. 联系方式

* 提供 **电子邮件**、**GitHub**、**LinkedIn** 等联系方式，便于用户联系。

### 2.3. 主题切换

* 支持 **浅色模式** 和 **深色模式** 切换，提供良好的视觉体验。

### 2.4. 自定义背景

* 用户可以上传自定义的背景图片或选择系统预设的背景图。

### 2.5. 动态效果

* **页面加载动画**：页面加载时可以展示加载动画，提高用户体验。
* **页面滚动动画**：页面元素在滚动时可有不同的进入动画效果（如淡入、滑动等）。

### 2.6. 响应式设计

* 确保网站在桌面端、平板端和手机端都能良好展示。

### 2.7. 简历下载

* 提供简历以 **PDF** 格式下载功能，用户可以将自己的简历保存在本地。

### 2.8. SEO 优化

* 支持 **Meta 标签**配置，包括标题、描述、关键词等。
* 支持 **Open Graph** 标签，优化社交媒体分享效果。
* 支持 **结构化数据**（JSON-LD），提升搜索引擎理解。

### 2.9. 性能优化

* **代码分割**：按路由进行代码分割，减少初始加载时间。
* **懒加载**：图片和组件懒加载，提升页面加载速度。
* **资源压缩**：CSS、JS 文件压缩和优化。
* **缓存策略**：合理的浏览器缓存策略。

### 2.10. 错误处理

* **404 页面**：友好的错误页面提示。
* **错误边界**：全局错误捕获和处理。
* **网络错误处理**：API 请求失败时的友好提示。

---

## 3. 技术栈

### 3.1. 前端核心技术栈

* **Vue.js 3.x**: 采用 Composition API 构建用户界面，提供更好的类型推断和代码组织。
* **TypeScript**: 提供类型安全，提升代码质量和开发体验。
* **Vite**: 快速的前端构建工具，支持热模块替换（HMR），提升开发效率。
* **Vue Router 4.x**: 用于实现页面导航，支持单页面应用（SPA）和路由懒加载。
* **Pinia**: 轻量级状态管理库，管理主题模式、用户设置等全局状态。

### 3.2. 样式和 UI

* **UnoCSS**: 原子化 CSS 引擎，提供高性能的样式解决方案。
* **SCSS**: 用于编写复杂样式，提供变量、嵌套、混入等功能。
* **Iconify**: 统一的图标框架，支持多种图标集（Material Design Icons、Font Awesome 等）。

### 3.3. 工具库

* **Day.js**: 轻量级的时间处理库，用于日期格式化。
* **Axios / Ofetch**: 用于 HTTP 请求，支持请求拦截和响应处理。
* **html2pdf.js / jsPDF**: 用于生成和下载 PDF 格式的简历。

### 3.4. 开发工具

* **ESLint**: 代码质量检查工具。
* **Prettier**: 代码格式化工具。
* **TypeScript**: 类型检查。
* **pnpm**: 包管理器，提供更快的安装速度和更好的依赖管理。

### 3.5. 构建和部署

* **Vite**: 构建工具，支持生产环境优化。
* **GitHub Actions**: 自动化 CI/CD 流程。
* **GitHub Pages**: 静态网站托管服务。

### 3.6. 后端技术栈（可选）

* **Node.js**: 用于搭建后端服务，处理动态功能（如联系表单提交）。
* **Express**: Web 框架，提供 RESTful API 服务。
* **Nodemailer**: 用于发送电子邮件，处理联系表单。
* **JSON 文件 / MongoDB**: 存储用户反馈、联系表单等数据（可选，初期可使用 JSON 文件）。

---

## 4. 系统架构

### 4.1. 架构概述

简历网站采用前后端分离的架构方式，前端使用 Vue 3 + Vite 构建单页面应用（SPA），后端使用 Node.js 和 Express 提供 API 服务（可选）。前端可以完全静态化部署到 GitHub Pages，后端 API 可作为可选功能。

### 4.2. 前端架构

#### 4.2.1. 项目结构

```
hezaocha-resume
├── .vscode                    # VSCode 配置
│   ├── extensions.json        # 推荐插件
│   ├── settings.json          # 编辑器设置
│   └── launch.json            # 调试配置
├── .github                    # GitHub 配置
│   └── workflows              # GitHub Actions 工作流
│       └── deploy.yml         # 自动部署配置
├── build                      # 构建配置
│   ├── config                 # 构建配置
│   │   └── vite.config.ts    # Vite 配置
│   └── plugins                # Vite 插件
├── public                     # 静态资源
│   ├── favicon.ico            # 网站图标
│   ├── resume.pdf             # 简历 PDF 文件
│   └── images                 # 图片资源
├── src                        # 源代码目录
│   ├── assets                 # 静态资源
│   │   ├── images             # 图片
│   │   └── svg-icon           # SVG 图标
│   ├── components             # 全局组件
│   │   ├── common             # 公共组件
│   │   │   ├── Header.vue    # 头部导航
│   │   │   ├── Footer.vue    # 页脚
│   │   │   └── ThemeToggle.vue # 主题切换
│   │   └── sections           # 页面区块组件
│   │       ├── HeroSection.vue      # 英雄区块
│   │       ├── AboutSection.vue     # 关于区块
│   │       ├── SkillsSection.vue    # 技能区块
│   │       ├── ExperienceSection.vue # 经历区块
│   │       ├── ProjectsSection.vue  # 项目区块
│   │       └── ContactSection.vue   # 联系区块
│   ├── constants              # 常量
│   │   ├── app.ts             # 应用常量
│   │   └── resume-data.ts    # 简历数据
│   ├── hooks                  # 组合式函数
│   │   ├── useTheme.ts        # 主题管理
│   │   ├── useScrollAnimation.ts # 滚动动画
│   │   └── usePDFDownload.ts  # PDF 下载
│   ├── layouts                # 布局组件
│   │   └── DefaultLayout.vue  # 默认布局
│   ├── plugins                 # 插件
│   │   ├── dayjs.ts           # Day.js 配置
│   │   └── iconify.ts         # Iconify 配置
│   ├── router                  # 路由配置
│   │   ├── index.ts           # 路由入口
│   │   └── routes.ts          # 路由定义
│   ├── store                   # Pinia 状态管理
│   │   ├── modules            # 状态模块
│   │   │   ├── app.ts         # 应用状态
│   │   │   └── theme.ts       # 主题状态
│   │   └── index.ts           # Store 入口
│   ├── styles                  # 全局样式
│   │   ├── main.scss          # 主样式文件
│   │   ├── variables.scss     # SCSS 变量
│   │   └── themes.scss        # 主题样式
│   ├── utils                   # 工具函数
│   │   ├── common.ts          # 通用工具
│   │   ├── format.ts          # 格式化工具
│   │   └── storage.ts         # 存储工具
│   ├── views                   # 页面组件
│   │   ├── Home.vue           # 首页
│   │   ├── About.vue          # 关于页
│   │   ├── Projects.vue       # 项目页
│   │   └── Contact.vue        # 联系页
│   ├── App.vue                 # 根组件
│   └── main.ts                 # 入口文件
├── .editorconfig              # 编辑器配置
├── .eslintrc.js               # ESLint 配置
├── .gitignore                 # Git 忽略文件
├── .npmrc                     # npm 配置
├── index.html                 # HTML 入口
├── package.json               # 项目配置
├── pnpm-lock.yaml             # 依赖锁定文件
├── README.md                  # 项目说明
├── tsconfig.json              # TypeScript 配置
├── uno.config.ts              # UnoCSS 配置
└── vite.config.ts             # Vite 配置
```

#### 4.2.2. 页面结构

* **首页（Home）**：展示个人信息、技能、项目预览和简历下载按钮。
* **关于页（About）**：展示详细的个人信息、教育背景和工作经历。
* **项目页（Projects）**：展示用户的项目经验、技术栈和项目详情。
* **联系页（Contact）**：展示联系方式和留言表单。

#### 4.2.3. 状态管理

使用 Pinia 管理以下全局状态：

* **主题状态（theme）**：管理浅色/深色模式切换。
* **应用状态（app）**：管理页面加载状态、错误信息等。

#### 4.2.4. 路由管理

* 使用 Vue Router 4.x 进行路由管理。
* 支持路由懒加载，优化首屏加载速度。
* 配置路由守卫，处理页面跳转逻辑。

#### 4.2.5. 组件化设计

* 所有页面由多个可复用的组件组成。
* 组件按功能分类：公共组件、页面区块组件、业务组件。
* 遵循单一职责原则，保持组件小巧且专注。

### 4.3. 后端架构（可选）

#### 4.3.1. API 服务

后端提供 RESTful API，处理以下请求：

* **联系表单提交**：`POST /api/contact` - 处理用户联系表单提交。
* **简历下载统计**：`POST /api/resume/download` - 记录简历下载次数。

#### 4.3.2. 邮件服务

使用 Nodemailer 发送邮件：

* 接收用户联系表单提交。
* 发送确认邮件给用户。
* 发送通知邮件给网站管理员。

### 4.4. 数据流

* **静态数据**：简历信息、项目数据等存储在 `src/constants/resume-data.ts` 中。
* **动态数据**：联系表单提交等通过 API 发送到后端（可选）。
* **用户偏好**：主题设置等存储在浏览器 LocalStorage 中。

---

## 5. 用户界面设计

### 5.1. 首页设计

* **顶部导航栏**：

  * 显示项目名称（例如：“个人简历”），以及导航链接（个人信息、项目、联系等）。
  * 提供主题切换按钮，支持浅色和深色模式。

* **个人信息区域**：

  * 显示用户头像、姓名、个人简介、联系方式（如电子邮件、GitHub、LinkedIn 等）。

* **技能展示**：

  * 显示技能图标或条形图，展示用户的编程语言、工具和框架等。

* **项目展示**：

  * 显示用户参与的项目，每个项目包含项目名称、技术栈、项目描述等。

* **简历下载按钮**：

  * 提供一个按钮，允许用户将自己的简历以 PDF 格式下载。

### 5.2. 联系页面设计

* **联系表单**：

  * 用户可以填写姓名、电子邮件和消息内容，表单提交后通过后端邮件服务发送。
* **社交媒体链接**：

  * 提供 GitHub、LinkedIn 等社交平台的链接，用户可以方便地访问和联系。

### 5.3. 响应式设计

* **手机端设计**：

  * 页面布局自适应，支持不同屏幕尺寸，确保在手机端有良好的用户体验。
* **桌面端设计**：

  * 页面布局整洁，元素分布合理，保证桌面端用户的最佳浏览体验。

---

## 6. 部署与生产环境

### 6.1. 部署方式

#### 6.1.1. 前端部署（GitHub Pages）

**方案一：使用 GitHub Actions 自动部署**

1. **创建 GitHub Actions 工作流**：

   * 在 `.github/workflows/deploy.yml` 中配置自动化部署流程。
   * 当代码推送到 `main` 分支时，自动构建并部署到 GitHub Pages。

2. **配置步骤**：

   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: pnpm/action-setup@v2
         - uses: actions/setup-node@v3
           with:
             node-version: 20
         - run: pnpm install
         - run: pnpm build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **GitHub Pages 设置**：

   * 在仓库设置中启用 GitHub Pages。
   * 选择 `gh-pages` 分支作为源分支。

**方案二：手动部署**

1. 构建项目：`pnpm build`
2. 将 `dist` 目录内容推送到 `gh-pages` 分支。

#### 6.1.2. 自定义域名（可选）

* 在 `public` 目录创建 `CNAME` 文件，写入自定义域名。
* 在域名 DNS 设置中添加 CNAME 记录指向 GitHub Pages。

#### 6.1.3. 后端部署（可选）

* **Vercel**：支持 Serverless Functions，适合 Express API。
* **Railway**：简单易用的 Node.js 部署平台。
* **Heroku**：传统的 PaaS 平台。

### 6.2. 持续集成与持续部署（CI/CD）

#### 6.2.1. GitHub Actions 工作流

**构建和测试流程**：

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm type-check
      - run: pnpm test
```

**部署流程**：

* 自动部署到 GitHub Pages（生产环境）。
* 可选：部署到预览环境（Pull Request）。

### 6.3. 环境变量配置

#### 6.3.1. 开发环境

创建 `.env` 文件：

```env
VITE_APP_TITLE=HeZaoCha Resume
VITE_API_BASE_URL=http://localhost:3000/api
```

#### 6.3.2. 生产环境

创建 `.env.production` 文件：

```env
VITE_APP_TITLE=HeZaoCha Resume
VITE_API_BASE_URL=https://api.example.com
```

### 6.4. 构建优化

* **代码分割**：按路由自动分割代码。
* **资源压缩**：CSS、JS 文件压缩。
* **Tree Shaking**：移除未使用的代码。
* **图片优化**：使用 WebP 格式，懒加载。

---

## 7. 开发与测试

### 7.1. 开发环境搭建

#### 7.1.1. 环境要求

* **Node.js**：20.x 或更高版本（LTS）
* **pnpm**：8.x 或更高版本（推荐包管理器）
* **Git**：版本控制工具
* **VSCode**：推荐的代码编辑器

#### 7.1.2. 初始化项目

```bash
# 使用 Vite 创建 Vue 项目
pnpm create vite hezaocha-resume --template vue-ts

# 进入项目目录
cd hezaocha-resume

# 安装依赖
pnpm install

# 安装额外依赖
pnpm add vue-router@4 pinia
pnpm add -D unocss @iconify-json/mdi @iconify-json/fa
pnpm add dayjs axios
pnpm add -D @types/node

# 启动开发服务器
pnpm dev
```

#### 7.1.3. VSCode 推荐插件

* **Vue Language Features (Volar)**：Vue 3 语法支持
* **TypeScript Vue Plugin (Volar)**：TypeScript 支持
* **ESLint**：代码质量检查
* **Prettier**：代码格式化
* **UnoCSS**：UnoCSS 支持
* **GitLens**：Git 增强工具

### 7.2. 开发规范

#### 7.2.1. 代码风格

* 遵循项目编码规范（参考 `.cursor/rules/` 目录下的规则文件）。
* 使用 ESLint 和 Prettier 保持代码风格一致。
* 遵循 Vue 3 官方风格指南。

#### 7.2.2. Git 工作流

* 使用 Gitflow 工作流（参考 `.cursor/rules/gitflow.mdc`）。
* 提交信息遵循约定式提交规范（参考 `.cursor/rules/git.mdc`）。

#### 7.2.3. 命名规范

* **文件命名**：使用 kebab-case（如 `user-profile.vue`）。
* **组件命名**：使用 PascalCase（如 `UserProfile.vue`）。
* **变量命名**：使用 camelCase（如 `userName`）。
* **常量命名**：使用 UPPER_SNAKE_CASE（如 `MAX_COUNT`）。

### 7.3. 测试策略

#### 7.3.1. 单元测试

* 使用 **Vitest**（Vite 原生测试框架）进行单元测试。
* 测试工具函数、Composables、组件逻辑。

#### 7.3.2. 组件测试

* 使用 **Vue Test Utils** 测试组件渲染和交互。
* 测试组件 props、events、slots 等。

#### 7.3.3. E2E 测试（可选）

* 使用 **Playwright** 或 **Cypress** 进行端到端测试。
* 测试关键用户流程。

### 7.4. 开发流程

1. **创建功能分支**：从 `develop` 分支创建 `feature/xxx` 分支。
2. **开发功能**：编写代码，遵循编码规范。
3. **提交代码**：使用约定式提交信息。
4. **创建 Pull Request**：提交 PR 到 `develop` 分支。
5. **代码审查**：通过审查后合并。
6. **部署**：合并到 `main` 分支后自动部署。

---

## 8. 数据结构设计

### 8.1. 简历数据结构

```typescript
// src/types/resume.ts
export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'present';
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-5
    icon?: string;
  }[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  skills: Skill[];
}
```

### 8.2. 主题配置数据结构

```typescript
// src/types/theme.ts
export type ThemeMode = 'light' | 'dark' | 'auto';

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}
```

## 9. API 设计（可选）

### 9.1. 联系表单 API

**POST /api/contact**

请求体：

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

响应：

```json
{
  "success": true,
  "message": "邮件发送成功"
}
```

### 9.2. 简历下载统计 API

**POST /api/resume/download**

响应：

```json
{
  "success": true,
  "downloadCount": 123
}
```

## 10. 性能优化方案

### 10.1. 代码优化

* **路由懒加载**：使用动态 import 实现路由级别的代码分割。
* **组件懒加载**：大型组件使用 `defineAsyncComponent` 懒加载。
* **Tree Shaking**：移除未使用的代码和依赖。

### 10.2. 资源优化

* **图片优化**：
  * 使用 WebP 格式。
  * 实现图片懒加载。
  * 使用适当的图片尺寸。
* **字体优化**：
  * 使用字体子集。
  * 预加载关键字体。

### 10.3. 缓存策略

* **静态资源缓存**：设置长期缓存（1年）。
* **HTML 缓存**：设置短期缓存或不缓存。
* **Service Worker**：实现离线缓存（可选）。

### 10.4. 加载优化

* **预加载关键资源**：使用 `<link rel="preload">`。
* **预连接**：使用 `<link rel="preconnect">` 预连接外部域名。
* **DNS 预解析**：使用 `<link rel="dns-prefetch">`。

## 11. SEO 优化

### 11.1. Meta 标签

* **标题标签**：每个页面设置独特的 `<title>`。
* **描述标签**：设置 `<meta name="description">`。
* **关键词标签**：设置 `<meta name="keywords">`（可选）。

### 11.2. Open Graph 标签

```html
<meta property="og:title" content="HeZaoCha Resume">
<meta property="og:description" content="个人简历网站">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://example.com">
```

### 11.3. 结构化数据

使用 JSON-LD 格式添加结构化数据：

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "HeZaoCha",
  "jobTitle": "Software Engineer",
  "url": "https://example.com"
}
```

### 11.4. 语义化 HTML

* 使用语义化标签（`<header>`, `<main>`, `<section>`, `<article>` 等）。
* 使用适当的标题层级（`<h1>` 到 `<h6>`）。

## 12. 安全性考虑

### 12.1. 前端安全

* **XSS 防护**：使用 Vue 的内置转义机制。
* **CSRF 防护**：使用 CSRF Token（如果使用后端 API）。
* **内容安全策略（CSP）**：配置适当的 CSP 头。

### 12.2. 数据验证

* **表单验证**：前端和后端双重验证。
* **输入清理**：清理用户输入，防止注入攻击。

### 12.3. 环境变量

* 敏感信息存储在环境变量中。
* 不要将敏感信息提交到版本控制系统。

## 13. 未来功能扩展

### 13.1. 多语言支持

* 使用 **Vue I18n** 实现国际化。
* 支持英文、中文等语言切换。
* 语言设置存储在 LocalStorage 中。

### 13.2. 在线简历编辑

* 提供在线简历编辑功能。
* 用户可以通过表单填写或编辑个人信息、教育背景、工作经历等内容。
* 支持实时预览。

### 13.3. 统计与分析

* 集成 **Google Analytics** 或 **Plausible Analytics**。
* 统计简历访问量、下载量等。
* 帮助用户了解简历的受欢迎程度。

### 13.4. 更高自定义化

* 用户可以自定义简历的布局、字体、颜色等。
* 提供多种主题模板选择。
* 支持自定义背景图片。

### 13.5. 博客功能

* 添加个人博客功能。
* 展示技术文章、项目经验等。

### 13.6. 评论系统

* 集成评论系统（如 Giscus、Utterances）。
* 允许访客对项目进行评论。

## 14. 项目里程碑

### 阶段一：基础功能（1-2 周）

* [x] 项目初始化和环境搭建
* [ ] 基础页面结构搭建
* [ ] 个人信息展示
* [ ] 主题切换功能
* [ ] 响应式设计

### 阶段二：核心功能（2-3 周）

* [ ] 技能展示
* [ ] 项目展示
* [ ] 工作经历展示
* [ ] 教育背景展示
* [ ] 联系表单

### 阶段三：优化和部署（1-2 周）

* [ ] 性能优化
* [ ] SEO 优化
* [ ] 简历 PDF 下载
* [ ] GitHub Pages 部署
* [ ] CI/CD 配置

### 阶段四：扩展功能（可选）

* [ ] 多语言支持
* [ ] 在线简历编辑
* [ ] 统计与分析
* [ ] 更多自定义选项

## 15. 项目依赖管理

### 15.1. 核心依赖

#### 15.1.1. 运行时依赖

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.5",
    "pinia": "^2.1.7",
    "dayjs": "^1.11.10",
    "axios": "^1.6.2"
  }
}
```

#### 15.1.2. 开发依赖

```json
{
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "@vue/tsconfig": "^0.5.0",
    "typescript": "^5.3.3",
    "vite": "^5.0.8",
    "unocss": "^0.58.0",
    "@iconify-json/mdi": "^1.1.0",
    "@iconify-json/fa": "^1.1.0",
    "eslint": "^8.56.0",
    "@typescript-eslint/eslint-plugin": "^6.19.0",
    "@typescript-eslint/parser": "^6.19.0",
    "prettier": "^3.2.0",
    "vitest": "^1.2.0",
    "@vue/test-utils": "^2.4.5"
  }
}
```

### 15.2. 依赖管理策略

* **使用 pnpm**：提供更快的安装速度和更好的依赖管理。
* **锁定依赖版本**：使用 `pnpm-lock.yaml` 锁定依赖版本，确保构建一致性。
* **定期更新**：定期检查并更新依赖，修复安全漏洞。
* **依赖审计**：使用 `pnpm audit` 检查依赖安全漏洞。

### 15.3. 依赖安装

```bash
# 安装所有依赖
pnpm install

# 安装生产依赖
pnpm install --prod

# 安装开发依赖
pnpm install --dev

# 更新依赖
pnpm update

# 检查依赖安全
pnpm audit
```

## 16. 项目配置

### 16.1. TypeScript 配置

**tsconfig.json**：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 16.2. Vite 配置

**vite.config.ts**：

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
});
```

### 16.3. ESLint 配置

**.eslintrc.js**：

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/multi-word-component-names': 'off',
  },
};
```

### 16.4. Prettier 配置

**.prettierrc**：

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "avoid"
}
```

### 16.5. UnoCSS 配置

**uno.config.ts**：

```typescript
import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  shortcuts: {
    'btn-primary': 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
  },
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
});
```

### 16.6. 环境变量配置

**.env**（开发环境）：

```env
VITE_APP_TITLE=HeZaoCha Resume
VITE_APP_DESCRIPTION=个人简历网站
VITE_API_BASE_URL=http://localhost:3000/api
VITE_GITHUB_URL=https://github.com/username
```

**.env.production**（生产环境）：

```env
VITE_APP_TITLE=HeZaoCha Resume
VITE_APP_DESCRIPTION=个人简历网站
VITE_API_BASE_URL=https://api.example.com
VITE_GITHUB_URL=https://github.com/username
```

## 17. 项目运行

### 17.1. 开发环境运行

```bash
# 启动开发服务器
pnpm dev

# 启动开发服务器并打开浏览器
pnpm dev --open

# 指定端口启动
pnpm dev --port 3000
```

### 17.2. 生产环境构建

```bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 构建并分析打包结果
pnpm build --report
```

### 17.3. 代码质量检查

```bash
# 运行 ESLint 检查
pnpm lint

# 自动修复 ESLint 错误
pnpm lint:fix

# 运行 Prettier 格式化
pnpm format

# TypeScript 类型检查
pnpm type-check
```

### 17.4. 测试

```bash
# 运行单元测试
pnpm test

# 运行测试并生成覆盖率报告
pnpm test:coverage

# 运行 E2E 测试
pnpm test:e2e
```

### 17.5. 常用脚本

**package.json**：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/**/*.{js,ts,vue,scss,css,json}",
    "type-check": "vue-tsc --noEmit",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test"
  }
}
```

## 18. 项目测试

### 18.1. 测试策略

#### 18.1.1. 测试金字塔

* **单元测试（70%）**：测试工具函数、Composables、组件逻辑。
* **集成测试（20%）**：测试组件交互、API 集成。
* **E2E 测试（10%）**：测试关键用户流程。

#### 18.1.2. 测试工具

* **Vitest**：单元测试框架（Vite 原生支持）。
* **Vue Test Utils**：Vue 组件测试工具。
* **Playwright**：E2E 测试框架。

### 18.2. 单元测试

#### 18.2.1. 工具函数测试

```typescript
// src/utils/__tests__/format.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from '../format';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = '2024-01-01';
    expect(formatDate(date)).toBe('2024年1月1日');
  });
});
```

#### 18.2.2. Composables 测试

```typescript
// src/hooks/__tests__/useTheme.test.ts
import { describe, it, expect } from 'vitest';
import { useTheme } from '../useTheme';

describe('useTheme', () => {
  it('should toggle theme', () => {
    const { theme, toggleTheme } = useTheme();
    expect(theme.value).toBe('light');
    toggleTheme();
    expect(theme.value).toBe('dark');
  });
});
```

#### 18.2.3. 组件测试

```typescript
// src/components/__tests__/ThemeToggle.test.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ThemeToggle from '../ThemeToggle.vue';

describe('ThemeToggle', () => {
  it('should render correctly', () => {
    const wrapper = mount(ThemeToggle);
    expect(wrapper.exists()).toBe(true);
  });
});
```

### 18.3. E2E 测试

```typescript
// tests/e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('home page loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('HeZaoCha');
});

test('theme toggle works', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="theme-toggle"]');
  await expect(page.locator('html')).toHaveClass(/dark/);
});
```

### 18.4. 测试覆盖率

* **目标覆盖率**：80% 以上。
* **关键路径覆盖率**：100%。
* **使用 Vitest 生成覆盖率报告**。

### 18.5. 测试最佳实践

* 测试应该独立、可重复、快速。
* 使用描述性的测试名称。
* 遵循 AAA 模式（Arrange、Act、Assert）。
* 避免测试实现细节，测试行为。

## 19. 项目部署

### 19.1. 部署前准备

#### 19.1.1. 构建检查清单

* [ ] 代码通过所有测试
* [ ] 通过 ESLint 检查
* [ ] 通过 TypeScript 类型检查
* [ ] 构建成功无错误
* [ ] 预览构建结果正常

#### 19.1.2. 环境变量配置

* 确保生产环境变量已正确配置。
* 检查 API 地址、第三方服务配置等。

### 19.2. GitHub Pages 部署

#### 19.2.1. 自动部署流程

1. **创建 GitHub Actions 工作流**（`.github/workflows/deploy.yml`）：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Build
        run: pnpm build
        env:
          VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **配置 GitHub Pages**：

   * 进入仓库 Settings → Pages
   * Source 选择 "GitHub Actions"

#### 19.2.2. 手动部署

```bash
# 构建项目
pnpm build

# 进入 dist 目录
cd dist

# 初始化 git 仓库
git init
git add -A
git commit -m 'deploy'

# 推送到 gh-pages 分支
git push -f git@github.com:username/repo.git main:gh-pages
```

### 19.3. 其他部署平台

#### 19.3.1. Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 配置构建命令：`pnpm build`
3. 配置输出目录：`dist`
4. 自动部署完成

#### 19.3.2. Netlify 部署

1. 连接 GitHub 仓库到 Netlify
2. 构建命令：`pnpm build`
3. 发布目录：`dist`
4. 自动部署完成

### 19.4. 部署验证

* [ ] 网站可以正常访问
* [ ] 所有页面路由正常
* [ ] 主题切换功能正常
* [ ] 响应式设计正常
* [ ] 图片和资源加载正常
* [ ] API 请求正常（如果使用）

## 20. 项目运维

### 20.1. 监控和日志

#### 20.1.1. 性能监控

* **Google Analytics**：跟踪网站访问量、用户行为。
* **Google PageSpeed Insights**：监控网站性能。
* **Lighthouse CI**：自动化性能测试。

#### 20.1.2. 错误监控

* **Sentry**：前端错误监控和追踪。
* **浏览器控制台**：检查控制台错误。

### 20.2. 定期维护

#### 20.2.1. 依赖更新

* 每月检查依赖更新。
* 及时修复安全漏洞。
* 测试更新后的依赖兼容性。

#### 20.2.2. 内容更新

* 定期更新简历内容。
* 更新项目经验。
* 更新技能列表。

#### 20.2.3. 性能优化

* 定期检查网站性能。
* 优化图片大小。
* 清理未使用的代码。

### 20.3. 备份策略

* **代码备份**：使用 Git 版本控制。
* **数据备份**：定期备份简历数据。
* **配置文件备份**：备份环境变量和配置文件。

### 20.4. 安全维护

* 定期检查依赖安全漏洞。
* 更新安全补丁。
* 检查 API 密钥和敏感信息。

## 21. 项目开发流程

### 21.1. Git 工作流

#### 21.1.1. 分支策略

* **main**：生产环境分支，只接受来自 release 和 hotfix 的合并。
* **develop**：开发分支，所有功能分支合并到此。
* **feature/***：功能分支，从 develop 创建，合并回 develop。
* **release/***：发布分支，从 develop 创建，合并到 main 和 develop。
* **hotfix/***：热修复分支，从 main 创建，合并到 main 和 develop。

#### 21.1.2. 开发流程

1. **创建功能分支**：
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/user-authentication
   ```

2. **开发功能**：
   * 编写代码
   * 编写测试
   * 提交代码（遵循约定式提交规范）

3. **创建 Pull Request**：
   * 提交 PR 到 develop 分支
   * 填写 PR 描述
   * 等待代码审查

4. **代码审查**：
   * 通过审查后合并
   * 删除功能分支

5. **发布**：
   * 从 develop 创建 release 分支
   * 测试和修复问题
   * 合并到 main 分支
   * 打标签发布

### 21.2. 代码审查规范

#### 21.2.1. 审查要点

* 代码是否符合编码规范
* 是否有测试覆盖
* 是否有性能问题
* 是否有安全问题
* 代码是否易于维护

#### 21.2.2. 审查流程

1. 提交 PR
2. 自动运行 CI 检查
3. 代码审查
4. 修改问题
5. 通过审查后合并

### 21.3. 发布流程

1. **准备发布**：
   * 更新版本号
   * 更新 CHANGELOG.md
   * 创建 release 分支

2. **测试**：
   * 运行所有测试
   * 手动测试关键功能
   * 检查性能

3. **发布**：
   * 合并到 main 分支
   * 打标签
   * 部署到生产环境

4. **后续**：
   * 合并回 develop 分支
   * 删除 release 分支

## 22. 项目开发规范

### 22.1. 代码规范

#### 22.1.1. Vue 组件规范

* 使用 Composition API
* 组件名称使用 PascalCase
* Props 定义类型和默认值
* 使用 `<script setup>` 语法

```vue
<script setup lang="ts">
interface Props {
  title: string;
  count?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
});
</script>
```

#### 22.1.2. TypeScript 规范

* 使用严格的类型检查
* 避免使用 `any` 类型
* 使用接口定义对象结构
* 使用类型别名定义联合类型

#### 22.1.3. 命名规范

* **文件命名**：kebab-case（如 `user-profile.vue`）
* **组件命名**：PascalCase（如 `UserProfile.vue`）
* **变量命名**：camelCase（如 `userName`）
* **常量命名**：UPPER_SNAKE_CASE（如 `MAX_COUNT`）
* **函数命名**：camelCase，动词开头（如 `getUserInfo`）

### 22.2. 提交规范

#### 22.2.1. 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### 22.2.2. 提交类型

* **feat**：新功能
* **fix**：修复 bug
* **docs**：文档变更
* **style**：代码格式调整
* **refactor**：代码重构
* **test**：测试相关
* **chore**：构建过程或辅助工具变动

#### 22.2.3. 提交示例

```
feat(header): add theme toggle button

- Add theme toggle component
- Integrate with theme store
- Add dark mode styles

Closes #123
```

### 22.3. 文档规范

* 代码注释清晰明了
* README.md 保持更新
* CHANGELOG.md 记录版本变更
* API 文档保持同步

## 23. 项目开发工具

### 23.1. 开发工具

#### 23.1.1. 代码编辑器

* **VSCode**：推荐使用
* **WebStorm**：JetBrains 产品

#### 23.1.2. 浏览器工具

* **Vue DevTools**：Vue 开发工具
* **React DevTools**：React 开发工具（如需要）
* **Lighthouse**：性能分析工具

### 23.2. 开发插件

#### 23.2.1. VSCode 插件

* **Vue Language Features (Volar)**：Vue 3 支持
* **TypeScript Vue Plugin (Volar)**：TypeScript 支持
* **ESLint**：代码质量检查
* **Prettier**：代码格式化
* **UnoCSS**：UnoCSS 支持
* **GitLens**：Git 增强
* **Error Lens**：内联错误显示

### 23.3. 调试工具

* **Vue DevTools**：组件调试
* **Chrome DevTools**：网络、性能调试
* **Vite DevTools**：Vite 开发工具

### 23.4. 性能分析工具

* **Lighthouse**：性能评分
* **WebPageTest**：详细性能分析
* **Chrome Performance**：性能分析

## 24. 项目开发人员

### 24.1. 团队组成

#### 24.1.1. 角色定义

* **项目负责人**：负责项目整体规划和决策
* **前端开发工程师**：负责前端开发
* **UI/UX 设计师**：负责界面设计（可选）
* **测试工程师**：负责测试（可选）

#### 24.1.2. 技能要求

**前端开发工程师**：

* 熟练掌握 Vue 3 和 TypeScript
* 熟悉 Vite 构建工具
* 了解前端工程化
* 熟悉 Git 工作流
* 有良好的代码规范意识

### 24.2. 人员配置

* **小型项目**：1-2 名前端开发工程师
* **中型项目**：2-3 名开发人员 + 1 名设计师
* **大型项目**：3-5 名开发人员 + 1-2 名设计师 + 1 名测试工程师

### 24.3. 协作方式

* **代码审查**：所有代码必须经过审查
* **定期会议**：每周站会，同步进度
* **文档共享**：使用文档工具共享文档
* **任务管理**：使用 GitHub Issues 或项目管理工具

## 25. 项目开发时间

### 25.1. 时间估算

#### 25.1.1. 阶段一：基础功能（1-2 周）

* 项目初始化和环境搭建：1 天
* 基础页面结构搭建：2-3 天
* 个人信息展示：2-3 天
* 主题切换功能：1-2 天
* 响应式设计：2-3 天

**总计**：8-12 个工作日

#### 25.1.2. 阶段二：核心功能（2-3 周）

* 技能展示：2-3 天
* 项目展示：3-4 天
* 工作经历展示：2-3 天
* 教育背景展示：1-2 天
* 联系表单：2-3 天

**总计**：10-15 个工作日

#### 25.1.3. 阶段三：优化和部署（1-2 周）

* 性能优化：2-3 天
* SEO 优化：1-2 天
* 简历 PDF 下载：2-3 天
* GitHub Pages 部署：1-2 天
* CI/CD 配置：1-2 天

**总计**：7-12 个工作日

#### 25.1.4. 阶段四：扩展功能（可选，2-4 周）

* 多语言支持：3-5 天
* 在线简历编辑：5-7 天
* 统计与分析：2-3 天
* 更多自定义选项：3-5 天

**总计**：13-20 个工作日

### 25.2. 总体时间估算

* **最小版本（MVP）**：4-6 周（20-30 个工作日）
* **完整版本**：6-8 周（30-40 个工作日）
* **扩展版本**：8-12 周（40-60 个工作日）

### 25.3. 时间管理

* **每日站会**：15 分钟，同步进度和问题
* **每周回顾**：1 小时，总结本周工作，规划下周任务
* **里程碑检查**：每个阶段结束时检查进度

## 26. 项目开发成本

### 26.1. 人力成本

#### 26.1.1. 开发人员成本

* **前端开发工程师**：
  * 初级：300-500 元/天
  * 中级：500-800 元/天
  * 高级：800-1200 元/天

* **UI/UX 设计师**（可选）：
  * 500-1000 元/天

#### 26.1.2. 项目成本估算

**最小版本（MVP）**：
* 1 名中级前端开发工程师 × 30 天 = 15,000-24,000 元

**完整版本**：
* 1 名中级前端开发工程师 × 40 天 = 20,000-32,000 元

**扩展版本**：
* 1 名中级前端开发工程师 × 60 天 = 30,000-48,000 元
* 1 名 UI 设计师 × 10 天 = 5,000-10,000 元
* **总计**：35,000-58,000 元

### 26.2. 工具和服务成本

#### 26.2.1. 开发工具

* **VSCode**：免费
* **GitHub**：免费（公开仓库）或 $4/月（私有仓库）
* **域名**：50-200 元/年（可选）

#### 26.2.2. 部署服务

* **GitHub Pages**：免费
* **Vercel**：免费（个人项目）
* **Netlify**：免费（个人项目）

#### 26.2.3. 第三方服务（可选）

* **Google Analytics**：免费
* **Sentry**：免费（个人项目）
* **邮件服务**：免费（SendGrid 免费额度）或 50-200 元/月

### 26.3. 总成本估算

**最小版本（MVP）**：
* 人力成本：15,000-24,000 元
* 工具和服务：0-500 元
* **总计**：15,000-24,500 元

**完整版本**：
* 人力成本：20,000-32,000 元
* 工具和服务：0-1,000 元
* **总计**：20,000-33,000 元

**扩展版本**：
* 人力成本：35,000-58,000 元
* 工具和服务：500-2,000 元
* **总计**：35,500-60,000 元

## 27. 项目开发风险

### 27.1. 技术风险

#### 27.1.1. 技术选型风险

* **风险**：选择不成熟的技术栈可能导致开发困难
* **应对**：选择成熟稳定的技术栈（Vue 3、TypeScript、Vite）
* **缓解**：提前进行技术调研和原型验证

#### 27.1.2. 性能风险

* **风险**：网站性能不达标，影响用户体验
* **应对**：提前进行性能优化，使用代码分割、懒加载等技术
* **缓解**：定期进行性能测试和优化

#### 27.1.3. 兼容性风险

* **风险**：浏览器兼容性问题
* **应对**：使用现代浏览器，提供降级方案
* **缓解**：使用 Babel 等工具进行代码转换

### 27.2. 项目风险

#### 27.2.1. 进度风险

* **风险**：项目延期，无法按时完成
* **应对**：合理估算时间，预留缓冲时间
* **缓解**：定期检查进度，及时调整计划

#### 27.2.2. 需求变更风险

* **风险**：需求频繁变更，影响开发进度
* **应对**：明确需求，减少变更
* **缓解**：使用敏捷开发，快速响应变更

#### 27.2.3. 资源风险

* **风险**：开发人员不足或技能不匹配
* **应对**：提前规划人员配置
* **缓解**：提供培训，或外包部分工作

### 27.3. 运营风险

#### 27.3.1. 安全风险

* **风险**：网站存在安全漏洞
* **应对**：定期进行安全审计，及时修复漏洞
* **缓解**：使用安全最佳实践，避免常见安全问题

#### 27.3.2. 可用性风险

* **风险**：网站无法访问或响应慢
* **应对**：使用可靠的托管服务，配置监控
* **缓解**：使用 CDN，配置缓存策略

### 27.4. 风险应对策略

* **风险识别**：定期识别和评估风险
* **风险监控**：持续监控风险状态
* **风险应对**：制定应对计划，及时处理风险
* **风险记录**：记录风险和处理过程，积累经验

## 28. 项目开发收益

### 28.1. 直接收益

#### 28.1.1. 个人品牌提升

* 展示个人技能和经验
* 提升个人专业形象
* 增加职业机会

#### 28.1.2. 技能展示

* 展示前端开发能力
* 展示项目经验
* 展示技术栈掌握程度

#### 28.1.3. 职业发展

* 增加求职竞争力
* 获得更多工作机会
* 提升薪资水平

### 28.2. 间接收益

#### 28.2.1. 学习收益

* 学习新技术和最佳实践
* 提升项目开发能力
* 积累项目经验

#### 28.2.2. 网络收益

* 扩大社交网络
* 获得更多关注
* 建立个人影响力

#### 28.2.3. 长期收益

* 建立个人作品集
* 为未来项目打基础
* 提升个人价值

### 28.3. 收益评估

* **短期收益**：个人品牌提升，技能展示
* **中期收益**：职业发展，更多机会
* **长期收益**：个人价值提升，持续收益

## 29. 项目开发评估

### 29.1. 技术评估

#### 29.1.1. 技术选型评估

* **Vue 3**：✅ 成熟稳定，社区活跃
* **TypeScript**：✅ 类型安全，提升代码质量
* **Vite**：✅ 快速构建，开发体验好
* **UnoCSS**：✅ 高性能，开发效率高

#### 29.1.2. 架构评估

* **前后端分离**：✅ 灵活，易于维护
* **组件化设计**：✅ 可复用，易扩展
* **状态管理**：✅ 清晰，易管理

### 29.2. 项目评估

#### 29.2.1. 可行性评估

* **技术可行性**：✅ 技术栈成熟，风险低
* **时间可行性**：✅ 时间估算合理，可完成
* **资源可行性**：✅ 资源充足，可支持

#### 29.2.2. 价值评估

* **个人价值**：✅ 提升个人品牌和技能
* **职业价值**：✅ 增加职业机会
* **学习价值**：✅ 学习新技术和最佳实践

### 29.3. 风险评估

* **技术风险**：🟡 低-中风险，可控
* **项目风险**：🟡 低-中风险，可管理
* **运营风险**：🟢 低风险，可预防

### 29.4. 成本效益分析

* **开发成本**：15,000-60,000 元
* **预期收益**：个人品牌提升、职业发展、技能提升
* **投资回报率**：高（长期收益显著）

## 30. 项目开发决策

### 30.1. 技术决策

#### 30.1.1. 前端框架选择

* **决策**：使用 Vue 3
* **理由**：
  * 学习曲线平缓
  * 性能优秀
  * 生态系统完善
  * 社区活跃

#### 30.1.2. 构建工具选择

* **决策**：使用 Vite
* **理由**：
  * 开发速度快
  * 构建性能好
  * 配置简单
  * 原生支持 TypeScript

#### 30.1.3. 样式方案选择

* **决策**：使用 UnoCSS + SCSS
* **理由**：
  * UnoCSS 性能高
  * SCSS 功能强大
  * 开发效率高

### 30.2. 架构决策

#### 30.2.1. 前后端分离

* **决策**：采用前后端分离架构
* **理由**：
  * 灵活，易于维护
  * 可以静态部署
  * 降低服务器成本

#### 30.2.2. 状态管理

* **决策**：使用 Pinia
* **理由**：
  * 轻量级
  * TypeScript 支持好
  * 易于使用

### 30.3. 部署决策

#### 30.3.1. 托管平台

* **决策**：使用 GitHub Pages
* **理由**：
  * 免费
  * 自动化部署
  * 全球 CDN
  * 易于维护

#### 30.3.2. CI/CD

* **决策**：使用 GitHub Actions
* **理由**：
  * 免费
  * 集成度高
  * 配置简单

### 30.4. 项目范围决策

#### 30.4.1. MVP 范围

* **决策**：先实现核心功能
* **理由**：
  * 快速上线
  * 验证需求
  * 降低风险

#### 30.4.2. 扩展功能

* **决策**：根据需求逐步添加
* **理由**：
  * 避免过度设计
  * 灵活应对变化
  * 降低开发成本

### 30.5. 决策记录

* 所有重要决策应记录在文档中
* 记录决策理由和影响
* 定期回顾和评估决策

## 31. 总结

该简历网站项目方案旨在构建一个现代化、高性能的个人简历展示网站。项目采用 Vue 3 + TypeScript + Vite 技术栈，遵循最佳实践和编码规范，确保代码质量和可维护性。

### 31.1. 核心特性

* **现代化技术栈**：Vue 3 Composition API + TypeScript
* **响应式设计**：完美适配各种设备
* **主题切换**：支持浅色/深色模式
* **性能优化**：代码分割、懒加载、资源优化
* **SEO 友好**：完整的 SEO 优化方案
* **易于部署**：自动化部署到 GitHub Pages

### 31.2. 开发优势

* **快速开发**：Vite 提供极速的开发体验
* **类型安全**：TypeScript 提供完整的类型检查
* **代码质量**：ESLint + Prettier 保证代码风格一致
* **可维护性**：清晰的项目结构和组件化设计

### 31.3. 部署优势

* **免费托管**：GitHub Pages 提供免费静态网站托管
* **自动化部署**：GitHub Actions 实现自动化 CI/CD
* **全球 CDN**：GitHub Pages 提供全球 CDN 加速

### 31.4. 项目价值

* **个人品牌提升**：展示个人技能和经验
* **职业发展**：增加职业机会和竞争力
* **技能提升**：学习新技术和最佳实践
* **长期收益**：建立个人作品集，提升个人价值

### 31.5. 项目可行性

* **技术可行性**：✅ 技术栈成熟，风险低
* **时间可行性**：✅ 时间估算合理，4-12 周可完成
* **资源可行性**：✅ 资源充足，成本可控
* **收益评估**：✅ 投资回报率高，长期收益显著

---

## 附录

### A. 参考资源

* [Vue 3 官方文档](https://vuejs.org/)
* [TypeScript 官方文档](https://www.typescriptlang.org/)
* [Vite 官方文档](https://vitejs.dev/)
* [UnoCSS 官方文档](https://unocss.dev/)
* [GitHub Pages 文档](https://docs.github.com/pages)

### B. 相关文档

* 项目编码规范：`.cursor/rules/` 目录
* API 文档：`docs/api.md`（如需要）
* 部署文档：`docs/deployment.md`（如需要）

### C. 联系方式

* 项目负责人：[HeZaoCha]
* 邮箱：[zaochahe@qq.com]
* GitHub：[HeZaoCha]

---

以上是关于 HeZaoCha 简历网站的完整项目方案，涵盖了项目的功能需求、技术栈、架构设计、开发流程、部署方案、成本评估、风险评估、收益评估等全方位内容。该方案可以作为项目开发的指导文档，确保项目按照既定计划顺利推进，实现预期目标。
