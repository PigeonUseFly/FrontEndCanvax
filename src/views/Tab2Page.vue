<template>
  <vue-cal class="vuecal--blue-theme"></vue-cal>
</template>

<script>
// Documentation: https://antoniandre.github.io/vue-cal

import VueCal from 'vue-cal'
import 'vue-cal/dist/vue-cal.css'

export default {
  components: { VueCal }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vuecal {height: 90vh;}
</style>
