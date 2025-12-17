<template>
  <main class="analytics-page">
    <div class="container">
      <h1 class="page-title">
        {{ $t('analytics.title') }}
      </h1>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>{{ $t('analytics.totalViews') }}</h3>
          <p class="stat-value">
            {{ stats.totalViews }}
          </p>
        </div>
        <div class="stat-card">
          <h3>{{ $t('analytics.todayViews') }}</h3>
          <p class="stat-value">
            {{ stats.todayViews }}
          </p>
        </div>
        <div class="stat-card">
          <h3>{{ $t('analytics.uniqueVisitors') }}</h3>
          <p class="stat-value">
            {{ stats.uniqueVisitors }}
          </p>
        </div>
      </div>
      <div class="page-views">
        <h2>{{ $t('analytics.pageViews') }}</h2>
        <div class="page-views-list">
          <div
            v-for="(views, page) in stats.pageViews"
            :key="page"
            class="page-view-item"
          >
            <span class="page-name">{{ page }}</span>
            <span class="page-count">{{ views }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAnalyticsStore } from '@/store/modules/analytics';

const analyticsStore = useAnalyticsStore();
const stats = computed(() => analyticsStore.getStats);
</script>

<style scoped>
.analytics-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-card h3 {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--link-color);
}

.page-views {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-views h2 {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.page-views-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.page-view-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: var(--bg-color);
  border-radius: 0.25rem;
}

.page-name {
  color: var(--text-color);
}

.page-count {
  color: var(--link-color);
  font-weight: bold;
}
</style>

