<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: false }"
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
    })
    .catch(error => {
      console.error(error);
    });
});

const onDeleteEvent = (event, index) => {
  console.log("Delete key pressed");
};

const onEventClick = (event, index) => {
  console.log("Index:", event.index);
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
