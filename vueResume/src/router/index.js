import { createRouter, createWebHistory } from "vue-router";
import Desktop from "../components/Desktop.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import EducationView from "../views/EducationView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SkillsView from "../views/SkillsView.vue";

const routes = [
  {
    path: "/",
    name: "Desktop",
    component: Desktop,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/education",
    name: "Education",
    component: EducationView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
