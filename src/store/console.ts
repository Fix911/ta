import { defineStore } from 'pinia'

export const useConsoleStore = defineStore('console', {
  state: () => ({
    collapse: false
  }),
  getters: {
    getCollapseState: (state) => {
      console.log(state.collapse)
      return state.collapse
    }
  },
  actions: {
    toggleCollapse () {
      this.collapse = !this.collapse
    }
  }
})
