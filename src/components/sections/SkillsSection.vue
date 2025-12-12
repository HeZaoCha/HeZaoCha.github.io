<template>
  <section class="skills-section">
    <div class="container">
      <h2 class="section-title">技能</h2>
      <div class="skills-grid">
        <div
          v-for="category in resumeData.skills"
          :key="category.category"
          class="skill-category animate-on-scroll"
        >
          <h3 class="category-title">{{ category.category }}</h3>
          <div class="skills-list">
            <div
              v-for="skill in category.items"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-header">
                <span v-if="skill.icon" class="skill-icon">
                  <i :class="`i-${skill.icon} text-xl`" />
                </span>
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}/5</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: `${(skill.level / 5) * 100}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resumeData } from '@/constants/resume-data';
</script>

<style scoped>
.skills-section {
  padding: 4rem 0;
  background-color: var(--card-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background-color: var(--bg-color);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-icon {
  color: var(--link-color);
}

.skill-name {
  flex: 1;
  font-weight: 500;
  color: var(--text-color);
}

.skill-level {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.skill-bar {
  height: 8px;
  background-color: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

