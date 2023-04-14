import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
const routes = [
    {
        path: '/',
        redirect: '/tabs/tab1'
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
                path: 'tab4',
                component: () => import('@/views/Tab4Page.vue')
            },
            {
                path: 'WhenClicked',
                component: () => import('@/views/WhenClicked.vue')
            }
            
        ]
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;

fetch('./data.json') // Kan hämta från server med syntax: ('https://server.com/data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

    import data from './data.json' assert { type: 'JSON' };
    console.log(data);

//# sourceMappingURL=index.js.map