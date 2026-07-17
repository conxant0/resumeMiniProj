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
});
</script>

<template>
  <div class="skillsContent">
    <h2 class="title is-4">{{ title }}</h2>
    <p class="subtitle is-6 has-text-grey mb-5">{{ intro }}</p>
    <div class="skillsGrid">
      <div v-for="group in groups" :key="group.title" class="skillGroup card">
        <div class="card-content">
          <h3 class="title is-5 mb-2">{{ group.title }}</h3>
          <p>{{ group.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skillsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.skillGroup {
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.skillGroup p {
  font-size: 13px;
  line-height: 1.4;
}

.skillGroup:hover {
  border-left-color: #1f5fa8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .skillsGrid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
