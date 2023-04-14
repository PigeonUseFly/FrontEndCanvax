<template>

  <ion-app>
    <div id="app">
    <ul>
      <li v-for="user in users" :key="user.id">
         {{user.name}}
       </li>
    </ul>
  </div>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';


</script>
