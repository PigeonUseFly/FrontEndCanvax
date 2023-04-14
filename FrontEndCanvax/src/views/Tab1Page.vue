<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense"></ion-header>
      <ExploreContainer name="Tab 1 page" />
       <ion-grid>
         <ion-row>
           <ion-col>Mon</ion-col>
           <ion-col>Tis</ion-col>
           <ion-col>Ons</ion-col>
           <ion-col>Tors</ion-col>
           <ion-col>Fre</ion-col>
           <ion-col>Lör</ion-col>
           <ion-col>Sön</ion-col>
         </ion-row>
       </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

  import { IonGrid, IonRow, IonPage, IonHeader, IonContent,IonToolbar} from '@ionic/vue';
  export default {
    components: { IonGrid, IonRow,IonPage,IonHeader,IonContent},
 
  };
 

  

  

</script>

<style scoped>
  ion-col {
    background-color: #63035b;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>