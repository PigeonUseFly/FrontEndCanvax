<template>
  <IonPage>
    <ion-list>
      <ion-item>
        <ion-input label="Summary:" placeholder="Enter short summary" v-model="summaryInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input label="Description:" placeholder="Enter detailed description" v-model="descriptionInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-datetime display-format="YYYY-MM-DDTHH:mm" picker-format="YYYY-MM-DDTHH:mm" label="Starting date: " v-model="startDateInput"></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-datetime display-format="YYYY-MM-DDTHH:mm" picker-format="YYYY-MM-DDTHH:mm" label="Ending date: " v-model="endDateInput"></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-input label="Location: " placeholder="Enter location" v-model="locationInput"></ion-input>
      </ion-item>

      <ion-item>
        <ion-button expand="full" @click="handleSubmit">Add event</ion-button>
      </ion-item>
    </ion-list>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonDatetime, IonInput } from '@ionic/vue';
import { ref } from 'vue';

const summaryInput = ref('');
const descriptionInput = ref('');
const startDateInput = ref('');
const endDateInput = ref('');
const locationInput = ref('');

const handleSubmit = async () => {
  const summary = summaryInput.value;
  const description = descriptionInput.value;
  const startDateString = startDateInput.value;
  const endDateString = endDateInput.value;
  const location = locationInput.value;

  try {
    const response = await fetch("http://localhost:8080/events/insert", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: summary,
        description: description,
        startDate: startDateString,
        endDate: endDateString,
        locationName: location,
      }),
    });

    if (response.ok) {
      console.log('Event added successfully');
    } else {
      console.error('Failed to add event');
    }
  } catch (error) {
    console.error(error);
  }
};
</script>