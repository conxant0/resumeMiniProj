import { ref } from "vue";
import { defineStore } from "pinia";

// For now, only dark mode settings is supported, but plan is you can extend to other themed settings as well
export const useSettingsStore = defineStore("settings", () => {
  const theme = ref(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
  }

  return { theme, toggleTheme };
});
