import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue';
import Tab1Page from '@/views/Tab1Page.vue';
import FrontPage from '@/views/FrontPage.vue'; // import the FrontPage component
import { defineComponent } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: FrontPage // set the FrontPage component as the root path
  },
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
        component: Tab1Page,
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;