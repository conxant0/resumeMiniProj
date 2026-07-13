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
  name: {
    type: String,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  closing: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="contactContent">
    <h2>{{ title }}</h2>
    <p class="contactIntro">{{ intro }}</p>
    <div class="contactCard">
      <h3>{{ name }}</h3>
      <div class="contactRows">
        <p v-for="row in rows" :key="row.label">
          <strong>{{ row.label }}:</strong>
          <template v-if="row.href">
            <a :href="row.href" target="_blank" rel="noopener noreferrer">{{ row.value }}</a>
          </template>
          <template v-else>
            {{ row.value }}
          </template>
        </p>
      </div>
      <p class="openTo">{{ closing }}</p>
    </div>
  </div>
</template>
