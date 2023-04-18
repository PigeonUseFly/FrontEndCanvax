/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("@ionic/vue-router");
import TabsPage from '../views/TabsPage.vue'
var routes = [
    {
        path: '/',
        redirect: '/tabs/tab1'
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1'
            },
            {
                path: 'tab1',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab1Page.vue'); }); },
            },
            {
                path: 'tab2',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab2Page.vue'); }); }
            },
            {
                path: 'tab3',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab3Page.vue'); }); }
            },
            {
                path: 'tab4',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab1Page.vue'); }); }
            },
        ]
    }
];

var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(process.env.BASE_URL),
    routes: routes
});
<<<<<<< HEAD
exports.default = router;
*/
/*fetch('https://github.com/PigeonUseFly/CanvaxBackEnd/blob/testbranch-JSONfil/events.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    console.error(error);
    // Handle the error
  }); */

 /* const xhr = new XMLHttpRequest();
xhr.open('GET', '/example.json');
xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Failed to fetch data.');
  }
};
xhr.send();*/


/*FUNGERAR!! RÖR EJ!! Enklaste sättet men inte bästa */
const fs = require("fs");
fs.readFile("./events.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
});
=======
exports.default = router; */

const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

jsonReader("events.json", (err, customer) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(customer.address); // => "Infinity Loop Drive"
  });
>>>>>>> 44ea1cf6e896c2e5228542ff421933655ad326de
