<template>
  <section class="colorlib-education" data-section="education">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">Education</span>
          <h2 class="colorlib-heading animate-box">Education</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div class="fancy-collapse-panel">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div
                v-for="(item, index) in educationItems"
                :key="item.id"
                class="panel panel-default"
              >
                <div class="panel-heading" role="tab" :id="`heading${index}`">
                  <h4 class="panel-title">
                    <a
                      @click.prevent="toggleExpand(item.id)"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      :href="`#collapse${index}`"
                      :aria-expanded="item.expanded"
                      :aria-controls="`collapse${index}`"
                    >
                      {{ item.title }}
                    </a>
                  </h4>
                </div>
                <div
                  :id="`collapse${index}`"
                  class="panel-collapse collapse"
                  :class="{ in: item.expanded }"
                  role="tabpanel"
                  :aria-labelledby="`heading${index}`"
                >
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-md-12">
                        <p v-for="desc in item.description" :key="desc">{{ desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useEducationStore } from '@/stores/education'
import { computed } from 'vue'

const educationStore = useEducationStore()

// Computed property to get education items from the store
const educationItems = computed(() => educationStore.getEducationItems)

// Method to toggle expand/collapse
const toggleExpand = (id) => {
  educationStore.toggleExpand(id)
}
</script>

<style scoped>
/* Add your styles here */
</style>
