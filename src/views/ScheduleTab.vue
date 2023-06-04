<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header-container">
          <h1>Hej</h1>
          <ion-item class="dropdown-container">
            <ion-label>Choose your program:</ion-label>
            <ion-select v-model="selectedOption" @ionChange="onOptionChange">
              <ion-select-option v-for="(value, key) in optionValues" :key="key" :value="value">
                {{ key }}
              </ion-select-option>
            </ion-select>
          </ion-item>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="calendar-container">
        <vue-cal
          class="vuecal--blue-theme"
          :disable-views="['years', 'year']"
          :events="events"
          :time-from="8 * 60"
          :time-to="20 * 55"
          :special-hours="specialHours"
          :on-event-click="onEventClick"
          :editable-events="{ title: false, drag: false, resize: false, delete: true, create: true }"
          :event-class="'custom-event'"
          :show-all-day-events="'true'"
          @event-delete="onDeleteEvent"
        ></vue-cal>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { IonPage, IonHeader, IonToolbar, IonContent, IonSelect, IonSelectOption, IonItem } from '@ionic/vue';

const API_BASE_URL = 'http://localhost:8080';
const EVENTS_API_URL = `${API_BASE_URL}/events`;
const ICAL_DOWNLOAD_API_URL = `${API_BASE_URL}/events/download-ical/`;

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSelect,
    IonSelectOption,
    IonItem,
    VueCal,
  },

  setup() {
    const events = ref([]);
    const selectedOption = ref(null);

    const loadEvents = async () => {
      try {
        const response = await fetch(EVENTS_API_URL);
        const data = await response.json();
        const values = Object.values(data);
        events.value = values.map((event) => ({
          id: event.id,
          title: event.moment.replace('Moment: ', ''), // Remove the "Moment: " prefix
          start: event.startDate,
          end: event.endDate,
          location: event.location,
          program: event.summary,
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
      // Clean up resources, if any
    });

    const onOptionChange = async () => {
      const optionValues = {
        Systemutvecklare: 'TGSYA22h',
        Socionom: 'SGSOC22h',
        Spelutveckling: 'TGSPA22h',
        Interaktionsdesign: 'TGIDE22h1',
      };

      const selectedValue = optionValues[selectedOption.value];

      try {
        await fetch(`${ICAL_DOWNLOAD_API_URL}${selectedOption.value}`);
        console.log('GET request sent successfully!');
        await loadEvents();
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('GET request aborted.');
        } else {
          console.error('Error sending GET request:', error);
        }
      }
    };

    const onEventClick = (event) => {
      // Handle event click
    };

    const onDeleteEvent = (event) => {
     
      console.log(event);
      fetch(`${EVENTS_API_URL}/${event.id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Event deleted:', data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      events,
      selectedOption,
      onOptionChange,
      onEventClick,
      onDeleteEvent,
    };
  },
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