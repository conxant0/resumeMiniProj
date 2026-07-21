<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import AboutWindow from "../components/windows/AboutWindow.vue";
import { aboutSection } from "../data/portfolio";
import { useWindowCenter } from "../composables/useWindowCenter";

const { x, y, closeWindow } = useWindowCenter();
</script>

<template>
  <WindowChrome id="about" title="About Me" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <AboutWindow v-bind="aboutSection" />
  </WindowChrome>
</template>
