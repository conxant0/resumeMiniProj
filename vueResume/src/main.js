import { createApp } from "vue";
import { createPinia } from "pinia";
import "bulma/css/bulma.min.css";
import App from "./App.vue";
import router from "./router";
import "./styles/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
