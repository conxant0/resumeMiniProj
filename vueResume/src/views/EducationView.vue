<script setup>
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import EducationWindow from "../components/windows/EducationWindow.vue";
import { educationSection } from "../data/portfolio";

const router = useRouter();

const closeWindow = () => {
  router.push("/");
};
</script>

<template>
  <WindowChrome
    id="education"
    title="My Education"
    :x="140"
    :y="90"
    :z-index="3"
    @close="closeWindow"
  >
    <EducationWindow v-bind="educationSection" />
  </WindowChrome>
</template>
