<template>
  <div
    v-if="isActive"
    class="tab-content"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

interface Props {
  name: string;
  label: string;
}

const props = defineProps<Props>();

const selected = inject<Ref<string>>('selected', computed(() => ''));
const isActive = computed(() => selected.value === props.name);
</script>

<style scoped>
.tab-content {
  width: 100%;
}
</style>

