<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import ProjectsWindow from "../components/windows/ProjectsWindow.vue";
import { projectsSection } from "../data/portfolio";
import { useWindowCenter } from "../composables/useWindowCenter";

const { x, y, closeWindow } = useWindowCenter();
</script>

<template>
  <WindowChrome id="projects" title="My Projects" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <ProjectsWindow v-bind="projectsSection" />
  </WindowChrome>
</template>
