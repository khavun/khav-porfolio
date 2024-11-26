// skillStore.js
import { defineStore } from 'pinia';

export const useSkillStore = defineStore('skill', {
    state: () => ({
        skills: [
            { name: 'HTML5', level: 95, color: 'color-1' },
            { name: 'XML', level: 95, color: 'color-5' },
            { name: 'CSS3', level: 90, color: 'color-2' },
            { name: 'JavaScript', level: 85, color: 'color-3' },
            { name: 'Jquery', level: 85, color: 'color-4' },
            { name: 'Ajax', level: 85, color: 'color-3' },
            { name: 'Typescript', level: 85, color: 'color-4' },
            { name: 'Bootstrap', level: 75, color: 'color-5' },
            { name: 'Vue', level: 85, color: 'color-2' },
            { name: 'Vuetify', level: 75, color: 'color-3' },
            { name: 'Express js', level: 50, color: 'color-2' },
            { name: 'ext js', level: 75, color: 'color-3' },
            { name: 'Tailwind', level: 70, color: 'color-4' },
            { name: 'PHP', level: 92, color: 'color-5' },
            { name: 'Laravel', level: 90, color: 'color-6' },
            { name: 'Java', level: 80, color: 'color-2' },
            { name: 'Spring Boot', level: 75, color: 'color-3' },
            { name: 'Python', level: 85, color: 'color-3' },
            { name: 'Django', level: 80, color: 'color-4' },
            { name: 'Odoo', level: 95, color: 'color-2' },
            { name: 'Flectra', level: 95, color: 'color-3' },
            { name: 'Mysql Workbench', level: 95, color: 'color-5' },
            { name: 'Postgresql', level: 95, color: 'color-6' },
            { name: 'Docker', level: 70, color: 'color-5' },
            { name: 'Redis', level: 75, color: 'color-6' },
            { name: 'Jenkin', level: 60, color: 'color-5' }
        ]
    })
});
