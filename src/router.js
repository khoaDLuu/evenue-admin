import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Venues from './pages/Venues.vue'
import Users from './pages/Users.vue'
import Bookings from './pages/Bookings.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/venues',
      component: Venues
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/bookings',
      component: Bookings
    },
  ]
})

export default router
