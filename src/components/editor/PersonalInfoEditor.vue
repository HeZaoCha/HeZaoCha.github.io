<template>
  <div class="personal-info-editor">
    <h3 class="editor-section-title">
      {{ $t('resumeEditor.personalInfo') }}
    </h3>
    <form
      class="editor-form"
      @submit.prevent="handleSubmit"
    >
      <div class="form-group">
        <label>{{ $t('common.name') }}</label>
        <input
          v-model="form.name"
          type="text"
          required
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.title') }}</label>
        <input
          v-model="form.title"
          type="text"
          required
        >
      </div>
      <div class="form-group">
        <label>{{ $t('contact.email') }}</label>
        <input
          v-model="form.email"
          type="email"
          required
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.location') }}</label>
        <input
          v-model="form.location"
          type="text"
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.bio') }}</label>
        <textarea
          v-model="form.bio"
          rows="4"
        />
      </div>
      <div class="form-group">
        <label>GitHub</label>
        <input
          v-model="form.github"
          type="url"
        >
      </div>
      <div class="form-group">
        <label>LinkedIn</label>
        <input
          v-model="form.linkedin"
          type="url"
        >
      </div>
      <button
        type="submit"
        class="btn-primary"
      >
        {{ $t('common.save') }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useResumeStore } from '@/store/modules/resume';

const { t } = useI18n();
const resumeStore = useResumeStore();

const form = reactive({
  name: '',
  title: '',
  email: '',
  location: '',
  bio: '',
  github: '',
  linkedin: '',
});

onMounted(() => {
  Object.assign(form, resumeStore.resumeData.personalInfo);
});

const handleSubmit = () => {
  resumeStore.updatePersonalInfo(form);
  alert(t('common.success'));
};
</script>

<style scoped>
.personal-info-editor {
  padding: 1rem 0;
}

.editor-section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.editor-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--text-color);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--link-color);
}
</style>

