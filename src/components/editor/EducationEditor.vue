<template>
  <div class="education-editor">
    <h3 class="editor-section-title">
      {{ $t('resumeEditor.education') }}
    </h3>
    <div
      v-for="(edu, index) in educationList"
      :key="index"
      class="education-item"
    >
      <div class="form-group">
        <label>{{ $t('common.school') }}</label>
        <input
          v-model="edu.school"
          type="text"
          @blur="updateEducation(index)"
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.degree') }}</label>
        <input
          v-model="edu.degree"
          type="text"
          @blur="updateEducation(index)"
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.major') }}</label>
        <input
          v-model="edu.major"
          type="text"
          @blur="updateEducation(index)"
        >
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>{{ $t('common.startDate') }}</label>
          <input
            v-model="edu.startDate"
            type="month"
            @blur="updateEducation(index)"
          >
        </div>
        <div class="form-group">
          <label>{{ $t('common.endDate') }}</label>
          <input
            v-model="edu.endDate"
            type="month"
            @blur="updateEducation(index)"
          >
        </div>
      </div>
      <button
        class="btn-danger btn-sm"
        @click="removeEducation(index)"
      >
        <i class="i-mdi-delete" />
        {{ $t('common.delete') }}
      </button>
    </div>
    <button
      class="btn-secondary"
      @click="addEducation"
    >
      <i class="i-mdi-plus" />
      {{ $t('common.add') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useResumeStore } from '@/store/modules/resume';

const { t } = useI18n();
const resumeStore = useResumeStore();

const educationList = computed(() => resumeStore.resumeData.education);

const updateEducation = (index: number) => {
  resumeStore.updateEducation(index, educationList.value[index]);
};

const addEducation = () => {
  resumeStore.addEducation({
    school: '',
    degree: '',
    major: '',
    startDate: '',
    endDate: '',
    description: '',
  });
};

const removeEducation = (index: number) => {
  if (confirm(t('common.confirmDelete'))) {
    resumeStore.removeEducation(index);
  }
};
</script>

<style scoped>
.education-editor {
  padding: 1rem 0;
}

.education-item {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-danger {
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: #dc2626;
  }
}
</style>

