<template>
  <section class="experience-section">
    <div class="container">
      <h2 class="section-title">工作经历</h2>
      <div class="experience-list">
        <div
          v-for="(exp, index) in resumeData.workExperience"
          :key="index"
          class="experience-item"
        >
          <div class="experience-header">
            <div>
              <h3 class="experience-company">{{ exp.company }}</h3>
              <p class="experience-position">{{ exp.position }}</p>
            </div>
            <div class="experience-meta">
              <span class="experience-date">{{ formatDateRange(exp.startDate, exp.endDate) }}</span>
              <span class="experience-location">{{ exp.location }}</span>
            </div>
          </div>
          <ul class="experience-description">
            <li v-for="(desc, idx) in exp.description" :key="idx">{{ desc }}</li>
          </ul>
          <div v-if="exp.technologies" class="experience-technologies">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <h2 class="section-title education-title">教育背景</h2>
      <div class="education-list">
        <div
          v-for="(edu, index) in resumeData.education"
          :key="index"
          class="education-item"
        >
          <h3 class="education-school">{{ edu.school }}</h3>
          <p class="education-degree">{{ edu.degree }} · {{ edu.major }}</p>
          <p class="education-date">{{ formatDateRange(edu.startDate, edu.endDate) }}</p>
          <p v-if="edu.description" class="education-description">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resumeData } from '@/constants/resume-data';
import { formatDateRange } from '@/utils/format';
</script>

<style scoped>
.experience-section {
  padding: 4rem 0;
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

.education-title {
  margin-top: 4rem;
}

.experience-list,
.education-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item,
.education-item {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.experience-company {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.experience-position {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

.experience-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  text-align: right;
}

.experience-date,
.experience-location {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.experience-description {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;

  li {
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    line-height: 1.6;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--link-color);
      font-weight: bold;
    }
  }
}

.experience-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background-color: var(--link-color);
  color: white;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.education-school {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.education-degree {
  color: var(--text-color);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.education-date {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.education-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .experience-header {
    flex-direction: column;
  }

  .experience-meta {
    align-items: flex-start;
    text-align: left;
  }
}
</style>

