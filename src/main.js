import { createApp } from 'vue'
import App from './App.vue'

// Configs and dependencies


import "./axiosconfig"
// Note that axios config must imported before store
import store from './store'





createApp(App).use(store).mount('#app')
