<template>
    <section class="colorlib-experience" data-section="experience">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Experience</span>
                    <h2 class="colorlib-heading animate-box">Work Experience</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="timeline-centered">
                        <article
                            v-for="(experience, index) in experiences"
                            :key="index"
                            class="timeline-entry animate-box"
                            :data-animate-effect="index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'"
                        >
                            <div class="timeline-entry-inner">
                                <div :class="`timeline-icon ${experience.color}`">
                                    <i class="icon-pen2"></i>
                                </div>
                                <div class="timeline-label">
                                    <h3>
                                        <a href="#">{{ experience.title }}</a>
                                        <span>{{ experience.date }}</span>
                                    </h3>
                                    <h2>{{ experience.role }}</h2>
                                    <ul>
                                        <li v-for="(skills, index) in experience.stage" :key="`stage-${index}`">
                                            {{ skills }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useExperienceStore } from '@/stores/experience';
import { onMounted, ref } from 'vue';

const experienceStore = useExperienceStore();
const experiences = ref([]);

// Fetch experiences when component is mounted
onMounted(() => {
    experiences.value = experienceStore.experiences;
});
</script>

<style scoped>
/* Add your styles here */
</style>
