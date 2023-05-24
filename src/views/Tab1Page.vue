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
  :on-event-create="edit">
</vue-cal>
    </ion-header>
   <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup>
import router from '@/router';
import { ref, onBeforeMount } from 'vue';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

const events = ref([]);

/*This function fetch the calender events from back-end to present in the browser*/
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

/**
 * this function returns the id of the event when pressed in the browser
 * @param {*} event 
 */
const onEventClick = function (event) {
  console.log("Event ID:", event.id);

};


/**
 * this function is NOT done, when it is done it is going edit an event and return it to back-end
 * @param {*} event 
 */
const edit = function (event) {
  console.log("you want to create an event with drag");
 
  
};
/**
 * this function is NOT done, it is for creating new events in front-end to POST to back-end.
 * @param {*} event 
 */
const CreationEvent = function (event) {
  router.push('/tabs/tab2');
  console.log("Create event:");
};

/**
 * this function delete a event in the calendar and send the id of the event to back-end to delete it permanently
 * @param {*} event 
 */
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
