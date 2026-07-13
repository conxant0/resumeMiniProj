<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['open'])
</script>

<template>
  <div
    class="folder"
    role="button"
    tabindex="0"
    @click="emit('open')"
    @keydown.enter.prevent="emit('open')"
    @keydown.space.prevent="emit('open')"
  >
    <img class="folderIcon" :src="icon" :alt="label" />
    <span>{{ label }}</span>
  </div>
</template>
