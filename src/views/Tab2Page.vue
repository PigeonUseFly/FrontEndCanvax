<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <button type="button" class="btn btn-primary" @click="showModal = true">
        Open a modal
      </button>
      <SavedModal v-model="showModal" title="My first modal">
        <p>Modal content goes here...</p>
      </SavedModal>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 2 page" />
    <SavedModal v-show="showModal" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import SavedModal from '@/components/SavedModal.vue';

let showModal = false; // Define the showModal variable to control modal visibility

export default {
  components: { SavedModal },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>