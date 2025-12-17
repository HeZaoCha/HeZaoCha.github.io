<template>
  <main class="customization-page">
    <div class="container">
      <h1 class="page-title">
        {{ $t('customization.title') }}
      </h1>
      <div class="customization-content">
        <div class="customization-section">
          <h3>{{ $t('customization.theme') }}</h3>
          <div class="form-group">
            <label>{{ $t('customization.primaryColor') }}</label>
            <input
              v-model="form.primaryColor"
              type="color"
              @change="updatePrimaryColor"
            >
          </div>
          <div class="form-group">
            <label>{{ $t('customization.secondaryColor') }}</label>
            <input
              v-model="form.secondaryColor"
              type="color"
              @change="updateSecondaryColor"
            >
          </div>
        </div>
        <div class="customization-section">
          <h3>{{ $t('customization.font') }}</h3>
          <div class="form-group">
            <label>{{ $t('customization.fontFamily') }}</label>
            <select
              v-model="form.fontFamily"
              @change="updateFontFamily"
            >
              <option value="system-ui, -apple-system, sans-serif">
                系统默认
              </option>
              <option value="'Inter', sans-serif">
                Inter
              </option>
              <option value="'Roboto', sans-serif">
                Roboto
              </option>
              <option value="'Open Sans', sans-serif">
                Open Sans
              </option>
            </select>
          </div>
        </div>
        <div class="customization-section">
          <h3>{{ $t('customization.background') }}</h3>
          <div class="form-group">
            <label>{{ $t('customization.backgroundColor') }}</label>
            <input
              v-model="form.backgroundColor"
              type="color"
              @change="updateBackgroundColor"
            >
          </div>
          <div class="form-group">
            <label>{{ $t('customization.backgroundImage') }}</label>
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
            >
            <button
              v-if="form.backgroundImage"
              class="btn-danger btn-sm"
              @click="removeBackgroundImage"
            >
              {{ $t('common.delete') }}
            </button>
          </div>
        </div>
        <div class="customization-actions">
          <button
            class="btn-secondary"
            @click="resetToDefault"
          >
            {{ $t('common.reset') }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCustomizationStore } from '@/store/modules/customization';

const { t } = useI18n();
const customizationStore = useCustomizationStore();

const form = reactive({
  primaryColor: customizationStore.customization.primaryColor,
  secondaryColor: customizationStore.customization.secondaryColor,
  fontFamily: customizationStore.customization.fontFamily,
  backgroundColor: customizationStore.customization.backgroundColor,
  backgroundImage: customizationStore.customization.backgroundImage,
});

onMounted(() => {
  customizationStore.initCustomization();
});

const updatePrimaryColor = () => {
  customizationStore.setPrimaryColor(form.primaryColor);
};

const updateSecondaryColor = () => {
  customizationStore.setSecondaryColor(form.secondaryColor);
};

const updateFontFamily = () => {
  customizationStore.setFontFamily(form.fontFamily);
};

const updateBackgroundColor = () => {
  customizationStore.setBackgroundColor(form.backgroundColor);
};

const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      form.backgroundImage = imageUrl;
      customizationStore.setBackgroundImage(imageUrl);
    };
    reader.onerror = () => {

      console.error('Failed to read image file');
    };
    reader.readAsDataURL(file);
  }
};

const removeBackgroundImage = () => {
  form.backgroundImage = '';
  customizationStore.setBackgroundImage('');
};

const resetToDefault = () => {
  if (confirm(t('common.confirmReset'))) {
    customizationStore.resetToDefault();
    Object.assign(form, customizationStore.customization);
  }
};
</script>

<style scoped>
.customization-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.customization-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.customization-section {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.customization-section h3 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  color: var(--text-color);
}

.form-group input[type="color"],
.form-group select {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  background-color: var(--bg-color);
  color: var(--text-color);
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
