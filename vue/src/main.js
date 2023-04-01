import { createApp } from "vue";
import store from "./plugins/store";
import router from "./plugins/router/index.js";
import App from "./App.vue";
import "./plugins/styles/helpers.scss";
import "./plugins/styles/global.scss";

createApp(App).use(store).use(router).mount("#app");
