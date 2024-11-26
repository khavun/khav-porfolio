
// src/stores/work.js
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import Work1 from '@/images/img-1.jpg';
import Work2 from '@/images/img-2.jpg';
import Work3 from '@/images/img-3.jpg';
import Work4 from '@/images/img-4.jpg';
import Work5 from '@/images/img-5.jpg';
import Work6 from '@/images/img-6.jpg';
import Work7 from '@/images/img-7.jpg';
import Work8 from '@/images/img-8.jpg';
import Work9 from '@/images/img-9.jpg';
import Work10 from '@/images/img-10.jpg';
import Work11 from '@/images/img-11.jpg';
import Work12 from '@/images/img-12.jpg';
import Work13 from '@/images/img-13.jpg';
import Work14 from '@/images/img-14.jpg';
import Work15 from '@/images/img-15.jpg';
import Work16 from '@/images/img-16.jpg';
import Work17 from '@/images/img-17.jpg';
import Work18 from '@/images/img-18.jpg';
import Work19 from '@/images/img-19.jpg';
import Work20 from '@/images/img-20.jpg';
import Work21 from '@/images/img-21.jpg';
import Work22 from '@/images/img-22.jpg';
import Work23 from '@/images/img-23.jpg';
import Work24 from '@/images/img-24.jpg';
import Work25 from '@/images/img-25.jpg';
import Work26 from '@/images/img-26.jpg';
import Work27 from '@/images/img-27.jpg';
import Work28 from '@/images/img-28.jpg';
import Work29 from '@/images/img-29.jpg';
import Work30 from '@/images/img-30.jpg';
import Work31 from '@/images/img-31.jpg';
import Work32 from '@/images/img-32.jpg';
import Work33 from '@/images/img-33.jpg';
import Work34 from '@/images/img-34.jpg';
import Work35 from '@/images/img-35.jpg';
import Work36 from '@/images/img-36.jpg';


export const useWorkStore = defineStore('work', () => {
  // State
  const projects = ref([
    // Example project data; replace with actual data or fetch from API
      { id: 1, title: 'Work 01', category: 'Website', image: Work1, views: 100, likes: 49 },
      { id: 2, title: 'Work 02', category: 'Website', image: Work2, views: 100, likes: 49 },
      { id: 3, title: 'Work 03', category: 'Website', image: Work3, views: 100, likes: 49 },
      { id: 4, title: 'Work 04', category: 'Website', image: Work4, views: 100, likes: 49 },
      { id: 5, title: 'Work 05', category: 'Website', image: Work5, views: 100, likes: 49 },
      { id: 6, title: 'Work 06', category: 'Website', image: Work6, views: 100, likes: 49 },
      { id: 7, title: 'Work 07', category: 'Website', image: Work7, views: 100, likes: 49 },
      { id: 8, title: 'Work 08', category: 'Website', image: Work8, views: 100, likes: 49 },
      { id: 9, title: 'Work 09', category: 'Website', image: Work9, views: 100, likes: 49 },
      { id: 10, title: 'Work 10', category: 'Website', image: Work10, views: 100, likes: 49 },
      { id: 11, title: 'Work 11', category: 'Website', image: Work11, views: 100, likes: 49 },
      { id: 12, title: 'Work 12', category: 'Website', image: Work12, views: 100, likes: 49 },
      { id: 13, title: 'Work 13', category: 'Website', image: Work13, views: 100, likes: 49 },
      { id: 14, title: 'Work 14', category: 'Website', image: Work14, views: 100, likes: 49 },
      { id: 15, title: 'Work 15', category: 'Website', image: Work15, views: 100, likes: 49 },
      { id: 16, title: 'Work 16', category: 'Website', image: Work16, views: 100, likes: 49 },
      { id: 17, title: 'Work 17', category: 'Website', image: Work17, views: 100, likes: 49 },
      { id: 18, title: 'Work 18', category: 'Website', image: Work18, views: 100, likes: 49 },
      { id: 19, title: 'Work 19', category: 'Website', image: Work19, views: 100, likes: 49 },
      { id: 20, title: 'Work 20', category: 'Website', image: Work20, views: 100, likes: 49 },
      { id: 21, title: 'Work 21', category: 'Website', image: Work21, views: 100, likes: 49 },
      { id: 22, title: 'Work 22', category: 'Website', image: Work22, views: 100, likes: 49 },
      { id: 23, title: 'Work 23', category: 'Website', image: Work23, views: 100, likes: 49 },
      { id: 24, title: 'Work 24', category: 'Website', image: Work24, views: 100, likes: 49 },
      { id: 25, title: 'Work 25', category: 'Website', image: Work25, views: 100, likes: 49 },
      { id: 26, title: 'Work 26', category: 'Website', image: Work26, views: 100, likes: 49 },
      { id: 27, title: 'Work 27', category: 'Website', image: Work27, views: 100, likes: 49 },
      { id: 28, title: 'Work 28', category: 'Website', image: Work28, views: 100, likes: 49 },
      { id: 29, title: 'Work 29', category: 'Website', image: Work29, views: 100, likes: 49 },
      { id: 30, title: 'Work 30', category: 'Website', image: Work30, views: 100, likes: 49 },
      { id: 31, title: 'Work 31', category: 'Website', image: Work31, views: 100, likes: 49 },
      { id: 32, title: 'Work 32', category: 'Website', image: Work32, views: 100, likes: 49 },
      { id: 33, title: 'Work 33', category: 'Website', image: Work33, views: 100, likes: 49 },
      { id: 34, title: 'Work 34', category: 'Website', image: Work34, views: 100, likes: 49 },
      { id: 35, title: 'Work 35', category: 'Website', image: Work35, views: 100, likes: 49 },
      { id: 36, title: 'Work 36', category: 'Website', image: Work36, views: 100, likes: 49 },
    // Add more projects as needed
  ]);

  return {
    projects,
  };
});

