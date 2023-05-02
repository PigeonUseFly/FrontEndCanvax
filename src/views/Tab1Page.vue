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

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },
}

//fetch('src/views/Calendar.json')
fetch('http://localhost:8080/calendar/bajs') // Här läser den filen, nästa local host import
  .then(response => response.json())
  .then(data => {
    console.log(data);
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

