const fs = require('fs');
let obj; 
fs.readFile('../src/events.json','utf-8', (err, jsonString) => {
    obj = JSON.parse(jsonString);
    console.log(obj);
});

/*fs.readFile('../src/customer.json','utf-8', (err, jsonString) => {
    console.log(jsonString);
});

const customer = require('../src/customer.json');

console.log(customer.address); */