<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="aboutContent">
    <img class="profilePhoto" :src="photo" alt="Profile photo" />
    <div class="aboutText">
      <h2>{{ title }}</h2>
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>
