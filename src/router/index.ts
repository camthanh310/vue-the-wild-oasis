import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/views/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashboard'
      }
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: '/bookings',
          name: 'bookings',
          component: () => import('@/views/BookingsView.vue')
        },
        {
          path: '/booking',
          name: 'booking',
          component: () => import('@/views/BookingView.vue')
        },
        {
          path: '/checkin/:bookingId',
          name: 'checkin',
          component: () => import('@/views/CheckinView.vue')
        },
        {
          path: '/cabins',
          name: 'cabins',
          component: () => import('@/views/CabinsView.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/views/UsersView.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/views/SettingsView.vue')
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('@/views/AccountView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router
