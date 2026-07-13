<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  groups: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="skillsContent">
    <h2>{{ title }}</h2>
    <p class="skillsIntro">{{ intro }}</p>
    <div class="skillsGrid">
      <div v-for="group in groups" :key="group.title" class="skillGroup">
        <h3>{{ group.title }}</h3>
        <p>{{ group.text }}</p>
      </div>
    </div>
  </div>
</template>
