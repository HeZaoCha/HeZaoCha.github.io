<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="copyright">
          {{ $t('footer.copyright', { year: currentYear }) }}
        </p>
        <div class="social-links">
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
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { resumeData } from '@/constants/resume-data';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--text-secondary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-color);
    transform: translateY(-2px);
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>

