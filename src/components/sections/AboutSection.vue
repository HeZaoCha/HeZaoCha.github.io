<template>
  <section class="about-section">
    <div class="container">
      <h2 class="section-title">
        {{ $t('about.title') }}
      </h2>
      <div class="about-content">
        <div class="about-text">
          <p>{{ resumeData.personalInfo.bio }}</p>
          <div class="about-info">
            <div class="info-item">
              <i class="i-mdi-map-marker text-xl" />
              <span>{{ resumeData.personalInfo.location }}</span>
            </div>
            <div class="info-item">
              <i class="i-mdi-email text-xl" />
              <a :href="`mailto:${resumeData.personalInfo.email}`">
                {{ resumeData.personalInfo.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resumeData } from '@/constants/resume-data';
</script>

<style scoped>
.about-section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-color);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-color);

  i {
    color: var(--link-color);
  }

  a {
    color: var(--link-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .about-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .about-text {
    font-size: 0.875rem;
  }

  .info-item {
    font-size: 0.875rem;
  }
}
</style>

