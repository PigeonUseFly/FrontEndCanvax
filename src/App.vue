<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>My App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container">
        <h1>Welcome to My App!</h1>
        <p>Click the button below to view our schedule:</p>
        <ion-button @click="goToSchedule" expand="block">View Schedule</ion-button>
      </div>
    </ion-content>

    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const App = defineComponent({
  components: {
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  },
  setup() {
    const router = useRouter();

    function goToSchedule() {
      router.push('/FrontPage');
    }

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
