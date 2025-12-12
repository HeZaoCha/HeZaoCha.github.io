<template>
  <section class="projects-section">
    <div class="container">
      <h2 v-if="showTitle" class="section-title">项目经验</h2>
      <div class="projects-grid">
        <div
          v-for="project in resumeData.projects"
          :key="project.name"
          class="project-card animate-on-scroll"
        >
          <div v-if="project.image" class="project-image">
            <img :src="project.image" :alt="project.name" />
          </div>
          <div class="project-content">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-technologies">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            <ul v-if="project.highlights" class="project-highlights">
              <li v-for="(highlight, index) in project.highlights" :key="index">
                {{ highlight }}
              </li>
            </ul>
            <div class="project-actions">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <i class="i-mdi-github" />
                代码
              </a>
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <i class="i-mdi-open-in-new" />
                演示
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resumeData } from '@/constants/resume-data';

defineProps<{
  showTitle?: boolean;
}>();
</script>

<style scoped>
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--card-bg);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: var(--border-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.project-content {
  padding: 1.5rem;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background-color: var(--link-color);
  color: white;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.project-highlights {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;

  li {
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--link-color);
      font-weight: bold;
    }
  }
}

.project-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--link-color);
    color: var(--link-color);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

