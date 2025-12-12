<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content animate-on-scroll">
        <div class="hero-avatar">
          <img
            :src="resumeData.personalInfo.avatar"
            :alt="resumeData.personalInfo.name"
            @error="handleImageError"
          />
        </div>
        <h1 class="hero-name">{{ resumeData.personalInfo.name }}</h1>
        <p class="hero-title">{{ resumeData.personalInfo.title }}</p>
        <p class="hero-bio">{{ resumeData.personalInfo.bio }}</p>
        <div class="hero-actions">
          <a :href="`mailto:${resumeData.personalInfo.email}`" class="btn-primary">
            联系我
          </a>
          <button @click="downloadResume" class="btn-secondary">
            下载简历
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
import { resumeData } from '@/constants/resume-data';
import { downloadResumePDF } from '@/utils/pdf';

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  // 如果头像加载失败，使用默认占位符
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U1ZTdlYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Zu+54mHPC90ZXh0Pjwvc3ZnPg==';
};

const downloadResume = () => {
  downloadResumePDF();
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
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-name {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--text-color);
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
  transition: all 0.3s ease;

  &:hover {
    color: var(--link-color);
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 1.25rem;
  }

  .hero-bio {
    font-size: 1rem;
  }
}
</style>

