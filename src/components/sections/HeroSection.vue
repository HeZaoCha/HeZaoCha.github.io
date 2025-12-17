<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content animate-on-scroll">
        <div class="hero-avatar">
          <img
            :src="resumeData.personalInfo.avatar"
            :alt="resumeData.personalInfo.name"
            loading="eager"
            @error="handleImageError"
          >
        </div>
        <h1 class="hero-name">
          {{ resumeData.personalInfo.name }}
        </h1>
        <p class="hero-title">
          {{ resumeData.personalInfo.title }}
        </p>
        <p class="hero-bio">
          {{ resumeData.personalInfo.bio }}
        </p>
        <div class="hero-actions">
          <a
            :href="`mailto:${resumeData.personalInfo.email}`"
            class="btn-primary"
          >
            {{ $t('home.contactMe') }}
          </a>
          <button
            class="btn-secondary"
            :disabled="downloading"
            @click="downloadResume"
          >
            <i
              v-if="downloading"
              class="i-mdi-loading animate-spin"
            />
            <span v-else>{{ $t('home.downloadResume') }}</span>
          </button>
        </div>
        <div class="hero-social">
          <a
            v-if="resumeData.personalInfo.github"
            :href="resumeData.personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="GitHub"
          >
            <i class="i-mdi-github text-2xl" />
          </a>
          <a
            v-if="resumeData.personalInfo.linkedin"
            :href="resumeData.personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <i class="i-mdi-linkedin text-2xl" />
          </a>
          <a
            v-if="resumeData.personalInfo.email"
            :href="`mailto:${resumeData.personalInfo.email}`"
            class="social-link"
            aria-label="Email"
          >
            <i class="i-mdi-email text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { resumeData } from '@/constants/resume-data';
import { downloadResumePDF } from '@/utils/pdf';

const downloading = ref(false);

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  // 如果头像加载失败，使用默认占位符
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U1ZTdlYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Zu+54mHPC90ZXh0Pjwvc3ZnPg==';
};

const downloadResume = async () => {
  downloading.value = true;
  try {
    await downloadResumePDF((progress) => {
      // 可以在这里显示进度，例如更新按钮文本
      if (progress === 100) {
        downloading.value = false;
      }
    });
  } catch {
    downloading.value = false;
     
    alert('PDF 生成失败，请稍后重试');
  }
};
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  text-align: center;
}

.hero-avatar {
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--link-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: avatarFloat 3s ease-in-out infinite;
}

.hero-avatar::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hero-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.hero-avatar:hover::before {
  opacity: 1;
  animation: rotate 3s linear infinite;
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.hero-avatar:hover img {
  transform: scale(1.1);
}

@keyframes avatarFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hero-name {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  background: linear-gradient(135deg, var(--text-color) 0%, var(--link-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: nameGradient 5s ease infinite;
  background-size: 200% 200%;
}

@keyframes nameGradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-title {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.hero-bio {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
}

.btn-primary {
  background-color: var(--link-color);
  color: white;

  &:hover {
    background-color: var(--link-hover-color);
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 2px solid var(--border-color);

  &:hover {
    border-color: var(--link-color);
    color: var(--link-color);
  }
}

.hero-social {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.social-link {
  color: var(--text-secondary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 2px solid var(--border-color);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-5px) scale(1.1);
    border-color: transparent;
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  i {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: scale(1.2) rotate(5deg);
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
    padding: 3rem 0;
  }

  .hero-avatar {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 1.25rem;
  }

  .hero-bio {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .hero-actions {
    margin-bottom: 1.5rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 60vh;
    padding: 2rem 0;
  }

  .hero-avatar {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }

  .hero-name {
    font-size: 1.75rem;
  }

  .hero-title {
    font-size: 1.125rem;
  }

  .hero-bio {
    font-size: 0.875rem;
    padding: 0 1rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }

  .hero-social {
    gap: 1rem;
  }
}
</style>

