<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1>Canvax</h1>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="dropdown-container">
        <ion-item>
          <ion-label>Choose your program:</ion-label>
          <ion-select v-model="selectedOption" @ionChange="onOptionChange">
            <ion-select-option value="systemutvecklare">Systemutvecklare</ion-select-option>
            <ion-select-option value="Socionom">Socionom</ion-select-option>
            <ion-select-option value="receptarie">Receptarieprogrammet, 180 hp (VGREP)</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
      <div class="calendar-container">
        <vue-cal class="vuecal--blue-theme" :disable-views="['years', 'year']" :events="events"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
          @event-delete="onDeleteEvent">
        </vue-cal>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';


const events = ref([]);
const selectedOption = ref(null);

const onOptionChange = async () => {
  if (selectedOption.value === 'systemutvecklare') {
    try {
      // Using fetch API for POST request
      await fetch('http://your-backend-url', {
        method: 'POST',
        body: JSON.stringify({ code: 'TGSYA22h' }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Code sent successfully!');
    } catch (error) {
      console.error('Error sending code:', error);
    }
}
  }

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
  fetch("http://localhost:8080/events/" + event.id, {
    method:"DELETE"
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
.dropdown-container {
  position: absolute;
  top: 10px;
  right: 10px;
}

.calendar-container {
  margin-top: 60px; 
}
</style>
