<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="projectsContent">
    <h2 class="title is-4">{{ title }}</h2>
    <div
      v-for="project in projects"
      :key="project.heading"
      class="projectCard card"
    >
      <div class="card-content">
        <div class="projectHeader">
          <h3 class="title is-5 mb-1">{{ project.heading }}</h3>
          <div class="projectLinks">
            <a
              v-for="link in project.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="has-text-link"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
        <p v-for="line in project.lines" :key="line">{{ line }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projectsContent {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.projectCard {
  border: 1px solid #d5d5d5;
  border-left: 4px solid #42709e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.projectCard:hover {
  border-left-color: #1f5fa8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.projectHeader {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 8px;
}

.projectLinks {
  display: flex;
  gap: 8px;
  white-space: nowrap;
}

.projectLinks a {
  align-items: center;
  background-color: rgba(31, 95, 168, 0.1);
  border: 1px solid rgba(31, 95, 168, 0.24);
  border-radius: 999px;
  display: inline-flex;
  font-size: 13px;
  font-weight: 600;
  min-height: 28px;
  padding: 5px 10px;
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.projectLinks a:hover {
  background-color: #8ab1dd;
  border-color: #1f5fa8;
  color: #ffffff;
  transform: translateY(-1px);
}

.projectCard p {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.45;
}

.projectLinks a:focus-visible {
  outline: 3px solid rgba(31, 95, 168, 0.78);
  outline-offset: 4px;
  filter: drop-shadow(0 0 8px rgba(31, 95, 168, 0.62));
}

@media (max-width: 600px) {
  .projectHeader {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
