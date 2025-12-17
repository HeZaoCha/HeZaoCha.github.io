# CHANGELOG

本文档记录了 ZaoSpace 个人简历网站项目的所有重要变更。

## [Unreleased]

### Added
- 升级到 Vite 7.2.7，享受最新的性能优化和功能增强
- 升级到 Vue 3.5.25，使用最新的 Composition API 特性
- 升级到 Pinia 3.0.4，使用最新的状态管理功能
- 升级到 Vue I18n 11.2.2，使用最新的国际化功能
- 升级到 Vue Router 4.6.4
- 升级到 TypeScript 5.9.3
- 升级到 ESLint 9.39.1，使用新的扁平配置格式
- 升级到 UnoCSS 66.5.10，支持 Vite 7
- 升级到 vue-tsc 3.1.8，改进类型检查性能
- 升级到 @vitejs/plugin-vue 6.0.3，支持 Vite 7
- 多语言支持（中文、英文），使用 Vue I18n 实现国际化
- 语言切换组件（LocaleToggle），支持在头部切换语言
- 在线简历编辑器（ResumeEditor），支持编辑个人信息、教育背景、工作经历、项目和技能
- 简历数据 Store 模块，支持数据的增删改查和导入导出
- 访问统计功能（Analytics），统计总访问量、今日访问、独立访客和页面浏览量
- 自定义设置功能（Customization），支持自定义主题颜色、字体、背景色和背景图片
- Tabs 和 Tab 组件，用于简历编辑器的标签页切换
- 编辑器子组件：PersonalInfoEditor、EducationEditor、WorkExperienceEditor、ProjectsEditor、SkillsEditor
- 统一的 API 工具函数（utils/api.ts），封装 fetch 请求
- html2pdf.js 类型定义文件（types/html2pdf.d.ts）
- 项目结构说明文档（PROJECT_STRUCTURE.md）

### Changed
- **重大升级：升级到 Vite 7.2.7**
  - 使用最新的构建工具，提升构建性能
  - 支持 Node.js 20.19+ 或 22.12+
  - 移除 Sass 遗留 API 支持，使用现代 API
  - 更新默认浏览器兼容性目标
- **升级 Vue 生态系统到最新稳定版本**
  - Vue 3.5.25：最新的 Composition API 和性能优化
  - Pinia 3.0.4：改进的状态管理
  - Vue I18n 11.2.2：增强的国际化功能
  - Vue Router 4.6.4：最新的路由功能
- **升级开发工具**
  - ESLint 9.39.1：使用新的扁平配置格式（eslint.config.mjs）
  - TypeScript 5.9.3：最新的类型系统
  - UnoCSS 66.5.10：完全兼容 Vite 7
  - vue-tsc 3.1.8：更快的类型检查
- **修复兼容性问题**
  - 修复 Sass @import 语法，使用 @use 替代
  - 修复 ESLint 9 配置，使用扁平配置格式
  - 修复 TypeScript 类型错误
  - 修复 UnoCSS 与 Vite 7 的兼容性问题
- 优化项目结构，移除未使用的依赖（axios）
- 统一使用 fetch API 替代 axios 进行 HTTP 请求
- 合并重复的类型定义文件（env.d.ts 合并到 vite-env.d.ts）
- 优化 ContactSection 组件，使用统一的 API 工具函数
- 改进代码组织结构，提高可维护性
- 优化项目展示功能：添加搜索和筛选功能
- 优化 PDF 生成：添加进度提示和样式优化
- 优化联系表单：添加防垃圾邮件机制（提交频率限制）
- 添加 TODO_LIST.md 文档，记录项目开发任务清单
- 添加 CHANGELOG.md 文档，记录项目版本变更
- 完善响应式设计，优化移动端、平板端和手机端显示效果
- 添加工作经历时间线展示样式
- 添加工作经历详情展开/收起功能
- 添加教育背景时间线展示样式
- 添加主修课程展示功能
- 完善联系表单验证功能
- 添加表单提交成功/失败提示
- 添加表单加载状态和错误提示样式
- 完善 SEO 优化功能
- 添加完整的 Open Graph 标签支持
- 添加 Twitter Card 标签支持
- 添加动态结构化数据（JSON-LD）生成和注入
- 添加 sitemap.xml 文件
- 添加 robots.txt 文件
- 优化语义化 HTML 标签（使用 `<main>` 标签）
- 创建图片懒加载组件（LazyImage）
- 添加 DNS 预解析和预连接优化
- 创建 GitHub Actions 部署工作流
- 创建 GitHub Actions CI 工作流
- 添加错误边界组件（ErrorBoundary）
- 完善全局错误捕获和处理
- 优化 404 页面样式和交互
- 添加页面加载动画
- 添加按钮和卡片悬停动画效果

### Changed
- 更新项目文档结构
- 优化所有页面的响应式布局
- 优化工作经历和教育背景展示样式
- 优化联系表单用户体验
- 添加错误颜色和成功颜色主题变量
- 增强 SEO 工具函数，支持更多 Meta 标签
- 优化路由 SEO 配置，为每个页面设置独特的关键词和描述
- 优化页面结构，使用语义化 HTML 标签
- 优化 Vite 构建配置，实现代码分割和资源优化
- 优化图片加载策略，添加 loading 属性
- 优化构建输出，改进资源文件命名和组织
- 增强错误处理机制，添加全局错误捕获
- 优化动画性能，使用 CSS 动画替代部分 JS 动画

