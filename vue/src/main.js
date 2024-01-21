import {createApp} from "vue";
import store from "./plugins/store";
import router from "./plugins/router/index.js";
import App from "./App.vue";
import Echo from 'laravel-echo';
import Pusher from "pusher-js";
import _get from "lodash/get.js";

window.Echo = new Echo({
    authEndpoint: import.meta.env.VITE_VUE_APP_URL + '/broadcasting/auth',
    broadcaster: 'pusher',
    key: import.meta.env.VITE_VUE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_VUE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    encrypted: true,
    auth: {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
            Accept: "application/json",
        }
    },
});

createApp(App).use(store).use(router).mount("#app");
