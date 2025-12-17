<template>
  <section class="experience-section">
    <div class="container">
      <div class="content-grid">
        <div class="content-column experience-column">
          <h2 class="section-title experience-title">
            {{ $t('experience.title') }}
          </h2>
          <div class="experience-timeline">
            <div
              v-for="(exp, index) in resumeData.workExperience"
              :key="index"
              class="experience-item"
            >
              <div class="timeline-marker" />
              <div class="experience-content">
                <div class="experience-header">
                  <div class="experience-info">
                    <h3 class="experience-company">
                      {{ exp.company }}
                    </h3>
                    <p class="experience-position">
                      {{ exp.position }}
                    </p>
                  </div>
                  <div class="experience-meta">
                    <span class="experience-date">{{ formatDateRange(exp.startDate, exp.endDate) }}</span>
                    <span class="experience-location">
                      <i class="i-mdi-map-marker" />
                      {{ exp.location }}
                    </span>
                  </div>
                </div>
                <div
                  v-if="exp.technologies"
                  class="experience-technologies"
                >
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
                <div
                  class="experience-details"
                  :class="{ expanded: expandedItems[index] }"
                >
                  <ul class="experience-description">
                    <li
                      v-for="(desc, idx) in exp.description"
                      :key="idx"
                    >
                      {{ desc }}
                    </li>
                  </ul>
                </div>
                <button
                  v-if="exp.description && exp.description.length > 2"
                  class="toggle-btn"
                  @click="toggleExpand(index)"
                >
                  {{ expandedItems[index] ? $t('experience.collapse') : $t('experience.expand') }}
                  <i :class="expandedItems[index] ? 'i-mdi-chevron-up' : 'i-mdi-chevron-down'" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="content-column education-column">
          <h2 class="section-title education-title">
            {{ $t('experience.education') }}
          </h2>
          <div class="education-timeline">
            <div
              v-for="(edu, index) in resumeData.education"
              :key="index"
              class="education-item"
            >
              <div class="timeline-marker" />
              <div class="education-content">
                <h3 class="education-school">
                  {{ edu.school }}
                </h3>
                <p class="education-degree">
                  {{ edu.degree }} · {{ edu.major }}
                </p>
                <p class="education-date">
                  <i class="i-mdi-calendar" />
                  {{ formatDateRange(edu.startDate, edu.endDate) }}
                </p>
                <div
                  v-if="edu.description"
                  class="education-description"
                >
                  <h4 class="education-description-title">
                    {{ $t('experience.mainCourses') }}
                  </h4>
                  <p>{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { resumeData } from '@/constants/resume-data';
import { formatDateRange } from '@/utils/format';

const expandedItems = ref<Record<number, boolean>>({});

const toggleExpand = (index: number) => {
  expandedItems.value[index] = !expandedItems.value[index];
};
</script>

<style scoped>
.experience-section {
  padding: 4rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  text-align: center;
  color: var(--text-color);
}

.experience-title,
.education-title {
  margin-top: 0;
  margin-bottom: 2.5rem;
  text-align: left;
  font-size: 2rem;
}

@media (min-width: 1024px) {
  .section-title {
    margin-bottom: 2.5rem;
  }

  .experience-title,
  .education-title {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }
}

.content-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.content-column {
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .content-column {
    width: 100%;
  }
}


/* 大屏幕布局：两列并排 */
@media (min-width: 1024px) {
  .content-grid {
    flex-direction: row;
    gap: 1.5rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  .content-column {
    flex: 1 1 48%;
    min-width: 0;
    max-width: 48%;
  }

  .experience-column {
    padding-right: 0;
  }

  .education-column {
    padding-left: 0;
  }


  .experience-timeline,
  .education-timeline {
    width: 100%;
  }
}

.experience-timeline,
.education-timeline {
  position: relative;
  padding-left: 2rem;
  width: 100%;
}

.experience-timeline::before,
.education-timeline::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--link-color) 0%, var(--border-color) 100%);
}

.experience-item,
.education-item {
  position: relative;
  margin-bottom: 1.5rem;
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

@media (min-width: 1024px) {
  .experience-item,
  .education-item {
    padding: 2rem;
    margin-bottom: 2rem;
  }
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 2rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--link-color);
  border: 3px solid var(--card-bg);
  box-shadow: 0 0 0 2px var(--link-color);
  z-index: 1;
}

.experience-content,
.education-content {
  position: relative;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.experience-info {
  flex: 1;
  min-width: 0;
}

.experience-company {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.experience-position {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.4;
}

.experience-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  text-align: right;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .experience-company {
    font-size: 1.5rem;
  }

  .experience-position {
    font-size: 1.125rem;
  }

  .experience-header {
    margin-bottom: 1.25rem;
  }
}

.experience-date,
.experience-location {
  color: var(--text-secondary);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.experience-location i {
  color: var(--link-color);
}

.experience-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.expanded {
    max-height: 1000px;
  }
}

.experience-description {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0 0;

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

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--link-color);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--link-color);
    color: white;
    border-color: var(--link-color);
  }

  i {
    font-size: 1rem;
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
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.education-degree {
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.education-date {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: var(--link-color);
  }
}

@media (min-width: 1024px) {
  .education-school {
    font-size: 1.5rem;
  }

  .education-degree {
    font-size: 1.125rem;
  }
}

.education-description {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);

  .education-description-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
}

@media (max-width: 1023px) {
  .experience-title,
  .education-title {
    margin-top: 0;
    text-align: center;
    font-size: 2rem;
  }

  .education-title {
    margin-top: 3rem;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .experience-title,
  .education-title {
    font-size: 1.75rem;
  }

  .education-title {
    margin-top: 3rem;
  }

  .experience-timeline,
  .education-timeline {
    padding-left: 1.5rem;
  }

  .experience-timeline::before,
  .education-timeline::before {
    left: 0.25rem;
  }

  .timeline-marker {
    left: -1.75rem;
    width: 10px;
    height: 10px;
  }

  .experience-item,
  .education-item {
    padding: 1.5rem;
  }

  .experience-header {
    flex-direction: column;
  }

  .experience-meta {
    align-items: flex-start;
    text-align: left;
    margin-top: 0.5rem;
  }

  .experience-company,
  .education-school {
    font-size: 1.25rem;
  }

  .experience-position,
  .education-degree {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .experience-timeline,
  .education-timeline {
    padding-left: 1rem;
  }

  .timeline-marker {
    left: -1.5rem;
    width: 8px;
    height: 8px;
  }

  .experience-item,
  .education-item {
    padding: 1.25rem;
    border-radius: 0.75rem;
  }

  .experience-company,
  .education-school {
    font-size: 1.125rem;
  }

  .experience-description li {
    font-size: 0.875rem;
    padding-left: 1.25rem;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }

  .toggle-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

