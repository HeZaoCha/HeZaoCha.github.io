<template>
  <DefaultLayout>
    <div class="home">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>

