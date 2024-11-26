import { defineStore } from 'pinia';
import backgroundImage from '@/images/cover_bg_1.jpg'

export const useProjectStore = defineStore('project', {
  state: () => ({
    backgroundImage,
    services: [
      { id: 1, title: "Innovative Ideas", description: "Giving the site a modern and interactive feel.", icon: "icon-bulb", color: "color-1" },
      { id: 2, title: "Software", description: "Software is efficient, user-friendly, and adaptable, meeting the needs of both users and developers", icon: "icon-data", color: "color-2" },
      { id: 3, title: "Quality", description: "Software is reliable, secure, and tailored to meet user needs efficiently. It performs consistently under diverse scenarios, minimizing errors and downtime.", color: "color-3" },
      { id: 4, title: "Mokup / UI/UX", description: "Offering a clear visual representation of a product's design and functionality. It demonstrates layout, color schemes, typography, and essential interactions, providing a realistic preview of the final user interface", icon: "icon-bulb", color: "color-4" },
      { id: 5, title: "Analytics", description: "Analytics not only reflects past outcomes but also aids in forecasting future trends, allowing businesses to stay competitive and proactive in achieving their", icon: "icon-layers2", color: "color-5" },
      { id: 6, title: "Database", description: "Backbone of efficient data management, enabling secure, organized, and rapid access to information. It provides a structured system for storing, retrieving, and manipulating data", icon: "icon-data", color: "color-6" },
    ],
    counters: [
      { id: 1, label: "POS", count: 2 },
      { id: 2, label: "Real Estate", count: 2 },
      { id: 3, label: "Finance", count: 1 },
      { id: 4, label: "Education", count: 1 },
      { id: 5, label: "ERP", count: 2 },
      { id: 6, label: "Echo System", count: 1 },
      { id: 7, label: "Micro Service Frontend", count: 1 }
    ],
  }),
  actions: {
    incrementCounter(id) {
      const counter = this.counters.find(counter => counter.id === id);
      if (counter) {
        counter.count++;
      }
    },
  },
});
