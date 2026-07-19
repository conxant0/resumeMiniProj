<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import ProjectsWindow from "../components/windows/ProjectsWindow.vue";
import { projectsSection } from "../data/portfolio";
</script>

<template>
  <WindowChrome id="projects" title="My Projects" :x="140" :y="90" :z-index="3">
    <ProjectsWindow v-bind="projectsSection" />
  </WindowChrome>
</template>
