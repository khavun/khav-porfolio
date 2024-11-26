<template>
  <section id="colorlib-hero" class="js-fullheight" data-section="home">
    <div class="flexslider js-fullheight">
      <ul class="slides">
        <li v-for="(slide, index) in slides" :key="index" :style="{ backgroundImage: `url(${slide})` }">
          <div class="overlay"></div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div class="slider-text-inner js-fullheight">
                  <div class="desc">
                    <h1 style="color: white;">Hi! <br>I'm Khav</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useHomeStore } from '@/stores/home'  // Correct store import path

// Access the home store
const homeStore = useHomeStore()

// Computed property to get slides from the store
const slides = computed(() => homeStore.getSlides)
</script>

<style scoped>
/* Add your styles here */
</style>
