<script setup>
import { RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div :class="settingsStore.theme === 'light' ? 'theme-light' : 'theme-dark'">
    <RouterView />
  </div>
</template>
