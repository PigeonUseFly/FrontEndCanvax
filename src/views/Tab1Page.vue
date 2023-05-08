<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
          @keyup.delete="onDeleteEvent">
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
//Method to load info before the web page is displayed
onBeforeMount(async () => {
  fetch('http://localhost:8080/calendar/bajs')
    .then(response => response.json())
    .then(data => {
      data.events.forEach(event => {
        events.value.push({
          index: event.index,
          title: event.summary,
          start: event.startDate,
          end: event.endDate
        });
      });
      console.log('Events:', events.value); // log events array
    })
    .catch(error => {
      console.error(error);
    });
});


const onEventClick = (event, index) => {
  console.log("Index:", index);
};

const onDeleteEvent = (index) => {
  console.log("Delete key pressed");
  const event = events.value[index]; // get event object from events array
  events.value.splice(index, 1); // remove event from events array
  fetch(`http://localhost:8080/calendar/remove-element?index=${event.index}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log('Event deleted:', data);
    })
    .catch(error => {
      console.error(error);
    });
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
