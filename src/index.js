
const { createApp } = require('vue')
import App from "./App.vue"

createApp(App).mount("#app")




Vue.createApp({
  components: { VueCal: vuecal },
  data: () => ({
    events: [
      {
        "title": "Meeting with John",
        "start_time": "2023-05-01T10:00:00Z",
        "end_time": "2023-05-01T11:30:00Z",
        "location": "123 Main St, Anytown, USA",
        "description": "Discuss upcoming project deadlines and goals."
      },
      {
        "title": "Lunch with Sarah",
        "start_time": "2023-05-02T12:00:00Z",
        "end_time": "2023-05-02T13:00:00Z",
        "location": "Cafe Europa, 456 Oak St, Anytown, USA",
        "description": "Catch up on recent news and developments."
      },
      {
        "title": "Conference Call with Marketing Team",
        "start_time": "2023-05-03T15:00:00Z",
        "end_time": "2023-05-03T16:00:00Z",
        "location": "",
        "description": "Discuss marketing strategies and campaigns for the upcoming quarter."
      }
    ]
  })
}).mount('#app')
