<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import ContactWindow from "../components/windows/ContactWindow.vue";
import { contactSection } from "../data/portfolio";
import { useWindowCenter } from "../composables/useWindowCenter";

const { x, y, closeWindow } = useWindowCenter();
</script>

<template>
  <WindowChrome id="contact" title="Contact Me" :x="x" :y="y" :z-index="3" @close="closeWindow">
    <ContactWindow v-bind="contactSection" />
  </WindowChrome>
</template>
