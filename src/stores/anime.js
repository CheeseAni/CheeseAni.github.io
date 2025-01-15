import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnimeStore = defineStore('anime', () => {
  const data = ref([{ BGM_ID: 1, name: 'anime 1', introduction: '略', year: '2002' }])
  return {
    data,
  }
})
