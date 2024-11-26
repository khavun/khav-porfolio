<template>
  <section class="colorlib-about" data-section="about">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12">
          <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-12">
              <div class="about-desc">
                <span class="heading-meta">About Us</span>
                <h2 class="colorlib-heading">Who Am I?</h2>
                <p><strong>Hi, I'm {{ fullName }}</strong>, a {{ age }}-year-old {{ jobTitle }} with {{ experienceYears }} years of hands-on experience. {{ bio }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="(skill, index) in skills" :key="index" :class="['col-md-3', 'animate-box']" :data-animate-effect="getAnimateEffect(index)">
              <div :class="['services', 'color-' + (index + 1)]">
                <span class="icon2"><i :class="skill.icon"></i></span>
                <h3>{{ skill.title }}</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div class="hire">
                <h2>I am happy to know you <br>that {{ totalProjects }}+ projects done successfully!</h2>
                <a href="#" class="btn-hire">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAboutStore } from '@/stores/about'

// Initialize the store
const aboutStore = useAboutStore()

// Using computed to access store's state
const fullName = computed(() => aboutStore.fullName)
const age = computed(() => aboutStore.age)
const jobTitle = computed(() => aboutStore.jobTitle)
const experienceYears = computed(() => aboutStore.experienceYears)
const bio = computed(() => aboutStore.bio)
const skills = computed(() => aboutStore.skills)
const totalProjects = computed(() => aboutStore.totalProjects)

// A function to set animate effect based on index
const getAnimateEffect = (index) => {
  const effects = ['fadeInLeft', 'fadeInRight', 'fadeInTop', 'fadeInBottom']
  return effects[index % effects.length]
}
</script>

<style scoped>
/* Add your styles here */
</style>

