import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeVue from '@/pages/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeVue,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
