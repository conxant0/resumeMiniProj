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
