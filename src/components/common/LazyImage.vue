<template>
  <img
    ref="imageRef"
    :src="imageSrc"
    :alt="alt"
    :class="imageClass"
    :loading="loading"
    @error="handleError"
    @load="handleLoad"
  >
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Props {
  src: string;
  alt?: string;
  class?: string;
  lazy?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  lazy: true,
  placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U1ZTdlYiIvPjwvc3ZnPg==',
  class: '',
});

const imageSrc = ref(props.placeholder);
const isLoaded = ref(false);
const imageRef = ref<HTMLImageElement | null>(null);
const loading = computed(() => (props.lazy ? 'lazy' : 'eager'));

const imageClass = computed(() => {
  const classes: string[] = [];
  if (props.class) {
    classes.push(props.class);
  }
  if (!isLoaded.value) {
    classes.push('lazy-image-placeholder');
  }
  return classes.join(' ');
});

const handleError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = props.placeholder;
};

const handleLoad = () => {
  isLoaded.value = true;
};

onMounted(() => {
  if (props.lazy) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageSrc.value = props.src;
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imageRef.value) {
      observer.observe(imageRef.value);
    }
  } else {
    imageSrc.value = props.src;
  }
});
</script>

<style scoped>
.lazy-image-placeholder {
  background-color: var(--border-color);
  filter: blur(5px);
  transition: filter 0.3s ease;
}

img {
  transition: opacity 0.3s ease;
}
</style>