---

## [1.0.0] - 2025-01-15

### Added

#### 项目初始化
- 初始化 Vue 3 + TypeScript + Vite 项目
- 配置 UnoCSS 原子化 CSS 框架
- 配置 Pinia 状态管理
- 配置 Vue Router 4 路由管理
- 配置 ESLint 和 Prettier 代码规范工具
- 配置 TypeScript 类型检查

#### 基础页面结构
- 创建默认布局组件（DefaultLayout）
- 创建头部导航组件（Header）
- 创建页脚组件（Footer）
- 创建移动端菜单组件（MobileMenu）
- 创建主题切换组件（ThemeToggle）
- 创建加载组件（Loading）

#### 路由配置
- 配置首页路由（Home）
- 配置关于页路由（About）
- 配置项目页路由（Projects）
- 配置联系页路由（Contact）
- 配置 404 页面路由（NotFound）

#### 页面区块组件
- 创建英雄区块组件（HeroSection）
  - 展示用户头像、姓名、职位、简介
  - 展示社交链接（GitHub、LinkedIn、Email）
  - 提供联系和下载简历按钮
- 创建技能区块组件（SkillsSection）
  - 展示技能分类
  - 展示技能等级进度条
  - 支持技能图标展示
- 创建项目区块组件（ProjectsSection）
  - 展示项目卡片
  - 展示项目详情
  - 支持项目链接跳转
- 创建经历区块组件（ExperienceSection）
  - 展示工作经历
  - 展示工作职责
  - 展示技术栈
- 创建关于区块组件（AboutSection）
  - 展示教育背景
  - 展示工作经历
- 创建联系区块组件（ContactSection）
  - 展示联系方式
  - 提供联系表单

#### 状态管理
- 创建主题状态管理模块（theme store）
  - 支持浅色/深色模式切换
  - 支持主题持久化存储
- 创建应用状态管理模块（app store）
  - 管理页面加载状态
  - 管理错误信息

#### 工具函数
- 创建通用工具函数（common.ts）
- 创建格式化工具函数（format.ts）
  - 日期格式化
  - 文本格式化
- 创建 PDF 工具函数（pdf.ts）
  - 实现简历 PDF 下载功能
  - 使用 html2pdf.js 生成 PDF
- 创建 SEO 工具函数（seo.ts）
  - 设置 Meta 标签
  - 设置 Open Graph 标签
  - 设置 Twitter Card 标签
  - 生成结构化数据（JSON-LD）
- 创建存储工具函数（storage.ts）
  - LocalStorage 封装
  - SessionStorage 封装

#### 组合式函数（Hooks）
- 创建主题管理 Hook（useTheme.ts）
  - 主题切换逻辑
  - 主题状态管理
- 创建滚动动画 Hook（useScrollAnimation.ts）
  - 滚动动画触发
  - 元素可见性检测

#### 样式系统
- 创建主样式文件（main.scss）
- 创建主题样式文件（themes.scss）
  - 浅色主题变量
  - 深色主题变量
- 创建变量样式文件（variables.scss）
  - CSS 变量定义
  - 颜色变量
  - 间距变量

#### 类型定义
- 创建简历类型定义（resume.ts）
  - PersonalInfo 接口
  - Education 接口
  - WorkExperience 接口
  - Project 接口
  - Skill 接口
  - ResumeData 接口
- 创建主题类型定义（theme.ts）
  - ThemeMode 类型
  - ThemeConfig 接口

#### 常量配置
- 创建应用常量（app.ts）
- 创建简历数据常量（resume-data.ts）
  - 个人信息数据
  - 教育背景数据
  - 工作经历数据
  - 项目数据
  - 技能数据

#### 后端服务
- 创建 Node.js 后端服务
- 配置 Express 框架
- 配置 Nodemailer 邮件服务
- 实现联系表单 API（POST /api/contact）
- 创建后端服务文档（server/README.md）

#### 文档
- 创建项目 README.md
- 创建后端服务 README.md
- 创建需求文档（doc/REQUIREMENT.md）

### Changed
- 无

### Fixed
- 无

### Removed
- 无

### Deprecated
- 无

### Security
- 无

---

## 版本说明

### 版本号格式

本项目遵循[语义化版本控制](https://semver.org/lang/zh-CN/)（Semantic Versioning，SemVer）规范。

版本号格式：`MAJOR.MINOR.PATCH`

- **MAJOR**：破坏性变更（不兼容的 API 变动）
- **MINOR**：向下兼容的新增功能
- **PATCH**：向下兼容的问题修复

### 变更类型

- **Added**：新功能的添加
- **Changed**：功能或行为的变动，但与之前版本兼容
- **Deprecated**：标记为废弃的功能，未来版本将不再支持
- **Removed**：删除的功能或 API
- **Fixed**：修复的 Bug
- **Security**：修复的安全问题

### 日期格式

日期格式：`YYYY-MM-DD`

---

## 更新日志

本文档会随着项目的开发进度持续更新，记录每个版本的变更内容。

