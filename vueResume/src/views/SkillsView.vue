<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import SkillsWindow from "../components/windows/SkillsWindow.vue";
import { skillsSection } from "../data/portfolio";
</script>

<template>
  <WindowChrome id="skills" title="My Skills" :x="140" :y="90" :z-index="3">
    <SkillsWindow v-bind="skillsSection" />
  </WindowChrome>
</template>
