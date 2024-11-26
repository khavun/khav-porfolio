<template>
  <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
    <div class="text-center">
      <div class="author-img" :style="{ backgroundImage: `url(${profileImage})` }"></div>
      <h1 id="colorlib-logo"><a href="index.html">{{ fullName }}</a></h1>
      <span class="position">
        <a href="#">{{ jobInfo }}</a>
      </span>
    </div>
    <nav id="colorlib-main-menu" role="navigation" class="navbar">
      <div id="navbar" class="collapse">
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.section"
            :class="{ active: item.section === 'home' }"
          >
            <a href="#" :data-nav-section="item.section">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'  // Correct import path

// Access the store
const sidebarStore = useSidebarStore()

// Computed properties from the store
const profileImage = computed(() => sidebarStore.profileImage)
const fullName = computed(() => sidebarStore.fullName)
const jobInfo = computed(() => sidebarStore.jobInfo)
const menuItems = computed(() => sidebarStore.getMenuItems)
</script>

<style scoped>
/* Add your styles here */
</style>
