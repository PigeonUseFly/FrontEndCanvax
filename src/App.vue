template>
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
import { useRouter } from 'vue-router';

const goToSchedule = () => {
  const router = useRouter();
  router.push('/tabs/tab1');
};
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  },
});
</script>