import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
  state: () => ({
    name: 'Khav Un',
    age: 24,
    jobTitle: 'Web Developer',
    experienceYears: 3,
    projectsCompleted: 10,
    bio: `I'm a 24-year-old web developer with 3 years of hands-on experience in creating modern, efficient, and visually engaging websites and web applications. I’m passionate about leveraging technology to solve problems and crafting solutions that are both functional and user-centered.`,
    skills: [
      { title: 'Deployment-CI/CD', icon: 'icon-bulb' },
      { title: 'Implements', icon: 'icon-globe-outline' },
      { title: 'UAT / Test', icon: 'icon-data' },
      { title: 'Application', icon: 'icon-phone3' },
    ],
  }),
  getters: {
    fullName: (state) => state.name,
    totalProjects: (state) => state.projectsCompleted,
  }
})
