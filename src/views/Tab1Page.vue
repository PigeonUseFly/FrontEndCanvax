<template>
  <ion-page>
    <ion-header>
      <v-dialog v-model="showEventCreationDialog" :persistent="true" max-width="420">
        <v-card>
          <v-card-title>
            <v-input v-model="selectedEvent.title" placeholder="Event Title" />
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="selectedEvent.content" placeholder="Event Content" />
            <v-flex>
              <v-select
                :items="eventsCssClasses"
                placeholder="Event CSS Class"
                @change="selectedEvent.class = $event"
                :value="selectedEvent.class" />
              <v-switch v-model="selectedEvent.background" label="background Event" />
            </v-flex>
            <v-flex>
              <v-btn @click="cancelEventCreation()">Cancel</v-btn>
              <v-btn @click="closeCreationDialog()">Save</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-dialog>
<ion-toolbar>
        <button @click="CreationEvent" style="float: right; margin-right: 10px; font-size: 20px; padding: 10px 20px;">Add event</button>
        <h1> Canvax</h1>
      </ion-toolbar>
        
      
      <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
  :on-event-click="onEventClick" @event-delete="onDeleteEvent"
  :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
  :on-event-create="edit"
  :drag-to-create-threshold="15"
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


const showEventCreationDialog = ref(false);
const selectedEvent = ref({
  title: '',
  content: '',
  class: '',
  background: false
});
const eventsCssClasses = ref(['event-class-1', 'event-class-2', 'event-class-3']);



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

const cancelEventCreation = function () {
  showEventCreationDialog.value = false;
};

const closeCreationDialog = function () {
  // Save the new event data
  const newEvent = {
    id: events.value.length + 1, // generate new id
    title: selectedEvent.value.title,
    start: selectedEvent.value.start,
    end: selectedEvent.value.end
  };
  events.value.push(newEvent);

  // Reset the selected event data and close the dialog
  selectedEvent.value = {
    title: '',
    content: '',
    class: '',
    background: false
  };
  showEventCreationDialog.value = false;
};

const onDeleteEvent = function (event) {
  console.log("här jävlar");
  console.log(event);
  fetch("http://localhost:8080/events/" + event.id, {
    method: "DELETE"
  });
};


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
