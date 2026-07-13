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
})
</script>

<template>
  <div class="projectsContent">
    <h2>{{ title }}</h2>
    <div v-for="project in projects" :key="project.heading" class="projectCard">
      <div class="projectHeader">
        <h3>{{ project.heading }}</h3>
        <div class="projectLinks">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
      <p v-for="line in project.lines" :key="line">{{ line }}</p>
    </div>
  </div>
</template>
