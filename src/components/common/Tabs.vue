<template>
  <div class="tabs">
    <div class="tabs-header">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-button', { active: selected === tab.name }]"
        @click="$emit('update:selected', tab.name)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed, provide } from 'vue';
import Tab from './Tab.vue';

interface Props {
  selected: string;
}

const props = defineProps<Props>();
defineEmits<{
  'update:selected': [value: string];
}>();

const slots = useSlots();

provide('selected', computed(() => props.selected));

const tabs = computed(() => {
  const children = slots.default?.() || [];
  return children
    .filter((child) => child.type === Tab)
    .map((child) => ({
      name: child.props?.name || '',
      label: child.props?.label || '',
    }));
});
</script>

<style scoped>
.tabs {
  width: 100%;
}

.tabs-header {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 1.5rem;
  overflow-x: auto;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    color: var(--link-color);
  }

  &.active {
    color: var(--link-color);
    border-bottom-color: var(--link-color);
  }
}

.tabs-content {
  width: 100%;
}
</style>

