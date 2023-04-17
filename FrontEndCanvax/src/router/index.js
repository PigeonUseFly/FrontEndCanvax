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
exports.default = router; */

/*const fs = require("fs");

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

  */

  let url = 'https://github.com/PigeonUseFly/CanvaxBackEnd/blob/testbranch-JSONfil';

  fetch(url)
  .then(res => res.json())
  .then(out =>
    console.log('Checkout this JSON! ', out))
  .catch(err => { throw err });

