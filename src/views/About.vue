<template>
  <DefaultLayout>
    <div class="about resume-content">
      <AboutSection />
      <ExperienceSection />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
</script>

<style scoped>
.about {
  min-height: 100vh;
}
</style>
