<template>
  <section class="projects-section">
    <div class="container">
      <h2
        v-if="showTitle"
        class="section-title"
      >
        {{ $t('projects.title') }}
      </h2>
      <div
        v-if="showTitle"
        class="projects-controls"
      >
        <div class="search-box">
          <i class="i-mdi-magnify" />
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('projects.searchPlaceholder')"
            class="search-input"
          >
        </div>
        <div class="filter-buttons">
          <button
            v-for="category in categories"
            :key="category"
            :class="['filter-btn', { active: selectedCategory === category }]"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <div
        v-if="filteredProjects.length > 0"
        class="projects-grid"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.name"
          class="project-card animate-on-scroll"
        >
          <div
            v-if="project.image"
            class="project-image"
          >
            <img
              :src="project.image"
              :alt="project.name"
            >
          </div>
          <div class="project-content">
            <h3 class="project-name">
              {{ project.name }}
            </h3>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-technologies">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            <ul
              v-if="project.highlights"
              class="project-highlights"
            >
              <li
                v-for="(highlight, index) in project.highlights"
                :key="index"
              >
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
                {{ $t('projects.viewCode') }}
              </a>
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <i class="i-mdi-open-in-new" />
                {{ $t('projects.viewDemo') }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="no-results"
      >
        <i class="i-mdi-information-outline text-4xl" />
        <p>{{ $t('projects.noResults') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { resumeData } from '@/constants/resume-data';

defineProps<{
  showTitle?: boolean;
}>();

const searchQuery = ref('');
const selectedCategory = ref('全部');

const categories = computed(() => {
  const cats = new Set<string>(['全部']);
  resumeData.projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      cats.add(tech);
    });
  });
  return Array.from(cats);
});

const filteredProjects = computed(() => {
  let projects = resumeData.projects;

  // 按分类筛选
  if (selectedCategory.value !== '全部') {
    projects = projects.filter((project) =>
      project.technologies.includes(selectedCategory.value)
    );
  }

  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    projects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))
    );
  }

  return projects;
});
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

.projects-controls {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-box {
  position: relative;
  max-width: 400px;
  margin: 0 auto;

  i {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
  }
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--link-color);
  }
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 1.5rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;

  &:hover {
    border-color: var(--link-color);
    color: var(--link-color);
  }

  &.active {
    background-color: var(--link-color);
    color: white;
    border-color: var(--link-color);
  }
}

.project-card {
  background-color: var(--card-bg);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-color: var(--link-color);
  }
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);

  i {
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  p {
    font-size: 1.125rem;
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
    gap: 1.5rem;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-name {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .project-card {
    border-radius: 0.75rem;
  }

  .project-image {
    height: 150px;
  }

  .project-content {
    padding: 1rem;
  }

  .project-name {
    font-size: 1.125rem;
  }

  .project-description {
    font-size: 0.875rem;
  }

  .project-actions {
    flex-direction: column;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }
}
</style>

