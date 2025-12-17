<template>
  <main class="resume-editor-page">
      <div class="container">
        <div class="editor-header">
          <h1 class="page-title">
            {{ $t('resumeEditor.title') }}
          </h1>
          <div class="editor-actions">
            <button
              class="btn-secondary"
              @click="previewMode = !previewMode"
            >
              <i :class="previewMode ? 'i-mdi-eye-off' : 'i-mdi-eye'" />
              {{ previewMode ? $t('resumeEditor.editMode') : $t('resumeEditor.previewMode') }}
            </button>
            <button
              class="btn-secondary"
              @click="exportData"
            >
              <i class="i-mdi-download" />
              {{ $t('resumeEditor.export') }}
            </button>
            <button
              class="btn-secondary"
              @click="importData"
            >
              <i class="i-mdi-upload" />
              {{ $t('resumeEditor.import') }}
            </button>
            <button
              class="btn-danger"
              @click="resetData"
            >
              <i class="i-mdi-refresh" />
              {{ $t('resumeEditor.reset') }}
            </button>
          </div>
        </div>

        <div class="editor-content">
          <div
            v-if="!previewMode"
            class="editor-form"
          >
            <Tabs
              v-model:selected="activeTab"
              class="editor-tabs"
            >
              <Tab
                name="personal"
                :label="$t('resumeEditor.personalInfo')"
              >
                <PersonalInfoEditor />
              </Tab>
              <Tab
                name="education"
                :label="$t('resumeEditor.education')"
              >
                <EducationEditor />
              </Tab>
              <Tab
                name="experience"
                :label="$t('resumeEditor.workExperience')"
              >
                <WorkExperienceEditor />
              </Tab>
              <Tab
                name="projects"
                :label="$t('resumeEditor.projects')"
              >
                <ProjectsEditor />
              </Tab>
              <Tab
                name="skills"
                :label="$t('resumeEditor.skills')"
              >
                <SkillsEditor />
              </Tab>
            </Tabs>
          </div>
          <div
            v-else
            class="editor-preview"
          >
            <Home />
          </div>
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Home from '@/views/Home.vue';
import PersonalInfoEditor from '@/components/editor/PersonalInfoEditor.vue';
import EducationEditor from '@/components/editor/EducationEditor.vue';
import WorkExperienceEditor from '@/components/editor/WorkExperienceEditor.vue';
import ProjectsEditor from '@/components/editor/ProjectsEditor.vue';
import SkillsEditor from '@/components/editor/SkillsEditor.vue';
import Tabs from '@/components/common/Tabs.vue';
import Tab from '@/components/common/Tab.vue';
import { useResumeStore } from '@/store/modules/resume';

const { t } = useI18n();
const resumeStore = useResumeStore();
const previewMode = ref(false);
const activeTab = ref('personal');

const exportData = () => {
  const data = resumeStore.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume-data.json';
  a.click();
  URL.revokeObjectURL(url);
};

const importData = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);
          resumeStore.importData(data);
          alert(t('resumeEditor.importSuccess'));
        } catch (error) {
          alert(t('resumeEditor.importError'));
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};

const resetData = () => {
  if (confirm(t('resumeEditor.resetConfirm'))) {
    resumeStore.resetToDefault();
  }
};
</script>

<style scoped>
.resume-editor-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.editor-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.editor-content {
  background-color: var(--card-bg);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.editor-form {
  min-height: 500px;
}

.editor-preview {
  min-height: 500px;
}

.btn-danger {
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: #dc2626;
  }
}

@media (max-width: 768px) {
  .editor-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .editor-actions {
    width: 100%;
  }
}
</style>

