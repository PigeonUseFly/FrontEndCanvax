import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { createApp } from 'vue'
import App from './App.vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import router from './router';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*Filips calender saker */

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

/*Filips calender saker ovan*/


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VCalendar, {}) // Filip la till denna rad och tog bort ;

  app.component('VueCal', VueCal)

  
  
router.isReady().then(() => {
  app.mount('#app');
});

