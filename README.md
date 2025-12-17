# ZaoSpace

一个现代化的个人简历网站，使用 Vue 3 + TypeScript + Vite 构建。

## 特性

- 🚀 Vue 3 Composition API + TypeScript
- ⚡️ Vite 快速构建工具
- 🎨 UnoCSS 原子化 CSS
- 🌓 主题切换（浅色/深色模式）
- 📱 响应式设计
- 🎯 SEO 优化
- 📦 代码分割和懒加载
- 📧 联系表单邮件发送
- 📄 PDF 简历下载

## 技术栈

- **前端框架**: Vue 3.5.25
- **开发语言**: TypeScript 5.9.3
- **构建工具**: Vite 7.2.7
- **样式方案**: UnoCSS 66.5.10 + SCSS
- **状态管理**: Pinia 3.0.4
- **路由**: Vue Router 4.6.4
- **国际化**: Vue I18n 11.2.2
- **图标**: Iconify
- **代码检查**: ESLint 9.39.1
- **后端**: Node.js + Express + Nodemailer

## 快速开始

### 环境要求

- Node.js 20.x 或更高版本
- pnpm 8.x 或更高版本

### 前端开发

#### 安装依赖

```bash
pnpm install
```

#### 开发

```bash
pnpm dev
```

#### 构建

```bash
pnpm build
```

#### 预览

```bash
pnpm preview
```

### 后端服务

#### 安装依赖

```bash
cd server
pnpm install
```

#### 配置环境变量

创建 `server/.env` 文件：

```env
EMAIL_USER=your-email@qq.com
EMAIL_PASS=your-authorization-code
PORT=3001
```

**QQ 邮箱授权码获取：**

1. 登录 QQ 邮箱
2. 进入「设置」->「账户」
3. 找到「POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务」
4. 开启「POP3/SMTP服务」或「IMAP/SMTP服务」
5. 点击「生成授权码」
6. 将生成的授权码填入 `.env` 文件的 `EMAIL_PASS`

#### 运行后端服务

```bash
# 开发模式
pnpm dev

# 生产模式
pnpm start
```

## 项目结构

```
zaospace/
├── src/                    # 源代码目录
│   ├── components/         # 组件
│   │   ├── common/         # 公共组件
│   │   └── sections/       # 页面区块组件
│   ├── views/              # 页面
│   ├── router/             # 路由配置
│   ├── store/              # 状态管理
│   ├── hooks/              # 组合式函数
│   ├── utils/              # 工具函数
│   ├── constants/          # 常量
│   ├── types/              # 类型定义
│   └── styles/             # 样式文件
├── server/                 # 后端服务
│   ├── index.js           # 服务器入口
│   └── package.json        # 后端依赖
├── public/                 # 静态资源
└── dist/                   # 构建输出
```

## 自定义

### 修改简历数据

编辑 `src/constants/resume-data.ts` 文件，更新个人信息、工作经历、项目等数据。

### 修改主题

编辑 `src/styles/themes.scss` 文件，自定义颜色变量。

### 修改头像

将头像图片放在 `public/images/` 目录，然后在 `resume-data.ts` 中更新路径。

## 功能说明

### 联系表单

联系表单需要后端服务支持。配置好 `server/.env` 后，启动后端服务即可使用。

### PDF 下载

点击"下载简历"按钮，会自动生成并下载 PDF 格式的简历。

### SEO 优化

项目已配置完整的 SEO 优化，包括：
- Meta 标签
- Open Graph 标签
- Twitter Card 标签
- 结构化数据（JSON-LD）

## 部署

### GitHub Pages

项目已配置 GitHub Actions，推送到 `main` 分支后会自动部署到 GitHub Pages。

### 手动部署

```bash
pnpm build
# 将 dist 目录内容部署到静态服务器
```

### 后端部署

后端服务可以部署到：
- Vercel（Serverless Functions）
- Railway
- Heroku
- 或其他 Node.js 托管平台

## 开发命令

```bash
# 代码检查
pnpm lint

# 类型检查
pnpm type-check

# 格式化代码
pnpm format

# 运行测试
pnpm test
```

## 文档

项目相关文档位于 `doc/` 目录：

- 📖 [**项目详细说明文档**](./doc/PROJECT_DOCUMENTATION.md) - **推荐阅读**：包含所有模块的详细介绍
- [项目结构说明](./doc/PROJECT_STRUCTURE.md)
- [安装指南](./doc/README-INSTALL.md)
- [需求文档](./doc/REQUIREMENT.md)
- [TODO 列表](./doc/TODO_LIST.md)
- [更新日志](./doc/CHANGELOG.md)
- [升级总结](./doc/UPGRADE_SUMMARY.md)
- [修复总结](./doc/FIX_SUMMARY.md)
- [ESLint 升级指南](./doc/eslint/ESLINT_UPGRADE_GUIDE.md)
- [ESLint 升级分析](./doc/eslint/ESLINT_UPGRADE_ANALYSIS.md)
- [ESLint 警告总结](./doc/eslint/ESLINT_WARNING_SUMMARY.md)

## 许可证

MIT
