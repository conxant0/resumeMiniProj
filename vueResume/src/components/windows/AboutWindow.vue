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
});
</script>

<template>
  <div
    class="is-flex is-flex-direction-column is-align-items-center has-text-centered aboutContent"
  >
    <img
      class="profilePhoto image is-square"
      :src="photo"
      alt="Profile photo"
    />
    <div class="content">
      <h2 class="title is-4">{{ title }}</h2>
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>

<style scoped>
.aboutContent {
  gap: 16px;
}

.profilePhoto {
  width: 220px;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  background-color: #d8d8d8;
}

.content p {
  margin: 14px 0 0;
  font-size: 16px;
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
