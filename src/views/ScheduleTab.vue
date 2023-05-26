<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header-container">
          <h1></h1>
          <ion-item class="dropdown-container">
            <ion-label>Choose your program:</ion-label>
            <ion-select v-model="selectedOption" @ionChange="onOptionChange">
              <ion-select-option value="TGSYA22h">Systemutvecklare</ion-select-option>
              <ion-select-option value="SGSOC22h">Socionom</ion-select-option>
              <ion-select-option value="TGSPA22h">Spelutveckling</ion-select-option>
              <ion-select-option value="TGIDE22h1">Interaktionsdesign</ion-select-option>
            </ion-select>
          </ion-item>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="calendar-container">
        <vue-cal class="vuecal--blue-theme"
          :disable-views="['years', 'year']" 
          :events="events"
          :time-from="8 * 60"
          :time-to="20 * 55"
          :special-hours="specialHours"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
          :event-class="'custom-event'"
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
let abortController = null; 

const optionValues = {
  Systemutvecklare: 'TGSYA22h',
  Socionom: 'SGSOC22h',
  Spelutveckling: 'TGSPA22h',
  Interaktionsdesign: 'TGIDE22h1'
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
  color: #2f00ff;
  height: 250px;
}

.vuecal--blue-theme {
  font-size: 12px;
}
  .vuecal__header {
    background-color: #12426a;
    color: #fff;
  }
  .vuecal__body {
    background-color: #f2f2f2;
  }
  .vuecal__day {
    border-bottom: 1px solid #ddd;
  }
  .vuecal__hour-cell {
    border-right: 1px solid #ddd;
  }
  .vuecal__event {
    background-color: #0080ff;
    color: #fff;
  }
  .vuecal__event-time {
    color: #fff;
  }
  .vuecal__event:hover {
    background-color: #013060;
  }
  .vuecal__event-delete-button {
    color: #fff;
    background-color: #cc0000;
  }
  .vuecal__event-delete-button:hover {
    background-color: #4C0099;
  }


.dropdown-container {
  position: absolute;
  top: 10px;
  right: 10px;
   background-color: #12426a;
   color:#c0c5c8
}

.calendar-container {
  margin-top: 0px;
  height: calc(100vh - 60px);
}
.vuecal--blue-theme {
  font-size: 14px;
}

.vuecal__header {
  padding: 5px;
  font-size: 16px;
}

.vuecal__body {
  padding: 5px;
}

.vuecal__day {
  height: 50px;
}

::v-deep .vuecal__hour {
  line-height: 150px;  
} /* TODO: Kolla över cellstorleken kan vara ett ionic problem då CSS inte verkar ändra något. */

.vuecal__event {
  padding: 5px;
  margin-bottom: 5px;
}

.vuecal__event-time {
  font-size: 12px;
}

.vuecal__event:hover {
  background-color: rgb(2, 73, 144);
  opacity: 0.8;
}

.vuecal__event-delete-button {
  padding: 5px;
}

.vuecal__event-delete-button:hover {
  background-color: #4C0099;
  opacity: 0.8;
}

</style>