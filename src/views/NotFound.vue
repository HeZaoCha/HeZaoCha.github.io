<template>
  <main class="not-found">
      <div class="container">
        <div class="error-content">
          <h1 class="error-code">
            404
          </h1>
          <h2 class="error-title">
            {{ $t('notFound.message') }}
          </h2>
          <p class="error-message">
            {{ $t('notFound.description') }}
          </p>
          <div class="error-actions">
            <router-link
              to="/"
              class="btn-primary"
            >
              <i class="i-mdi-home" />
              {{ $t('notFound.backHome') }}
            </router-link>
            <button
              class="btn-secondary"
              @click="goBack"
            >
              <i class="i-mdi-arrow-left" />
              {{ $t('notFound.goBack') }}
            </button>
          </div>
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push('/');
  }
};
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  text-align: center;
}

.error-content {
  animation: fadeInUp 0.6s ease;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
  animation: pulse 2s ease-in-out infinite;
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
  font-size: 1.125rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
}

.btn-primary {
  background-color: var(--link-color);
  color: white;

  &:hover {
    background-color: var(--link-hover-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
}

.btn-secondary {
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 2px solid var(--border-color);

  &:hover {
    border-color: var(--link-color);
    color: var(--link-color);
    transform: translateY(-2px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .error-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>

