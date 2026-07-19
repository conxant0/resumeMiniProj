<script setup>
import { computed, onBeforeUnmount, ref } from "vue";

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
});

const emit = defineEmits(["close", "expand", "focus", "move"]);

const windowRef = ref(null);
let dragState = null;

const windowStyle = computed(() => ({
  top: `${props.y}px`,
  left: `${props.x}px`,
  zIndex: props.zIndex,
}));

const stopDragging = () => {
  if (!dragState) {
    return;
  }

  document.removeEventListener("mousemove", handlePointerMove);
  document.removeEventListener("mouseup", stopDragging);
  dragState = null;
};

const handlePointerMove = (event) => {
  if (!dragState) {
    return;
  }

  emit("move", {
    id: props.id,
    x: event.clientX - dragState.offsetX,
    y: event.clientY - dragState.offsetY,
  });
};

const startDrag = (event) => {
  if (window.innerWidth <= 600 || event.button !== 0) {
    return;
  }

  const rect = windowRef.value?.getBoundingClientRect();

  if (!rect) {
    return;
  }

  emit("focus", props.id);
  dragState = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };

  document.addEventListener("mousemove", handlePointerMove);
  document.addEventListener("mouseup", stopDragging);
};

onBeforeUnmount(stopDragging);
</script>

<template>
  <section
    ref="windowRef"
    class="folderWindow"
    :style="windowStyle"
    @mousedown="emit('focus', id)"
  >
    <div class="windowBar" @mousedown="startDrag">
      <div class="windowButtons">
        <button
          class="windowButton closeButton"
          type="button"
          aria-label="Close window"
          @click.stop="emit('close', id)"
        ></button>
        <button
          class="windowButton minimizeButton"
          type="button"
          aria-label="Minimize"
        ></button>
        <button
          class="windowButton expandButton"
          type="button"
          aria-label="Expand"
          @click.stop="emit('expand', id)"
        ></button>
      </div>
      <span class="windowTitle">{{ title }}</span>
    </div>
    <div class="windowContent">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.folderWindow {
  position: absolute;
  top: 90px;
  left: 140px;
  width: 720px;
  max-width: calc(100vw - 180px);
  height: 620px;
  max-height: calc(100vh - 150px);
  background-color: rgba(245, 247, 250, 0.94);
  border: 1px solid rgba(180, 185, 195, 0.85);
  border-radius: 10px;
  color: #1f1f1f;
  font-family: var(--system-font);
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  z-index: 3;
}

.windowBar {
  height: 34px;
  background-color: rgba(232, 235, 240, 0.96);
  border-bottom: 1px solid rgba(190, 195, 205, 0.8);
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 12px;
  cursor: move;
  user-select: none;
}

.windowButtons {
  display: flex;
  gap: 8px;
}

.windowButton {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  padding: 0;
}

.closeButton {
  background-color: #ff5f57;
}

.minimizeButton {
  background-color: #febc2e;
}

.expandButton {
  background-color: #28c840;
}

.windowTitle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  font-weight: 600;
}

.windowContent {
  height: calc(100% - 34px);
  padding: 18px;
  overflow: auto;
}

.windowContent h2 {
  margin: 0 0 14px;
  font-size: 22px;
}

.windowButton:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.9);
  outline-offset: 4px;
  filter: drop-shadow(0 0 8px rgba(31, 95, 168, 0.62));
}

@media (max-width: 600px) {
  .folderWindow {
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    width: 88%;
    max-width: none;
    height: 46vh;
    max-height: calc(100vh - 230px);
  }

  .windowBar {
    height: 30px;
  }

  .windowContent {
    height: calc(100% - 30px);
    padding: 12px;
  }

  .windowContent h2 {
    font-size: 18px;
  }
}
</style>
