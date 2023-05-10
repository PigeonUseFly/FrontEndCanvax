import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import TabsPage from '@/views/TabsPage.vue';
import FrontPage from '@/views/FrontPage.vue'; // import FrontPage component

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'FrontPage',
        component: FrontPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;