import { defineStore } from 'pinia'
import { selectPage } from '@/components/pages'

export const usePageView = defineStore('pageview', {
  state: () => ({ namePage: 'Home' }),
  getters: {
    getPageMain: (state) => selectPage[state.namePage]['main'],
    getPageAside: (state) => selectPage[state.namePage]['aside']
  },
  actions: {
    modify(value: string) {
      this.namePage = value
    }
  }
})
