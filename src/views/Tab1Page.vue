<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <button @click="CreationEvent" style="float: right; margin-right: 10px; font-size: 20px; padding: 10px 20px;">Add event</button>
      </ion-toolbar>
      <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
  :on-event-click="onEventClick" @event-delete="onDeleteEvent"
  :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
  :on-event-create="edit"
  
  
  
  
  >
</vue-cal>
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

};

const edit = function (event) {
  console.log("you want to create an event with drag");
 
  
};

const CreationEvent = function (event) {
  console.log("Create event:");
  showEventCreationDialog.value = true;
};


const onDeleteEvent = function (event) {
  console.log("här jävlar");
  console.log(event);
  fetch("http://localhost:8080/events/" + event.id, {
    method: "DELETE"
  });
};
 /* TEST */

 /* TEST */

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e0f0f;
  height: 250px;
}

.vuecal {
  height: 90vh;
}
</style>
