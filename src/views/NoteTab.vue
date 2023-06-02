<template>
  <ion-page class="tab3-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>My Notes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-list class="folders-list" v-if="!selectedFolder && !selectedNote">
        <ion-item>
          <ion-input v-model="newFolderName" placeholder="Enter folder name"></ion-input>
          <ion-button @click="createFolder">Create Folder</ion-button>
        </ion-item>
        <ion-item
          class="folder-item"
          v-for="folder in folders"
          :key="folder.id"
          @click="selectFolder(folder)"
        >
          {{ folder.name }}
        </ion-item>
      </ion-list>

      <ion-card class="folder-card" v-if="selectedFolder && !selectedNote">
        <ion-card-header>
          <ion-card-title class="folder-card-title">{{ selectedFolder.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item
            class="note-item"
            v-for="note in selectedFolder.notes"
            :key="note.id"
            @click="selectNote(note)" 
          >
            <h3>{{ note.title }}</h3>
          </ion-item>
          <ion-item>
            <ion-input v-model="newNoteTitle" placeholder="Enter note title"></ion-input>
            <ion-button @click="createNote">Create Note</ion-button>
          </ion-item>
        </ion-card-content>
        <ion-button @click="selectedFolder = null">Go Back</ion-button>
      </ion-card>

      <ion-card class="note-card" v-if="selectedNote">
        <ion-card-content class="note-card-content">
          <ion-item>
            <ion-input v-model="selectedNote.title" placeholder="Enter note title"></ion-input>
          </ion-item>
          <ion-item class="note-textarea-item">
            <ion-textarea v-model="selectedNote.text" placeholder="Enter note text"></ion-textarea>
          </ion-item>
          <ion-button class="go-back-button" @click="selectedNote = null">Go Back</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput, IonTextarea, IonBackButton, IonButtons } from '@ionic/vue';

const folders = ref([]);
const selectedFolder = ref(null);
const selectedNote = ref(null);
const newFolderName = ref('');
const newNoteTitle = ref('');

const createFolder = () => {
  if (newFolderName.value.trim() !== '') {
    const newFolder = {
      id: Date.now(),
      name: newFolderName.value.trim(),
      notes: []
    };
    folders.value.push(newFolder);
    newFolderName.value = '';
    selectedFolder.value = newFolder; // Automatically open the newly created folder
  }
};

const selectFolder = (folder) => {
  selectedFolder.value = folder;
  selectedNote.value = null;
  newNoteTitle.value = '';
};

const selectNote = (note) => {
  selectedNote.value = note;
};

const createNote = () => {
  if (newNoteTitle.value.trim() !== '') {
    const newNote = {
      id: Date.now(),
      title: newNoteTitle.value.trim(),
      text: ''
    };
    selectedFolder.value.notes.push(newNote);
    newNoteTitle.value = '';
    selectedNote.value = newNote; // Automatically open the newly created note
  }
};
</script>

<style scoped>
.tab3-page {
  background-color: #ffffff;
}

ion-content, ion-item, ion-card {
  --background: #ffffff;
  color: #000000;
}

.folders-list, .folder-card {
  background-color: #ffffff;
}

.folder-item, .note-item {
  border-bottom: 1px solid #dddddd;
  padding: 10px;
  cursor: pointer;
  color: #000000;
}

.folder-item:hover {
  background-color: #f5f5f5;
}

.note-card {
  flex-grow: 1;
  display: flex;
  background-color: #ffffff;
}

.note-card .ion-card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.note-card .ion-item,
.note-card .ion-textarea {
  --background: #ffffff;
  color: #000000;
  flex-grow: 1;
  min-height: 0;
}

/* Add styles for the top navigation bar */
ion-toolbar {
  --background: #ffffff;
  --color: #000000;
}

ion-buttons {
  --color: #000000;
}
.folder-card-title {
  color: rgb(0, 0, 0);
  font-size: 25px;
}
.note-card-content {
  flex: 1;
  flex-direction: column;
  display: flex;
}

.note-textarea-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.go-back-button {
  margin-top: 10px;
}
</style>
