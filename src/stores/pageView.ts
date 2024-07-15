import { defineStore } from 'pinia'
import { Home } from '@/components/pages'






const selectPage: { [key: string]: any } = {
  Home: {
    aside: Home.aside_div,
    main: Home.main_div
  },
}

export const usePageView = defineStore('pageview', {
  state: () => ({ namePage: 'first' }),
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
