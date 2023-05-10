<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>My app</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import FrontPage from '@/views/FrontPage.vue';

const App = defineComponent({
  components: {
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    FrontPage,
  },
  setup() {
    
    const router = useRouter();

    function goToSchedule() {
      router.push('tabs/Tab1Page');
    }
   
    // navigate to the FrontPage component when the app starts
    

    return {
      goToSchedule,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 20px;
}
</style>
