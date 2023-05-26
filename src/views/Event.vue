<template>
  <IonPage>
    <ion-list>
      <ion-item>
        <ion-input label="Create event" value="" :readonly="true"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input ref="summaryInput" label="Summary:" placeholder="Enter short summary" v-model="summaryInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input ref="descriptionInput" label="Description:" placeholder="Enter detailed description" v-model="descriptionInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input ref="startDateInput" type="datetime-local" label="Starting date: " v-model="startDateInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input ref="endDateInput" type="datetime-local" label="Ending date: " v-model="endDateInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input ref="locationInput" label="Location: " placeholder="Enter location" v-model="locationInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-button expand="full" @click="handleSubmit">Add event</ion-button>
      </ion-item>
    </ion-list>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';

const summaryInput = ref('');
const descriptionInput = ref('');
const startDateInput = ref('');
const endDateInput = ref('');
const locationInput = ref('');

const handleSubmit = async () => {
  const summary = summaryInput.value.toString();
  const description = descriptionInput.value.toString();
  const startDateString = startDateInput.value;
  const endDateString = endDateInput.value;
  const location = locationInput.value.toString();

  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  try {
    await fetch("http://localhost:8080/events/insert", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary,
        description,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        location,
      }),
    });
  } catch (error) {
    console.error(error)
  }
};
</script>
