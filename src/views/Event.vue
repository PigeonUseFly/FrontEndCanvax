<template>
  <IonPage>
  <ion-list>
    <ion-item>
      <ion-input label="Create event" value="" :readonly="true"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input ref="idInput" label="ID: " placeholder="Enter ID"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input ref="titleInput" label="Title:" placeholder="Enter event title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input ref="startDateInput" label="Starting date: " placeholder="Enter date"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input ref="endDateInput" label="Ending date: " placeholder="Enter date"></ion-input>
    </ion-item>

  
  </ion-list>
</IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { camera, trash, close, fileTrayFullOutline } from 'ionicons/icons';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/vue';
</script>
