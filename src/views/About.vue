<template>
  <main class="about resume-content">
    <AboutSection />
    <ExperienceSection />
  </main>
</template>

<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
</script>

<style scoped>
.about {
  min-height: 100vh;
}

@media (max-width: 768px) {
  .about {
    padding: 0;
  }
}
</style>
