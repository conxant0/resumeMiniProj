<script setup>
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import AboutWindow from "../components/windows/AboutWindow.vue";
import { aboutSection } from "../data/portfolio";

const router = useRouter();

const closeWindow = () => {
  router.push("/");
};
</script>

<template>
  <WindowChrome id="about" title="About Me" :x="140" :y="90" :z-index="3" @close="closeWindow">
    <AboutWindow v-bind="aboutSection" />
  </WindowChrome>
</template>
