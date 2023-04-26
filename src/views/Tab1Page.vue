<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
      </ion-toolbar>
      </ion-header>
      
      
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-header>
      <ion-toolbar>
        <h6>7 dagars kalender</h6>
      </ion-toolbar>
      </ion-header>
      <VCalendar view="weekly" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';

const attributes = ref([
  {
    highlight: true,
    dates: {
      start: new Date(2023, 0, 1),
    },
  },
]);



</script>
