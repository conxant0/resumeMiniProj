<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import AboutWindow from "../components/windows/AboutWindow.vue";
import { aboutSection } from "../data/portfolio";
</script>

<template>
  <WindowChrome id="about" title="About Me" :x="140" :y="90" :z-index="3">
    <AboutWindow v-bind="aboutSection" />
  </WindowChrome>
</template>
