import { createRouter, createWebHistory } from '@ionic/vue-router'
import TabsPage from '../views/TabsPage.vue'
import FrontPage from '../views/FrontPage.vue'
import ScheduleTab from '../views/ScheduleTab.vue'
import JSONTab from '../views/JSONTab.vue'
import NoteTab from '../views/NoteTab.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'FrontPage',
    redirect: '/front-page',
  },
  {
    path: '/front-page',
    component: FrontPage,
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: ScheduleTab,
      },
      {
        path: 'tab2',
        component: JSONTab,
      },
      {
        path: 'tab3',
        component: NoteTab,
      },
    ],
  },
]


})

export default router