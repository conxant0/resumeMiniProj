<script setup>
import WindowChrome from "../components/WindowChrome.vue";
import ContactWindow from "../components/windows/ContactWindow.vue";
import { contactSection } from "../data/portfolio";
</script>

<template>
  <WindowChrome id="contact" title="Contact Me" :x="140" :y="90" :z-index="3">
    <ContactWindow v-bind="contactSection" />
  </WindowChrome>
</template>
