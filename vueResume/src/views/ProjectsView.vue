<script setup>
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import ProjectsWindow from "../components/windows/ProjectsWindow.vue";
import { projectsSection } from "../data/portfolio";

const router = useRouter();

const closeWindow = () => {
  router.push("/");
};
</script>

<template>
  <WindowChrome id="projects" title="My Projects" :x="140" :y="90" :z-index="3" @close="closeWindow">
    <ProjectsWindow v-bind="projectsSection" />
  </WindowChrome>
</template>
