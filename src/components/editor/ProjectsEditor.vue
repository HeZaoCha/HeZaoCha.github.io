<template>
  <div class="projects-editor">
    <h3 class="editor-section-title">
      {{ $t('resumeEditor.projects') }}
    </h3>
    <div
      v-for="(project, index) in projectsList"
      :key="index"
      class="project-item"
    >
      <div class="form-group">
        <label>{{ $t('common.name') }}</label>
        <input
          v-model="project.name"
          type="text"
          @blur="updateProject(index)"
        >
      </div>
      <div class="form-group">
        <label>{{ $t('common.description') }}</label>
        <textarea
          v-model="project.description"
          rows="3"
          @blur="updateProject(index)"
        />
      </div>
      <button
        class="btn-danger btn-sm"
        @click="removeProject(index)"
      >
        <i class="i-mdi-delete" />
        {{ $t('common.delete') }}
      </button>
    </div>
    <button
      class="btn-secondary"
      @click="addProject"
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

const projectsList = computed(() => resumeStore.resumeData.projects);

const updateProject = (index: number) => {
  resumeStore.updateProject(index, projectsList.value[index]);
};

const addProject = () => {
  resumeStore.addProject({
    name: '',
    description: '',
    technologies: [],
    highlights: [],
  });
};

const removeProject = (index: number) => {
  if (confirm(t('common.confirmDelete'))) {
    resumeStore.removeProject(index);
  }
};
</script>

<style scoped>
.projects-editor {
  padding: 1rem 0;
}

.project-item {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
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

