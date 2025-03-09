import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false
  }),
  actions: {
    setLoading(status: boolean) {
      this.isLoading = status
    }
  }
})