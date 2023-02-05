import { createApp } from 'vue'
import './style.css'
import store from './plugins/store'
import router from './plugins/router/index.js'
import './index.css'
import App from './App.vue'


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
