import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/start'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/start'
      },
      {
        path: 'start',
        component: () => import('@/views/StartPage.vue')
      },
      
      {
        path: 'calendar',
        component: () => import('@/views/Calendar.vue')
      },
      {
        path: 'events',
        component: () => import('@/views/Events.vue')
      },
      {
        path: 'lab',
        component: () => import('@/views/Lab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router


