<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
          :on-event-click="onEventClick"
          editable-events="{ title: false, drag: false, resize: false, delete: true, create: false }">
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
    })
    .catch(error => {
      console.error(error);
    });
});
//Method to return the index of the calendar entry tapped in the app
const onEventClick = (event, index) => {
  console.log("Clicked event id:", event.index);
};

</script>

