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

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import axios from 'axios'

export default {
  components: {
    VueCal
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    axios.get('./Calendar.json')
      .then(response => {
        this.events = response.data.events
      })
      .catch(error => {
        console.log(error)
      })
  }
}
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