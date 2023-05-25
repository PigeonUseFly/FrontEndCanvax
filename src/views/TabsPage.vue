<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="schedule" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="calendarNumber" />
          <ion-label>Calender</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="JSON" href="/tabs/tab2">
          <ion-icon :icon="arrowDown" />
        <ion-label>JSON</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="note" href="/tabs/tab3">
          <ion-icon :icon="pencil"></ion-icon>
          <ion-label>My notes</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { pencil } from 'ionicons/icons';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { arrowDown, calendarNumber, square} from 'ionicons/icons';
</script>
