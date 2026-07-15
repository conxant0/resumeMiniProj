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

<style scoped>
.educationContent {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.educationCard {
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
  border-radius: 8px;
  padding: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.educationCard:hover {
  border-left-color: #1f5fa8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.entryHeader {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 10px;
}

.entryHeader h3 {
  margin: 0;
  font-size: 16px;
}

.entryHeader p,
.entryHeader span {
  margin: 4px 0 0;
  color: #555;
  font-size: 13px;
}

.educationCard p {
  margin: 8px 0 0;
  color: #333;
  font-size: 13px;
  line-height: 1.45;
}

@media (max-width: 600px) {
  .educationCard {
    padding: 10px;
  }

  .entryHeader {
    flex-direction: column;
    gap: 2px;
  }
}
</style>
