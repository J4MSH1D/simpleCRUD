import { createApp } from 'vue'
import App from './App.vue'
import "./css/styles.css"
// Configs and dependencies


import "./axiosconfig"
// Note that axios config must imported before store
import store from './store'





createApp(App).use(ElementPlus).use(store).mount('#app')
