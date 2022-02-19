import { createApp } from 'vue'
import App from './App.vue'
import "./axiosconfig"
import store from './store'




createApp(App).use(store).mount('#app')
