<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1> Canvax</h1>
        <vue-cal class="vuecal--blue-theme"></vue-cal>
      </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
    </ion-content>
  </ion-page>
</template>


<script setup>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

// Read data from local file
import jsonData from '@/Calendar.json';

// Add data to the calendar
jsonData.forEach(item => {
  const event = {
    title: item.title,
    start: new Date(item.date),
    end: new Date(item.date)
  };
  // Add the event to the calendar
  this.$refs.calendar.addEvent(event);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #004992;
  height: 250px;
}

.vuecal {height: 90vh;}
</style>
