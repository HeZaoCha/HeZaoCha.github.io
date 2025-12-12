const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 创建邮件传输器
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // 使用 SSL
    auth: {
      user: process.env.EMAIL_USER, // QQ邮箱地址
      pass: process.env.EMAIL_PASS, // QQ邮箱授权码
    },
  });
};

// 联系表单提交接口
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: '请填写所有必填字段',
      });
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: '邮箱格式不正确',
      });
    }

    const transporter = createTransporter();

    // 发送给网站管理员
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 发送给自己
      subject: `[ZaoSpace] ${subject}`,
      html: `
        <h2>新的联系表单提交</h2>
        <p><strong>姓名：</strong>${name}</p>
        <p><strong>邮箱：</strong>${email}</p>
        <p><strong>主题：</strong>${subject}</p>
        <p><strong>消息：</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 发送确认邮件给用户
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '感谢您的联系 - ZaoSpace',
      html: `
        <h2>感谢您的联系！</h2>
        <p>您好 ${name}，</p>
        <p>我已经收到您的消息，我会尽快回复您。</p>
        <p>您提交的内容：</p>
        <p><strong>主题：</strong>${subject}</p>
        <p><strong>消息：</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>此邮件由系统自动发送，请勿回复。</p>
      `,
    };

    // 发送邮件
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({
      success: true,
      message: '邮件发送成功！',
    });
  } catch (error) {
    console.error('邮件发送失败:', error);
    res.status(500).json({
      success: false,
      message: '邮件发送失败，请稍后重试',
    });
  }
});

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});

