<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import EducationWindow from "../components/windows/EducationWindow.vue";
import { educationSection } from "../data/portfolio";
</script>

<template>
  <WindowChrome
    id="education"
    title="My Education"
    :x="140"
    :y="90"
    :z-index="3"
  >
    <EducationWindow v-bind="educationSection" />
  </WindowChrome>
</template>
