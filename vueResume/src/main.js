import { createApp } from "vue";
import "bulma/css/bulma.min.css";
import App from "./App.vue";
import router from "./router";
import "./styles/main.css";

createApp(App).use(router).mount("#app");
