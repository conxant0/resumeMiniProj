<script setup>
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import SkillsWindow from "../components/windows/SkillsWindow.vue";
import { skillsSection } from "../data/portfolio";

const router = useRouter();

const closeWindow = () => {
  router.push("/");
};
</script>

<template>
  <WindowChrome id="skills" title="My Skills" :x="140" :y="90" :z-index="3" @close="closeWindow">
    <SkillsWindow v-bind="skillsSection" />
  </WindowChrome>
</template>
