import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const setLoading = (value: boolean) => {
    loading.value = value;
  };

  const setError = (message: string | null) => {
    error.value = message;
  };

  return {
    loading,
    error,
    setLoading,
    setError,
  };
});

