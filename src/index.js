
const { createApp } = require('vue')
import App from "./App.vue"

createApp(App).mount("#app")



Vue.createApp({
  components: { VueCal: vuecal },
  data: () => ({
    events: [
      {
        start: '2018-11-19 10:35',
        end: '2018-11-19 11:30',
        title: 'Doctor appointment'
      },
      {
        start: '2018-11-19 18:30',
        end: '2018-11-19 19:15',
        title: 'Dentist appointment'
      },
      {
        start: '2018-11-20 18:30',
        end: '2018-11-20 20:30',
        title: 'Crossfit'
      },
      {
        start: '2018-11-21 11:00',
        end: '2018-11-21 13:00',
        title: 'Brunch with Jane'
      },
      {
        start: '2018-11-21 19:30',
        end: '2018-11-21 23:00',
        title: 'Swimming lesson'
      },
      {
        start: '2019-09-30 19:30',
        end: '2019-09-30 23:00',
        title: 'Swimming lesson'
      },
      {
        start: "2018-11-19 12:00",
        end: "2018-11-19 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true
      },
      {
        start: "2018-11-20 12:00",
        end: "2018-11-20 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true
      }
    ]
  })
}).mount('#app')





// To load JSON files from url

/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    console.error(error);
    // Handle the error
  });*/