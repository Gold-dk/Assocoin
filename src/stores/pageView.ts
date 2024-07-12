import { defineStore } from 'pinia'
import {
  AsideAssoPage,
  AsideDonPage,
  AsideEchangePage,
  AsideFirstPage,
  AsideToolPage
} from '@/components/aside'

import { AssoPage, DonPage, EchangePage, FirstPage, ToolPage } from '@/components/main'

const selectPage: { [key: string]: any } = {
  asso: {
    aside: AsideAssoPage,
    main: AssoPage
  },
  don: {
    aside: AsideDonPage,
    main: DonPage
  },
  echange: {
    aside: AsideEchangePage,
    main: EchangePage
  },
  first: {
    aside: AsideFirstPage,
    main: FirstPage
  },
  tool: {
    aside: AsideToolPage,
    main: ToolPage
  }
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
