<template>
  <section class="colorlib-skills" data-section="skills">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">My Specialty</span>
          <h2 class="colorlib-heading animate-box">My Skills</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas...</p>
        </div>
        <!-- Loop through skills from the store -->
        <div v-for="(skill, index) in skills" :key="index" class="col-md-6 animate-box" :data-animate-effect="index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'">
          <div class="progress-wrap">
            <h3>{{ skill.name }}</h3>
            <div class="progress">
              <div class="progress-bar" :class="skill.color" role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100" :style="{ width: skill.level + '%' }">
                <span>{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useSkillStore } from '@/stores/skill'; // Adjust the path based on your folder structure

export default {
  name: 'Skills',
  setup() {
    const skillStore = useSkillStore(); // Access the skill store
    return {
      skills: skillStore.skills // Return the skills array from the store
    };
  }
};
</script>

<style scoped>
/* Your styles here */
</style>

