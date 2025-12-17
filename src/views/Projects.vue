<template>
  <main class="projects-page">
    <div class="container">
      <h1 class="page-title">
        {{ $t('projects.title') }}
      </h1>
      <ProjectsSection />
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .projects-page {
    padding: 2rem 0;
  }

  .page-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }
}
</style>

