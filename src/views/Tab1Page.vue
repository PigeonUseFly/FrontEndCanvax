<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme" :events="events"></vue-cal>
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

onBeforeMount(async () => {
  //TESTKOD
  console.log("Vakna");
  events.value.push({
      title: "käften",
      start: "2023-05-02 08:00",
      end: "2023-05-02 10:00",
      content: "lalala",
      class: "lala"
    });
    events.value.push({
      title: "Lunch",
      start: "2023-05-03 13:00",
      end: "2023-05-03 15:00",
      content: "Här är en massa mög",
      class: "lala"
    });
    //TESTKOD SLUT

    fetch('http://localhost:8080/calendar/bajs') // Här läser den filen, nästa local host import
    .then(response => response.json())
    .then(data => {
      console.log(data.events[0]);
      // Gör den här skiten i en for-loop
      events.value.push({
        title: data.events[0].summary,
        start: data.events[0].startDate,
        end: data.events[0].endDate
      });
      console.log(events.value);
      // Do something with the data
    })
    .catch(error => {
      console.error(error);
      // Handle the error
    });
});

//fetch('src/views/Calendar.json')
fetch('http://localhost:8080/calendar/bajs') // Här läser den filen, nästa local host import
  .then(response => response.json())
  .then(data => {
    console.log(data.events[0]);
    // Do something with the data
  })
  .catch(error => {
    console.error(error);
    // Handle the error
  });

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

.vuecal {height: 90vh;}
</style>

