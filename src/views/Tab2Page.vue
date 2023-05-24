<template>
  <ion-list>
    <ion-item>
      <ion-input label="Create event" value="" :readonly="true"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="ID: " placeholder="Enter ID"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Title:" placeholder="Enter event title"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Starting date: " placeholder="Enter date"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Ending date: " placeholder="Enter date"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
  });
</script>