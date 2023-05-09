<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
          @event-delete="onDeleteEvent">
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
  fetch('http://localhost:8080/events')
    .then(response => response.json())
    .then(data => {
      const values = Object.values(data);
      events.value = values.map(event => {
        return {
          id: event.id,
          title: event.summary,
          start: event.startDate,
          end: event.endDate
        };
      });
      console.log();
    })
    .catch(error => {
      console.error(error);
    });
});

const onEventClick = function (event) {
  console.log("Event ID:", event.id);
  // Do something with the ID here
};


const onDeleteEvent = function (event) {
  console.log("här jävlar");
  console.log(event);
  fetch("http://localhost:8080/events/{ event.id}" + event.id, {
    method:"DELETE"
  })
  .then(response => response.json())
    .then(data => {
      console.log('Event deleted:', data);
    })
    .catch(error => {
      console.error(error);
    });

/*Salta nötter*/
};


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

.vuecal {
  height: 90vh;
}
</style>
