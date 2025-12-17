<template>
  <div class="work-experience-editor">
    <h3 class="editor-section-title">
      {{ $t('resumeEditor.workExperience') }}
    </h3>
    <div
      v-for="(exp, index) in experienceList"
      :key="index"
      class="experience-item"
    >
      <div class="form-group">
        <label>{{ $t('common.company') }}</label>
        <input
          v-model="exp.company"
          type="text"
          @blur="updateExperience(index)"
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.position') }}</label>
        <input
          v-model="exp.position"
          type="text"
          @blur="updateExperience(index)"
        >
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>{{ $t('common.startDate') }}</label>
          <input
            v-model="exp.startDate"
            type="month"
            @blur="updateExperience(index)"
          >
        </div>
        <div class="form-group">
          <label>{{ $t('common.endDate') }}</label>
          <input
            v-model="exp.endDate"
            type="text"
            @blur="updateExperience(index)"
          >
        </div>
      </div>
      <div class="form-group">
        <label>{{ $t('common.location') }}</label>
        <input
          v-model="exp.location"
          type="text"
          @blur="updateExperience(index)"
        >
      </div>
      <button
        class="btn-danger btn-sm"
        @click="removeExperience(index)"
      >
        <i class="i-mdi-delete" />
        {{ $t('common.delete') }}
      </button>
    </div>
    <button
      class="btn-secondary"
      @click="addExperience"
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

const experienceList = computed(() => resumeStore.resumeData.workExperience);

const updateExperience = (index: number) => {
  resumeStore.updateWorkExperience(index, experienceList.value[index]);
};

const addExperience = () => {
  resumeStore.addWorkExperience({
    company: '',
    position: '',
    startDate: '',
    endDate: 'present',
    location: '',
    description: [],
    technologies: [],
  });
};

const removeExperience = (index: number) => {
  if (confirm(t('common.confirmDelete'))) {
    resumeStore.removeWorkExperience(index);
  }
};
</script>

<style scoped>
.work-experience-editor {
  padding: 1rem 0;
}

.experience-item {
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

