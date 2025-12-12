<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="contact-title">联系方式</h2>
          <div class="contact-items">
            <div class="contact-item">
              <i class="i-mdi-email text-2xl" />
              <div>
                <h3>邮箱</h3>
                <a :href="`mailto:${resumeData.personalInfo.email}`">
                  {{ resumeData.personalInfo.email }}
                </a>
              </div>
            </div>
            <div v-if="resumeData.personalInfo.github" class="contact-item">
              <i class="i-mdi-github text-2xl" />
              <div>
                <h3>GitHub</h3>
                <a
                  :href="resumeData.personalInfo.github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ resumeData.personalInfo.github }}
                </a>
              </div>
            </div>
            <div v-if="resumeData.personalInfo.linkedin" class="contact-item">
              <i class="i-mdi-linkedin text-2xl" />
              <div>
                <h3>LinkedIn</h3>
                <a
                  :href="resumeData.personalInfo.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ resumeData.personalInfo.linkedin }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <h2 class="contact-title">发送消息</h2>
          <form @submit.prevent="handleSubmit" class="form">
            <div class="form-group">
              <label for="name">姓名</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="请输入您的姓名"
              />
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="请输入您的邮箱"
              />
            </div>
            <div class="form-group">
              <label for="subject">主题</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="请输入主题"
              />
            </div>
            <div class="form-group">
              <label for="message">消息</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                placeholder="请输入您的消息"
              />
            </div>
            <button type="submit" class="btn-primary" :disabled="loading">
              {{ loading ? '发送中...' : '发送消息' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { resumeData } from '@/constants/resume-data';
import { useAppStore } from '@/store/modules/app';

const appStore = useAppStore();
const loading = ref(false);

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const handleSubmit = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    const data = await response.json();

    if (data.success) {
      alert('消息发送成功！我会尽快回复您。');
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    } else {
      alert(data.message || '消息发送失败，请稍后重试。');
    }
  } catch (error) {
    console.error('Failed to send message:', error);
    alert('消息发送失败，请检查网络连接或稍后重试。');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  i {
    color: var(--link-color);
    margin-top: 0.25rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    word-break: break-all;

    &:hover {
      text-decoration: underline;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: var(--text-color);
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--link-color);
    }
  }

  textarea {
    resize: vertical;
  }
}

.btn-primary {
  padding: 0.75rem 2rem;
  background-color: var(--link-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: var(--link-hover-color);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>

