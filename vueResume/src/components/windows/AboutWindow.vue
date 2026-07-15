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

<style scoped>
.aboutContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.profilePhoto {
  width: 220px;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  background-color: #d8d8d8;
}

.aboutText {
  max-width: 560px;
}

.aboutText p {
  margin: 14px 0 0;
  font-size: 16px;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .aboutContent {
    gap: 12px;
  }

  .profilePhoto {
    width: 110px;
    height: 110px;
  }

  .aboutText p {
    font-size: 13px;
  }
}
</style>
