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
});
</script>

<template>
  <div class="contactContent">
    <h2 class="title is-4">{{ title }}</h2>
    <p class="subtitle is-6 has-text-grey mb-5">{{ intro }}</p>
    <div class="contactCard card">
      <div class="card-content">
        <h3 class="title is-5">{{ name }}</h3>
        <div class="contactRows">
          <p v-for="row in rows" :key="row.label">
            <strong>{{ row.label }}:</strong>
            <template v-if="row.href">
              <a
                class="has-text-link"
                :href="row.href"
                target="_blank"
                rel="noopener noreferrer"
                >{{ row.value }}</a
              >
            </template>
            <template v-else>
              {{ row.value }}
            </template>
          </p>
        </div>
        <p class="has-text-weight-semibold mt-4">{{ closing }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contactCard {
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.contactCard:hover {
  border-left-color: #1f5fa8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.contactRows p {
  margin: 8px 0 0;
  color: #666464;
  font-size: 14px;
  line-height: 1.45;
}

@media (max-width: 600px) {
  .contactRows p {
    font-size: 13px;
  }
}
</style>
