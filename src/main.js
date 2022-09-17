import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lang from '@/assets/scripts/Lang/Lang'
import "@/assets/styles/style.scss"


createApp(App).use(store).use(Lang).use(router).mount('#app')
