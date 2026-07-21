import { computed } from "vue";
import { useRouter } from "vue-router";

// Center the window on fullscreen mode, and have all the views use it
export function useWindowCenter(width = 720, height = 620) {
  const router = useRouter();

  const x = computed(() => Math.round((window.innerWidth - width) / 2));
  const y = computed(() => Math.round((window.innerHeight - height) / 2));

  const closeWindow = () => {
    router.push("/");
  };

  return { x, y, closeWindow };
}
