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

<style scoped>
.folder {
  width: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-family: var(--system-font);
  font-size: 12px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition:
    transform 160ms ease,
    filter 160ms ease;
}

.folderIcon {
  height: 75px;
  width: auto;
  display: block;
  transition:
    transform 160ms ease,
    filter 160ms ease;
}

.folder span {
  border-radius: 4px;
  padding: 2px 5px;
  transition: background-color 160ms ease;
}

.folder:hover {
  transform: translateY(-3px);
}

.folder:hover .folderIcon {
  transform: scale(1.06);
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.28));
}

.folder:hover span {
  background-color: rgba(255, 255, 255, 0.18);
}

.folder:active {
  transform: translateY(0) scale(0.96);
}

.folder:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.9);
  outline-offset: 4px;
  filter: drop-shadow(0 0 8px rgba(31, 95, 168, 0.62));
}

@media (max-width: 600px) {
  .folder {
    width: 88px;
    font-size: 12px;
  }

  .folderIcon {
    height: 70px;
  }
}
</style>
