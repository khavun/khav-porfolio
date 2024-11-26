import { defineStore } from 'pinia'

export const useEducationStore = defineStore('education', {
  state: () => ({
    educationItems: [
      {
        id: 2,
        title: 'Bachelor Degree of Computer Science',
        description: [
          'Bachelor of Science in Computer Science at Royal University of Phnom Penh 2020 - 2024'
        ],
        expanded: false,
      },
    ]
  }),
  getters: {
    getEducationItems: (state) => state.educationItems
  },
  actions: {
    toggleExpand(id) {
      this.educationItems.forEach(item => {
        if (item.id === id) {
          item.expanded = !item.expanded
        } else {
          item.expanded = false
        }
      })
    }
  }
})
