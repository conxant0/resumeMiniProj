<script setup>
import { computed, reactive } from "vue";
import FolderIcon from "./FolderIcon.vue";
import WindowChrome from "./WindowChrome.vue";
import AboutWindow from "./windows/AboutWindow.vue";
import SkillsWindow from "./windows/SkillsWindow.vue";
import EducationWindow from "./windows/EducationWindow.vue";
import ProjectsWindow from "./windows/ProjectsWindow.vue";
import ContactWindow from "./windows/ContactWindow.vue";

import {
  aboutSection,
  contactSection,
  dockLinks,
  educationSection,
  folders,
  projectsSection,
  skillsSection,
} from "../data/portfolio";

const windowComponents = {
  about: AboutWindow,
  skills: SkillsWindow,
  education: EducationWindow,
  projects: ProjectsWindow,
  contact: ContactWindow,
};

const windowContent = {
  about: aboutSection,
  skills: skillsSection,
  education: educationSection,
  projects: projectsSection,
  contact: contactSection,
};

const initialPositions = {
  about: { x: 140, y: 90 },
  skills: { x: 160, y: 110 },
  education: { x: 180, y: 130 },
  projects: { x: 200, y: 150 },
  contact: { x: 220, y: 170 },
};

const openWindows = reactive(
  Object.fromEntries(
    folders.map((folder) => [
      folder.id,
      {
        open: false,
        x: initialPositions[folder.id].x,
        y: initialPositions[folder.id].y,
      },
    ]),
  ),
);

const openOrder = reactive([]);

const openWindow = (id) => {
  const state = openWindows[id];

  if (!state.open) {
    state.open = true;
    state.x = initialPositions[id].x + openOrder.length * 20;
    state.y = initialPositions[id].y + openOrder.length * 20;
    openOrder.push(id);
    return;
  }

  focusWindow(id);
};

const closeWindow = (id) => {
  const state = openWindows[id];
  state.open = false;

  const orderIndex = openOrder.indexOf(id);
  if (orderIndex !== -1) {
    openOrder.splice(orderIndex, 1);
  }
};

const focusWindow = (id) => {
  const orderIndex = openOrder.indexOf(id);
  if (orderIndex === -1) {
    return;
  }

  openOrder.splice(orderIndex, 1);
  openOrder.push(id);
};

const moveWindow = ({ id, x, y }) => {
  const state = openWindows[id];
  state.x = x;
  state.y = y;
};

const folderMap = Object.fromEntries(
  folders.map((folder) => [folder.id, folder]),
);

const openWindowsList = computed(() =>
  openOrder.map((id, index) => ({
    id,
    title: folderMap[id].label,
    component: windowComponents[id],
    props: windowContent[id],
    x: openWindows[id].x,
    y: openWindows[id].y,
    zIndex: 3 + index,
  })),
);
</script>

<template>
  <main class="desktop">
    <video class="desktopBg" autoplay muted loop playsinline>
      <source src="/assets/wallpaper.mp4" type="video/mp4" />
    </video>

    <div class="folders">
      <FolderIcon
        v-for="folder in folders"
        :key="folder.id"
        :icon="folder.icon"
        :label="folder.label"
        @open="openWindow(folder.id)"
      />
    </div>

    <div class="windows">
      <WindowChrome
        v-for="window in openWindowsList"
        :key="window.id"
        :id="window.id"
        :title="window.title"
        :x="window.x"
        :y="window.y"
        :z-index="window.zIndex"
        @close="closeWindow"
        @focus="focusWindow"
        @move="moveWindow"
      >
        <component :is="window.component" v-bind="window.props" />
      </WindowChrome>
    </div>

    <div class="dock">
      <div class="dockApps">
        <a
          v-for="link in dockLinks"
          :key="link.id"
          :href="link.url"
          :aria-label="link.label"
          :target="link.url.startsWith('mailto:') ? undefined : '_blank'"
          :rel="
            link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'
          "
        >
          <img class="dockIcon" :src="link.icon" :alt="link.alt" />
          <span class="dockTooltip">{{ link.label }}</span>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.desktop {
  height: 100vh;
  background: linear-gradient(135deg, #bbdce7, #42709e);
  overflow: hidden;
  position: relative;
  isolation: isolate;
}

.desktopBg {
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: 0;
}

.desktop::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.28)),
    radial-gradient(circle at 15% 10%, rgba(0, 0, 0, 0.08), transparent 32%);
  pointer-events: none;
  z-index: 1;
}

.dock {
  width: fit-content;
  max-width: 90%;
  height: 76px;
  background-color: rgba(245, 245, 245, 0.145);
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 26px;
  padding: 0 18px;
  z-index: 2;
}

.dockApps {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

.dockApps a {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  transition: transform 160ms ease;
}

.dockIcon {
  height: 50px;
  width: auto;
  display: block;
  transition:
    transform 160ms ease,
    filter 160ms ease;
}

.dockApps a:hover {
  transform: translateY(-5px);
}

.dockApps a:hover .dockIcon {
  transform: scale(1.12);
  filter: drop-shadow(0 10px 12px rgba(0, 0, 0, 0.26));
}

.dockApps a:active {
  transform: translateY(-1px) scale(0.94);
}

.dockTooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: rgba(30, 31, 35, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 7px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  opacity: 0;
  padding: 7px 9px;
  pointer-events: none;
  white-space: nowrap;
  transition:
    opacity 140ms ease,
    transform 140ms ease;
}

.dockApps a:hover .dockTooltip,
.dockApps a:focus-visible .dockTooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.dockApps a:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.9);
  outline-offset: 4px;
  filter: drop-shadow(0 0 8px rgba(31, 95, 168, 0.62));
}

.folders {
  position: absolute;
  top: 80px;
  left: 50px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 2;
}

@media (max-width: 600px) {
  .dock {
    height: 62px;
    bottom: 14px;
    padding: 0 14px;
    border-radius: 22px;
  }

  .dockApps {
    gap: 12px;
  }

  .dockIcon {
    height: 42px;
  }

  .folders {
    top: 50px;
    left: 12px;
    right: 12px;
    display: grid;
    grid-template-columns: repeat(2, 88px);
    justify-content: center;
    gap: 20px 28px;
  }
}
</style>
