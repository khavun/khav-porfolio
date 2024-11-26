<template>
    <section class="colorlib-services" data-section="services">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">What I do?</span>
                    <h2 class="colorlib-heading">Here are some of my expertise</h2>
                </div>
            </div>
            <div class="row row-pt-md">
                <div v-for="service in services" :key="service.id" class="col-md-4 text-center animate-box">
                    <div :class="['services', service.color]">
                        <span class="icon">
                            <i :class="service.icon"></i>
                        </span>
                        <div class="desc">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div id="colorlib-counter" class="colorlib-counters" :style="{ backgroundImage: `url(${backgroundImage})` }" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="colorlib-narrow-content">
            <div class="row">
                <div v-for="counter in counters" :key="counter.id" class="col-md-3 text-center animate-box">
                    <span class="colorlib-counter js-counter" :data-from="0" :data-to="counter.count" data-speed="5000" data-refresh-interval="50"></span>
                    <span class="colorlib-counter-label">{{ counter.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/project'; // Adjust the path according to your project structure

const store = useProjectStore();
const { services, counters, backgroundImage } = store.$state;
</script>

<style scoped>
/* Add your styles here */
</style>
