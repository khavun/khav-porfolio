import Slide1 from '@/images/img_bg_1.jpg'
import Slide2 from '@/images/img_bg_2.jpg'

import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => ({
    slides: [Slide1, Slide2],  // Add slide images here
  }),
  getters: {
    getSlides: (state) => state.slides  // Add getter for slides
  }
})
