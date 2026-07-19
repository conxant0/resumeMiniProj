<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import ContactWindow from "../components/windows/ContactWindow.vue";
import { contactSection } from "../data/portfolio";

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
  <WindowChrome id="contact" title="Contact Me" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <ContactWindow v-bind="contactSection" />
  </WindowChrome>
</template>
