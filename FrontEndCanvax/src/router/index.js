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

function readJsonFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

readJsonFile("https://walidamriou.github.io/data.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
  //alert(data[0].data);
  var elem = document.getElementById("datadisplay");
  elem.innerHTML = data.data['id']; //we want to read: "id": "123664" 
});