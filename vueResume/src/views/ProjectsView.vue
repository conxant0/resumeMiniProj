<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import ProjectsWindow from "../components/windows/ProjectsWindow.vue";
import { projectsSection } from "../data/portfolio";

const WIDTH = 720;
const HEIGHT = 620;

const x = computed(() => Math.round((window.innerWidth - WIDTH) / 2));
const y = computed(() => Math.round((window.innerHeight - HEIGHT) / 2));

const router = useRouter();

const closeWindow = () => {
  router.push("/");
};
</script>

<template>
  <WindowChrome id="projects" title="My Projects" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <ProjectsWindow v-bind="projectsSection" />
  </WindowChrome>
</template>
