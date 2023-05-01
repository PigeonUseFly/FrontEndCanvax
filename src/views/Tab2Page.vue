<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>File loader, Banan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
    <ion-item v-for="(item, index) in data" :key="index">
      <ion-label>{{ item.name }}</ion-label>
      <ion-note slot="end">{{ item.id }}</ion-note>
    </ion-item>
  </ion-list>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="fetchData">Fetch Data</ion-fab-button>
      <ion-icon :icon="fileTrayFullOutline"></ion-icon>
  </ion-fab>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup = "ts">
</script>

<script lang = "ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { fileTrayFullOutline } from 'ionicons/icons';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,

} from '@ionic/vue';

import { defineComponent } from 'vue';
interface Item {
    id: number;
    name: string;
    summery: string
  }
  
  export default defineComponent({
   components: {
     IonPage,
     IonHeader,
     IonToolbar,
     IonTitle,
     IonContent,
     IonFab,
     IonFabButton,
     IonIcon,
     IonGrid,
     IonRow,
     IonCol,
     IonImg,
  },
   data(): { data: Item[] }{
    return{
      data: [],
    };
  },

  methods: {
    fetchData() {
      fetch('http://localhost:8080/programs/Gottemannen')
        .then((response) => response.json())
        .then((data: Item[]) => {
          this.data = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
 },
});
</script>