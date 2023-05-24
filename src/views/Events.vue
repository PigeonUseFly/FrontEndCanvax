<template>
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

    <ion-button @onEventClick="passValuesToCreationEvent">Create Event</ion-button>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
    methods: {
      passValuesToCreationEvent() {
        console.log('kommer jag hit?')
        const id = this.$refs.idInput.value;
        const title = this.$refs.titleInput.value;
        const startDate = this.$refs.startDateInput.value;
        const endDate = this.$refs.endDateInput.value;

        this.$emit('creation-event', { id, title, startDate, endDate });
      }
    }
  });
</script>