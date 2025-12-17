<template>
  <div
    v-if="hasError"
    class="error-boundary"
  >
    <div class="error-content">
      <h2 class="error-title">
        出现了一些问题
      </h2>
      <p class="error-message">
        {{ errorMessage }}
      </p>
      <div class="error-actions">
        <button
          class="btn-primary"
          @click="handleReload"
        >
          重新加载
        </button>
        <button
          class="btn-secondary"
          @click="handleGoHome"
        >
          返回首页
        </button>
      </div>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const hasError = ref(false);
const errorMessage = ref('');

onErrorCaptured((err: Error) => {
  hasError.value = true;
  errorMessage.value = err.message || '发生了未知错误';
  console.error('ErrorBoundary caught an error:', err);
  return false;
});

const handleReload = () => {
  window.location.reload();
};

const handleGoHome = () => {
  hasError.value = false;
  router.push('/');
};
</script>

<style scoped>
.error-boundary {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--bg-color);
}

.error-content {
  text-align: center;
  max-width: 500px;
}

.error-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.error-message {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
  font-family: inherit;
}

.btn-primary {
  background-color: var(--link-color);
  color: white;

  &:hover {
    background-color: var(--link-hover-color);
  }
}

.btn-secondary {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 2px solid var(--border-color);

  &:hover {
    border-color: var(--link-color);
    color: var(--link-color);
  }
}
</style>

