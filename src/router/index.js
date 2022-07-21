import { createRouter, createWebHistory } from 'vue-router'
import signUp from '../views/HomeView.vue'
import login from '../views/AboutView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
