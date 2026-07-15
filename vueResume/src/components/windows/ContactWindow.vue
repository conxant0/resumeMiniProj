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

<style scoped>
.contactIntro {
  margin: 10px 0 18px;
  color: #555;
  font-size: 14px;
  line-height: 1.4;
}

.contactCard {
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
  border-radius: 8px;
  padding: 16px;
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

.contactCard h3 {
  margin: 0 0 12px;
  font-size: 18px;
}

.contactRows p,
.openTo {
  margin: 8px 0 0;
  color: #333;
  font-size: 14px;
  line-height: 1.45;
}

.contactRows a {
  color: #1f5fa8;
  text-decoration: none;
}

.openTo {
  margin-top: 16px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .contactCard {
    padding: 12px;
  }

  .contactRows p,
  .openTo {
    font-size: 13px;
  }
}
</style>
