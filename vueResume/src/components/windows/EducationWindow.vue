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
});
</script>

<template>
  <div class="educationContent">
    <h2 class="title is-4">{{ title }}</h2>
    <div v-for="card in cards" :key="card.heading" class="educationCard card">
      <div class="card-content">
        <div class="entryHeader">
          <div>
            <h3 class="title is-5 mb-1">{{ card.heading }}</h3>
            <p class="has-text-grey">{{ card.location }}</p>
          </div>
          <span class="has-text-grey is-size-7">{{ card.dates }}</span>
        </div>
        <p v-for="line in card.lines" :key="line.strong">
          <strong>{{ line.strong }}</strong
          >{{ line.text }}
        </p>
      </div>
    </div>

    <h2 class="title is-4 mt-4">{{ organizationsTitle }}</h2>
    <div
      v-for="organization in organizations"
      :key="organization.heading"
      class="educationCard card"
    >
      <div class="card-content">
        <div class="entryHeader">
          <div>
            <h3 class="title is-5 mb-1">{{ organization.heading }}</h3>
            <p class="has-text-grey is-size-7">{{ organization.location }}</p>
          </div>
          <span class="has-text-grey is-size-7">{{ organization.dates }}</span>
        </div>
        <p class="has-text-weight-semibold">{{ organization.role }}</p>
        <p v-for="line in organization.lines" :key="line">{{ line }}</p>
      </div>
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
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
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

.entryHeader p,
.entryHeader span {
  margin-top: 4px;
}

.educationCard p {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.45;
}

@media (max-width: 600px) {
  .entryHeader {
    flex-direction: column;
    gap: 2px;
  }
}
</style>
