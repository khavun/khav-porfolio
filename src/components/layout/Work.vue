<template>
  <section class="colorlib-work" data-section="work">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">My Work</span>
          <h2 class="colorlib-heading animate-box">Recent Work</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="project in workStore.projects"
          :key="project.id"
          class="col-md-6 animate-box"
          :data-animate-effect="project.id % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'"
          @click="openModal(project.image)"
        >
          <div class="project" :style="{ backgroundImage: `url(${project.image})` }">
            <div class="desc">
              <div class="con">
                <h3><a href="work.html">{{ project.title }}</a></h3>
                <span>{{ project.category }}</span>
                <p class="icon">
                  <span><a href="#"><i class="icon-share3"></i></a></span>
                  <span><a href="#"><i class="icon-eye"></i> {{ project.views }}</a></span>
                  <span><a href="#"><i class="icon-heart"></i> {{ project.likes }}</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for Image Pop-Up -->
      <div v-if="showModal" class="modal" @click.self="closeModal">
        <span class="close" @click="closeModal">&times;</span>
        <img class="modal-content" :src="selectedImage" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useWorkStore } from '@/stores/work';

const workStore = useWorkStore();
const showModal = ref(false);
const selectedImage = ref('');

const openModal = (image) => {
  selectedImage.value = image;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = '';
};
</script>

<style scoped>
/* Styles for the modal pop-up */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}
</style>
