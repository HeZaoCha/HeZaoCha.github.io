<template>
  <main class="contact-page">
    <div class="container">
      <h1 class="page-title">
        {{ $t('contact.title') }}
      </h1>
      <ContactSection />
    </div>
  </main>
</template>

<script setup lang="ts">
import ContactSection from '@/components/sections/ContactSection.vue';
</script>

<style scoped>
.contact-page {
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
  .contact-page {
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

