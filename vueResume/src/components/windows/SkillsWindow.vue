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

<style scoped>
.skillsContent {
  display: block;
}

.skillsIntro {
  margin: 10px 0 18px;
  color: #555;
  font-size: 14px;
  line-height: 1.4;
}

.skillsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.skillGroup {
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.skillGroup h3 {
  margin: 0 0 8px;
  font-size: 14px;
}

.skillGroup p {
  margin: 0;
  color: #333;
  font-size: 13px;
  line-height: 1.4;
}

.skillGroup:hover {
  border-left-color: #1f5fa8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .skillsIntro {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .skillsGrid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .skillGroup {
    padding: 10px;
  }
}
</style>
