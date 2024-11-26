import { defineStore } from 'pinia'
import profileImage from '@/images/about.jpg'

export const useSidebarStore = defineStore('profile', {
  state: () => ({
    name: 'Khav Un',
    jobTitle: 'WEB / Developer',
    location: 'Cambodia',
    profileImage,
    menuItems: [
      { section: 'home', label: 'Home' },
      { section: 'about', label: 'About' },
      { section: 'services', label: 'Project' },
      { section: 'skills', label: 'Skills' },
      { section: 'education', label: 'Education' },
      { section: 'experience', label: 'Experience' },
      { section: 'work', label: 'Work' },
      // { section: 'blog', label: 'Blog' },
      { section: 'contact', label: 'Contact' },
    ]
  }),
  getters: {
    fullName: (state) => state.name,
    jobInfo: (state) => `${state.jobTitle} in ${state.location}`,
    getMenuItems: (state) => state.menuItems
  }
})
