<template>
  <DefaultLayout>
    <div class="projects-page">
      <div class="container">
        <h1 class="page-title">项目经验</h1>
        <ProjectsSection />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
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
</style>

