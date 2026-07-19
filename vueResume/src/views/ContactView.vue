<script setup>
import { useRouter } from "vue-router";
import WindowChrome from "../components/WindowChrome.vue";
import ContactWindow from "../components/windows/ContactWindow.vue";
import { contactSection } from "../data/portfolio";

const router = useRouter();

const closeWindow = () => {
  router.push("/");
};
</script>

<template>
  <WindowChrome id="contact" title="Contact Me" :x="140" :y="90" :z-index="3" @close="closeWindow">
    <ContactWindow v-bind="contactSection" />
  </WindowChrome>
</template>
