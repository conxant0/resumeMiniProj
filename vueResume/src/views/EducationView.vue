<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import EducationWindow from "../components/windows/EducationWindow.vue";
import { educationSection } from "../data/portfolio";
import { useWindowCenter } from "../composables/useWindowCenter";

const { x, y, closeWindow } = useWindowCenter();
</script>

<template>
  <WindowChrome id="education" title="My Education" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <EducationWindow v-bind="educationSection" />
  </WindowChrome>
</template>
