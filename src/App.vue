<script setup lang="ts">
import { IonApp, IonRouterOutlet, } from '@ionic/vue';
import { RouterLink, RouterView } from 'vue-router';
</script>


<template>
  <ion-app>
    <ion-router-outlet />

    <div class="wrapper">

<nav>
<RouterLink to="/"> front-page</RouterLink>
<RouterLink to="/tabs/tab1">Schema</RouterLink>
<RouterLink to="/tabs/tab2">Json</RouterLink>
<RouterLink to="/tabs/tab3">tab3</RouterLink>
</nav>
</div>

  </ion-app>
</template>
