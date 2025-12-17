<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="contact-title">
            {{ $t('contact.title') }}
          </h2>
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
            <div
              v-if="resumeData.personalInfo.github"
              class="contact-item"
            >
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
            <div
              v-if="resumeData.personalInfo.linkedin"
              class="contact-item"
            >
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
          <h2 class="contact-title">
            {{ $t('contact.sendMessage') }}
          </h2>
          <div
            v-if="showSuccess"
            class="alert alert-success"
          >
            <i class="i-mdi-check-circle" />
            <span>{{ $t('contact.successMessage') }}</span>
          </div>
          <div
            v-if="showError"
            class="alert alert-error"
          >
            <i class="i-mdi-alert-circle" />
            <span>{{ errorMessage || $t('contact.errorMessage') }}</span>
          </div>
          <form
            class="form"
            @submit.prevent="handleSubmit"
          >
            <div class="form-group">
              <label for="name">{{ $t('contact.name') }} <span class="required">*</span></label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                :class="{ error: errors.name }"
                :placeholder="$t('contact.namePlaceholder')"
                @blur="validateForm"
              >
              <span
                v-if="errors.name"
                class="error-message"
              >{{ errors.name }}</span>
            </div>
            <div class="form-group">
              <label for="email">{{ $t('contact.email') }} <span class="required">*</span></label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                :class="{ error: errors.email }"
                :placeholder="$t('contact.emailPlaceholder')"
                @blur="validateForm"
              >
              <span
                v-if="errors.email"
                class="error-message"
              >{{ errors.email }}</span>
            </div>
            <div class="form-group">
              <label for="subject">{{ $t('contact.subject') }} <span class="required">*</span></label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                :class="{ error: errors.subject }"
                :placeholder="$t('contact.subjectPlaceholder')"
                @blur="validateForm"
              >
              <span
                v-if="errors.subject"
                class="error-message"
              >{{ errors.subject }}</span>
            </div>
            <div class="form-group">
              <label for="message">{{ $t('contact.message') }} <span class="required">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                :class="{ error: errors.message }"
                rows="5"
                :placeholder="$t('contact.messagePlaceholder')"
                @blur="validateForm"
              />
              <span
                v-if="errors.message"
                class="error-message"
              >{{ errors.message }}</span>
            </div>
            <button
              type="submit"
              class="btn-primary"
              :disabled="loading"
            >
              <i
                v-if="loading"
                class="i-mdi-loading animate-spin"
              />
              <span>{{ loading ? $t('contact.sending') : $t('contact.sendMessage') }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { resumeData } from '@/constants/resume-data';

const { t } = useI18n();

const loading = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref('');
const submitCount = ref(0);
const lastSubmitTime = ref(0);

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const validateForm = (): boolean => {
  let isValid = true;
  errors.name = '';
  errors.email = '';
  errors.subject = '';
  errors.message = '';

  // 验证姓名
  if (!form.name.trim()) {
    errors.name = t('contact.namePlaceholder');
    isValid = false;
  } else if (form.name.trim().length < 2) {
    errors.name = t('contact.name') + '至少需要2个字符';
    isValid = false;
  }

  // 验证邮箱
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email.trim()) {
    errors.email = t('contact.emailPlaceholder');
    isValid = false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = '请输入有效的邮箱地址';
    isValid = false;
  }

  // 验证主题
  if (!form.subject.trim()) {
    errors.subject = t('contact.subjectPlaceholder');
    isValid = false;
  } else if (form.subject.trim().length < 3) {
    errors.subject = t('contact.subject') + '至少需要3个字符';
    isValid = false;
  }

  // 验证消息
  if (!form.message.trim()) {
    errors.message = t('contact.messagePlaceholder');
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = t('contact.message') + '至少需要10个字符';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  // 防垃圾邮件机制：限制提交频率（1分钟内最多3次）
  const now = Date.now();
  if (now - lastSubmitTime.value < 60000) {
    submitCount.value++;
    if (submitCount.value > 3) {
      showError.value = true;
      errorMessage.value = '提交过于频繁，请稍后再试';
      return;
    }
  } else {
    submitCount.value = 1;
  }
  lastSubmitTime.value = now;

  loading.value = true;
  showError.value = false;
  showSuccess.value = false;

  try {
    const { post } = await import('@/utils/api');
    const data = await post('/contact', {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    if (data.success) {
      showSuccess.value = true;
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
      // 3秒后隐藏成功提示
      setTimeout(() => {
        showSuccess.value = false;
      }, 3000);
    } else {
      showError.value = true;
      errorMessage.value = data.message || t('contact.errorMessage');
    }
  } catch (error) {
    console.error('Failed to send message:', error);
    showError.value = true;
    errorMessage.value = t('contact.errorMessage');
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

    .required {
      color: var(--error-color);
    }
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

    &.error {
      border-color: var(--error-color);
    }
  }

  textarea {
    resize: vertical;
  }

  .error-message {
    color: var(--error-color);
    font-size: 0.875rem;
    margin-top: -0.25rem;
  }
}

.alert {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;

  i {
    font-size: 1.25rem;
  }

  &.alert-success {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  &.alert-error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.2);
  }
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

  .animate-spin {
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 2rem 0;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 1.5rem;
  }

  .contact-item {
    flex-direction: column;
    gap: 0.5rem;

    i {
      margin-top: 0;
    }
  }

  .form-group {
    gap: 0.375rem;

    label {
      font-size: 0.875rem;
    }

    input,
    textarea {
      padding: 0.625rem;
      font-size: 0.875rem;
    }
  }

  .btn-primary {
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>

