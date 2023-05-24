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
            <ion-select-option value="TGSYA22h">Systemutvecklare</ion-select-option>
            <ion-select-option value="SGSOC22h">Socionom</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
      <div class="calendar-container">
        <vue-cal class="vuecal--blue-theme"
        
         :disable-views="['years', 'year']" :events="events"
         :time-from="8 * 60"
         :time-to = "20 * 55"
         :special-hours="specialHours"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
          @event-delete="onDeleteEvent">
          
        </vue-cal>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

const events = ref([]);
const selectedOption = ref(null);
let abortController = null; // AbortController instance

const optionValues = {
  TGSYA22h: 'TGSYA22h',
  SGSOC22h: 'SGSOC22h'
};

const onOptionChange = async () => {
  const selectedValue = optionValues[selectedOption.value];

  try {
    // Abort the previous request, if any
    if (abortController) {
      abortController.abort();
    }

    // Create a new AbortController instance
    abortController = new AbortController();

    // Send the selected value to your backend using a GET request
    await fetch('http://localhost:8080/events/download-ical/' + selectedOption.value, {
      signal: abortController.signal // Pass the signal to the request
    });
    console.log('GET request sent successfully!');
    loadEvents();
  } catch (error) {
    if (error.name === 'AbortError') {
      // Request was aborted, handle it as needed
      console.log('GET request aborted.');
    } else {
      console.error('Error sending GET request:', error);
    }
  }
};

const loadEvents = async () => {
  try {
    const response = await fetch('http://localhost:8080/events');
    const data = await response.json();
    const values = Object.values(data);
    events.value = values.map(event => ({
      id: event.id,
      title: event.summary,
      start: event.startDate,
      end: event.endDate
    }));
    console.log('Events loaded successfully!');
  } catch (error) {
    console.error('Error loading events:', error);
  }
};

onMounted(async () => {
  await loadEvents();
});

onUnmounted(() => {
  // Clean up resources, abort pending requests
  if (abortController) {
    abortController.abort();
  }
});

const onEventClick = function (event) {
  console.log("Event ID:", event.id);
  // Do something with the ID here
};

const onDeleteEvent = function (event) {
  console.log("här jävlar");
  console.log(event);
  fetch("http://localhost:8080/events/" + event.id, {
    method: "DELETE"
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
.dropdown-container {
  position: absolute;
  top: 10px;
  right: 10px;
}

.calendar-container {
  margin-top: 60px; 
}
</style>
