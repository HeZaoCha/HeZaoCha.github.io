<template>
  <div class="skills-editor">
    <h3 class="editor-section-title">
      {{ $t('resumeEditor.skills') }}
    </h3>
    <div
      v-for="(category, catIndex) in skillsList"
      :key="catIndex"
      class="skill-category"
    >
      <h4>{{ category.category }}</h4>
      <div
        v-for="(skill, skillIndex) in category.items"
        :key="skillIndex"
        class="skill-item"
      >
        <input
          v-model="skill.name"
          type="text"
        >
        <input
          v-model.number="skill.level"
          type="number"
          min="1"
          max="5"
        >
        <button
          class="btn-danger btn-sm"
          @click="removeSkill(catIndex, skillIndex)"
        >
          <i class="i-mdi-delete" />
        </button>
      </div>
      <button
        class="btn-secondary btn-sm"
        @click="addSkill(catIndex)"
      >
        <i class="i-mdi-plus" />
        {{ $t('common.add') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useResumeStore } from '@/store/modules/resume';

const { t } = useI18n();
const resumeStore = useResumeStore();

const skillsList = computed(() => resumeStore.resumeData.skills);

const addSkill = (catIndex: number) => {
  skillsList.value[catIndex].items.push({ name: '', level: 1 });
};

const removeSkill = (catIndex: number, skillIndex: number) => {
   
  if (confirm(t('common.confirmDelete'))) {
    skillsList.value[catIndex].items.splice(skillIndex, 1);
  }
};
</script>

<style scoped>
.skills-editor {
  padding: 1rem 0;
}

.skill-category {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
}

.skill-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-item input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
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

