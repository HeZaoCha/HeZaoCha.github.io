<template>
  <main class="home">
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
</script>

<style scoped>
.home {
  min-height: 100vh;
}

@media (max-width: 768px) {
  .home {
    padding: 0;
  }
}
</style>

