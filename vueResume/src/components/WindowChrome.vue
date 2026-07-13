<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  zIndex: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['close', 'focus', 'move'])

const windowRef = ref(null)
let dragState = null

const windowStyle = computed(() => ({
  top: `${props.y}px`,
  left: `${props.x}px`,
  zIndex: props.zIndex,
}))

const stopDragging = () => {
  if (!dragState) {
    return
  }

  document.removeEventListener('mousemove', handlePointerMove)
  document.removeEventListener('mouseup', stopDragging)
  dragState = null
}

const handlePointerMove = (event) => {
  if (!dragState) {
    return
  }

  emit('move', {
    id: props.id,
    x: event.clientX - dragState.offsetX,
    y: event.clientY - dragState.offsetY,
  })
}

const startDrag = (event) => {
  if (window.innerWidth <= 600 || event.button !== 0) {
    return
  }

  const rect = windowRef.value?.getBoundingClientRect()

  if (!rect) {
    return
  }

  emit('focus', props.id)
  dragState = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  }

  document.addEventListener('mousemove', handlePointerMove)
  document.addEventListener('mouseup', stopDragging)
}

onBeforeUnmount(stopDragging)
</script>

<template>
  <section ref="windowRef" class="folderWindow" :style="windowStyle" @mousedown="emit('focus', id)">
    <div class="windowBar" @mousedown="startDrag">
      <div class="windowButtons">
        <button
          class="windowButton closeButton"
          type="button"
          aria-label="Close window"
          @click.stop="emit('close', id)"
        ></button>
        <button class="windowButton minimizeButton" type="button" aria-label="Minimize"></button>
        <button class="windowButton expandButton" type="button" aria-label="Expand"></button>
      </div>
      <span class="windowTitle">{{ title }}</span>
    </div>
    <div class="windowContent">
      <slot />
    </div>
  </section>
</template>
