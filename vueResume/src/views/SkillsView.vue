<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import SkillsWindow from "../components/windows/SkillsWindow.vue";
import { skillsSection } from "../data/portfolio";
import { useWindowCenter } from "../composables/useWindowCenter";

const { x, y, closeWindow } = useWindowCenter();
</script>

<template>
  <WindowChrome id="skills" title="My Skills" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <SkillsWindow v-bind="skillsSection" />
  </WindowChrome>
</template>
