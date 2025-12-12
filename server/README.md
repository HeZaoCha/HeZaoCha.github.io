# ZaoSpace 后端服务

## 功能

- 联系表单邮件发送
- 健康检查接口

## 环境要求

- Node.js 18+ 
- npm 或 pnpm

## 安装

```bash
cd server
npm install
# 或
pnpm install
```

## 配置

1. 复制 `.env.example` 为 `.env`
2. 配置 QQ 邮箱信息：

```env
EMAIL_USER=your-email@qq.com
EMAIL_PASS=your-authorization-code
PORT=3001
```

### QQ 邮箱授权码获取

1. 登录 QQ 邮箱
2. 进入「设置」->「账户」
3. 找到「POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务」
4. 开启「POP3/SMTP服务」或「IMAP/SMTP服务」
5. 点击「生成授权码」
6. 将生成的授权码填入 `.env` 文件的 `EMAIL_PASS`

### SMTP 配置说明

- 发送邮件服务器：smtp.qq.com
- 端口：465（SSL）或 587（TLS）
- 用户名：你的QQ邮箱完整地址
- 密码：生成的授权码（不是QQ密码）

## 运行

### 开发模式

```bash
npm run dev
# 或
pnpm dev
```

### 生产模式

```bash
npm start
# 或
pnpm start
```

## API 接口

### POST /api/contact

提交联系表单

**请求体：**
```json
{
  "name": "姓名",
  "email": "email@example.com",
  "subject": "主题",
  "message": "消息内容"
}
```

**响应：**
```json
{
  "success": true,
  "message": "邮件发送成功！"
}
```

### GET /api/health

健康检查

**响应：**
```json
{
  "status": "ok"
}
```

