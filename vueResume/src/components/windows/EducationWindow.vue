<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  organizationsTitle: {
    type: String,
    required: true,
  },
  cards: {
    type: Array,
    required: true,
  },
  organizations: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="educationContent">
    <h2>{{ title }}</h2>
    <div v-for="card in cards" :key="card.heading" class="educationCard">
      <div class="entryHeader">
        <div>
          <h3>{{ card.heading }}</h3>
          <p>{{ card.location }}</p>
        </div>
        <span>{{ card.dates }}</span>
      </div>
      <p v-for="line in card.lines" :key="line.strong">
        <strong>{{ line.strong }}</strong>{{ line.text }}
      </p>
    </div>

    <h2>{{ organizationsTitle }}</h2>
    <div v-for="organization in organizations" :key="organization.heading" class="educationCard">
      <div class="entryHeader">
        <div>
          <h3>{{ organization.heading }}</h3>
          <p>{{ organization.location }}</p>
        </div>
        <span>{{ organization.dates }}</span>
      </div>
      <p><strong>{{ organization.role }}</strong></p>
      <p v-for="line in organization.lines" :key="line">{{ line }}</p>
    </div>
  </div>
</template>
