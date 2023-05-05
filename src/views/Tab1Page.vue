<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme" 
        :disable-views="['years', 'year']"
        :events="events"
        :on-event-click="onEventClick"
        editable-events="{ title: false, drag: false, resize: false, delete: true, create: false }"
        >
      </vue-cal>
      
      </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

const events = ref([]);

onBeforeMount(async () => {
  //TESTKOD
  fetch('http://localhost:8080/calendar/bajs')
  .then(response => response.json())
  .then(data => {
    data.events.forEach(event => {
      events.value.push({
        title: event.summary,
        start: event.startDate,
        end: event.endDate
      });
    });
  })
  .catch(error => {
    console.error(error);
    // Handle the error
  });
});

const onEventClick = (event) => {
  
};

const eventId = '2'; // the ID of the event to remove

fetch(`http://localhost:8080/calendar/bajs/${eventId}`, {
  method: 'DELETE'
})
.then(response => {
  if (response.ok) {
    // the event was successfully removed
    console.log('Event removed successfully.');
  } else {
    console.error(`Failed to remove event with ID ${eventId}.`);
  }
})
.catch(error => {
  console.error(`Failed to remove event with ID ${eventId}: ${error.message}`);
});



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8E00FF;
  height: 250px;
}

.vuecal {height: 90vh;}
</style>

